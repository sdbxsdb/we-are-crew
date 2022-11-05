import Link from "next/link";
import NavLink from "next/link";
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
  const [showMobileNav, setShowMobileNav] = useState(false);

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
    setShowMobileNav(false);
    supabase.auth.signOut();
    logout();
    deleteCookie("stripe_customer");
    router.push("/my-crew");
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
  };

  const showSlideoverNav = () => {
    setShowMobileNav(true);
  };

  const hideSlideoverNav = () => {
    // console.log("CLOSE NAV");
    setShowMobileNav(false);
  };


  return (
    <div className="w-full top-0 fixed flex justify-center z-1000 px-4 py-2 shadow-md bg-wearecrewLightGrey ">
      <div className="max-w-[1200px] flex flex-col gap-y-2 md:gap-y-0 w-full">
        <nav className=" flex justify-between  items-center text-sm sm:text-base ">
          <Link href="/">
            <a className="h-full w-[140px] relative flex justify-center items-center hover:brightness-110 transition">
              <img
                src="/images/newNewGCLogo.png"
                className="z-50"
                alt="Get Crew logo"
              />
            </a>
          </Link>
          {/* DESKTOP NAV */}
          <div className="hidden md:flex flex-wrap justify-end gap-x-4 gap-y-2 md:gap-x-8 px-4 text-wearecrewDarkestGrey font-bold items-center">
            <NavLink href="/">
              <span
                className={
                  router.pathname == "/"
                    ? "text-wearecrewBlue"
                    : "hover:text-wearecrewBlue transition cursor-pointer"
                }
              >
                Home
              </span>
            </NavLink>
            <NavLink href="/about">
              <span
                className={
                  router.pathname == "/about"
                    ? "text-wearecrewBlue"
                    : "hover:text-wearecrewBlue transition cursor-pointer"
                }
              >
                About
              </span>
            </NavLink>

            <NavLink href="/pricing">
              <span
                className={
                  router.pathname == "/pricing"
                    ? "text-wearecrewBlue"
                    : "hover:text-wearecrewBlue transition cursor-pointer"
                }
              >
                Pricing
              </span>
            </NavLink>

            {!userEmail && (
              <NavLink href="/my-crew">
                <span
                  className={
                    router.pathname == "/my-crew"
                      ? "text-wearecrewBlue"
                      : "hover:text-wearecrewBlue transition cursor-pointer"
                  }
                >
                  Sign In / Register
                </span>
              </NavLink>
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
                    className="absolute w-max flex flex-col xl:left-[-2px] bg-white rounded-md shadow-md border-wearecrewBlue xl:transform xl:-translate-x-1/3 border-2 right-0 overflow-hidden"
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
          {/* END OF // DESKTOP NAV */}

          {/* MOBILE NAV */}

          <div className="block md:hidden">
            <div
              onClick={() => showSlideoverNav()}
              className="cursor-pointer px-5 py-2 rounded "
            >
              <span className="material-icons text-4xl text-wearecrewDarkestGrey">
                menu
              </span>
            </div>
            <div
              className={`w-screen h-screen flex items-center text-6xl justify-center flex-col gap-y-8 pb-24 px-4 left-0 top-0 bg-wearecrewDarkestGrey/95 fixed text-wearecrewLightGrey transition transform ${
                showMobileNav === true
                  ? "-translate-x-[0px]"
                  : "translate-x-[770px]"
              }`}
            >
              <button
                onClick={hideSlideoverNav}
                className="absolute z-5000 top-5 right-8"
              >
                <svg
                  className="transition fill-current hover:text-wearecrewDarkBlue"
                  width="30px"
                  height="30px"
                  x="0px"
                  y="0px"
                  viewBox="0 0 252 252"
                >
                  <g>
                    <path
                      d="M126,0C56.523,0,0,56.523,0,126s56.523,126,126,126s126-56.523,126-126S195.477,0,126,0z M126,234
                c-59.551,0-108-48.449-108-108S66.449,18,126,18s108,48.449,108,108S185.551,234,126,234z"
                    />
                    <path
                      d="M164.612,87.388c-3.515-3.515-9.213-3.515-12.728,0L126,113.272l-25.885-25.885c-3.515-3.515-9.213-3.515-12.728,0
                c-3.515,3.515-3.515,9.213,0,12.728L113.272,126l-25.885,25.885c-3.515,3.515-3.515,9.213,0,12.728
                c1.757,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636L126,138.728l25.885,25.885c1.757,1.757,4.061,2.636,6.364,2.636
                s4.606-0.879,6.364-2.636c3.515-3.515,3.515-9.213,0-12.728L138.728,126l25.885-25.885
                C168.127,96.601,168.127,90.902,164.612,87.388z"
                    />
                  </g>
                </svg>
              </button>
              <NavLink href="/">
                <h1
                  onClick={hideSlideoverNav}
                  className={
                    router.pathname == "/"
                      ? "text-wearecrewBlue"
                      : "hover:text-wearecrewBlue transition cursor-pointer"
                  }
                >
                  Home
                </h1>
              </NavLink>
              <NavLink href="/about">
                <h1
                  onClick={hideSlideoverNav}
                  className={
                    router.pathname == "/about"
                      ? "text-wearecrewBlue"
                      : "hover:text-wearecrewBlue transition cursor-pointer"
                  }
                >
                  About
                </h1>
              </NavLink>
              <NavLink href="/pricing">
                <h1
                  onClick={hideSlideoverNav}
                  className={
                    router.pathname == "/pricing"
                      ? "text-wearecrewBlue"
                      : "hover:text-wearecrewBlue transition cursor-pointer"
                  }
                >
                  Pricing
                </h1>
              </NavLink>
              {!userEmail && (
                <NavLink href="/my-crew">
                  <h1
                    onClick={hideSlideoverNav}
                    className={`text-center
                        ${
                          router.pathname == "/my-crew"
                            ? "text-wearecrewBlue"
                            : "hover:text-wearecrewBlue transition cursor-pointer"
                        }
                      `}
                  >
                    Sign In / Register
                  </h1>
                </NavLink>
              )}
              {userEmail && (
                <>
                  <NavLink href="/my-crew">
                    <h1
                      onClick={hideSlideoverNav}
                      className={
                        router.pathname == "/my-crew"
                          ? "text-wearecrewBlue"
                          : "hover:text-wearecrewBlue transition cursor-pointer"
                      }
                    >
                      Profile
                    </h1>
                  </NavLink>
                  <button
                    onClick={() => signOutHandler()}
                    className="text-wearecrewLightGrey cursor-pointer"
                  >
                    <h1>Logout</h1>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* END OF // MOBILE NAV */}
        </nav>
        <div className="w-full text-left ml-[2px]">
          <Link href="/about">
            <a>
              <small className="text-wearecrewDarkestGrey mt-2 bg-wearecrewLightGrey w-full">
                <span className="hidden md:inline-block">
                  Proudly partnered with
                </span>{" "}
                One
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
