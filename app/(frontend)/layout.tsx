import { FrontendNavigate } from "@/components/FontendNavigate";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FrontendNavigate />
      {children}
    </>
  );
}
