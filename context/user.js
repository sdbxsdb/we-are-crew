import { createContext, useState, useEffect, useContext } from "react";
import { supabase } from "../utils/supabaseClient";

const Context = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState(supabase.auth.getUser());

  useEffect(() => {
    const getUserProfile = async () => {
      const sessionUser = await supabase.auth.getUser();

      if (sessionUser) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", sessionUser?.data?.user?.id)
          .single();

        setUser({
          ...sessionUser,
          ...profile,
        });
      }
    };

    getUserProfile();

    supabase.auth.onAuthStateChange(() => {
      getUserProfile();
    });
  }, []);

  useEffect(() => {
    if (user) {
      supabase
        .channel("public:profiles")
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "profiles" },
          (payload) => {
            console.log("Change received in user.js", payload);
            setUser(payload.new);
          }
        )
        .subscribe();
    }
    // console.log("USER-", user);
  }, [user]);

  // useEffect(() => {
  //   const getSession = async () => {
  //     const session = await supabase.auth.getSession();

  //     console.log("SESSION-", session);
  //   }
  //   getSession();
  //   console.log("USER -", user.data);
  // }, [user])

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const exposed = {
    user,
    logout,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useUser = () => useContext(Context);

export default Provider;
