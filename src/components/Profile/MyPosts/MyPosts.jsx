import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
const MyPosts = (props) => {

//debugger;

  let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    //debugger;
    let text = newPostElement.current.value;
    props.addPost(text);
  }
  
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add posts</button>
        </div>
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  )
}


export default MyPosts;