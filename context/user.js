import { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../utils/supabaseClient';
import axios from 'axios'

const Context = createContext();
export const useUser = () => useContext(Context);


const Provider = ({ children }) => {
  const [user, setUser] = useState(supabase.auth.getUser());

  useEffect(() => {

    const getUserProfile = async () => {
      const sessionUser = await supabase.auth.getUser();

      if (sessionUser) {
        const {data: profile} = await supabase
        .from("profiles")
        .select("*")
        .eq("id", sessionUser?.data?.user?.id)
        .single()

        setUser({
          ...sessionUser,
          ...profile,
        });
      };
    };

    getUserProfile();

    supabase.auth.onAuthStateChange(() => {
      getUserProfile();
    })
  }, []);

  // useEffect(() => {
  //   const getSession = async () => {
  //     const session = await supabase.auth.getSession();
    
  //     // console.log("SESSION-", session.data.session.access_token);
  //   }
  //   getSession();
  //   // console.log("USER -", user.data);
  // }, [user])


  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const exposed = { 
    user,
    logout,
  }


  return (
    <Context.Provider value={exposed}>
      {children}
    </Context.Provider>
  )
}


export default Provider;


