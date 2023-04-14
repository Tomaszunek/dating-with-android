import { type NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { UserTailsGrid } from "~/components/UserTiles";
import { useRequiredAuth } from "~/hooks/withRequiredAuth";

import { api } from "~/utils/api";

const Users: NextPage = () => {
  const { data } = api.androidUserRouter.getAll.useQuery();
  const { requireToBeAuth } = useRequiredAuth();

  useEffect(() => {
    requireToBeAuth();
  }, [requireToBeAuth]);

  if (!data) return <div>Loading...</div>;
  return (
    <>
      <Head>
        <title>Users</title>
        <link rel="icon" href="/datingAndroid.ico" />
      </Head>
      <main className="bg-red-200">
        <UserTailsGrid androidUsers={data} />
      </main>
    </>
  );
};

export default Users;
