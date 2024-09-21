import { AddListingForm } from "@/components/add-listing-form";
import { getSessionAction } from "@/actions/get-session";
import { redirect } from "next/navigation";

export default async function AddPostPage() {
  const session = await getSessionAction();
  if (!session) {
    redirect("/login");
  }
  const userEmail = session?.user?.email as string;
  return (
    <div className="container mx-auto max-w-4xl mt-2">
      <h1>AddPostPage</h1>
      <AddListingForm userEmail={userEmail} />
    </div>
  );
}
