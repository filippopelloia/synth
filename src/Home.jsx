import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Start from './Start.jsx'


export default function Home() {

  const [fadeIn, setFadeIn] = useState(false);
  const [start, setStart] = useState(true)

    //fadeIn EFFECT
    useEffect(() => {
      const timer = setTimeout(() => {
        setFadeIn(true);
      }, 800);
  
      return () => clearTimeout(timer);
  
    }, []);
    //FINE EFFECT


    function startGame(){
      setStart(prevStart => prevStart = false)
    }
  



  return (
    <div className="app">
      <h3 className={`btn ${fadeIn ? 'fadeIn' : ''}`} onClick={startGame}>
        <Link to="/start">合成音</Link>
      </h3>
      <div className={`sub-btn ${fadeIn ? 'fadeIn' : ''}`}>SYNTH</div>
    </div>
  )
}
