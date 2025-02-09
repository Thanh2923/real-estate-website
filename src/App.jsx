
import { Outlet,useLocation } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header'
import FooterTwo from './layouts/Footer'
import Home from './pages/Home'
function App() {
  const location = useLocation();
  return (
   <>
   <Header/>
    <main className='w-full mt-[60px]'>
    <Outlet/>
    {location.pathname === '/' && <Home />}
    </main>
   <FooterTwo/>
   </>
  )
}

export default App
