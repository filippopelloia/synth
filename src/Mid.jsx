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

    function showWakeUp(){
      const risultato = dialoghi3.find(item => item.id === 153);
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
  const excludedDialogIndexes = [5, 10, 13, 20, 22, 28, 30, 37, 39, 40, 48, 50, 66, 87, 97, 105, 115, 118, 119, 123, 135, 139, 145, 148, 159, 172, 174, 181, 184, 188, 192, 194, 240, 244, 255, 307, 321, 326, 331, 335, 344, 349, 358, 360, 370];
  const isDialogIndexValid = !excludedDialogIndexes.includes(dialogIndex);


  // console.log(avvertimento);

  
  return (
    <>
      {clicked === null ? 
      <div className='cover'>
        <h5>YOU TRIED TO CHEAT. VEX HAS SEEN YOU.</h5>
        {/* <div className="setting-btn"><Reset/></div> */}
        <div className="setting-btn"><a href="https://synth-56483.web.app/">RESTART</a></div>
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
          {isDialogIndexValid && <div className="simply-btn">
            <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showText}>CONTINUE</a>
          </div>}

          {dialogIndex === 5 && <div className="simply-btn">
            <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showFive}>I DON'T REMEMBER</a>
          </div>}

          {/* CHI SEI */}
          {(dialogIndex === 10 || (dialogIndex === 30 && (second.one === false && second.two === true))) && <div className="simply-btn">
            <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showEleven}>WHO ARE YOU?</a>
          </div>}

          {/* DOVE MI TROVO? */}
          {(dialogIndex === 10 || (dialogIndex === 28 && (second.one === true && second.two === false))) && <div className="simply-btn">
            <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showTwelve}>WHERE AM I?</a>
          </div>}

          {/* RETURN TO 11 */}
          {((dialogIndex === 28 || dialogIndex === 30) && (second.one === true && second.two === true)) && <div className="simply-btn">
            <a style={{backgroundColor: 'crimson', color: 'black'}} href="#S" onClick={showReturnToEleven}>CONTINUE</a>
          </div>}



          {/*================= BLOCK 2 =================*/}

          {(dialogIndex === 13 || dialogIndex === 194) && <div className="simply-btn">
            <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showNews}>NEWS</a>
          </div>}

          {(dialogIndex === 13 || dialogIndex === 194) && <div className="simply-btn">
            <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showAdvice}>MAY I ASK YOU A QUESTION?</a>
          </div>}

          {(dialogIndex === 13 || dialogIndex === 194) && <div className="simply-btn">
            <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={endDialog}>END DIALOG</a>
          </div>}



                  {/*============= NEWS =============*/}

                  {dialogIndex === 37 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showSynthicoin}>SYNTHICOIN</a>
                  </div>}

                        {(dialogIndex === 50 || dialogIndex === 58) && <div className="simply-btn">
                          <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={returnToNews}>RETURN TO NEWS SECTION</a>
                        </div>}


                  {dialogIndex === 37 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showVote}>VOTE</a>
                  </div>}

                  {(dialogIndex === 39 && (third.one === true && third.two === false)) && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showVote}>VOTE</a>
                  </div>}

                  {(dialogIndex === 38 && (third.one === false && third.two === true)) && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showSynthicoin}>SYNTHICOIN</a>
                  </div>}

                  {(dialogIndex === 37 || dialogIndex === 40) && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={returnToBlockTwo}>RETURN</a>
                  </div>}

                  {dialogIndex === 48 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={youVoted}>VOTE FOR MAYOR SATO</a>
                  </div>}

                  {dialogIndex === 48 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={youVoted}>VOTE FOR MATSUDA TAKAHASHI</a>
                  </div>}


                  {/*============= ADVICE SECTION =============*/}

                  {(dialogIndex === 66 && fourth.one === true) && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showError}>I MADE A MISTAKE</a>
                  </div>}

                  {(dialogIndex === 66 && fourth.two === true) && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showTrapped}>I FEEL TRAPPED</a>
                  </div>}

                  {dialogIndex === 87 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showSpies}>TELL HER WHAT YOU KNOW</a>
                  </div>}

                  {dialogIndex === 87 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showNothing}>DON'T TELL</a>
                  </div>}

                  {/* AGG./MODIFICA STATE PER DIRE SE HAI AVVISATO NOVA O NO DI MONITORARE PIANO 34 */}
                  {dialogIndex === 97 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showAvvertimento}>CONTINUE</a>
                  </div>}

                  {dialogIndex === 148 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={returnToNinetyThree}>CONTINUE</a>
                  </div>}

                  {dialogIndex === 105 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showEntertainment}>OK</a>
                  </div>}

                  {dialogIndex === 105 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showNoEntertainment}>DECLINE</a>
                  </div>}

                  {dialogIndex === 110 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showGirlSyncro}>SYNCHRONIZATION</a>
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
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showNotification}>VIEW NOTIFICATION</a>
                  </div>}

                  {dialogIndex === 139 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showGun}>TAKE THE GUN</a>
                  </div>}

                  {dialogIndex === 139 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showGun}>TAKE THE RIFLE</a>
                  </div>}

                  {dialogIndex === 139 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showGun}>NIENTE</a>
                  </div>}

                  {dialogIndex === 159 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showEnd}>CONTINUE</a>
                  </div>}


                  {/*============= TRAPPED SECTION =============*/}

                  {dialogIndex === 172 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showTicket}>YES</a>
                  </div>}

                  {dialogIndex === 172 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showNoTicket}>NO</a>
                  </div>}

                  {dialogIndex === 181 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showThinkIt}>I'LL THINK ABOUT IT</a>
                  </div>}

                  {dialogIndex === 181 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showDoIt}>I'LL DO IT</a>
                  </div>}

                  {(dialogIndex === 188 || dialogIndex === 192) && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showMainMenu}>CONTINUE</a>
                  </div>}


                  {/*============= END DIALOG =============*/}

                  {dialogIndex === 240 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showRoof}>GO TO THE ROOF</a>
                  </div>}

                  {dialogIndex === 240 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showSleep}>GO TO SLEEP</a>
                  </div>}

                  {dialogIndex === 240 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick>EAT</a>
                  </div>}

                  {dialogIndex === 240 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showReturnToNova}>RETURN TO NOVA</a>
                  </div>}

                  {dialogIndex === 244 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showWakeUp}>CONTINUE</a>
                  </div>}
                  
                  {dialogIndex === 255 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick>SMOKE</a>
                  </div>}

                  {dialogIndex === 255 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick>TAKE SOMETHING TO DRINK</a>
                  </div>}

                  {dialogIndex === 255 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick>RETURN TO THE APARTMENT</a>
                  </div>}

                  {dialogIndex === 255 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showDontTake}>NOTHING</a>
                  </div>}

                  {dialogIndex === 326 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showEndFromRoof}>CONTINUE</a>
                  </div>}

                  {dialogIndex === 307 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showNotAdvice}>CONTINUE</a>
                  </div>}

                  {(dialogIndex === 321 && avvertimento) && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showGoAhead}>CONTINUE</a>
                  </div>}

                  {(dialogIndex === 321 && !avvertimento) && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showNotGoAhead}>CONTINUE</a>
                  </div>}

                  {dialogIndex === 331 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showReturnAdvice}>CONTINUE</a>
                  </div>}

                  {(dialogIndex === 135 && avvertimento) && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showThirtySix}>CONTINUE</a>
                  </div>}

                  {(dialogIndex === 135 && !avvertimento) && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showFourty}>CONTINUE</a>
                  </div>}

                  {dialogIndex === 344 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showMainMenu}>CONTINUE</a>
                  </div>}

                  {dialogIndex === 145 && <div className="simply-btn">
                    <button className='simply-btn' style={{backgroundColor: 'crimson', color: 'black'}}><Link to="/jS1F4xW9c3oDQYnPqzLbgh6EKRTU7vtwXaM2">CONTINUE</Link></button>
                  </div>}

                  {dialogIndex === 349 && <div className="simply-btn">
                    <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={endDialog}>CONTINUE</a>
                  </div>}


                  {/* ROAD or CORPORATE 1 */}

                    {/* ROAD */}
                    {(dialogIndex === 174 && (clicked === 0)) && <div className="simply-btn">
                      <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showRoad1}>CONTINUE</a>
                    </div>}

                    {/* CORPORATE */}
                    {(dialogIndex === 174 && (clicked === 0)) && <div className="simply-btn">
                      <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showCorporate1}>CONTINUE</a>
                    </div>}

                    {dialogIndex === 358 && <div className="simply-btn">
                      <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={exitCorporate1}>CONTINUE</a>
                    </div>}

                    {(dialogIndex === 184 && (clicked === 0)) && <div className="simply-btn">
                      <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showRoadName}>CONTINUE</a>
                    </div>}

                    {(dialogIndex === 184 && (clicked === 1)) && <div className="simply-btn">
                      <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showCorporateName}>CONTINUE</a>
                    </div>}

                    {dialogIndex === 360 && <div className="simply-btn">
                      <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={exitCorporateName}>CONTINUE</a>
                    </div>}

                    {(dialogIndex === 335 && (clicked === 0)) && <div className="simply-btn">
                      <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showRoad2}>CONTINUE</a>
                    </div>}

                    {(dialogIndex === 335 && (clicked === 1)) && <div className="simply-btn">
                      <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showCorporate2}>CONTINUE</a>
                    </div>}

                    {dialogIndex === 370 && <div className="simply-btn">
                      <a style={{backgroundColor: 'crimson', color: 'black'}} href="#" onClick={showMainMenu}>CONTINUE</a>
                    </div>}


                  
        </div>
      </div>
      </>
      }
    </>
  )
}
