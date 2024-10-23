import './App.css'
import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
export default function App() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1400,
  //     once: true,
  //   });
  // }, []);

  return (
    <BrowserRouter>
    {/* <Header/> */}
      <Routes>
          <Route path="/" element={< Home />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}
