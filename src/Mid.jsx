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

  const [second, setSecond] = useState({
    one: false,
    two: false
  })

  // const [fadeIn, setFadeIn] = useState(false);

  const { clicked } = useContext(PastContext);


  // console.log(dialogIndex);
  // console.log(dialogImage);




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

    //FUNZIONE PER INDEX *INSERISCI INDEX*
    function showEleven(){
      const risultato = dialoghi2.filter((oggetto) => oggetto.id === 11);
      setDialog(risultato[0].content);
      setDialogIndex(prevDialogIndex => prevDialogIndex = 11);
      setIndex(0);
      setSecond(prevSecond => { return {...prevSecond, one: true }});
    }

    function showTwelve(){
      const risultato = dialoghi2.filter((oggetto) => oggetto.id === 12);
      setDialog(risultato[0].content);
      setDialogIndex(prevDialogIndex => prevDialogIndex = 12);
      setIndex(0);
      setSecond(prevSecond => { return {...prevSecond, two: true }});
    }

    useEffect(() => {
      if((setDialogIndex === 11 || setDialogIndex === 12) && second.one === true && second.two === true){
        setDialogIndex(13);
        setSecond(prevSecond => { return {...prevSecond, one: false, two: false }});
      }
      console.log("CE L'HAI FATTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    }, [second])


    console.log(second);
    

  
    //AZZERA L'INDICE DEL TESTO OGNI VOLTA CHE IL TESTO CAMBIA
    useEffect(() => {
      setIndex(0);
    }, [dialog]);


    // console.log(second);


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
        {(dialogIndex !== 10 && dialogIndex !== 11 && dialogIndex !== 12) && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showText}>CONTINUA</a>
        </div>}


        {dialogIndex === 1 && <div className="simply-btn">
          <a style={{color: 'crimson'}} href="#" onClick={showTwentyFive}>PROVA IL SECONDO TESTO</a>
        </div>}

        {dialogIndex === 5 && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showSecond}>PROVA IL TERZO TESTO</a>
        </div>}

        {dialogIndex === 2 && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#">PROVA IL QUARTO TESTO</a>
        </div>}

        {(dialogIndex === 10 || dialogIndex === 12) && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showEleven}>COME TI CHIAMI?</a>
        </div>}

        {(dialogIndex === 10 || dialogIndex === 11) && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showTwelve}>DOVE ABITI?</a>
        </div>}

      </div>
    </div>
  )
}
