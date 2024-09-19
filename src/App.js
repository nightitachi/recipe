import './App.css';
import Registration from './component/Registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';
import Nav from './component/Nav';
import Savedrecipe from './component/Savedrecipe';
import Createdrecipe from './component/Createdrecipe';
import Readrecipe from './component/Readrecipe';
function App() {
  return ( 
    <BrowserRouter>
    <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/register" element={<Registration />} />
          <Route path="/auth/login" element={<Login />} /> 
          <Route path="/recipe/createdrecipe" element={<Createdrecipe />} />
          <Route path="/recipe/savedrecipe" element={<Savedrecipe />} />
          <Route path="/read-recipe/:id" element={<Readrecipe />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
