import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Pagenotfound from './pages/Pagenotfound';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/User/Dashboard';
import PrivateRoute from './components/Routes/Private';

function App() {
  return (
    <>  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />} >
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="404" element={<Pagenotfound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;