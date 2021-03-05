import classes from './Profile.module.css';
const Profile = () => {
    return <div className='content'>
    <div><img src='/img/Best-Tropical-Nature-Wallpaper-Background-Beach-Desktop.jpg'></img></div>
    <div>ava + description</div>
  <div>
    My posts
    <div>New post</div>
    <div className='posts'>
      <div className='item'>Post 1</div>
      <div className='item'>Post 2</div>
    </div>
  </div>
  </div>
}

export default Profile;