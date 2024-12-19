import { auth } from "@/auth";
import { prisma } from "@/prisma";
import slugify from "slugify";

export async function createRegionDatabase(input: {
  name: string;
  description: string;
  imageId: string; // ID изображения из медиа-библиотеки
}) {
  const session = await auth();
  if (session?.user.role !== "ADMIN") {
    throw new Error("Доступ к созданию регионов есть только у администраторов");
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

  while (await prisma.region.findUnique({ where: { slug: uniqueSlug } })) {
    uniqueSlug = `${baseSlug}-${counter}`;
    counter++;
  }

  try {
    const result = await prisma.region.create({
      data: {
        slug: uniqueSlug,
        title: input.name,
        description: input.description,
        images: {
          create: {
            imageId: input.imageId, // Ссылаемся на существующее изображение
            entityType: "REGION", // Указываем тип сущности
          },
        },
      },
    });

    return result;
  } catch (error) {
    console.error("Ошибка при создании региона:", error);
    throw new Error("Не удалось создать регион. Проверьте данные.");
  }
}
