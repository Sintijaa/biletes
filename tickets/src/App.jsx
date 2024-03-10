import { useState } from 'react';
import './style/App.css';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Calendar from './components/Calendar';
// import pievienot from './components/Pievienot.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Home />}></Route>
          {/* <Route path='/pievienot' element={<Pievienot />}></Route>
          <Route path='/Calendar'={<Calendar />}></Route> */}
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
