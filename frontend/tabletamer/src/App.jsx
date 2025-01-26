import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Restaurant from './components/Restaurant'
import Menu from './components/Menu'


function App() {
  // const [count, setCount] = useState(0)
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
    {loggedIn ? <Restaurant/> : <Login/>}
    {/* <Menu/> */}
    </>
  )
}

export default App
