import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
}
const Technologies = () => {
  return (<div>
    <ul>
      <li>css</li>
      <li>html</li>
      <li>js</li>
      <li>react</li>
    </ul>
  </div>);
}

const Header = () => {
  return (<div>
          <a href="#1">Home</a>
          <a href="#2">News Feed</a>
          <a href="#3">Messages</a>
          </div>);
}

export default App;
