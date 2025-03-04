export const metadata = {
  title: "Sports Dashboard",
  description: "Get all your favourite sports updates in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
