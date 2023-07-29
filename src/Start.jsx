import React, { useState, useEffect } from 'react';
import dialoghi from './Data.jsx';
import {Link} from 'react-router-dom'


const SkyrimText = () => {
  const [dataIndexTotal, setDataIndexTotal] = useState(0)
  const [backup, setBackup] = useState('')
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [dialog, setDialog] = useState('');  //TESTI IMMAGAZZINATI
  const [dialogIndex, setDialogIndex] = useState(0); //INDICE DEI TESTI


  console.log(dialogIndex)

  //FUNZIONE BUTTON
  function showText() {
    setDialogIndex((prevDialogIndex) => prevDialogIndex + 1);
    setIndex(0);
  }


  //AZZERA L'INDICE DEL TESTO OGNI VOLTA CHE IL TESTO CAMBIA
  useEffect(() => {
    setIndex(0);
  }, [dialog]);



  //PRENDE ED IMMAGAZZINA IL TESTO
  useEffect(() => {
    const dialogo = dialoghi[dialogIndex].content;
    setBackup(dialogo);
    setDialog(dialogo);

    //QUANTITA' DEI CONTENUTI
    const quantity = dialoghi.length;
    setDataIndexTotal(quantity);
  }, [dialogIndex]);



//ANIMAZIONE
useEffect(() => {
  let testo = dialog;

  const intervalId = setInterval(() => {
    setText(testo.substring(0, index + 1));
    setIndex((prevIndex) => prevIndex + 1);
  }, 10);

  if (index === dialog.length) {
    clearInterval(intervalId);
  }

  return () => clearInterval(intervalId);
}, [index, dialog]);

  //FINE ANIMAZIONE




  //IMPEDISCE CARICAMENTO

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ''; // Richiesto per Chrome
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  //FINE IMPEDIMENTO




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
