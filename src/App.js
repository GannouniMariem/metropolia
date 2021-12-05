import React from 'react'
import Hsl from './Hsl'
import Menu from './Menu'
import WeatherApp from './WeatherApp'
import logo from './logo.png'


import './App.css'


function App() {
  return (
  <div className="main">
    <div className="logo">
      <img src = {logo} alt="" />
    </div>

    <div className="container">
      <div className="row">
              
            <div className="col-6">
              <Menu />
            </div>

            <div className="col-6">
              <WeatherApp />
              <Hsl />
            </div>
      </div>
    </div>
  </div>
  )
}

export default App
