import logo from './logo.svg';
import NavBar from './NavBar';
import Body from "./BodyComponents/Body";
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
}

export default App;
