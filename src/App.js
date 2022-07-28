import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Async from './components/Async';

function App() {
  return (
    <div className="App">
      <h1>Learn React</h1>
      <Greeting />
      <Async />
    </div>
  );
}

export default App;
