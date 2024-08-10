import { Outfit } from "next/font/google";
import "./globals.css";
// import Header from "./_components/Header";
// import NextAuthSessionProvider from "./provider";
// import { Toaster } from "@/components/ui/sonner";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Home Service",
  description:
    "Task Mates is a home service platform that connects users with professionals for various home services including painting, plumbing, cleaning, repair, shifting, and electrical work. Built with modern technologies, Task Mates ensures a seamless and efficient user experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NextAuthSessionProvider> */}
        <div className=" mx-6 md:mx-16">
          {/* <Header/> */}
          {/* <Toaster /> */}
          {children}
        </div>
        {/* </NextAuthSessionProvider> */}
      </body>
    </html>
  );
}
