import {useState, useEffect, useContext} from 'react'
import { PastContext } from './PastContext'; // Importa il contesto
import {Link} from 'react-router-dom'
import dialoghi3 from './Data3.jsx';
import Settings from './Settings.jsx';
import Reset from './Reset.jsx'

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

  const[avvertimento, setAvvertimento] = useState(false);

  const [fadeClass, setFadeClass] = useState('');
  const { clicked } = useContext(PastContext);


  //REDIRECT TO HOME
  // if (clicked === null) {
  //   return <Redirect to="/" />;
  // }

  useEffect(() => {
    const getContent = dialoghi3.find(item => item.id === dialogIndex)

    //CONTENT
    setText(getContent?.content);

    //IMMAGINE DIALOGHI
    setDialogImage(getContent?.url);

    //IMMAGINE PERSONAGGI
    setDialogCharacter(getContent?.character);

  }, [dialogIndex])

  // console.log(text);


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


    console.log(`You have chosen: ${clicked}`);


    // ============== BLOCK 2 ==============

    //FUNZIONE NEWS
    function showNews() {
      const objectThirtyFive = dialoghi3.find((oggetto) => oggetto.id === 35);
      setDialogIndex(objectThirtyFive.id);
      setIndex(0);
    }



    //================= FINE DIALOGO

    function endDialog(){
      const risultato = dialoghi3.find(item => item.id === 240);
      setDialogIndex(risultato.id);
    }

    function showSleep(){
      const risultato = dialoghi3.find(item => item.id === 241);
      setDialogIndex(risultato.id);
    }

    function goToEat(){
      const risultato = dialoghi3.find(item => item.id === 346);
      setDialogIndex(risultato.id);
    }

    function showWakeUp(){
      const risultato = dialoghi3.find(item => item.id === 153);
      setDialogIndex(risultato.id);
    }

    function letsSmoke(){
      const risultato = dialoghi3.find(item => item.id === 378);
      setDialogIndex(risultato.id);
    }

    function letsDrink(){
      const risultato = dialoghi3.find(item => item.id === 372);
      setDialogIndex(risultato.id);
    }

    function showReturnToNova(){
      const risultato = dialoghi3.find(item => item.id === 194);
      setDialogIndex(risultato.id);
    }

    function showRoof(){
      const risultato = dialoghi3.find(item => item.id === 245);
      setDialogIndex(risultato.id);
    }

    function showDontTake(){
      const risultato = dialoghi3.find(item => item.id === 300);
      setDialogIndex(risultato.id);
    }

    function showEndFromRoof(){
      const risultato = dialoghi3.find(item => item.id === 139);
      setDialogIndex(risultato.id);
    }

    function showNotAdvice(){
      const risultato = dialoghi3.find(item => item.id === 330);
      setDialogIndex(risultato.id);
    }

    function showGoAhead(){
      const risultato = dialoghi3.find(item => item.id === 324);
      setDialogIndex(risultato.id);
    }

    function showNotGoAhead(){
      const risultato = dialoghi3.find(item => item.id === 140);
      setDialogIndex(risultato.id);
    }

    function showReturnAdvice(){
      const risultato = dialoghi3.find(item => item.id === 310);
      setDialogIndex(risultato.id);
    }

    function showThirtySix(){
      const risultato = dialoghi3.find(item => item.id === 136);
      setDialogIndex(risultato.id);
    }

    function showFourty(){
      const risultato = dialoghi3.find(item => item.id === 140);
      setDialogIndex(risultato.id);
    }

    //================= FINE FINE DIALOGO
    


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


    //================= ROAD and CORPORATE SECTION

    function showRoad1() {
      const risultato = dialoghi3.find((oggetto) => oggetto.id === 175);
      setDialogIndex(risultato.id);
    }

    function showRoad2() {
      const risultato = dialoghi3.find((oggetto) => oggetto.id === 336);
      setDialogIndex(risultato.id);
    }

    function showRoadName() {
      const risultato = dialoghi3.find((oggetto) => oggetto.id === 185);
      setDialogIndex(risultato.id);
    }

    function showCorporate1() {
      const risultato = dialoghi3.find((oggetto) => oggetto.id === 352);
      setDialogIndex(risultato.id);
    }

    function showCorporate2() {
      const risultato = dialoghi3.find((oggetto) => oggetto.id === 362);
      setDialogIndex(risultato.id);
    }

    function showCorporateName() {
      const risultato = dialoghi3.find((oggetto) => oggetto.id === 360);
      setDialogIndex(risultato.id);
    }

    function exitCorporateName() {
      const risultato = dialoghi3.find((oggetto) => oggetto.id === 186);
      setDialogIndex(risultato.id);
    }

    function exitCorporate1() {
      const risultato = dialoghi3.find((oggetto) => oggetto.id === 178);
      setDialogIndex(risultato.id);
    }

    // function exitCorporate2() {
    //   const risultato = dialoghi3.find((oggetto) => oggetto.id === 178);
    //   setDialogIndex(risultato.id);
    // }




    //================= END ROAD and CORPORATE SECTION


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
      const risultato = dialoghi3.find(item => item.id === 160)
      setDialogIndex(risultato.id);
      setFourth(prevFourth => { return {...prevFourth, two: false }});
    }

    function showTicket(){
      const risultato = dialoghi3.find(item => item.id === 173)
      setDialogIndex(risultato.id);
    }

    function showNoTicket(){
      const risultato = dialoghi3.find(item => item.id === 333)
      setDialogIndex(risultato.id);
    }

    function showDoIt(){
      const risultato = dialoghi3.find(item => item.id === 183)
      setDialogIndex(risultato.id);
    }

    function showThinkIt(){
      const risultato = dialoghi3.find(item => item.id === 190)
      setDialogIndex(risultato.id);
    }

    function showMainMenu(){
      const risultato = dialoghi3.find(item => item.id === 194)
      setDialogIndex(risultato.id);
    }

    function returnFromHappyness(){
      const risultato = dialoghi3.find(item => item.id === 255)
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

    function showAvvertimento(){
      const risultato = dialoghi3.find(item => item.id === 98)
      setDialogIndex(risultato.id);
      setAvvertimento(prevAvvertimento => !prevAvvertimento);
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

  // console.log(dialogIndex);


  //HIDE CONTINUE BUTTON 
  const excludedDialogIndexes = [5, 10, 13, 20, 22, 28, 30, 37, 39, 40, 48, 50, 66, 87, 97, 105, 115, 118, 119, 123, 135, 139, 145, 148, 159, 172, 174, 181, 184, 188, 192, 194, 240, 244, 255, 307, 321, 326, 331, 335, 344, 349, 358, 360, 370, 375, 383];
  const isDialogIndexValid = !excludedDialogIndexes.includes(dialogIndex);


  console.log(dialogIndex);

  
  return (
    <>
      {clicked === null ? 
      <div className='cover'>
        <h5>YOU TRIED TO CHEAT. VEX HAS SEEN YOU.</h5>
        {/* <div className="setting-btn"><Reset/></div> */}

        {/* <div className="setting-btn"><a href="https://synth-56483.web.app/">RESTART</a></div> */}
        <div id="restart">
          <button className="btn-standard red-standard">
            <a className='btn__content' href="https://synth-56483.web.app/">
              <h5>RESTART</h5>
            </a>
            <span className="btn__label">08735AH</span>
          </button>
        </div>

      </div> :    
      <>
      <div className='header'>
        <Settings />
      </div>

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
          {isDialogIndexValid &&                     
          <button className="btn-standard" onClick={showText}>
            <h5 className="btn__content">CONTINUE</h5>
            <span className="btn__label">XC4KJJ81</span>
          </button>}

          {dialogIndex === 5 && 
          <button className="btn-standard" onClick={showFive}>
            <h5 className='btn__content'>I DON'T REMEMBER</h5>
            <span className="btn__label">08735AH</span>
          </button>}

          {/* CHI SEI */}
          {(dialogIndex === 10 || (dialogIndex === 30 && (second.one === false && second.two === true))) && 
          <button className="btn-standard" onClick={showEleven}>
            <h5 className="btn__content">WHO ARE YOU?</h5>
            <span className="btn__label">08735AH</span>
          </button>}

          {/* DOVE MI TROVO? */}
          {(dialogIndex === 10 || (dialogIndex === 28 && (second.one === true && second.two === false))) && 
          <button className="btn-standard" onClick={showTwelve}>
            <h5 className="btn__content">WHERE AM I?</h5>
            <span className="btn__label">08735AH</span>
          </button>}

          {/* RETURN TO 11 */}
          {((dialogIndex === 28 || dialogIndex === 30) && (second.one === true && second.two === true)) && 
          <button className="btn-standard" onClick={showReturnToEleven}>
            <h5 className="btn__content">CONTINUE</h5>
            <span className="btn__label">08735AH</span>
          </button>}



          {/*================= BLOCK 2 =================*/}

          {(dialogIndex === 13 || dialogIndex === 194) && 
          <button className="btn-standard" onClick={showNews}>
            <h5 className="btn__content">NEWS</h5>
            <span className="btn__label">08735AH</span>
          </button>}

          {(dialogIndex === 13 || dialogIndex === 194) && 
          <button className="btn-standard" onClick={showAdvice}>
            <h5 className="btn__content">MAY I ASK YOU A QUESTION?</h5>
            <span className="btn__label">08735AH</span>
          </button>}

          {(dialogIndex === 13 || dialogIndex === 194) && 
          <button className="btn-standard" onClick={endDialog}>
            <h5 className="btn__content">END DIALOG</h5>
            <span className="btn__label">08735AH</span>
          </button>}



                  {/*============= NEWS =============*/}

                  {dialogIndex === 37 && 
                  <button className="btn-standard" onClick={showSynthicoin}>
                    <h5 className="btn__content">SYNTHICOIN</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                        {(dialogIndex === 50 || dialogIndex === 58) && 
                        <button className="btn-standard" onClick={returnToNews}>
                          <h5 className="btn__content">RETURN TO NEWS SECTION</h5>
                          <span className="btn__label">XC4KJJ81</span>
                        </button>}


                  {dialogIndex === 37 && 
                  <button className="btn-standard" onClick={showVote}>
                    <h5 className="btn__content">VOTE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {(dialogIndex === 39 && (third.one === true && third.two === false)) && 
                  <button className="btn-standard" onClick={showVote}>
                    <h5 className="btn__content">VOTE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {(dialogIndex === 38 && (third.one === false && third.two === true)) && 
                  <button className="btn-standard" onClick={showSynthicoin}>
                    <h5 className="btn__content">SYNTHICOIN</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {(dialogIndex === 37 || dialogIndex === 40) && 
                  <button className="btn-standard" onClick={returnToBlockTwo}>
                    <h5 className="btn__content">RETURN</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 48 && 
                  <button className="btn-standard" onClick={youVoted}>
                    <h5 className="btn__content">VOTE FOR MAYOR SATO</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 48 && 
                  <button className="btn-standard" onClick={youVoted}>
                    <h5 className="btn__content">VOTE FOR MATSUDA TAKAHASHI</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}


                  {/*============= ADVICE SECTION =============*/}

                  {(dialogIndex === 66 && fourth.one === true) && 
                  <button className="btn-standard" onClick={showError}>
                    <h5 className="btn__content">I MADE A MISTAKE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {(dialogIndex === 66 && fourth.two === true) && 
                  <button className="btn-standard" onClick={showTrapped}>
                    <h5 className="btn__content">I FEEL TRAPPED</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 87 && 
                  <button className="btn-standard" onClick={showSpies}>
                    <h5 className="btn__content">TELL HER WHAT YOU KNOW</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 87 && 
                  <button className="btn-standard" onClick={showNothing}>
                    <h5 className="btn__content">DON'T TELL</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {/* AGG./MODIFICA STATE PER DIRE SE HAI AVVISATO NOVA O NO DI MONITORARE PIANO 34 */}
                  {dialogIndex === 97 && 
                  <button className="btn-standard" onClick={showAvvertimento}>
                    <h5 className="btn__content">CONTINUE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 148 && 
                  <button className="btn-standard" onClick={returnToNinetyThree}>
                    <h5 className="btn__content">CONTINUE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 105 && 
                  <button className="btn-standard" onClick={showEntertainment}>
                    <h5 className="btn__content">OK</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 105 && 
                  <button className="btn-standard" onClick={showNoEntertainment}>
                    <h5 className="btn__content">DECLINE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 110 && 
                  <button className="btn-standard" onClick={showGirlSyncro}>
                    <h5 className="btn__content">SYNCHRONIZATION</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 110 && 
                  <button className="btn-standard" onClick={noShowGirlSyncro}>
                    <h5 className="btn__content">NO</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 115 && 
                  <button className="btn-standard" onClick={showSplittedGirl}>
                    <h5 className="btn__content">CONTINUE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {(dialogIndex === 118 || dialogIndex === 119) && 
                  <button className="btn-standard" onClick={endGirl}>
                    <h5 className="btn__content">CONTINUE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 123 && 
                  <button className="btn-standard" onClick={showNotification}>
                    <h5 className="btn__content">VIEW NOTIFICATION</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 139 && 
                  <button className="btn-standard" onClick={showGun}>
                    <h5 className="btn__content">TAKE THE GUN</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 139 && 
                  <button className="btn-standard" onClick={showGun}>
                    <h5 className="btn__content">TAKE THE RIFLE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 139 && 
                  <button className="btn-standard" onClick={showGun}>
                    <h5 className="btn__content">NIENTE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 159 && 
                  <button className="btn-standard" onClick={showEnd}>
                    <h5 className="btn__content">CONTINUE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}


                  {/*============= TRAPPED SECTION =============*/}

                  {dialogIndex === 172 && 
                  <button className="btn-standard" onClick={showTicket}>
                    <h5 className="btn__content">YES</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 172 && 
                  <button className="btn-standard" onClick={showNoTicket}>
                    <h5 className="btn__content">NO</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 181 && 
                  <button className="btn-standard" onClick={showThinkIt}>
                    <h5 className="btn__content">I'LL THINK ABOUT IT</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 181 && 
                  <button className="btn-standard" onClick={showDoIt}>
                    <h5 className="btn__content">I'LL DO IT</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {(dialogIndex === 188 || dialogIndex === 192) && 
                  <button className="btn-standard"  onClick={showMainMenu}>
                    <h5 className="btn__content">CONTINUE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}


                  {/*============= END DIALOG =============*/}

                  {dialogIndex === 240 && 
                  <button className="btn-standard" onClick={showRoof}>
                    <h5 className="btn__content">GO TO THE ROOF</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 240 && 
                  <button className="btn-standard" onClick={showSleep}>
                    <h5 className="btn__content">GO TO SLEEP</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 240 && 
                  <button className="btn-standard" onClick={goToEat}>
                    <h5 className="btn__content">EAT</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 240 && 
                  <button className="btn-standard" onClick={showReturnToNova}>
                    <h5 className="btn__content">RETURN TO VEX</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 244 && 
                  <button className="btn-standard" onClick={showWakeUp}>
                    <h5 className="btn__content">CONTINUE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}
                  
                  {dialogIndex === 255 && 
                  <button className="btn-standard" onClick={letsSmoke}>
                    <h5 className="btn__content">SMOKE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 255 && 
                  <button className="btn-standard" onClick={letsDrink}>
                    <h5 className="btn__content">TAKE SOMETHING TO DRINK</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 255 && 
                  <button className="btn-standard" onClick={showReturnToNova}>
                    <h5 className="btn__content">RETURN TO THE APARTMENT</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 255 && 
                  <button className="btn-standard" onClick={showDontTake}>
                    <h5 className="btn__content">NOTHING</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 326 && 
                  <button className="btn-standard"  onClick={showEndFromRoof}>
                    <h5 className="btn__content">CONTINUE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 307 && 
                  <button className="btn-standard" onClick={showNotAdvice}>
                    <h5 className="btn__content">CONTINUE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {(dialogIndex === 321 && avvertimento) && 
                  <button className="btn-standard" onClick={showGoAhead}>
                    <h5 className="btn__content">CONTINUE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {(dialogIndex === 321 && !avvertimento) && 
                  <button className="btn-standard" onClick={showNotGoAhead}>
                    <h5 className="btn__content">CONTINUE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 331 && 
                  <button className="btn-standard" onClick={showReturnAdvice}>
                    <h5 className="btn__content">CONTINUE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {(dialogIndex === 135 && avvertimento) && 
                  <button className="btn-standard" onClick={showThirtySix}>
                    <h5 className="btn__content">CONTINUE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {(dialogIndex === 135 && !avvertimento) && 
                  <button className="btn-standard" onClick={showFourty}>
                    <h5 className="btn__content">CONTINUE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 344 && 
                  <button className="btn-standard" onClick={showMainMenu}>
                    <h5 className="btn__content">CONTINUE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 145 && 
                  <button className="btn-standard">
                    <h5 className="btn__content"><Link to="/jS1F4xW9c3oDQYnPqzLbgh6EKRTU7vtwXaM2">CONTINUE</Link></h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}

                  {dialogIndex === 349 && 
                  <button className="btn-standard" onClick={endDialog}>
                    <h5 className="btn__content">CONTINUE</h5>
                    <span className="btn__label">XC4KJJ81</span>
                  </button>}


                  {/* ROAD or CORPORATE 1 */}

                    {/* ROAD */}
                    {(dialogIndex === 174 && (clicked === 0)) && 
                    <button className="btn-standard" onClick={showRoad1}>
                      <h5 className="btn__content">CONTINUE</h5>
                      <span className="btn__label">XC4KJJ81</span>
                    </button>}

                    {/* CORPORATE */}
                    {(dialogIndex === 174 && (clicked === 0)) && 
                    <button className="btn-standard" onClick={showCorporate1}>
                      <h5 className="btn__content">CONTINUE</h5>
                      <span className="btn__label">XC4KJJ81</span>
                    </button>}

                    {dialogIndex === 358 && 
                    <button className="btn-standard" onClick={exitCorporate1}>
                      <h5 className="btn__content">CONTINUE</h5>
                      <span className="btn__label">XC4KJJ81</span>
                    </button>}

                    {(dialogIndex === 184 && (clicked === 0)) && 
                    <button className="btn-standard" onClick={showRoadName}>
                      <h5 className="btn__content">CONTINUE</h5>
                      <span className="btn__label">XC4KJJ81</span>
                    </button>}

                    {(dialogIndex === 184 && (clicked === 1)) && 
                    <button className="btn-standard" onClick={showCorporateName}>
                      <h5 className="btn__content">CONTINUE</h5>
                      <span className="btn__label">XC4KJJ81</span>
                    </button>}

                    {dialogIndex === 360 && 
                    <button className="btn-standard" onClick={exitCorporateName}>
                      <h5 className="btn__content">CONTINUE</h5>
                      <span className="btn__label">33H8LMX0</span>
                    </button>}

                    {(dialogIndex === 335 && (clicked === 0)) && 
                    <button className="btn-standard" onClick={showRoad2}>
                      <h5 className="btn__content">CONTINUE</h5>
                      <span className="btn__label">XC4KJJ81</span>
                    </button>}

                    {(dialogIndex === 335 && (clicked === 1)) && 
                    <button className="btn-standard" onClick={showCorporate2}>
                      <h5 className="btn__content">CONTINUE</h5>
                      <span className="btn__label">FCT91MLL</span>
                    </button>}

                    {dialogIndex === 370 && 
                    <button className="btn-standard" onClick={showMainMenu}>
                      <h5 className="btn__content">CONTINUE</h5>
                      <span className="btn__label">FCT91MLL</span>
                    </button>}

                    {dialogIndex === 375 && 
                    <button className="btn-standard" onClick={returnFromHappyness}>
                      <h5 className="btn__content">CONTINUE</h5>
                      <span className="btn__label">GQEV17399</span>
                    </button>}

                    {dialogIndex === 383 && 
                    <button className="btn-standard" onClick={returnFromHappyness}>
                      <h5 className="btn__content">CONTINUE</h5>
                      <span className="btn__label">4HMS88OPX</span>
                    </button>}


                  
        </div>
      </div>
      </>
      }
    </>
  )
}
