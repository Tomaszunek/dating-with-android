import { type AppType } from "next/app";

import { ClerkProvider } from "@clerk/nextjs";
import { api } from "~/utils/api";
import { NavigationBar } from "~/components/navigation/NavigationBar";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <NavigationBar />
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
