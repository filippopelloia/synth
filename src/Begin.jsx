import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
// import Start from './Start.jsx'
import Settings from './Settings.jsx'


export default function Begin() {

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
    <>
      <div className='header'>
        <Settings />
        <h5 className='unSelect'>バージョン 0.1.9</h5>
      </div>
      
      <div className="app">
        <h3 className={`btn ${fadeIn ? 'fadeIn' : ''}`} onClick={startGame}>
          <Link to="/qWu8rF5yT3VpM7sGzXk2eYcE9iN0lA1oH6jB">合成音</Link>
        </h3>
        <div className={`sub-btn ${fadeIn ? 'fadeIn' : ''}`}>SYNTH</div>
      </div>
    </>
  )
}
