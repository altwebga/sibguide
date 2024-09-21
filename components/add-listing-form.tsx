"use client"; // Директива для работы в клиентском компоненте

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { addPostAction } from "@/actions/add-post"; // Импорт экшена для создания поста
import { listing } from "@/config/listing-type";

// Схема валидации для формы
const FormSchema = z.object({
  postType: z.string(),
  title: z.string().min(2, {
    message: "Название должно содержать хотя бы 2 символа.",
  }),
  description: z.string().min(2, {
    message: "Описание должно содержать хотя бы 2 символа.",
  }),
  file: z.any().refine((files) => files?.length > 0, {
    message: "Необходимо выбрать файл",
  }),
  userEmail: z.string().email(),
});

type AddListingFormProps = {
  userEmail: string;
};

export function AddListingForm({ userEmail }: AddListingFormProps) {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userEmail: userEmail,
      postType: listing[0].value,
      title: "",
      description: "",
      file: null,
    },
  });

  // Обработка отправки формы
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const selectedFile = data.file[0];

    try {
      // Шаг 1: Загружаем изображение на сервер, если файл выбран
      let imageUrl = null;
      if (selectedFile) {
        const formData = new FormData();
        formData.append("file", selectedFile);

        const imageResponse = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const imageResult = await imageResponse.json();

        if (!imageResponse.ok) {
          throw new Error(imageResult.error);
        }

        imageUrl = imageResult.url;
      }

      // Шаг 2: Создаём пост через серверный экшен addPostAction
      await addPostAction({
        postType: data.postType,
        title: data.title,
        description: data.description,
        image: imageUrl, // Передаем URL изображения, если оно есть
        userEmail: data.userEmail,
      });

      toast({
        title: "Пост успешно создан!",
        description: "Ваш пост был успешно сохранен.",
      });

      form.reset(); // Сброс формы после успешного создания поста
      router.push("/dashboard");
    } catch (error) {
      console.error("Ошибка при создании поста или загрузке файла:", error);
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при сохранении поста. Попробуйте снова.",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {/* Поле для выбора типа поста */}
        <FormField
          control={form.control}
          name="postType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Тип поста</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Тип поста" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {listing.map((item) => (
                    <SelectItem key={item.id} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Выберите тип поста</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Поле для заголовка */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Заголовок</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Введите заголовок</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Поле для описания */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea rows={4} {...field} />
              </FormControl>
              <FormDescription>Введите описание</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Поле для загрузки файла */}
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Выберите файл</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  onChange={(e) => field.onChange(e.target.files)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Сохранить пост</Button>
      </form>
    </Form>
  );
}
