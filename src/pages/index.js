import CardForm from '../../components/CardForm'
import Head from 'next/head'
import Tabs from '../../components/Tabs'
import useWindowSize from '@/utils/useWindowSize'

export default function Home() {
  const width = useWindowSize();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container">
              {width.width >= 768 ? 
                <CardForm /> : <Tabs />
              }
            </div>
          </div>
        </section>
      </main>
    </>
  )
}