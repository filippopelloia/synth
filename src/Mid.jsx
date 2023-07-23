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

  const [fourth, setFourth] = useState({
    one: true,
    two: true
  })

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
    }


    //FUNZIONE PER INDEX 5
    function showFive() {
      showText(6);
    }


    //FUNZIONE PER INDEX *INSERISCI INDEX*
    function showEleven(){
      const objectTwentyFive = dialoghi3.find((oggetto) => oggetto.id === 25);
      setDialogIndex(objectTwentyFive.id);
      setIndex(0);
      setSecond(prevSecond => { return {...prevSecond, one: true }});
    }

    function showTwelve(){
      const objectTwentyNine = dialoghi3.find((oggetto) => oggetto.id === 29);
      setDialogIndex(objectTwentyNine.id);
      setIndex(0);
      setSecond(prevSecond => { return {...prevSecond, two: true }});
    }

    function showReturnToEleven(){
      const objectEleven = dialoghi3.find((oggetto) => oggetto.id === 11);
      setDialogIndex(objectEleven.id);
      setIndex(0);
    }



    // ============== BLOCK 2 ==============

    //FUNZIONE NEWS
    function showNews() {
      const objectThirtyFive = dialoghi3.find((oggetto) => oggetto.id === 35);
      setDialogIndex(objectThirtyFive.id);
      setIndex(0);
    }

    function endDialog(){
      const risultato = dialoghi3.filter((oggetto) => oggetto.id === 13);
      if (risultato.length > 0) {
        setDialog(risultato[0].content);

        const objectSixty = dialoghi3.find(item => item.id === 60)
        setDialogIndex(objectSixty);
        setIndex(0);
      } else {
        const objectSixty = dialoghi3.find(item => item.id === 60)
        setDialogIndex(objectSixty);
      }
    }

    //RITORNO A NEWS
    function returnToNews() {
      const risultato = dialoghi3.find(item => item.id === 40);
      setDialogIndex(risultato.id);
    }

    //RITORNO A BLOCK2
    function returnToBlockTwo() {
      const risultato = dialoghi3.find((oggetto) => oggetto.id === 13);
      setDialog(risultato.id);
      setDialogIndex(prevDialogIndex => prevDialogIndex = 13);
      setIndex(0);
    }

    function showSynthicoin() {
      const risultato = dialoghi3.find(item => item.id === 38);
      setDialogIndex(risultato.id);
      setThird(prevThird => { return {...prevThird, one: true }});
    }

    function showVote() {
      const risultato = dialoghi3.find(item => item.id === 41);
      setDialogIndex(risultato.id);
      setThird(prevThird => { return {...prevThird, two: true }});
    }

    //YOU VOTED
    function youVoted() {
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
      setFourth(prevFourth => { return {...prevFourth, one: false }});
    }

    function showSpies(){
      const risultato = dialoghi3.find(item => item.id === 88)
      setDialogIndex(risultato.id);
    }

    function showEntertainment(){
      const risultato = dialoghi3.find(item => item.id === 106)
      setDialogIndex(risultato.id);
    }

    function showNoEntertainment(){
      const risultato = dialoghi3.find(item => item.id === 150)
      setDialogIndex(risultato.id);
    }

    //================= GIRL

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

    //END GIRL



    //TRAPPOLA

    function showTrapped(){
      const risultato = dialoghi3.find(item => item.id === 120)
      setDialogIndex(risultato.id);
      setFourth(prevFourth => { return {...prevFourth, two: false }});
    }

    function showTicket(){
      const risultato = dialoghi3.find(item => item.id === 173)
      setDialogIndex(risultato.id);
    }

    function showDoIt(){
      const risultato = dialoghi3.find(item => item.id === 183)
      setDialogIndex(risultato.id);
    }

    function showMainMenu(){
      const risultato = dialoghi3.find(item => item.id === 194)
      setDialogIndex(risultato.id);
    }

    //END TRAPPOLA



    function showNotification(){
      const risultato = dialoghi3.find(item => item.id === 124)
      setDialogIndex(risultato.id);
    }

    function showGun(){
      const risultato = dialoghi3.find(item => item.id === 140)
      setDialogIndex(risultato.id);
    }
    
    function showNothing(){
      const risultato = dialoghi3.find(item => item.id === 147)
      setDialogIndex(risultato.id);
    }

    function returnToNinetyThree(){
      const risultato = dialoghi3.find(item => item.id === 93)
      setDialogIndex(risultato.id);
    }

    function showEnd(){
      const risultato = dialoghi3.find(item => item.id === 128)
      setDialogIndex(risultato.id);
    }
    
    //================= END ADVICE SECTION



  //PRENDE ED IMMAGAZZINA IL TESTO
  useEffect(() => {
    const getContent = dialoghi3.find(item => item.id === dialogIndex);
    setBackup(getContent?.content);
    setDialog(getContent?.content);
  }, [dialogIndex]);

  console.log(dialogIndex);


  //HIDE CONTINUE BUTTON 
  const excludedDialogIndexes = [5, 10, 13, 20, 22, 28, 30, 37, 39, 40, 48, 50, 66, 87, 105, 115, 118, 119, 123, 139, 145, 148, 159, 172, 181, 188, 192, 194];
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

        {/* RETURN TO 11 */}
        {((dialogIndex === 28 || dialogIndex === 30) && (second.one === true && second.two === true)) && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#S" onClick={showReturnToEleven}>CONTINUE</a>
        </div>}



        {/*================= BLOCK 2 =================*/}

        {(dialogIndex === 13 || dialogIndex === 194) && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showNews}>NOTIZIE</a>
        </div>}

        {(dialogIndex === 13 || dialogIndex === 194) && <div className="simply-btn">
          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showAdvice}>POSSO CHIEDERTI UNA COSA?</a>
        </div>}

        {(dialogIndex === 13 || dialogIndex === 194) && <div className="simply-btn">
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

                {(dialogIndex === 66 && fourth.one === true) && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showError}>HO FATTO UN ERRORE</a>
                </div>}

                {(dialogIndex === 66 && fourth.two === true) && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showTrapped}>MI SENTO IN TRAPPOLA</a>
                </div>}

                {dialogIndex === 87 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showSpies}>RACCONTA CIO' CHE SAI</a>
                </div>}

                {dialogIndex === 87 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showNothing}>NON DIRE NULLA</a>
                </div>}

                {dialogIndex === 148 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={returnToNinetyThree}>CONTINUE</a>
                </div>}

                {dialogIndex === 105 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showEntertainment}>VA BENE</a>
                </div>}

                {dialogIndex === 105 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showNoEntertainment}>DECLINA</a>
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

                {dialogIndex === 123 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showNotification}>VISUALIZZA NOTIFICA</a>
                </div>}

                {dialogIndex === 139 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showGun}>PRENDI PISTOLA</a>
                </div>}

                {dialogIndex === 139 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showGun}>PRENDI FUCILE</a>
                </div>}

                {dialogIndex === 139 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showGun}>NIENTE</a>
                </div>}

                {dialogIndex === 159 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showEnd}>CONTINUE</a>
                </div>}


                {/*============= TRAPPED SECTION =============*/}

                {dialogIndex === 172 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showTicket}>SI</a>
                </div>}

                {dialogIndex === 172 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick>NO</a>
                </div>}

                {dialogIndex === 181 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick>CI PENSERO'</a>
                </div>}

                {dialogIndex === 181 && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showDoIt}>LO FARO'</a>
                </div>}

                {(dialogIndex === 188 || dialogIndex === 192) && <div className="simply-btn">
                  <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showMainMenu}>CONTINUA</a>
                </div>}
                
      </div>
    </div>
  )
}
