import '../styles/globals.css';
import Layout from '../components/layout/layout.component';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
     <Head>
          <title>Афиша - мероприятия в Якутске</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="icon" href="/favicon.svg"></link>
        </Head>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
