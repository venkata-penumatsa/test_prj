// import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs/app-beta";
import Link from "next/link";
import Providers from "./components/chakra-provider";
import navbar from "./components/nav/navbar";

export default function RootLayout({ children }) {
  return (
    <>
      {/* <ClerkProvider> */}
      <html lang="en">
        <head />
        <body>
          {" "}
          <nav>
            {" "}
            {/* <Link href={`/`}>Home</Link> */}
            <navbar />
          </nav>
          <div>
            <Providers>{children}</Providers>
          </div>
        </body>
      </html>
      {/* </ClerkProvider> */}
    </>
  );
}
