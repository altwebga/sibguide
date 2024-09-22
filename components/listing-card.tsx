import { getListings } from "@/actions/get-listing"; // Импорт экшена
import Image from "next/image";
import Link from "next/link";
import { File, ListFilter, MoreHorizontal, PlusCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import placeholderImage from "@/public/image/placeholder.svg";

export async function ListingCard() {
  const listings = await getListings(); // Получение постов с сервера

  return (
    <div className="grid flex-1 items-start gap-4 md:gap-8">
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">Все</TabsTrigger>
            <TabsTrigger value="active">Опубликован</TabsTrigger>
            <TabsTrigger value="draft">Черновик</TabsTrigger>
            <TabsTrigger value="archived" className="hidden sm:flex">
              Архив
            </TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Фильтр
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Фильтр по</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Опубликовано
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Черновик</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Архив</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Экспорт
              </span>
            </Button>
            <Button asChild size="sm">
              <Link
                href="/dashboard/add-post"
                className="h-8 gap-1 no-underline"
              >
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Добавить объявление
                </span>
              </Link>
            </Button>
          </div>
        </div>
        <TabsContent value="all">
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <CardTitle>Объявления</CardTitle>
              <CardDescription>
                Управляйте своими продуктами и просматривайте их статистику.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                      <span className="sr-only">Image</span>
                    </TableHead>
                    <TableHead>Название</TableHead>
                    <TableHead>Вид объявления</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Ссылка
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Email автора
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Создано
                    </TableHead>
                    <TableHead>
                      <span className="sr-only">Действия</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {listings.map((listing) => (
                    <TableRow key={listing.id}>
                      <TableCell className="hidden sm:table-cell">
                        <Image
                          alt={listing.title}
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src={listing.images[0]?.url || placeholderImage}
                          width="64"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        {listing.title}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{listing.postType}</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {listing.slug}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {listing.userEmail}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {new Date(listing.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Действия</DropdownMenuLabel>
                            <DropdownMenuItem>Редактировать</DropdownMenuItem>
                            <DropdownMenuItem>Удалить</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Показано <strong>1-10</strong> из{" "}
                <strong>{listings.length}</strong> продуктов
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
