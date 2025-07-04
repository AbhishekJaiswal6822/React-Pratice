import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/login'
import Profile from './Components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Hello!!!</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
