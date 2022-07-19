import '../styles/globals.css'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <div className='mt-20'>
      <Component {...pageProps} />
    </div>
  </Layout>
  )
}

export default MyApp
