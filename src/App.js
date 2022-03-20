import React from 'react'
import Msg from './Companens/Msg'
import './style.css'

function App() {
  return (
    <div className="clock-time">
      <Msg
        yıl={new Date().getFullYear()}
        ay={new Date().getMonth()}
        gün={new Date().getDate()}
        saat={new Date().getHours()}
        dakika={new Date().getMinutes()}
        saniye={new Date().getSeconds()}/>
      
    </div>
  )
}

export default App
