import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import ForgetPassword from './pages/auth/ForgetPassword';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/forgetpassword' element={<ForgetPassword />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/policy' element={<Policy />} />
      <Route path='/*' element={<PageNotFound />} />
    </Routes>
    
    </>
  );
}

export default App;
