import foto from './assets/foto.png'
import foto2 from './assets/image2.png'
import foto3 from './assets/image3.png'
import foto4 from './assets/image4.jpg'
import foto5 from './assets/image6.jpg'
import foto6 from './assets/image8.jpg'
import foto7 from './assets/image9.jpg'
import char from './assets/image7.jpg'
import char2 from './assets/image5.jpg'
import char3 from './assets/image11.jpg'


//==============================================
//  ATTENTO A INDEX E ID, DUE ELEMENTI DIVERSI
//==============================================


const dialoghi3 = [
    {id: 0, url: `${foto7}`, character: `${char3}`, content: "TU: ..."},
    {id: 1, url: `${foto2}`, character: `${char3}`, content: "TU: ... ..."},
    {id: 2, url: `${foto3}`, character: `${char3}`,content: "TU: ... ... ..."},
    {id: 3, url: `${foto4}`, character: `${char3}`, content: "TU: \"Ah... la mia testa...\""},
    {id: 4, url: `${foto5}`, character: `${char3}`, content: "NOVA: \"Hey, MARK, hai dormito bene? Negli ultimi minuti il tuo battito era piuttosto accellerato. \""},
    {id: 5, url: `${foto5}`, character: `${char3}`, content: "NOVA: \"Hai voglia di parlarmi di cosa hai visto in sogno?\""},
    {id: 6, url: `${foto5}`, character: `${char3}`, content: "TU: \"…non ricordo granché\"  "},
    {id: 7, url: `${foto5}`, character: `${char3}`, content: "NOVA: \"Se vuoi parlarmene.. Qualunque cosa per te MARK.\" "},
    {id: 8, url: `${foto5}`, character: `${char3}`, content: "NOVA: \"Sai che con l'aggiornamento ARISMA ora posso anche aiutarti ad interpretare i sogni? \" "},
    {id: 9, url: `${foto5}`, character: `${char2}`, content: "TU: \"Chissà, magari avremo modo di provare questo tuo upgrade.\" "},
    
    //GO TO 26 OR 29
    {id: 10, url: `${foto5}`, character: `${char2}`, content: "NOVA: \"Non vedo l'ora. Oggi comunque mi sento particolarmente felice."},

    
    {id: 11, url: `${foto5}`, character: `${char2}`, content: "NOVA: \"C\'è altro che posso fare?"},
    {id: 12, url: `${foto5}`, character: `${char2}`, content: "NOVA: \"Oh, stavo per dimenticare una cosa... Anche questo mese l'affitto del tuo appartamento è stato coperto...\""},

    //GO TO NEWS, CONSIGLI E END DISCUSSION.
    {id: 13, url: `${foto5}`, character: `${char2}`, content: "NOVA: \"...Però ancora nessuna info su chi abbia pagato. I SOLDI sono arrivati in modo totalmente non-tracciabile nel tuo wallet delle spese.\" "},

    {id: 14, url: `${foto5}`, character: `${char2}`, content: "???: \"SEI AL 14IIIIIIIII\" "},
    {id: 15, url: `${foto5}`, character: `${char2}`, content: "???: \"GLOCK!!\" "},
    {id: 20, url: `${foto5}`, character: `${char2}`, content: "???: \"Che ci faccio di nuovo sulla Terra? Fino ad un attimo fa ero su Solara!\" "},
    // {id: 25, url: `${foto6}`, character: `${char3}`, content: "Questo è il contenuto numero 25. Ce l'hai fatta!!!"},

    //FROM 10
    {id: 25, url: `${foto5}`, character: `${char2}`, content: "TU: \"Parlami di te, Nova. Chi sei realmente?\" "},
    {id: 26, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Sono NOVA, l'intelligenza artificiale XE-AI di punta della MiraiTech… Il mio numero di serie è IA2023-9876-XYZA...\""},
    {id: 27, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"...Offro una grande quantità di servizi. Posso ordinarti la cena, gestire le chiamate, intrattenerti e molto altro ancora.\""},
    {id: 28, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Devi solo chiedere.\""},

    //FROM 10
    {id: 29, url: `${foto6}`, character: `${char3}`, content: "TU: \"Che posto è questo?\" "},
    {id: 30, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"E\' il tuo appartamento. Si trova al 33esimo piano nel blocco 59 del distretto Suragachi.\" "},

    //NEWS
    {id: 35, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"La Kagayaku Automotive sta riscontrando una serie di reclami con alcuni suoi veicoli di settima generazione distribuiti la scorsa settimana nel territorio di Tsukimachi City.\" "},
    {id: 36, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Secondo le testimonianze i problemi sono riconducibili alle nuove batterie al Kōrin Lithium…\" "},

    //GO TO VOTATION, SYNTHICOIN OR RETURN
    {id: 37, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Inoltre il prezzo dell’acqua continua a salire, come anche di EtherByte che è arrivato a toccare la soglia dei 39.200,91 crediti di valore.\" "},

        //SYNTHICOIN
        {id: 38, url: `${foto6}`, character: `${char3}`, content: "TU: \"che mi dici di SynthCoin? Dici che dovrei investirci qualche spicciolo?\" "},
        {id: 39, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Il mio protocollo mi vieta di dare consigli finanziari, non posso aiutarti in questo, Mark. Resto a tua completa disposizione per qualsiasi altra cosa… Qualsiasi.\" "},
    
    {id: 40, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Il mio protocollo mi vieta di dare consigli finanziari, non posso aiutarti in questo, Mark. Resto a tua completa disposizione per qualsiasi altra cosa… Qualsiasi.\" "},
    
        
]


export default dialoghi3;