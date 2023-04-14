import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/router";

export const useRequiredAuth = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  const requireToBeAuth = () => {
    if (!isSignedIn && isLoaded) {
      void router.push("/");
    }
  };

  const requireNotBeAuth = () => {
    if (isSignedIn && isLoaded) {
      void router.push("/users");
    }
  };

  return { requireToBeAuth, requireNotBeAuth };
};
