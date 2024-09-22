"use server";

import { prisma } from "@/lib/prisma";

export async function getImages() {
  try {
    const images = await prisma.image.findMany({
      select: {
        id: true,
        url: true,
        postId: true,
      },
    });
    return images;
  } catch (error) {
    console.error("Ошибка при получении изображений:", error);
    throw new Error("Ошибка при получении изображений");
  }
}
