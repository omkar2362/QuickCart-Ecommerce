import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "QuickCart - GreatStack",
  description: "E-Commerce with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "bg-orange-500 hover:bg-orange-600 text-white",
        },
      }}
    >
      <html lang="en">
        <body className={`${outfit.className} antialiased text-gray-700`}>
          {/* Toast Notifications */}
          <Toaster position="top-center" />

          {/* Global App Context */}
          <AppContextProvider>
            {children}
          </AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}