import { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../utils/supabaseClient';

const Context = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState(supabase.auth.getUser());

  useEffect(() => {

    const getUserProfile = async () => {
      const sessionUser = await supabase.auth.getUser();

      if (sessionUser) {
        const {data: profile} = await supabase
        .from("profiles")
        .select("*")
        .eq("id", sessionUser.data.user.id)
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

    // const getData = async () => {
    //   const profile = await supabase.auth.getUser();
    //   setUser(profile);
    //   // console.log(profile);
    // } 
    // getData();
  }, []);

  console.log("USER PROFILE-", user);


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

export const useUser = () => useContext(Context);

export default Provider;


