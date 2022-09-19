import Router from "next/router";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/router";

export default function Auth() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [showCheckEmail, setShowCheckEmail] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false)

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmailInput = (e) => {
    setEmail(e.target.value);

    if (isValidEmail(email) === true) {
      setShowEmailError(false);
    }
  }


  const handleLogin = async (email) => {
    if (isValidEmail(email) === true) {
      setShowEmailError(false);
    try {
      setLoading(true);
      setTimeout(() => {
        setShowCheckEmail(true);
      }, 2000);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;

      setLoading(false);
      setTimeout(() => {
        setShowCheckEmail(false);
      }, 8000);
    } catch (error) {
      alert(error.error_description || error.message);
    } 
  } else {
    setShowEmailError(true);
  }
  };


  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[400px] mt-20 flex flex-col items-center">
          <p className="mb-4">Sign in / register with your email via magic link.</p>
          <form className="bg-white p-20 shadow-md rounded-md mt-6">
            <div className="mb-12 rounded-md p-2 styledList">
              <input
                className="inputField"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailInput}
              />
              {showEmailError && (
                <p className="text-center text-wearecrewRed mt-1">Please enter a valid email</p>
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
                <span>{loading ? "Loading..." : "Send magic link"}</span>
              </button>
            </div>
          </form>
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
      ) }
      
    </>
  );
}
