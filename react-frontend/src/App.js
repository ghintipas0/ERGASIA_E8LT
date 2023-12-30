import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './component/NavBar';
import MyProfile from './Pages/MyProfile';
import MyProfileInfo from './Pages/MyProfileInfo';

function App() {
    return (
            <div className="App">
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                     <Route exact path="/MyProfile" element={<MyProfile />} />
                     <Route exact path="/MyProfileInfo" element={<MyProfileInfo />} />
                </Routes>
            </div>
    );
}

export default App;
