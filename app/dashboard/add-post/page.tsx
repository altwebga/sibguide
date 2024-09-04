import { AddPostForm } from "@/components/add-post-form";
import { auth } from "@/auth";
export default async function AddPostPage() {
  const session = await auth();

  if (!session?.user) {
    return <p>You must be logged in</p>;
  }

  // Обработка значения userEmail
  const userEmail = session?.user?.email || ""; // Если email undefined, передать пустую строку

  return (
    <div className="container mx-auto max-w-4xl mt-8">
      <h1>Добавить объявление</h1>
      <AddPostForm userEmail={userEmail} />
    </div>
  );
}
