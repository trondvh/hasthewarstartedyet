import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Has the war startet yet?</title>
        <link rel="icon" href="/favicon.ico" />
       
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-BW1B7E576Y`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BW1B7E576Y', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
      </Head>

      <main>
        <Header title="Nope - Don't run, we are your friends!" />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_vUrAMxmO_A?controls=0&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </main>

    </div>
  )
}
