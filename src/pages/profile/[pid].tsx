import { useRouter } from "next/router";
import { LoadingScreen } from "~/components/LoadingScreen/LoadingScreen";
import { ImageCarousel } from "~/components/carousel/ImageCarousel";
import { api } from "~/utils/api";

const ChatComponent = () => {
  const sendMessage = api.androidChatAIRouter.getAnswer.useMutation({
    onSuccess: (data) => {
      console.log(data);
    },
  });
  return (
    <button
      onClick={() => {
        sendMessage.mutate({ message: "Why you dont want date with me?" });
      }}
    >
      Button
    </button>
  );
};

const Profile = () => {
  const router = useRouter();
  const { pid } = router.query;

  if (!pid || typeof pid === "object") return <LoadingScreen />;
  const { data } = api.androidUserRouter.getUserById.useQuery({ id: pid });

  if (!data) return <LoadingScreen />;

  return (
    <div className="flex h-screen flex-col">
      <div className="grid max-h-fit grid-cols-2 gap-3 p-9">
        <div></div>
        <ImageCarousel images={data.ProfileImages} imageRoot={data.imageRoot} />
      </div>
    </div>
  );
};

export default Profile;
