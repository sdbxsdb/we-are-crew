import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import Auth from '../components/Auth';
import Account from '../components/Account';
import Head from 'next/head';


const Login = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [session, setSession] = useState(null)

  useEffect(() => {
    let mounted = true

    async function getInitialSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      // only update the react state if the component is still mounted
      if (mounted) {
        if (session) {
          setSession(session)
        }

        setIsLoading(false)
      }
    }

    getInitialSession()

    const { subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
      }
    )

    return () => {
      mounted = false

      subscription?.unsubscribe()
    }
  }, [])

  return (
    <>
    <Head>
        <title>
          {!session ? "Sign In " : "My Crew "}
          | Get Crew
        </title>
        <meta name="keywords" content="My Crew" />
        <meta
          name="description"
          content="Your Get Crew profile page.  You can easily list your availability, credits, website, IMDB, upload your CV and more"
        />
      </Head>

    <div>
      {!session ? (
        <Auth />
      ) : (
        <Account key={session.user.id} session={session} />
      )}
    </div>
    </>
  )
}

export default Login;
