import React, { Component } from 'react'
import Footer from '../header&footer/footer/footer'
import styles from '../src/App.css'


function App() {


  return (

<>
<div className= "buttons">
  <button className= "cashbook"><p>Kassenbuch</p></button>
  <button className= "shopping"><p>Shopping-List</p></button>
  <button className="calculator"><p>Taschenrechner</p></button>
  <button className="calendar"><p>Kalender</p></button>
  <button className="aboutapp"><p>Über HAWI.FY</p></button>
</div>

    <Footer />
    </>
  )
}

export default App
