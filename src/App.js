import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Features/NavBar";

import { BrowserRouter , Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Courseplanner from './components/Course/Courseplanner';
import Aichat from './components/Chat/Aichat';

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
