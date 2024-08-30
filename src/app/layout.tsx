import type { Metadata } from "next";
import "../shared/styles/globals.css";
import Providers from "@/shared/utils/Providers";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "Nlettertly, your newsletter easily and powerful app",
  description: "Effortlessly create, manage, and send powerful newsletters with Nlettertly. Tailored for simplicity and performance, our app ensures your messages reach your audience with impact and ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className="font-jetbrains">
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
