import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Main from './pages/main/Main';
import Signup from './components/signup/Signup';
import Heirarchy from './pages/heirarchy/Heirarchy';
import Home from './pages/Home';
import ForgotPassword from './components/forgetPassword/forgetPassword';
// user
import UserProvider from "./usermodel/UserProvider"
import UserProfile from "./usermodel/UserProfile"

function App() {

  return (
    <>
      <UserProvider>
        {/* <h1>React Context Example</h1>
        <UserProfile /> */}
    

      <Router>
        <Routes>
          <Route path='/dashboard' element={<Main />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/heirarchy' element={<Heirarchy />} />
          <Route path='/forgetpassword' element={<ForgotPassword />} />
        </Routes>
      </Router>
      </UserProvider>
    </>
  );
}

export default App;
