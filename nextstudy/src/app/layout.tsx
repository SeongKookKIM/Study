import type { Metadata } from "next";
import "../shared/style/global.css";
import RecoilRootWrapper from "../shared/utils/RecoilWrapper";

export const metadata: Metadata = {
  title: "Next Study",
  description: "Next.js TailwindCSS Recoil FSD아키텍처 공부.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center h-screen">
        <RecoilRootWrapper>{children}</RecoilRootWrapper>
      </body>
    </html>
  );
}
