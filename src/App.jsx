import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import {useSelector} from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  const theme = useSelector((state)=> state.theme.value)
  console.log(theme)

  return (
    <div>
      <Router>
        <Routes>

          <Route path="/" element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
    


    </Routes>
    </Router>

    </div>
  )
}

export default App
