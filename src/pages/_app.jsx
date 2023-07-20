import '../../styles/globals.css'
import Head from 'next/head'
import Header from '../../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Weris | Dev</title>
        <link rel="icon" href="/images/computer.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
