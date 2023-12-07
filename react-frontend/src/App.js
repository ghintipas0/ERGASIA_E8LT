import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './component/NavBar';

function App() {
    return (
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/Home" element={<Home />} />
                </Routes>
            </div>
    );
}

export default App;
