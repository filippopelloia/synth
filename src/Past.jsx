import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import { PastContext } from './PastContext'; // Importa il contesto

export default function Past() {
    const [firstFadeIn, setFirstFadeIn] = useState(false);
    const [secondFadeIn, setSecondFadeIn] = useState(false);
    // const [clicked, setClicked] = useState(null)

    const { clicked, setClicked } = useContext(PastContext);

    function getClicked(index){
        setClicked(index)
    }


  //fadeIn EFFECT
  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstFadeIn(true);
    }, 800);

    return () => clearTimeout(timer);

  }, []);
  //FINE EFFECT



  //fadeIn EFFECT
  useEffect(() => {
    const timer = setTimeout(() => {
      setSecondFadeIn(true);
    }, 1400);

    return () => clearTimeout(timer);

  }, []);
  //FINE EFFECT


  console.log(firstFadeIn)


  return (
    // <PastProvider value={{ clicked, setClicked }}>
    <div className="past-container">
        <h4 className="standard-h4" style={{textAlign: 'center', filter: 'blur(0.85px)'}}>CHOOSE YOUR PAST</h4>

        <div className="past-section">
            <div
                className={`past ${clicked === 0 ? 'selected' : ''} ${firstFadeIn ? 'fadeIn' : ''}`}
                onClick={() => getClicked(0)}
            >
                <h3 className="standard-h3">BOY OF THE ROAD</h3>
                <h4>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </h4>
            </div>
            <div
                className={`past ${clicked === 1 ? 'selected' : ''} ${secondFadeIn ? 'fadeIn' : ''}`}
                onClick={() => getClicked(1)}
            >
                <h3 className="standard-h3">SON OF THE CORPORATIONS</h3>
                <h4>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </h4>
            </div>
        </div>

        <div className='go-section'>
        {/* {clicked !== null && <button><Link to="/mid">Mid</Link></button>} */}
          {clicked !== null && <div className='showMore'><Link to="/mid">START</Link></div>}
        </div>
    </div>
    // </PastProvider>
  )
}
