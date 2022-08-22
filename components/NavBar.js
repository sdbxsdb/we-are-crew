import Link from "next/link";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { useUser } from "../context/user";
import { useRouter } from "next/router";

const NavBar = () => {
  const { user, logout } = useUser();
  const router = useRouter();

  const userEmail = user?.data?.user?.email;

  const signOutHandler = () => {
    supabase.auth.signOut();
    logout();
    router.push("/");
  };

  return (
    <nav className="w-full top-0 fixed p-4 flex justify-between bg-wearecrewLightGrey items-center z-50 shadow-md text-sm sm:text-base">
      <Link href="/">
        <a className="h-full w-[120px] relative flex justify-center items-center">
          <img
            src="/images/logoNew2.png"
            className="z-50"
            alt="We Are Crew logo"
            layout="responsive"
          />
        </a>
      </Link>

      <div className="flex gap-x-6 md:gap-x-8 px-4 text-wearecrewDarkestGrey font-bold">
        <Link href="/about">
          <a>About</a>
        </Link>

        {!userEmail && (
          <Link href="/my-crew">
            <a>Sign In / Register</a>
          </Link>
        )}

        {userEmail && <button onClick={() => signOutHandler()}>Logout</button>}

        {userEmail && (
          <Link href="/my-crew">
            <a>My Crew</a>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
