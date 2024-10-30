import './App.css'
import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Model from './pages/Model.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Navbar.jsx'
export default function App() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1400,
  //     once: true,
  //   });
  // }, []);

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/model" element={< Model />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}
