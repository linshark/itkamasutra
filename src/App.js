import './App.css';



const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='/img/logolotus.jpg'></img>
      </header>
      <nav className='nav'>
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav>
      <div className='content'>
        <div><img src='/img/Best-Tropical-Nature-Wallpaper-Background-Beach-Desktop.jpg'></img></div>
        <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div>Post 1</div>
        <div>Post 2</div>
      </div>
      </div>
    </div>
  );
}

export default App;
