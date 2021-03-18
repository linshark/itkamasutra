import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {

  let posts = [
    {id:1, message: 'Hi, how are you?', likesCount:12},
    {id:2, message: 'It\'s my first posts', likesCount:11},
    {id:3, message: 'Hi, how are you?', likesCount:14},
    {id:4, message: 'Hi, how are you?', likesCount:16}
]

  let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount} />)

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add posts</button>
        </div>
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  )
}


export default MyPosts;