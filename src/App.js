import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";

import { BrowserRouter , Route, Routes , Link } from 'react-router-dom';


import { Footer } from "./components/Footer";
import { Ram } from "./components/Ram"
import Home from './components/Home';
import Courseplanner from './components/Courseplanner';

function App() {
  return (
    <BrowserRouter>
      
        <NavBar />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/course-planner" element={<Courseplanner />} />

        </Routes>
        
        <Footer />
        
      
    </BrowserRouter>
  );
}

export default App;
