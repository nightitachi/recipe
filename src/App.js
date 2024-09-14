import './App.css';
import Registration from './component/Registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/register" element={<Registration />} />
          <Route path="/auth/login" element={<Login />} /> 
        </Routes>
      </BrowserRouter>
  );
}

export default App;
