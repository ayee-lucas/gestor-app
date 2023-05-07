import "./globals.css";
import { monsterrat } from "./fonts";
import Provider from "@/app/components/Login/Provider"

export const metadata = {
  title: "Gestor de Hoteles",
  description: "Gestor de Hoteles en NextJS 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={monsterrat.className}>
        <Provider>
          <main className="h-full w-full">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
