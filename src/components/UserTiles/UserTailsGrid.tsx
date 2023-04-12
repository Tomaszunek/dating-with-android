import type { AndroidUser } from "@prisma/client";
import { MainAndroidTail } from "./MainAndroidTail";

type UserTailsGridProps = {
  androidUsers: AndroidUser[];
};

export const UserTailsGrid = ({ androidUsers }: UserTailsGridProps) => (
  <div className="grid grid-cols-3 gap-4 p-10">
    {androidUsers.map((user) => (
      <MainAndroidTail key={user.id} userData={user} />
    ))}
  </div>
);
