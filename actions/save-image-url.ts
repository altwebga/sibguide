"use server";
import { prisma } from "@/lib/prisma";

export async function saveImageUrlAction(imageUrl: string, postId: string) {
  try {
    await prisma.image.create({
      data: {
        url: imageUrl,
        postId: postId,
      },
    });
  } catch (error) {
    console.error("Ошибка при сохранении URL изображения:", error);
    throw new Error("Ошибка при сохранении URL изображения");
  }
}
