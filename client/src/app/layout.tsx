import "@/assets/styles/globals.scss";
import Menu from "@/components/Menu/Menu";
import { Inter } from "next/font/google";
import "./Layout.scss";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import MainProvider from "@/components/MainProvider/MainProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Watch IT",
  description:
    "Whatever your taste, and no matter where you live, we give you access to best-in-class TV series, documentaries and feature films.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainProvider>
          <Menu />
          <main className="main">{children}</main>
        </MainProvider>
      </body>
    </html>
  );
}
