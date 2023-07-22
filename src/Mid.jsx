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

  const [girl, setGirl] = useState()

  const [fadeClass, setFadeClass] = useState('');
  const { clicked } = useContext(PastContext);


  useEffect(() => {
    const getContent = dialoghi3.find(item => item.id === dialogIndex)

    //CONTENUTO 
    setText(getContent?.content);

    //IMMAGINE DIALOGHI
    setDialogImage(getContent?.url);

    //IMMAGINE PERSONAGGI
    setDialogCharacter(getContent?.character);

  }, [dialogIndex])

  console.log(text);


    //FUNZIONE DEFAULT INDEX BUTTON
    function showText() {
        const objectNext = dialoghi3.find((element) => element.id === dialogIndex);

        setDialogIndex(objectNext.id + 1);
        setIndex(0);
        // setAnimateButton(true); // Attiva l'animazione del pulsante
    }


    //FUNZIONE PER INDEX 5
    function showFive() {
      // const risultato = dialoghi3.filter((oggetto) => oggetto.id === 5);
      // setDialog(risultato[0].content);
      // setDialogIndex(prevDialogIndex => prevDialogIndex = 6);
      // setIndex(0);
      showText(6);
    }

    // console.log(dialogIndex);

    //FUNZIONE PER INDEX *INSERISCI INDEX*
    function showEleven(){
      // const risultato = dialoghi3.filter((oggetto) => oggetto.id === 10);

      const objectTwentyFive = dialoghi3.find((oggetto) => oggetto.id === 25);
      // const objectTwentyFive = dialoghi3.find(())
      // setDialog(objectEleven.content);
      setDialogIndex(objectTwentyFive.id);
      setIndex(0);
      setSecond(prevSecond => { return {...prevSecond, one: true }});
      // showText(17);
      // setSecond(prevSecond => ({ ...prevSecond, one: true }));
    }

    function showTwelve(){
      // const risultato = dialoghi3.filter((oggetto) => oggetto.id === 10);
      const objectTwentyNine = dialoghi3.find((oggetto) => oggetto.id === 29);
      // setDialog(risultato[0].content);
      setDialogIndex(objectTwentyNine.id);
      setIndex(0);
      setSecond(prevSecond => { return {...prevSecond, two: true }});
      // showText(21);
      // setSecond(prevSecond => ({ ...prevSecond, two: true }));
    }

    function showReturnToEleven(){
      const objectEleven = dialoghi3.find((oggetto) => oggetto.id === 11);
      // setDialog(risultato[0].content);
      setDialogIndex(objectEleven.id);
      setIndex(0);
      // setSecond(prevSecond => { return {...prevSecond, two: true }});
    }



    // ============== BLOCK 2 ==============


    //APPUNTO: CONSIDERA DI CANCELLARE O MODIFICARE LA PRIMA PARTE DI IF DI ALCUNE FUNZIONI. SOSPETTO CHE NON SERVANO A NULLA.
    //SOSPETTO CHE VENGA ESEGUITO SOLO IL CODICE DELL'ELSE.


    //FUNZIONE NEWS
    function showNews() {
      // const risultato = dialoghi3.filter((oggetto) => oggetto.id === 13);
      // if (risultato.length > 0) {
      //   setDialog(risultato[0].content);
      //   setDialogIndex(23);
      //   setIndex(0);
      // } else {
      //   // console.log("ciao QUESTA E LA SECONDA VOLTA");
      //   setDialogIndex(23);
      // }
      // showText(23);

      const objectThirtyFive = dialoghi3.find((oggetto) => oggetto.id === 35);
      // const objectTwentyFive = dialoghi3.find(())
      // setDialog(objectEleven.content);
      setDialogIndex(objectThirtyFive.id);
      setIndex(0);
      // setSecond(prevSecond => { return {...prevSecond, one: true }});

    }

    //BACKUP SHOWNEWS
    // function showNews() {
    //   let risultato = dialoghi3.filter((oggetto) => oggetto.id === 13);
    //   setDialog(risultato[0].content);
    //   setDialogIndex(prevDialogIndex => prevDialogIndex = 23);
    //   setIndex(0);
    // }

    function endDialog(){
      const risultato = dialoghi3.filter((oggetto) => oggetto.id === 13);
      if (risultato.length > 0) {
        setDialog(risultato[0].content);

        const objectSixty = dialoghi3.find(item => item.id === 60)
        setDialogIndex(objectSixty);
        setIndex(0);
      } else {
        // console.log("ciao QUESTA E LA SECONDA VOLTA");
        const objectSixty = dialoghi3.find(item => item.id === 60)
        setDialogIndex(objectSixty);
      }
    }

    //RITORNO A NEWS
    function returnToNews() {

      // const excludedDialog = [39, 50];
      // const DialogIndexValid = !excludedDialog.includes(dialogIndex);

      // const risultato = dialoghi3.filter((oggetto) => oggetto.id = DialogIndexValid);
      // setDialog(risultato[0].content);
      // setDialogIndex(prevDialogIndex => prevDialogIndex = 28);
      // setIndex(0);
      const risultato = dialoghi3.find(item => item.id === 40);
      setDialogIndex(risultato.id);
    }

    //RITORNO A BLOCK2
    function returnToBlockTwo() {

      // const excludedDialog = [13, 40];
      // const DialogIndexValid = !excludedDialog.includes(dialogIndex);

      // const risultato = dialoghi3.find((oggetto) => oggetto.id === DialogIndexValid);
      const risultato = dialoghi3.find((oggetto) => oggetto.id === 13);
      setDialog(risultato.id);
      setDialogIndex(prevDialogIndex => prevDialogIndex = 13);
      setIndex(0);
    }

    //SHOW SYNTHICOIN
    // function showSynthicoin() {

    //   const excludedDialog = [37, 40];
    //   const DialogIndexValid = !excludedDialog.includes(dialogIndex);

    //   const risultato = dialoghi3.filter((oggetto) => oggetto.id === DialogIndexValid);
    //   if (risultato.length > 0) {
    //   setDialog(risultato[0].content);
    //   setDialogIndex(26);
    //   setIndex(0);

    //   //ADD FALSE --> TRUE
    //   setThird(prevThird => { return {...prevThird, one: true }});

    //   } else {
    //     setDialogIndex(26);
    //     setThird(prevThird => { return {...prevThird, one: true }});
    //   }
    // }

    function showSynthicoin() {

      // const excludedDialog = [37, 40];
      // const DialogIndexValid = !excludedDialog.includes(dialogIndex);

      // const risultato = dialoghi3.filter((oggetto) => oggetto.id === DialogIndexValid);
      // if (risultato.length > 0) {
      // setDialog(risultato[0].content);
      // setDialogIndex(26);
      // setIndex(0);

      // //ADD FALSE --> TRUE
      // setThird(prevThird => { return {...prevThird, one: true }});

      // } else {
      //   setDialogIndex(26);
      //   setThird(prevThird => { return {...prevThird, one: true }});
      // }
      const risultato = dialoghi3.find(item => item.id === 38);
      setDialogIndex(risultato.id);
      setThird(prevThird => { return {...prevThird, one: true }});
    }



    //VOTE AFTER SYNTHICOIN
    // function showVote() {
    //   const risultato = dialoghi3.filter((oggetto) => oggetto.id === 37);
    //   if (risultato.length > 0) {
    //   setDialog(risultato[0].content);
    //   setDialogIndex(29);
    //   setIndex(0);

    //   //ADD FALSE --> TRUE
    //   setThird(prevThird => { return {...prevThird, two: true }});

    //   } else {
    //     setDialogIndex(29);
    //     setThird(prevThird => { return {...prevThird, two: true }});
    //   }
    // }

    function showVote() {
      // const risultato = dialoghi3.filter((oggetto) => oggetto.id === 37);
      // if (risultato.length > 0) {
      // setDialog(risultato[0].content);
      // setDialogIndex(29);
      // setIndex(0);

      // //ADD FALSE --> TRUE
      // setThird(prevThird => { return {...prevThird, two: true }});

      // } else {
      //   setDialogIndex(29);
      //   setThird(prevThird => { return {...prevThird, two: true }});
      // }
      const risultato = dialoghi3.find(item => item.id === 41);
      setDialogIndex(risultato.id);
      setThird(prevThird => { return {...prevThird, two: true }});
    }

    //VOTE
    // function showVoteAfter() {
    //   const risultato = dialoghi3.filter((oggetto) => oggetto.id === 37);
    //   setDialog(risultato[0].content);
    //   setDialogIndex(prevDialogIndex => prevDialogIndex = 29);
    //   setIndex(0);

    //   //TWO FALSE --> TRUE
    //   setThird(prevThird => { return {...prevThird, two: true }});
    // }

    //SYNTHICOIN AFTER VOTE
    // function showSynthicoinAfter() {
    //   const risultato = dialoghi3.filter((oggetto) => oggetto.id === 40);
    //   console.log("THIS IS RISULTATO " + risultato);
    //   setDialog(risultato[0].content);
    //   setDialogIndex(prevDialogIndex => prevDialogIndex = 26);
    //   setIndex(0);

    //   //ONE FALSE --> TRUE
    //   setThird(prevThird => { return {...prevThird, one: true }});
    // }

    //YOU VOTED
    function youVoted() {
      // const risultato = dialoghi3.filter((oggetto) => oggetto.id === 48);
      // if (risultato.length > 0) {
      // setDialog(risultato[0].content);
      // setDialogIndex(37);
      // setIndex(0);

      // //ADD FALSE --> TRUE
      // } else {
      //   setDialogIndex(37);
      // }
      const risultato = dialoghi3.find((oggetto) => oggetto.id === 49);
      setDialogIndex(risultato.id);
    }


    //================= ADVICE SECTION

    function showAdvice(){
      const risultato = dialoghi3.find(item => item.id === 65)
      setDialogIndex(risultato.id);
    }

    function showError(){
      const risultato = dialoghi3.find(item => item.id === 67)
      setDialogIndex(risultato.id);
    }

    function showSpies(){
      const risultato = dialoghi3.find(item => item.id === 88)
      setDialogIndex(risultato.id);
    }

    function showEntertainment(){
      const risultato = dialoghi3.find(item => item.id === 106)
      setDialogIndex(risultato.id);
    }

    function showGirlSyncro(){
      const risultato = dialoghi3.find(item => item.id === 111)
      setDialogIndex(risultato.id);
      setGirl(true);
    }

    function noShowGirlSyncro(){
      const risultato = dialoghi3.find(item => item.id === 111)
      setDialogIndex(risultato.id);
      setGirl(false);
    }

    function showSplittedGirl(){

      let risultato;

      if(girl){
        risultato = dialoghi3.find(item => item.id === 118);
      } else {
        risultato = dialoghi3.find(item => item.id === 119);
      }
      setDialogIndex(risultato.id);
      setGirl(false);
    }

    function endGirl(){
      const risultato = dialoghi3.find(item => item.id === 120)
      setDialogIndex(risultato.id);
    }

    function showNotification(){
      const risultato = dialoghi3.find(item => item.id === 116)
      setDialogIndex(risultato.id);
    }
    
    //================= END ADVICE SECTION


    // console.log(third);
    // console.log(dialoghi3[29].content);
    // console.log(dialoghi3[26].content);
    

  
    //AZZERA L'INDICE DEL TESTO OGNI VOLTA CHE IL TESTO CAMBIA
    // useEffect(() => {
    //   setIndex(0);
    // }, [dialog]);



  //PRENDE ED IMMAGAZZINA IL TESTO
  useEffect(() => {
    // const dialogo = dialoghi3[dialogIndex].content;
    const getContent = dialoghi3.find(item => item.id === dialogIndex);
    setBackup(getContent?.content);
    setDialog(getContent?.content);

    //IMMAGINE DIALOGHI
    // const image = dialoghi3[dialogIndex]?.url;
    // setDialogImage(image);

    //IMMAGINE PERSONAGGI
    // const character = dialoghi3[dialogIndex]?.character;
    // setDialogCharacter(character);

    //QUANTITA' DEI CONTENUTI
    // const quantity = dialoghi3.length;
    // setDataIndexTotal(quantity);
  }, [dialogIndex]);


