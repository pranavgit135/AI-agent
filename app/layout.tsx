import {ClerkProvider} from "@clerk/nextjs";
import type { Metadata } from "next";
import { DM_Sans,Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";

const lora = Lora({subsets:['latin'],variable:'--font-sans',weight:["400","500"],style:["normal","italic"]});

const dmSans = DM_Sans({
  variable: "--font-serif",
  subsets: ["latin"],
  weight:["300","400","500","600"]
});



export const metadata: Metadata = {
  title: "maya.ai | AI Powered Project Management",
  description: "maya.ai is an AI-powered project management tool that helps you manage your projects and tasks with ease.",
  icons:{
    icon:"/short-logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  icons:{
    icon:"/short-logo.png"
  }
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={cn( lora.variable, dmSans.variable, "font-sans", )}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider>
          <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          >
          <Header/>
          <main> {children}</main>
          <Toaster richColors/>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}