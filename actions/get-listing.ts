"use server";

import { prisma } from "@/lib/prisma";

// Экшен для получения всех постов
export async function getListings() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        images: true, // Получаем связанные изображения
      },
    });
    return posts;
  } catch (error) {
    console.error("Ошибка получения постов", error);
    return [];
  }
}
