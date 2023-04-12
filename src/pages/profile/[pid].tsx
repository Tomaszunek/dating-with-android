import { useRouter } from "next/router";
import { ImageCarousel } from "~/components/carousel/ImageCarousel";
import { api } from "~/utils/api";

const Profile = () => {
  const router = useRouter();
  const { pid } = router.query;

  if (!pid || typeof pid === "object") return <div>loading...</div>;
  const { data } = api.androidUserRouter.getUserById.useQuery({ id: pid });
  if (!data) return <div>loading...</div>;
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-6 text-3xl font-bold">Image Carousel</h1>
      <ImageCarousel images={data.ProfileImages} />
    </div>
  );
};

export default Profile;
