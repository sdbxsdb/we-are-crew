import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import { useUser } from "../context/user";
import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";

const NavBar = () => {
  const { user, logout } = useUser();
  const dropDownRef = useRef(null);

  const router = useRouter();
  const [showProfileIconContent, setShowProfileIconContent] = useState(false);

  const userEmail = user?.data?.user?.email;

  // below is the same as componentDidMount and componentDidUnmount
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideDropdown, false);
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutsideDropdown,
        false
      );
    };
  }, []);

  const handleClickOutsideDropdown = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setShowProfileIconContent(false);
    }
  };

  const signOutHandler = () => {
    supabase.auth.signOut();
    logout();
    deleteCookie("stripe_customer");

    router.push("/my-crew");
  };

  return (
    <div className="w-full top-0 fixed flex justify-center z-50 px-4 py-2 shadow-md bg-wearecrewLightGrey min-h-[105px]">
      <div className="max-w-[1200px] flex flex-col gap-y-2 md:gap-y-0 w-full">
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
          <div className="flex flex-wrap justify-end gap-x-4 gap-y-2 md:gap-x-8 px-4 text-wearecrewDarkestGrey font-bold items-center">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>

            <Link href="/pricing">
              <a>Pricing</a>
            </Link>

            {!userEmail && (
              <Link href="/my-crew">
                <a>Sign In / Register</a>
              </Link>
            )}
            {userEmail && (
              <div className="relative">
                <span
                  onClick={() =>
                    setShowProfileIconContent(!showProfileIconContent)
                  }
                  className={`material-icons cursor-pointer text-3xl pt-1 hover:text-wearecrewBlue transition ${
                    showProfileIconContent ? "text-wearecrewBlue" : ""
                  }`}
                >
                  account_circle
                </span>
                {showProfileIconContent && (
                  <div
                    ref={dropDownRef}
                    className="absolute w-max flex flex-col xl:left-[-2px] bg-white rounded-md shadow-md border-wearecrewBlue xl:transform xl:-translate-x-1/3 border-2 right-0"
                  >
                    <Link href="/my-crew">
                      <a
                        onClick={() => setShowProfileIconContent(false)}
                        className="hover:bg-wearecrewLightGrey p-4"
                      >
                        Profile
                      </a>
                    </Link>
                    <button
                      onClick={() => signOutHandler()}
                      className="hover:bg-wearecrewLightGrey p-4"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
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
