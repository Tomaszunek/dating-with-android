import type { AndroidUser } from "@prisma/client";
import { MainAndroidTail } from "./MainAndroidTail";

type UserTailsGridProps = {
  androidUsers: AndroidUser[];
};

export const UserTailsGrid = ({ androidUsers }: UserTailsGridProps) => (
  <div
    className="grid max-h-max gap-10
              p-10 sm:grid-cols-1 sm:gap-6 
              md:grid-cols-2 
              xl:grid-cols-3 xl:px-16
              2xl:grid-cols-4 2xl:px-[8.25vw]"
  >
    {androidUsers.map((user) => (
      <MainAndroidTail key={user.id} userData={user} />
    ))}
  </div>
);
