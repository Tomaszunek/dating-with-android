import { useRouter } from "next/router";
import { useEffect } from "react";
import { ImageCarousel } from "~/components/carousel/ImageCarousel";
import { useRequiredAuth } from "~/hooks/withRequiredAuth";
import { api } from "~/utils/api";

const Profile = () => {
  const { requireToBeAuth } = useRequiredAuth();

  useEffect(() => {
    requireToBeAuth();
  }, [requireToBeAuth]);

  const router = useRouter();
  const { pid } = router.query;

  if (!pid || typeof pid === "object") return <div>loading...</div>;
  const { data } = api.androidUserRouter.getUserById.useQuery({ id: pid });
  if (!data) return <div>loading...</div>;
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <ImageCarousel images={data.ProfileImages} />
    </div>
  );
};

export default Profile;
