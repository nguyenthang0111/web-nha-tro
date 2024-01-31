import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Pagenotfound from './pages/Pagenotfound';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/User/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Users from './pages/Admin/Users';
import Rooms from './pages/Admin/Rooms';
import UserRoom from './pages/User/UserRoom';
import UserInfo from './pages/User/UserInfo';
import NewRoom from './pages/User/NewRoom';

function App() {
  return (
    <>  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />} >
          <Route path="user" element={<Dashboard />} />
          <Route path="user/userroom" element={<UserRoom />} />
          <Route path="user/userinfo" element={<UserInfo />} />
          <Route path="user/newroom" element={<NewRoom />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />} >
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/rooms" element={<Rooms />} />
        </Route>
        <Route path="404" element={<Pagenotfound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;