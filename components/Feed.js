import Stories from '../components/Stories'
import Posts from '../components/Posts'
import MiniProfile from '../components/MiniProfile'
import Suggestions from '../components/Suggestions'
import { useSession } from 'next-auth/react'

function Feed() {
  const { data: session } = useSession()
  return (
    <main
      className={`mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3 ${
        !session && '!max-w-3xl !grid-cols-1'
      }`}
    >
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      {session && (
        <section className="hidden md:col-span-1 xl:inline-grid">
          <div className="fixed ">
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  )
}

export default Feed
