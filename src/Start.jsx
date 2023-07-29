import React, { useState, useEffect } from 'react';
import dialogs from './Data.jsx';
import {Link} from 'react-router-dom'


const SkyrimText = () => {
  const [dataIndexTotal, setDataIndexTotal] = useState(0)
  const [backup, setBackup] = useState('')
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [dialog, setDialog] = useState('');  
  const [dialogIndex, setDialogIndex] = useState(0); //TEXT INDEXES

  //FUNCTION BUTTON
  function showText() {
    setDialogIndex((prevDialogIndex) => prevDialogIndex + 1);
    setIndex(0);
  }

  //SET INDEX TO 0 EVERYTIME THE TEXT CHANGES
  useEffect(() => {
    setIndex(0);
  }, [dialog]);



  //GET AND SAVE TEXT
  useEffect(() => {
    const dialogo = dialogs[dialogIndex].content;
    setBackup(dialogo);
    setDialog(dialogo);

    //CONTENT QUANTITY
    const quantity = dialogs.length;
    setDataIndexTotal(quantity);
  }, [dialogIndex]);



//ANIMATION
useEffect(() => {
  let text = dialog;

  const intervalId = setInterval(() => {
    setText(text.substring(0, index + 1));
    setIndex((prevIndex) => prevIndex + 1);
  }, 10);

  if (index === dialog.length) {
    clearInterval(intervalId);
  }

  return () => clearInterval(intervalId);
}, [index, dialog]);

  //END ANIMATION




  //STOP REFRESH

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ''; //REQUIRED BY CHROME
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  //END



  return (
    <div className="testo-generato">
      <p className="test">{text}</p>

      <div className='btn-section'>
        {backup === text && (
          <>
            {dataIndexTotal === dialogIndex + 1 && (
              <div className="showMore"><Link to="/past">CHOOSE YOUR PAST</Link></div>
            )}

            {/* LIMITE DI COMPARSA DEL BUTTON CONTINUE */}
            {dialogIndex < 7 && <div className="showMore showMore-start" onClick={showText}><h5>CONTINUE</h5></div>}
          </>
        )}
      </div>

    </div>
  );
};

export default SkyrimText;
