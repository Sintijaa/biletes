import { useState } from 'react';
import './style/App.css';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/pievienot' element={<Pievienot />}></Route> 
          <Route path='/calendar' element={<calendar />}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
