"use server";

import { prisma } from "@/lib/prisma";
import slugify from "slugify";

export async function addPost(data: {
  postType: string;
  title: string;
  description: string;
  userEmail: string;
  images?: string;
}) {
  try {
    // Находим пользователя по email
    const user = await prisma.user.findUnique({
      where: { email: data.userEmail },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const newPost = await prisma.post.create({
      data: {
        postType: data.postType,
        title: data.title,
        description: data.description,
        images: data.images,
        userId: user.id, // Используем id пользователя, найденного по email
        slug: slugify(data.title, { lower: true, strict: true }), // Генерация slug из заголовка
      },
    });

    return newPost;
  } catch (error) {
    console.error("Error creating post:", error);
    throw new Error("Could not create post");
  }
}
