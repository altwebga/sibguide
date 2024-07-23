// src/app/api/create-post/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/config/prisma";

export async function POST(request: Request) {
  try {
    const { title, content, image, authorId } = await request.json();

    if (!title || !content) {
      return NextResponse.json(
        { message: "Title and content are required" },
        { status: 400 }
      );
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        image,
        authorId,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
