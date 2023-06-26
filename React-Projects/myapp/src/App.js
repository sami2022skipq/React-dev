import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import './App.css'
import { Route ,Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
const App = () => {
  const house = 52
  return (
    <Router>
      <Header />
      <Routes>
        <Route  path="/" element = {< Home />}/>
        <Route  path="/about" element = {< About />}/>
        <Route  path="/contact" element = {< Contact />}/>

      </Routes>


      <Footer house={house} street="3" area="Shah Faisal Colony" province='Islamabad' />
    </Router>
  )
}

export default App