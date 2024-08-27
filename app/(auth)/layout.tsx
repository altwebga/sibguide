export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
