/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import logoAndroid from "/public/icons/logoAndroid.svg";
import Image from "next/image";

export const NavigationBar = () => {
  const userAuth = useUser();
  return (
    <header className="flex items-center justify-between  pl-5 pr-5">
      <Link href={"/"}>
        <Image
          width={75}
          height={75}
          priority
          src={logoAndroid}
          alt="Dating w/ Android"
        />
      </Link>
      <nav className="flex justify-between align-middle">
        <ul>
          <li>
            <Link href={"/users"}>Users</Link>
          </li>
        </ul>
        <div>{!userAuth.isSignedIn ? <SignInButton /> : <SignOutButton />}</div>
      </nav>
    </header>
  );
};
