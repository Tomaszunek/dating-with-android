import { type NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useRequiredAuth } from "~/hooks/withRequiredAuth";

const Home: NextPage = () => {
  const { requireNotBeAuth } = useRequiredAuth();

  useEffect(() => {
    requireNotBeAuth();
  }, [requireNotBeAuth]);

  return (
    <>
      <Head>
        <title>Dating with Androids</title>
        <link rel="icon" href="/datingAndroid.ico" />
      </Head>
      <main>
        <div className="flex flex-col items-center justify-center">Home</div>
      </main>
    </>
  );
};

export default Home;
