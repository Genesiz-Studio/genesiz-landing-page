import type { Metadata } from "next";

import "./globals.css";
import ProviderApp from "@/providers/ProviderApp";
import { PopupNavigatorProvider } from "@/app/hooks/usePopupNavigator";

export const metadata: Metadata = {
  title: "Genesiz | Ghost City",
  description: "Generated Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PopupNavigatorProvider>
          <ProviderApp>{children}</ProviderApp>
        </PopupNavigatorProvider>
      </body>
    </html>
  );
}
