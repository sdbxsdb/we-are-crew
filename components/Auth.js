import { useState } from "react";
import { supabase } from "../utils/supabaseClient";



export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [showCheckEmail, setShowCheckEmail] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);


  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    if (isValidEmail(email) === true) {
      setShowEmailError(false);
    }
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleLogin = async (email) => {
    if (isValidEmail(email) === true) {
      setShowEmailError(false);
      try {
        setLoading(true);
        setTimeout(() => {
          setShowCheckEmail(true);
        }, 2000);

        const { data, error } = await supabase.auth.signInWithOtp({ 
          email: email,
        });
        console.log("DATA-", data);

        if (error) throw error;
        setLoading(false);
        setTimeout(() => {
          setShowCheckEmail(false);
        }, 8000);
      } catch (error) {
        console.log("ERROR-", error);
        alert(error.error_description || error.message);
      }
    } else {
      setShowEmailError(true);
    }

  };

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
    console.log("DATA-", data);
  }

  

  return (
    <div className="flex item-center justify-center">
      <div className="flex justify-center items-center md:h-[calc(100vh-107px)]">
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-2xl text-center">
            Enter your email to get a sign in / register link.
          </h1>
          
          <div className="bg-white rounded-md shadow-md flex flex-col items-center justify-center pt-4 pb-8">
            <form className="px-20 mb-12">
              <div className="mb-2 rounded-md p-2 styledList w-full">
                <input
                  className="inputField"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailInput}
                />
                {showEmailError && (
                  <p className="text-center text-wearecrewRed mt-1">
                    Please enter a valid email
                  </p>
                )}
              </div>
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogin(email);
                  }}
                  className="p-2 w-full rounded-md border-2 border-wearecrewBlue mt-2"
                  disabled={loading}
                >
                  <span>{loading ? "Loading..." : "Send login link"}</span>
                </button>
              </div>
            </form>
            <div className="px-12 w-full relative h-[50px]">
              <hr className="" />
              <small className="p-2 bg-white absolute -top-1/2 left-1/2 transform -translate-x-1/2 mt-2 opacity-70">Or you can</small>
            </div>
              <div onClick={() => signInWithGoogle()} className="flex bg-white p-2 items-center gap-x-2 rounded-md shadow-md cursor-pointer border-2 border-wearecrewBlue w-fit">
                  <img src="/images/7123025_logo_google_g_icon.png" alt="" width="30px" height="30px"/>
                  <span className="">Sign in with Google</span>
              </div>
          </div>

        </div>
      </div>

      {showCheckEmail && (
        <div className="w-screen h-screen absolute bg-white bg-opacity-80 flex flex-col justify-center items-center top-0 left-0 z-3000 gap-y-6">
          <h1 className="text-3xl">Check your email for the login link!</h1>
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export function handler(req, res) {
  console.log("EMAIL-", email);
  res.status(200).json({ email: email })
}