import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './component/NavBar';
import MyProfile from './Pages/MyProfile';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Admin from './Pages/Admin';
import Products from './Pages/Products';
import Phone from './Pages/Phone';
import TV from './Pages/TV';
function App() {
    return (
            <div className="App">
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/MyProfile" element={<MyProfile/>} />
                    <Route exact path="/Login" element={<Login/>} />
                    <Route exact path="/Register" element={<Register/>} />
                    <Route exact path="/Admin" element={<Admin/>} />
                    <Route exact path="/Products/:id" element={<Products/>} />
                    {/*<Route exact path="/Phone" element={<Phone/>} />*/}
                    {/*<Route exact path="/TV" element={<TV/>} />*/}
                </Routes>
            </div>
    );
}

export default App;