console.log("dialogIndex = " + dialogIndex);


//ANIMAZIONE
// useEffect(() => {
//   let testo = dialog;
//   let intervalId = null;

//   if (index < dialog.length) {
//     intervalId = setInterval(() => {
//       setText(testo.substring(0, index + 1));
//       setIndex((prevIndex) => prevIndex + 1);
//     }, 10); //SETTA VELOCITà
//   }

//   return () => {
//     clearInterval(intervalId);
//   };
// }, [index, dialog]);

  //FINE ANIMAZIONE

  console.log(dialogIndex);



  //HIDE CONTINUE BUTTON 
  const excludedDialogIndexes = [5, 10, 13, 20, 22, 28, 30, 37, 39, 40, 48, 50, 66, 87, 115, 118, 119, 125];
  const isDialogIndexValid = !excludedDialogIndexes.includes(dialogIndex);





  
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
        {(dialogIndex === 10 || (dialogIndex === 30 && (second.one === false && second.two === true))) && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showEleven}>CHI SEI?</a>
        </div>}

        {/* DOVE MI TROVO? */}
        {(dialogIndex === 10 || (dialogIndex === 28 && (second.one === true && second.two === false))) && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showTwelve}>DOVE MI TROVO?</a>
        </div>}

        {/* DAL 25 VADO AVANTI */}
        {/* {dialogIndex === 25 && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#S" onClick={showText}>CONTINUA a 25</a>
        </div>} */}

        {/* RETURN TO 11 */}
        {((dialogIndex === 28 || dialogIndex === 30) && (second.one === true && second.two === true)) && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#S" onClick={showReturnToEleven}>CONTINUE</a>
        </div>}



        {/*================= BLOCK 2 =================*/}

        {dialogIndex === 13 && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showNews}>NOTIZIE</a>
        </div>}

        {dialogIndex === 13 && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showAdvice}>POSSO CHIEDERTI UNA COSA?</a>
        </div>}

        {dialogIndex === 13 && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={endDialog}>FINE DIALOGO</a>
        </div>}



                {/*============= NEWS =============*/}

                {dialogIndex === 37 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showSynthicoin}>SYNTHICOIN</a>
                </div>}

                      {(dialogIndex === 50 || dialogIndex === 58) && <div className="simply-btn">
                        <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={returnToNews}>RETURN TO NEWS SECTION</a>
                      </div>}


                {dialogIndex === 37 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showVote}>VOTAZIONI</a>
                </div>}

                {(dialogIndex === 39 && (third.one === true && third.two === false)) && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showVote}>VOTAZIONI AFTER</a>
                </div>}

                {(dialogIndex === 38 && (third.one === false && third.two === true)) && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showSynthicoin}>SYNTHICOIN AFTER</a>
                </div>}

                {(dialogIndex === 37 || dialogIndex === 40) && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={returnToBlockTwo}>RETURN TO BLOCK 2</a>
                </div>}

                {dialogIndex === 48 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={youVoted}>VOTA PER SINDACO SATO</a>
                </div>}

                {dialogIndex === 48 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={youVoted}>VOTA PER MATSUDA TAKAHASHI</a>
                </div>}



                {/*============= END DIALOG =============*/}

                {dialogIndex === 59 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick>VAI NEL TETTO</a>
                </div>}

                {dialogIndex === 59 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick>DORMI</a>
                </div>}

                {dialogIndex === 59 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick>MANGIA</a>
                </div>}

                {dialogIndex ===59 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick>TORNA DA NOVA</a>
                </div>}


                {/*============= ADVICE SECTION =============*/}

                {dialogIndex === 66 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showError}>ERRORE</a>
                </div>}

                {dialogIndex === 66 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick>DORMI</a>
                </div>}

                {dialogIndex === 87 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showSpies}>RACCONTA</a>
                </div>}

                {dialogIndex === 87 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick>NON DIRE NULLA</a>
                </div>}

                {dialogIndex === 105 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showEntertainment}>VA BENE</a>
                </div>}

                {dialogIndex === 105 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick>DECLINA</a>
                </div>}

                {dialogIndex === 110 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showGirlSyncro}>SINCRONIZZAZIONE</a>
                </div>}

                {dialogIndex === 110 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={noShowGirlSyncro}>NO</a>
                </div>}

                {dialogIndex === 115 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showSplittedGirl}>CONTINUE</a>
                </div>}

                {(dialogIndex === 118 || dialogIndex === 119) && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={endGirl}>CONTINUE</a>
                </div>}

                {dialogIndex === 125 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showNotification}>VISUALIZZA NOTIFICA</a>
                </div>}

      </div>
    </div>
  )
}
