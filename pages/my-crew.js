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
        <meta
          name="title"
          content="Get Crew | UK & Ireland - The Only Place for Crew"
        />
        <meta
          name="description"
          content="A dedicated website for crew to showcase their professional credentials and for productions to find crew."
        />
        {/* 
<!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.getcrew.pro/" />
        <meta
          property="og:title"
          content="Get Crew | UK & Ireland - The Only Place for Crew"
        />
        <meta
          property="og:description"
          content="A dedicated website for crew to showcase their professional credentials and for productions to find crew."
        />
        <meta property="og:image" content="/images/gcFbLogoNew.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.getcrew.pro/" />
        <meta
          property="twitter:title"
          content="Get Crew | UK & Ireland - The Only Place for Crew"
        />
        <meta
          property="twitter:description"
          content="A dedicated website for crew to showcase their professional credentials and for productions to find crew."
        />
        <meta property="twitter:image" content="/images/gcFbLogoNew.jpg" />
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
