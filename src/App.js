import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";

import { BrowserRouter , Route, Routes , Link } from 'react-router-dom';


import { Footer } from "./components/Footer";
import { Ram } from "./components/Ram"
import Home from './components/Home';
import Courseplanner from './components/Courseplanner';
import Aichat from './components/Aichat';

function App() {
  return (
    <BrowserRouter>
      
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/course-planner" element={<Courseplanner />} />
          <Route exact path = "/Ai-chat" element={<Aichat />} />

        </Routes>
        
        <Footer />
        
      
    </BrowserRouter>
  );
}

export default App;
