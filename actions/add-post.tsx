"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";
import slugify from "slugify";

// Схема для валидации данных
const PostSchema = z.object({
  postType: z.string(),
  title: z
    .string()
    .min(2, { message: "Название должно содержать хотя бы 2 символа." }),
  description: z
    .string()
    .min(2, { message: "Описание должно содержать хотя бы 2 символа." }),
  image: z.string().optional(),
  userEmail: z.string().email(),
});

export async function addPostAction(
  data: z.infer<typeof PostSchema>
): Promise<void> {
  // Применяем схему для валидации данных перед выполнением действий
  const validatedData = PostSchema.parse(data);

  try {
    const newPost = await prisma.post.create({
      data: {
        postType: validatedData.postType,
        title: validatedData.title,
        description: validatedData.description,
        slug: slugify(validatedData.title),
        userEmail: validatedData.userEmail,
      },
    });

    if (validatedData.image) {
      await prisma.image.create({
        data: {
          url: validatedData.image,
          postId: newPost.id,
        },
      });
    }
  } catch (error) {
    console.error("Ошибка при создании поста:", error);
    throw new Error("Ошибка при создании поста");
  }
}
