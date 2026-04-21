export const metadata = {
  title: "Ziad Ehab | Software Engineer",
  description: "AI, Full Stack, Explainable AI projects"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}