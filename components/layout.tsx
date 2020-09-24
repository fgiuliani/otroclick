import Head from "next/head";
import Header from "./header";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  user?: any;
}

export default function Layout({ children, user }: Props) {
  return (
    <>
      <Head>
        <title>Otro Click</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="antialiased font-sans bg-gray-200">
        <Header user={user} />
        {children}
      </main>
    </>
  );
}
