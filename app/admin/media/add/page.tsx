import { UploadMediaForm } from "@/components/shared/upload-media-form";

export default function AdminMediaUploadPage() {
  return (
    <div className="px-4">
      <h1>Загрузить медиа файл</h1>
      <UploadMediaForm />
    </div>
  );
}
