

import Head from "next/head";
import Pokemon from "@/components/pokemon";

export default function Home() {
  return (
    <>
      <Head>
        <title>Api Pokemon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
            {Pokemon()}
        </div>
    </>
  );
}