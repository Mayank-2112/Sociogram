import Home from './pages/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
