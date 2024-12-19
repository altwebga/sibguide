import { auth } from "@/auth";
import { prisma } from "@/prisma";
import slugify from "slugify";

export async function createCategoryDatabase(input: {
  name: string;
  description: string;
  imageId: string;
}) {
  const session = await auth();
  if (session?.user.role !== "ADMIN") {
    throw new Error(
      "Доступ к созданию категорий есть только у администраторов"
    );
  }

  // Проверка входных данных
  if (!input.name || !input.description || !input.imageId) {
    throw new Error(
      "Все поля (name, description, imageId) обязательны для заполнения."
    );
  }

  // Проверка существования изображения
  const existingImage = await prisma.image.findUnique({
    where: { id: input.imageId },
  });

  if (!existingImage) {
    throw new Error("Указанное изображение не существует.");
  }

  // Генерация уникального slug
  const baseSlug = slugify(input.name, { lower: true });
  let uniqueSlug = baseSlug;
  let counter = 1;

  while (await prisma.categories.findUnique({ where: { slug: uniqueSlug } })) {
    uniqueSlug = `${baseSlug}-${counter}`;
    counter++;
  }

  try {
    const result = await prisma.categories.create({
      data: {
        slug: uniqueSlug,
        title: input.name,
        description: input.description,
        images: {
          create: {
            imageId: input.imageId,
            entityType: "CATEGORY",
          },
        },
      },
    });

    return result;
  } catch (error) {
    console.error("Ошибка при создании категории:", error);
    throw new Error("Не удалось создать категорию. Проверьте данные.");
  }
}
