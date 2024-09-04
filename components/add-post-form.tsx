"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTransition } from "react";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { postTypes } from "@/config/post-type";
import { Textarea } from "./ui/textarea";
import { addPost } from "@/app/dashboard/add-post/actions"; // Импортируем серверную функцию

// Схема валидации через Zod
const FormSchema = z.object({
  postType: z.string(),
  title: z.string().min(2, {
    message: "Заголовок должен быть не менее 2 символов.",
  }),
  description: z.string().min(2, {
    message: "Описание должно быть не менее 2 символов.",
  }),
  userEmail: z.string().min(2, {
    message: "Email пользователя должен быть не менее 2 символов.",
  }),
  images: z.string().optional(),
});

export function AddPostForm({ userEmail }: { userEmail: string }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      postType: "",
      title: "",
      description: "",
      userEmail: userEmail,
      images: "",
    },
  });

  const [isPending, startTransition] = useTransition(); // Для индикации загрузки

  // Функция отправки данных на сервер
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(async () => {
      try {
        const response = await addPost(data); // Вызываем серверную функцию для добавления поста
        console.log("Response from server:", response); // Вывод ответа сервера в консоль

        toast({
          title: "Объявление добавлено!",
          description: "Ваше объявление было успешно создано.",
        });

        form.reset(); // Сброс формы после успешного создания
      } catch (error) {
        console.error("Error submitting form:", error); // Вывод ошибки в консоль
        toast({
          title: "Ошибка",
          description:
            "Не удалось создать объявление. Пожалуйста, попробуйте позже.",
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {/* Поля формы */}
        <FormField
          control={form.control}
          name="postType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Выберите тип объявления</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={postTypes[0].value || "hotel"}
                  className="flex flex-col space-y-1"
                >
                  {postTypes.map((item) => (
                    <FormItem
                      className="flex items-center space-x-3 space-y-0"
                      key={item.id}
                    >
                      <FormControl>
                        <RadioGroupItem value={item.value} />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {item.label}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Заголовок</FormLabel>
              <FormControl>
                <Input placeholder="Название объявления" {...field} />
              </FormControl>
              <FormDescription>
                Например: &quot;Тур на остров Крит&quot;
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea placeholder="Описание объявления" {...field} />
              </FormControl>
              <FormDescription>
                Краткое описание вашего объявления
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Изображения</FormLabel>
              <FormControl>
                <Input placeholder="Ссылки на изображения" {...field} />
              </FormControl>
              <FormDescription>ссылки на изображения</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Создание..." : "Создать объявление"}
        </Button>
      </form>
    </Form>
  );
}
