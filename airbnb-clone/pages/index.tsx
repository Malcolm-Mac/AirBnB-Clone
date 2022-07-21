import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="https://res.cloudinary.com/droskhnig/image/upload/v1658405870/airbnb-logo-266x300_2x_xwfsba.png" />
      </Head>

      {/* Header */}
      <Header/>
      {/* Banner */}

      
    </div>
  )
}

export default Home
