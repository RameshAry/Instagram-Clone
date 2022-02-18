import { useEffect, useState } from 'react'
import faker from '@faker-js/faker'
import Story from '../components/Story'
import { useSession } from 'next-auth/react'

function Stories() {
  const [suggestions, setSuggestion] = useState([])
  const { data: session } = useSession()
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setSuggestion(suggestions)
  }, [])

  return (
    <div
      className="mt-8 flex space-x-2 overflow-x-scroll 
    rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black"
    >
      {session && (
        <Story img={session?.user?.image} username={session?.user?.username} />
      )}

      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}

export default Stories
