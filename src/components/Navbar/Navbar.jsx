import s from './Navbar.module.css';

// let s = {
//   'nav' : 'Navbar_Navbar_nav__2imOE__1NmfI',
//   'item' : 'Navbar_Navbar_item__zmMk4__1aNQD'
// }

const Navbar = () => {
    return <nav className={s.nav}>
    <div className={s.item}><a>Profile</a></div>
    <div className={s.item}><a>Messages</a></div>
    <div className={s.item}><a>News</a></div>
    <div className={s.item}><a>Music</a></div>
    <div className={s.item}><a>Settings</a></div>
  </nav>
}

export default Navbar;