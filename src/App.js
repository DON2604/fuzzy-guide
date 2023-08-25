import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter , Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Courseplanner from './components/Course/Courseplanner';
import Aichat from './components/Chat/Aichat';
import Login from './components/AuthSection/Login';
import Signup from './components/AuthSection/Signup';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/course-planner" element={<Courseplanner />} />
          <Route exact path = "/Ai-chat" element={<Aichat />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
