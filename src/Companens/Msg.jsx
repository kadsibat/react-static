import React from 'react'
import Clock from './Clock'

function Msg(props) {
  return (
    <div>
        <Clock yıl={props.yıl} ay={props.ay} gün={props.gün} saat={props.saat} dakika={props.dakika} saniye={props.saniye}/>
    </div>
  )
}

export default Msg