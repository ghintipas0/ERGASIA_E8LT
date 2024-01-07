import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './component/NavBar';
import MyProfile from './Pages/MyProfile';
import Register from './Pages/Register';
import Login from './Pages/login';
function App() {
    return (
            <div className="App">
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                     <Route exact path="/MyProfile" element={<MyProfile />} />
                     <Route exact path="/Register" element={<Register />} />
                    <Route exact path="/login" element={<Login />} />
                </Routes>
            </div>
    );
}

export default App;
