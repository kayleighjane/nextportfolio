import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const desktop = true;
const isScrolledDown = false;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout bg-custom-dark text-custom-light flex flex-nowrap justify-between flex-col p-4 lg:p-6 min-h-[100vh]">
          <Header isDesktop={desktop} isScrolledDown={isScrolledDown} />
          <main className="flex flex-col flex-1 justify-around p-2 customxs:p-4 sm:max-w-1xl">
            {children}
          </main>
          {desktop && (
            <aside
              className={`top-0 w-44 right-0 z-10 h-full max-w-xxs flex items-center p-2 h-screen absolute`}
            >
              <Nav isScrolledDown={isScrolledDown} />
            </aside>
          )} 
          <Footer />
        </div>
      </body>
    </html>
  );
}
