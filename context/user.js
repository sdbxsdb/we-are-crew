import { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../utils/supabaseClient';

const Context = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState(supabase.auth.getUser());

  useEffect(() => {
    const getData = async () => {
      const profile = await supabase.auth.getUser();
      setUser(profile);
    } 
    getData();
  }, []);

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


