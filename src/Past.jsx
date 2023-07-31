import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import { PastContext } from './PastContext'; 


export default function Past() {
    const [firstFadeIn, setFirstFadeIn] = useState(false);
    const [secondFadeIn, setSecondFadeIn] = useState(false);

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
  //END EFFECT


  //fadeIn EFFECT
  useEffect(() => {
    const timer = setTimeout(() => {
      setSecondFadeIn(true);
    }, 1400);

    return () => clearTimeout(timer);

  }, []);
  //END EFFECT


  return (
    <div className="past-container">
        <h4 className="standard-h4" style={{textAlign: 'center', filter: 'blur(0.85px)'}}>CHOOSE YOUR PAST</h4>

        <div className="past-section">
            <div
                className={`past ${clicked === 0 ? 'selected' : ''} ${firstFadeIn ? 'fadeIn' : ''}`}
                onClick={() => getClicked(0)}
            >
                <h3 className="standard-h3">BOY OF THE ROAD</h3>
                <h4>You grew up among the fiercest gangs of Tsukimachi City. As a teenager, you sought refuge in one of them, gaining experience with firearms, heists, and cyberHacking. <br/><br/>One day, weary of the violence and darkness around your existance, you decided to turn the page and forge a new life. <br/><br/>The friendships you formed during those years helped you do so, allowing you to live like an ordinary person. However... </h4>
            </div>
            <div
                className={`past ${clicked === 1 ? 'selected' : ''} ${secondFadeIn ? 'fadeIn' : ''}`}
                onClick={() => getClicked(1)}
            >
                <h3 className="standard-h3">SON OF THE CORPORATIONS</h3>
                <h4>You were raised among the most powerful families of Tsukimachi City, and you have never known the words 'hunger' or 'poverty.' Like almost everyone in this city, you have gained some experience in defending yourself with common weapons.<br/><br/> However, one day, you decided to turn the page and not follow the corporate life like the people around you. <br/><br/>The friendships you had formed helped you break away from the circle and lead a normal life, until...</h4>
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
