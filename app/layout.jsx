// import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs/app-beta";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <>
      <ClerkProvider>
        <html lang="en">
          <head />
          <body>
            {" "}
            <nav>
              {" "}
              <Link href={`/`}>Home</Link>
              <br />
              <br />
              <Link href={`/sign-in`}>SignIn</Link>
              <br />
              <br />
              <Link href={`/sign-up`}>SignUp</Link>
            </nav>
            <div>{children}</div>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
