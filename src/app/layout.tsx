import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "QR Codes",
  description: "Unlock parts of a blurred image by scanning QR codes.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
