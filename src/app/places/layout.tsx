export default function PlacesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container mx-auto max-w-7xl px-4">{children}</div>;
}
