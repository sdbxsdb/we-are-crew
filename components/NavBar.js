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
    <div className="w-full top-0 fixed flex justify-center z-50 px-4 py-2 shadow-md bg-wearecrewLightGrey ">
      <div className="max-w-[1200px] w-full">
        <nav className=" flex justify-between  items-center text-sm sm:text-base ">
          <Link href="/">
            <a className="h-full w-[120px] relative flex justify-center items-center">
              <img
                src="/images/newGCLogo.png"
                className="z-50"
                alt="Get Crew logo"
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
            {userEmail && (
              <button onClick={() => signOutHandler()}>Logout</button>
            )}
            {userEmail && (
              <Link href="/my-crew">
                <a>My Crew</a>
              </Link>
            )}
          </div>
        </nav>
        <div className="w-full text-center">
          <Link href="/about">
            <a>
              <small className="text-wearecrewDarkestGrey mt-2 bg-wearecrewLightGrey w-full">
                Proudly partnered with One
                <strong className="text-oneTreeGreen">Tree</strong>Planted
              </small>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
