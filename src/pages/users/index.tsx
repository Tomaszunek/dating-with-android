import { type NextPage } from "next";
import Head from "next/head";
import { UserTailsGrid } from "~/components/UserTiles";

import { api } from "~/utils/api";

const Users: NextPage = () => {
  const { data, error } = api.androidUserRouter.getAll.useQuery();

  if (error) {
    return <div>Error: {JSON.stringify(error.data?.code)}</div>;
  }

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
