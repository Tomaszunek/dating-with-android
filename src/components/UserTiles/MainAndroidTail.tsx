import type { AndroidUser } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type MainAndroidTailProps = {
  userData: AndroidUser;
};

const SingleUserInfo = ({ label, text }: { label: string; text: string }) => (
  <div className="flex">
    <p className="pr-2 font-bold">{label}:</p>
    <p>{text}</p>
  </div>
);

export const MainAndroidTail = ({
  userData: { id, mainImage, username, age, city, country, shortDescription },
}: MainAndroidTailProps) => {
  return (
    <Link href={`/profile/${id}`}>
      <Image
        src={`/usersImages/${mainImage}`}
        width={800}
        height={800}
        className="rounded-t-3xl"
        alt={mainImage}
        quality={75}
        placeholder="blur"
        blurDataURL={`/usersImages/${mainImage}`}
      />
      <span className="flex justify-center bg-red-400 pb-2 pt-2 text-3xl font-semibold text-white">
        <span>{username}</span>
      </span>
      <div className="rounded-b-3xl bg-white pl-4 pr-4 text-lg text-stone-700">
        <p className="pr-l line-clamp-2 h-16 pb-1 pt-1 ">{shortDescription}</p>
        <div className="flex w-full justify-evenly pb-1 pt-1">
          <SingleUserInfo label="Country" text={String(country)} />
          <SingleUserInfo label="City" text={String(city)} />
          <SingleUserInfo label="age" text={String(age)} />
        </div>
      </div>
    </Link>
  );
};
