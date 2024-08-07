import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import ForgetPassword from './pages/auth/ForgetPassword';
import Dashboard from './pages/auth/user/Dashboard';
import AdminDashboard from './pages/auth/admin/AdminDashboard';
import ControllerDashboard from './pages/auth/controller/ControllerDashboard';
import PrivateRoute from './components/Routes/PrivateRoute';
import AllUsers from './pages/auth/AllUsers';
import Handpump from './pages/Handpump';
import HandPumpList from './pages/HandPumpList';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/user/dashboard' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/handpumpreport' element={<HandPumpList />} />
        <Route path='/*' element={<PageNotFound />} />
        <Route path='/admin' element={<PrivateRoute />}>
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='getallusers' element={<AllUsers />} />
          <Route path='handpump' element={<Handpump />} />
        </Route>
        <Route path='/controller' element={<PrivateRoute />}>
          <Route path='dashboard' element={<ControllerDashboard />} />
          <Route path='getallusers' element={<AllUsers />} />
          <Route path='handpump' element={<Handpump />} />
        </Route>
      </Routes> 

    </>
  );
}

export default App;
