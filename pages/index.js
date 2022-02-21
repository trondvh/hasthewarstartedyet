import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Has the war startet yet?</title>
        <link rel="icon" href="/favicon.ico" />
       
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BW1B7E576Y"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)&#59;}
          gtag('js', new Date())&#59;

          gtag('config', 'G-BW1B7E576Y')&#59;
        </script>
      </Head>

      <main>
        <Header title="Nope" />
      </main>

    </div>
  )
}
