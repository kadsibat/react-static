import React from 'react'

function Clock(props) {
  return (
    <div className="clock">
       <div className="clock-tarih">
      <span>{props.gün}</span>/<span>{props.ay+1}</span>/<span>{props.yıl}</span>
      </div>
      <div className="clock-saat">
      <span>{props.saat}</span>:<span>{props.dakika}</span>:<span>{props.saniye}</span>
      </div>
    </div>
  )
}

export default Clock
