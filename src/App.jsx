import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue';
import Red from './components/Red';




function App() {
 
  return (
    <>

      <div id="container">
        <h1></h1>
        <div id="navbar">
          <Link to= '/blue'>Blue</Link>
          <Link to= '/red'>Red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path='/blue' element={<Blue/>} />
            <Route path='/red' element= {<Red/>} />
          </Routes>
        </div>

      </div>
    </>
  )
}

export default App
