
import { Outlet } from 'react-router-dom'
import './App.css'
import Navigationbar from './Component/NavBar/Navigationbar'
import Footer from './Component/Footer/Footer'

function App() {

  return (
    <>
      <Navigationbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
