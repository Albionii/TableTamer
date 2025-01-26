import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Restaurant from './components/Restaurant'
import Menu from './components/Menu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RepeatedDivsWaiter from './components/RepeatedDivsWaiter'


function App() {
  // const [count, setCount] = useState(0)
  const [loggedIn, setLoggedIn] = useState(true);
// KODI PER COOKIES SHKON QETU EDHE JA NDRRON STATUSIN E LOGGEDIN

  return (
    <>
    {/* {loggedIn ? <Restaurant/> : <Login/>} */}
    {/* <Menu/> */}
    <Router>
      <Routes>
        <Route path="/" element={<RepeatedDivsWaiter />} /> {/* Root Route */}
        <Route path="/Menu/:id" element={<Menu />} /> {/* Menu Route */}
        {/* <Route path="/invoice" element={<Menu />} /> Menu Route */}
      </Routes>
    </Router>
    </>
  )
}

export default App
