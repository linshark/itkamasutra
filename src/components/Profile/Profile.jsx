import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

 //debugger;     

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts} 
                    newPostText={props.profilePage.newPostText}
                    addPost={props.addPost}/>
        </div>
    )
}

export default Profile;