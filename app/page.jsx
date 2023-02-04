import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
// import { auth } from "@clerk/nextjs/app-beta";
// import { currentUser } from "@clerk/nextjs/app-beta";
import { use } from "react";

const inter = Inter({ subsets: ["latin"] });

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const final_response = await response.json();
  return final_response;
}

export default async function Home() {
  const data = await fetchData();

  // console.log("data is", data);

  // const user = await currentUser();

  return (
    <main>
      <h1>Hello world </h1>
      {/* <i> {user.id}</i> */}
      {data.map((data) => (
        <div key={data.id}>
          <Link href={`/users/${encodeURIComponent(data.id)}`}>
            <h3>{data.username}</h3>
          </Link>
        </div>
      ))}
    </main>
  );
}
