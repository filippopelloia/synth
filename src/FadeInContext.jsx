import React, {useState, useEffect, createContext} from 'react'

export const TimeContext = createContext();

export default function FadeInContext(props) {
  const [fadeIn, setFadeIn] = useState(false);


  //fadeIn EFFECT
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 800);

    return () => clearTimeout(timer);

  }, []);
  //FINE EFFECT
    


  return (
    <div>

      <TimeContext.Provider value={{fadeIn}}>
        {props.children}
      </TimeContext.Provider>

    </div>
  )
}
