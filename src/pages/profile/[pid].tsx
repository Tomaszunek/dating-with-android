import { useRouter } from "next/router";
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

  if (!pid || typeof pid === "object") return <div>loading...</div>;
  const { data } = api.androidUserRouter.getUserById.useQuery({ id: pid });

  if (!data) return <div>loading...</div>;

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <ImageCarousel images={data.ProfileImages} />
      <ChatComponent />
    </div>
  );
};

export default Profile;
