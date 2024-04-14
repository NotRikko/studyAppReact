import {useState} from 'react'
import MainApp from './components/MainApp/MainApp'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import './App.css'



function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoginStatus = () => {
    setIsLoggedIn((prevState) => !prevState);
  }
  return (
    <div>
      {isLoggedIn ? <MainApp /> : <Login onLogin={handleLoginStatus} />} 
    </div>
  )
}
export default App
