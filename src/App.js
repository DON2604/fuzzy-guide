import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";

import { BrowserRouter , Route, Routes } from 'react-router-dom';

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
    </BrowserRouter>
  );
}

export default App;
