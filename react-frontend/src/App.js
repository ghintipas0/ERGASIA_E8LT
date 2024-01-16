import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './component/NavBar';
import MyProfile from './Pages/MyProfile';
import Login from './Pages/Login';
import Register from './Pages/Register';
function App() {
    return (
            <div className="App">
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                     <Route exact path="/MyProfile" element={<MyProfile />} />
                    <Route exact path="/Login" element={<Login />} />
                    <Route exact path="/Register" element={<Register/>} />
                </Routes>
            </div>
    );
}

export default App;
