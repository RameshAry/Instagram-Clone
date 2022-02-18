import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
// import { getSession } from 'next-auth/react'

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-50 scrollbar-hide ">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Feed />

      {/* Feed */}

      {/* Modal */}
    </div>
  )
}
