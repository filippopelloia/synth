import {useState, useEffect, useContext} from 'react'
import { PastContext } from './PastContext'; // Importa il contesto
import dialoghi3 from './Data3.jsx';

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

  const [third, setThird] = useState({
    one: false,
    two: false
  })

  const [fadeClass, setFadeClass] = useState('');
  const { clicked } = useContext(PastContext);



    //FUNZIONE DEFAULT INDEX BUTTON
    function showText() {
      // if ((dialogIndex === 11 || dialogIndex === 12) && (second.one === true && second.two === true)){
      //   setDialogIndex(13);
      //   setSecond(prevSecond => { return {...prevSecond, one: false, two: false }});
      //   setAnimateButton(true); // Attiva l'animazione del pulsante
      // } else {
        setDialogIndex((prevDialogIndex) => prevDialogIndex + 1);
        setIndex(0);
        setAnimateButton(true); // Attiva l'animazione del pulsante
      // }
    }


    //FUNZIONE PER INDEX 5
    function showFive() {
      const risultato = dialoghi3.filter((oggetto) => oggetto.id === 5);
      setDialog(risultato[0].content);
      setDialogIndex(prevDialogIndex => prevDialogIndex = 6);
      setIndex(0);
    }

    //FUNZIONE PER INDEX *INSERISCI INDEX*
    function showEleven(){
      const risultato = dialoghi3.filter((oggetto) => oggetto.id === 10);
      setDialog(risultato[0].content);
      setDialogIndex(prevDialogIndex => prevDialogIndex = 17);
      setIndex(0);
      setSecond(prevSecond => { return {...prevSecond, one: true }});
    }

    function showTwelve(){
      const risultato = dialoghi3.filter((oggetto) => oggetto.id === 10);
      setDialog(risultato[0].content);
      setDialogIndex(prevDialogIndex => prevDialogIndex = 21);
      setIndex(0);
      setSecond(prevSecond => { return {...prevSecond, two: true }});
    }

    function showReturnToEleven(){
      const risultato = dialoghi3.filter((oggetto) => oggetto.id === 30);
      setDialog(risultato[0].content);
      setDialogIndex(prevDialogIndex => prevDialogIndex = 11);
      setIndex(0);
      setSecond(prevSecond => { return {...prevSecond, two: true }});
    }



    // ============== BLOCK 2 ==============


    //FUNZIONE NEWS
    function showNews() {
      const risultato = dialoghi3.filter((oggetto) => oggetto.id === 13);
      setDialog(risultato[0].content);
      setDialogIndex(prevDialogIndex => prevDialogIndex = 23);
      setIndex(0);
    }

    //RITORNO A NEWS
    function returnToNews() {

      const excludedDialog = [39, 50];
      const DialogIndexValid = !excludedDialog.includes(dialogIndex);

      const risultato = dialoghi3.filter((oggetto) => oggetto.id = DialogIndexValid);
      setDialog(risultato[0].content);
      setDialogIndex(prevDialogIndex => prevDialogIndex = 28);
      setIndex(0);
    }

    //RITORNO A BLOCK2
    function returnToBlockTwo() {
      const risultato = dialoghi3.filter((oggetto) => oggetto.id === 13);
      setDialog(risultato[0].content);
      setDialogIndex(prevDialogIndex => prevDialogIndex = 13);
      setIndex(0);
    }

    //SHOW SYNTHICOIN
    function showSynthicoin() {
      const risultato = dialoghi3.filter((oggetto) => oggetto.id === 37);
      setDialog(risultato[0].content);
      setDialogIndex(prevDialogIndex => prevDialogIndex = 26);
      setIndex(0);

      //ADD FALSE --> TRUE
    }

    //VOTE AFTER SYNTHICOIN
    function showVoteAfter() {

      const excludedDialog = [37, 40];
      const DialogIndexValid = !excludedDialog.includes(dialogIndex);

      const risultato = dialoghi3.filter((oggetto) => oggetto.id === DialogIndexValid);
      setDialog(risultato[0].content);
      setDialogIndex(prevDialogIndex => prevDialogIndex = 29);
      setIndex(0);

      //ADD FALSE --> TRUE
    }

    //VOTE
    function showVote() {
      const risultato = dialoghi3.filter((oggetto) => oggetto.id === 37);
      setDialog(risultato[0].content);
      setDialogIndex(prevDialogIndex => prevDialogIndex = 29);
      setIndex(0);

      //ADD FALSE --> TRUE
    }

    //SYNTHICOIN AFTER VOTE
    function showSynthicoinAfter() {
      const risultato = dialoghi3.filter((oggetto) => oggetto.id === 47);
      setDialog(risultato[0].content);
      setDialogIndex(prevDialogIndex => prevDialogIndex = 26);
      setIndex(0);

      //ADD FALSE --> TRUE
    }

    //YOU VOTED
    function youVoted() {
      const risultato = dialoghi3.filter((oggetto) => oggetto.id === 48);
      setDialog(risultato[0].content);
      setDialogIndex(prevDialogIndex => prevDialogIndex = 37);
      setIndex(0);

      //ADD FALSE --> TRUE
    }
    








    console.log(third);
    console.log(dialoghi3[29].content);
    

  
    //AZZERA L'INDICE DEL TESTO OGNI VOLTA CHE IL TESTO CAMBIA
    useEffect(() => {
      setIndex(0);
    }, [dialog]);


    // console.log(second);


  //PRENDE ED IMMAGAZZINA IL TESTO
  useEffect(() => {
    const dialogo = dialoghi3[dialogIndex].content;
    setBackup(dialogo);
    setDialog(dialogo);

    //IMMAGINE DIALOGHI
    const image = dialoghi3[dialogIndex]?.url;
    setDialogImage(image);

    //IMMAGINE PERSONAGGI
    const character = dialoghi3[dialogIndex]?.character;
    setDialogCharacter(character);

    //QUANTITA' DEI CONTENUTI
    const quantity = dialoghi3.length;
    setDataIndexTotal(quantity);
  }, [dialogIndex]);


