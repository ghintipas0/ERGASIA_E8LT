import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home";
import {Route,Link} from 'react-router';
function App() {
  return <div className="App">
      <Route exact to="/" component ={Home} />
  </div>
}

export default App;
