"use client";
import { useState, useEffect } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { PostType } from "@prisma/client";

const FormSchema = z.object({
  postType: z.enum(["ARTICLE", "TOUR", "EXCURSION", "EVENT", "PLACE", "HOTEL"]),
  title: z.string().min(2, {
    message: "Заголовок должен быть не менее 2 символов",
  }),
  description: z.string().min(10, {
    message: "Описание должно быть не менее 10 символов",
  }),
  region: z.string().optional(),
  address: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
});

export function AddListingForm() {
  const [postType, setPostType] = useState<PostType>("HOTEL");
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      postType: "HOTEL",
      title: "",
      description: "",
      region: "",
      address: "",
      latitude: 0,
      longitude: 0,
    },
  });

  useEffect(() => {
    // Показать дополнительные поля для определенных типов объявлений
    setShowAdditionalFields(postType !== "ARTICLE");
  }, [postType]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-2xl">
        <FormField
          control={form.control}
          name="postType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Тип объявления</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  setPostType(value as typeof postType);
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип объявления" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ARTICLE">Статья</SelectItem>
                  <SelectItem value="TOUR">Тур</SelectItem>
                  <SelectItem value="EXCURSION">Экскурсия</SelectItem>
                  <SelectItem value="EVENT">Событие</SelectItem>
                  <SelectItem value="PLACE">Достопримечательность</SelectItem>
                  <SelectItem value="HOTEL">Отель, Турбаза</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>Выберите тип объявления</FormDescription>
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
                <Input placeholder="Введите заголовок" {...field} />
              </FormControl>
              <FormDescription>Введите заголовок объявления</FormDescription>
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
                <Textarea {...field} className="h-40" />
              </FormControl>
              <FormDescription>Опишите ваше объявление</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {showAdditionalFields && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="region"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Регион</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Введите регион"
                      {...field}
                      className="min-w-[200px]"
                    />
                  </FormControl>
                  <FormDescription>Укажите регион</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Адрес</FormLabel>
                    <FormControl>
                      <Input placeholder="Почтовый адрес" {...field} />
                    </FormControl>
                    <FormDescription>Укажите почтовый адрес</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="latitude"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Широта</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>Укажите широту</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="longitude"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Долгота</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>Укажите долготу</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        )}
        <Button type="submit">Сохранить</Button>
      </form>
    </Form>
  );
}
