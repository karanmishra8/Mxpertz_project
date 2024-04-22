
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Api from './components/Api'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Next from './components/Next'

function App() {
  return (
    <>
    <div className=''>
    <Navbar/>
      <Hero/>
      
    </div>
    <div className='bg-dark'> <Api/></div>
   <Next/>
    </>
  )
}

export default App
