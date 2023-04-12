import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
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
