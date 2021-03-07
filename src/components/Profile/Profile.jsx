import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return <div className='content'>
    <div><img src='/img/Best-Tropical-Nature-Wallpaper-Background-Beach-Desktop.jpg'></img></div>
    <div>ava + description</div>
    <MyPosts />
    </div>
}

export default Profile;