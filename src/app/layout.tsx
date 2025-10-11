"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const newQueryClient = new QueryClient();

  return (
    <html lang="en">
      <QueryClientProvider client={newQueryClient}>
        <body>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
