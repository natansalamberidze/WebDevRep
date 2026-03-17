import "./globals.css";
import Footer from "@/components/Layout/Footer";

export const metadata = {
  title: "Mr Nathan Shalamberidze — Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className="pt-7 bg-bg-primary text-text-primary">
            <main className="min-h-32 ">
              {children}
            </main>
          <Footer />
        </body>
      </html>
  );
}
