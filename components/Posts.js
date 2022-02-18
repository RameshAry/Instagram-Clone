import Post from '../components/Post'
const posts = [
  {
    id: '123',
    username: 'rameshAry',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'I am loving this guys',
  },
  {
    id: '123',
    username: 'rameshAry',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'This is dope',
  },
  {
    id: '123',
    username: 'rameshAry',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'This is dope',
  },
]

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
