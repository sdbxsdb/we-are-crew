import {useEffect} from "react";
import Link from "next/link";
import { useUser } from "../firebase/useUser";
import { sendData } from '../components/cloudFirestore/Write';


const NavBar = () => {

  const {user, logout} = useUser();

  console.log("USER-", user );

  useEffect(() => {
    if (user) {
      sendData(user);
    }
  }), [user];


  return (
    <nav className="w-full top-0 fixed p-4 flex justify-between bg-wearecrewLightGrey items-center z-50 backdrop-blur-sm">
      <Link href="/">
        <a className="h-full w-[150px] relative flex justify-center items-center">
          <img
            src="/images/logoSVG.svg"
            className="z-50"
            alt="We Are Crew logo"
            layout="responsive"
          />
          <div className="bg-wearecrewBlue h-[58px] w-[50px] absolute -left-4 top-1/2 transform -translate-y-1/2"></div>
        </a>
      </Link>

      <div className="flex gap-x-4 px-4">
        { !user?.email ? 
        <Link href="/auth">
          <a>Sign In / Register</a>
        </Link>
        : 
        <button onClick={() => logout()}>Logout</button>
        }
        { user?.email && (
          <Link href="/I-am-crew">
            <a>My Crew</a>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
