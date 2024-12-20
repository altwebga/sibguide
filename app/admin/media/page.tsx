import Image from "next/image";
import { getAllMedia } from "@/actions/get-all-media";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

export default async function AdminMediaPage() {
  const images = await getAllMedia();
  return (
    <div className="px-4">
      <h1>Загруженные медиа</h1>
      <div className="grid grid-cols-6 gap-4 py-6">
        {images.map((image) => (
          <Card key={image.id}>
            <CardDescription>
              <CardContent>
                <Image
                  src={image.url}
                  alt={image.title || ""}
                  width={300}
                  height={300}
                  className="aspect-square w-auto h-auto object-contain"
                />
              </CardContent>
            </CardDescription>
            <CardFooter>{image.title}</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
