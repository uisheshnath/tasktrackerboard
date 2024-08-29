import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Main from './pages/main/Main';
import Signup from './components/signup/Signup';
import Heirarchy from './pages/heirarchy/Heirarchy';
import Home from './pages/Home';
import ForgotPassword from './components/forgetPassword/forgetPassword';
import Page404 from './components/404/Page404';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dashboard' element={<Main/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/heirarchy' element={<Heirarchy/>} />
          <Route path='/forgetpassword' element={<ForgotPassword/>} />
          <Route path='/Page404' element={<Page404/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
