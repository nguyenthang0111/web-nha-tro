import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Pagenotfound from './pages/Pagenotfound';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

function App() {
  return (
    <>  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="404" element={<Pagenotfound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
