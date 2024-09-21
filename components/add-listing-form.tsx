"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { listing } from "@/config/listing-type";
import { useRouter } from "next/navigation";

type AddListingFormProps = {
  userEmail: string;
  onSubmit: (data: z.infer<typeof FormSchema>) => Promise<void>;
};

const FormSchema = z.object({
  postType: z.string(),
  title: z.string().min(2, {
    message: "Название должно содержать хотя бы 2 символа.",
  }),
  description: z.string().min(2, {
    message: "Описание должно содержать хотя бы 2 символа.",
  }),
  image: z.string().optional(),
  userEmail: z.string(),
});

export function AddListingForm({ userEmail, onSubmit }: AddListingFormProps) {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userEmail: userEmail,
      postType: listing[0].value,
      title: "",
      description: "",
      image: "",
    },
  });

  // Обрабатываем отправку формы
  async function handleFormSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await onSubmit(data); // Вызываем серверный экшен через проп
      toast({
        title: "Пост успешно сохранен!",
      });
      form.reset();
      router.push("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      toast({
        title: "Ошибка при сохранении",
        description: `Не удалось сохранить ${data.title}. Попробуйте еще раз.`,
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="w-2/3 space-y-6"
      >
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
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Изображение</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Ссылка на изображение</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Сохранить</Button>
      </form>
    </Form>
  );
}
