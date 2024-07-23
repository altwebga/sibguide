// src/app/add-post/page.tsx
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { postSchema } from "@/config/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type PostFormData = z.infer<typeof postSchema>;

export default function AddPostPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = async (data: PostFormData) => {
    const response = await fetch("/api/create-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Failed to create post");
    } else {
      console.log("Post created successfully");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Add Post</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-group">
          <Label htmlFor="title">Title</Label>
          <Input id="title" {...register("title")} placeholder="Title" />
          {errors.title && (
            <span className="error">{errors.title.message}</span>
          )}
        </div>
        <div className="form-group">
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            {...register("content")}
            placeholder="Content"
          />
          {errors.content && (
            <span className="error">{errors.content.message}</span>
          )}
        </div>
        <div className="form-group">
          <Label htmlFor="image">Image URL</Label>
          <Input id="image" {...register("image")} placeholder="Image URL" />
          {errors.image && (
            <span className="error">{errors.image?.message}</span>
          )}
        </div>
        <Button type="submit" className="submit-button">
          Add Post
        </Button>
      </form>
    </div>
  );
}
