import s from './Post.module.css';
const Post = (props) => {

  console.log(props.message);
  
    return <div className={s.item}>
      <img src='/img/avatar.jpg'></img>
        {props.message}
            <div>
            <span>like</span>
            </div>
        </div>
}

export default Post;