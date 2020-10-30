import React, { useState, useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player'
//import { Link } from 'react-router-dom'
//import axios from 'axios'

const Music = () => {
  const [music, newMusic] = useState([])

  useEffect(() => {

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3614317')
      .then(resp => resp.json())
      .then((data) => {
        newMusic(data.preview)
        
      })
  }, [])
  
  console.log(music)

  return (
    <div>
      <ReactAudioPlayer src={music} autoPlay />
    </div>
  )
}

export default Music