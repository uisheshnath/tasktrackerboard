import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Main from './pages/main/Main';
import Signup from './components/signup/Signup';
import Heirarchy from './pages/heirarchy/Heirarchy';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/dashboard' element={<Main/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/heirarchy' element={<Heirarchy/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
