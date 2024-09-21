import { s3Client } from "@/lib/s3-client";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid"; // Импортируем функцию для генерации UUID

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return new Response(JSON.stringify({ error: "Файл не найден" }), {
        status: 400,
      });
    }

    // Генерация уникального имени файла с помощью UUID
    const uniqueFileName = uuidv4();

    // Настройки для загрузки файла в S3
    const params = {
      Bucket: process.env.CLOUD_S3_BUCKET_NAME!,
      Key: uniqueFileName,
      Body: Buffer.from(await file.arrayBuffer()), // Преобразуем файл в буфер
      ContentType: file.type,
    };

    // Загрузка файла в S3
    await s3Client.send(new PutObjectCommand(params));

    // Генерация ссылки на файл
    const fileUrl = `${process.env.YANDEX_S3_ENDPOINT}/${process.env.YANDEX_S3_BUCKET_NAME}/${uniqueFileName}`;

    return new Response(JSON.stringify({ url: fileUrl }), { status: 200 });
  } catch (error) {
    console.error("Ошибка при загрузке файла:", error); // Логируем ошибку
    return new Response(
      JSON.stringify({ error: "Ошибка при загрузке файла на сервере" }),
      { status: 500 }
    );
  }
}
