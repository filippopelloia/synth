import {useState, useEffect, useContext} from 'react'
import { PastContext } from './PastContext'; // Importa il contesto
import dialoghi2 from './Data2.jsx';


export default function Mid() {

  const [dataIndexTotal, setDataIndexTotal] = useState(0)
  const [backup, setBackup] = useState('')
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [dialog, setDialog] = useState('');  //TESTI IMMAGAZZINATI
  const [dialogIndex, setDialogIndex] = useState(0); //INDICE DEI TESTI
  const [dialogImage, setDialogImage] = useState('');
  const [dialogCharacter, setDialogCharacter] = useState('');

  // const [fadeIn, setFadeIn] = useState(false);

  const { clicked } = useContext(PastContext);


  console.log(dialogIndex);
  console.log(dialogImage);


  //fadeIn EFFECT
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setFadeIn(true);
  //   }, 400);

  //   return () => clearTimeout(timer);

  // }, []);
  //FINE EFFECT


    //FUNZIONE DEFAULT INDEX BUTTON
    function showText() {
      setDialogIndex((prevDialogIndex) => prevDialogIndex + 1);
      setIndex(0);
    }

    //FUNZIONE PER INDEX 25
    function showTwentyFive() {
      const risultato = dialoghi2.filter((oggetto) => oggetto.id === 25);
      setDialog(risultato[0].content);
      setDialogIndex(prevDialogIndex => prevDialogIndex = 5);
      setIndex(0);
    }
    //ATTENZIONE che id e INDEX sono differenti!!!

    //FUNZIONE PER INDEX 2
    function showSecond(){
      const risultato = dialoghi2.filter((oggetto) => oggetto.id === 2);
      setDialog(risultato[0].content);
      setDialogIndex(prevDialogIndex => prevDialogIndex = 2);
      setIndex(0);
    }
    

  
    //AZZERA L'INDICE DEL TESTO OGNI VOLTA CHE IL TESTO CAMBIA
    useEffect(() => {
      setIndex(0);
    }, [dialog]);



  //PRENDE ED IMMAGAZZINA IL TESTO
  useEffect(() => {
    const dialogo = dialoghi2[dialogIndex].content;
    setBackup(dialogo);
    setDialog(dialogo);

    //IMMAGINE DIALOGHI
    const image = dialoghi2[dialogIndex]?.url;
    setDialogImage(image);

    //IMMAGINE PERSONAGGI
    const character = dialoghi2[dialogIndex]?.character;
    setDialogCharacter(character);

    //QUANTITA' DEI CONTENUTI
    const quantity = dialoghi2.length;
    setDataIndexTotal(quantity);
  }, [dialogIndex]);



//ANIMAZIONE
useEffect(() => {
  let testo = dialog;
  let intervalId = null;

  if (index < dialog.length) {
    intervalId = setInterval(() => {
      setText(testo.substring(0, index + 1));
      setIndex((prevIndex) => prevIndex + 1);
    }, 10); //SETTA VELOCITà
  }

  return () => {
    clearInterval(intervalId);
  };
}, [index, dialog]);



  //FINE ANIMAZIONE


  console.log(dialogIndex)




  return (
    <div className="mid-container">

      {/* <div style={{color: 'white'}} className={`mid ${fadeIn ? 'fadeIn' : ''}`}> */}
      <div style={{color: 'white'}} className="mid">
        <img src={dialogImage} alt="apocalyptic world" />
        <div className="rettangolo">
          {/* QUI TESTO GENERATO */}
          {/* <p className={`${fadeIn ? 'fadeIn' : ''}`}>{text}</p> */}
          {/* <div className="character-image"></div> */}
          <div className="character-image"><img src={dialogCharacter} alt="character image" /></div>
          <p>{text}</p>
        </div>
      </div>

      {/* //RUSULTATO DEL PASSATO SCELTO */}
      {/* <h3 style={{color: 'white'}}>{clicked === 0 ? 'Ciaooooo BOY' : 'Eh no eEHHH?????'}</h3> */}

      <div className="btn-container">
        <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showText}>CONTINUA</a>
        </div>


        {dialogIndex === 1 && <div className="simply-btn">
          <a style={{color: 'crimson'}} href="#" onClick={showTwentyFive}>PROVA IL SECONDO TESTO</a>
        </div>}

        {dialogIndex === 5 && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showSecond}>PROVA IL TERZO TESTO</a>
        </div>}

        {dialogIndex === 2 && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#">PROVA IL QUARTO TESTO</a>
        </div>}

      </div>
    </div>
  )
}