console.log("dialogIndex = " + dialogIndex);


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



  //HIDE CONTINUE BUTTON 
  const excludedDialogIndexes = [5, 10, 13, 20, 22, 25, 27, 28, 36, 38];
  const isDialogIndexValid = !excludedDialogIndexes.includes(dialogIndex);
  // const isContinuaVisible = isDialogIndexValid || (second.one === true && second.two === true);


  return (
    <div className="mid-container">
      <div style={{color: 'white'}} className="mid">
        <img src={dialogImage} alt="apocalyptic world" />
        <div className="rettangolo">
          <div className="character-image"><img src={dialogCharacter} alt="character image" /></div>
          <div className="text-container">
            <p>{text}</p>
          </div>
        </div>
      </div>


      <div className="btn-container">
        {isDialogIndexValid && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showText}>CONTINUE</a>
        </div>}

        {dialogIndex === 5 && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showFive}>NON RICORDO</a>
        </div>}

        {/* CHI SEI */}
        {(dialogIndex === 10 || (dialogIndex === 22 && (second.one === false && second.two === true))) && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showEleven}>CHI SEI?</a>
        </div>}

        {/* DOVE MI TROVO? */}
        {(dialogIndex === 10 || (dialogIndex === 20 && (second.one === true && second.two === false))) && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showTwelve}>DOVE MI TROVO?</a>
        </div>}

        {/* DAL 25 VADO AVANTI */}
        {/* {dialogIndex === 25 && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#S" onClick={showText}>CONTINUA a 25</a>
        </div>} */}

        {/* RETURN TO 11 */}
        {((dialogIndex === 20 || dialogIndex === 22) && (second.one === true && second.two === true)) && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#S" onClick={showReturnToEleven}>CONTINUE</a>
        </div>}



        {/*================= BLOCK 2 =================*/}

        {dialogIndex === 13 && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showNews}>NOTIZIE</a>
        </div>}

        {dialogIndex === 13 && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick>POSSO CHIEDERTI UNA COSA?</a>
        </div>}

        {dialogIndex === 13 && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick>FINE DIALOGO</a>
        </div>}



                {/*============= NEWS =============*/}

                {dialogIndex === 25 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showSynthicoin}>SYNTHICOIN</a>
                </div>}

                      {(dialogIndex === 27 || dialogIndex === 38) && <div className="simply-btn">
                        <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={returnToNews}>RETURN TO NEWS SECTION</a>
                      </div>}


                {(dialogIndex === 25 || dialogIndex === 28) && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showVoteAfter}>VOTAZIONI</a>
                </div>}

                {(dialogIndex === 25 || dialogIndex === 28) && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={returnToBlockTwo}>RETURN TO BLOCK 2</a>
                </div>}

                {dialogIndex === 36 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={youVoted}>VOTA PER SINDACO SATO</a>
                </div>}

                {dialogIndex === 36 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={youVoted}>VOTA PER MATSUDA TAKAHASHI</a>
                </div>}

                {/* {dialogIndex === 35 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={returnToNews}>CONTINUE</a>
                </div>} */}


                {/*===== LIMBO BLOCK 2 =====*/}

                {/* {dialogIndex === 28 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={returnToBlockTwo}>VOTAZIONI</a>
                </div>} */}







      </div>
    </div>
  )
}
