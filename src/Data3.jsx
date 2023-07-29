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


//==================================
//  PAY ATTENTION TO INDEX AND ID
//==================================


const dialoghi3 = [
    {id: 0, url: `${foto7}`, character: `${char3}`, content: "TU: ..."},
    {id: 1, url: `${foto2}`, character: `${char3}`, content: "TU: ... ..."},
    {id: 2, url: `${foto3}`, character: `${char3}`,content: "TU: ... ... ..."},
    {id: 3, url: `${foto4}`, character: `${char3}`, content: "TU: \"Ah... la mia testa...\""},
    {id: 4, url: `${foto5}`, character: `${char3}`, content: "NOVA: \"Hey, MARK, hai dormito bene? Negli ultimi minuti il tuo battito era piuttosto accellerato. \""},
    {id: 5, url: `${foto5}`, character: `${char3}`, content: "NOVA: \"Hai voglia di parlarmi di cosa hai visto in sogno?\""},
    {id: 6, url: `${foto5}`, character: `${char3}`, content: "TU: \"…non ricordo granché\"  "},
    {id: 7, url: `${foto5}`, character: `${char3}`, content: "NOVA: \"Se vuoi parlarmene.. Qualunque cosa per te MARK.\" "},
    {id: 8, url: `${foto5}`, character: `${char3}`, content: "NOVA: \"Sai che con l'aggiornamento ARISMA 7.36.1 ora posso anche aiutarti ad interpretare i sogni? \" "},
    {id: 9, url: `${foto5}`, character: `${char2}`, content: "TU: \"Chissà, magari avrò modo di provare questo tuo upgrade un giorno.\" "},
    {id: 10, url: `${foto5}`, character: `${char2}`, content: "NOVA: \"Pure io. Oggi comunque mi sento particolarmente felice."},
    {id: 11, url: `${foto5}`, character: `${char2}`, content: "NOVA: \"C\'è altro che posso fare?"},
    {id: 12, url: `${foto5}`, character: `${char2}`, content: "NOVA: \"Oh, stavo per dimenticare una cosa... Anche questo mese l'affitto del tuo appartamento è stato coperto...\""},
    {id: 13, url: `${foto5}`, character: `${char2}`, content: "NOVA: \"...Però ancora nessuna info su chi abbia pagato. I SOLDI sono arrivati in modo totalmente non-tracciabile nel tuo wallet delle spese.\" "},
    // {id: 14, url: `${foto5}`, character: `${char2}`, content: "???: \"SEI AL 14IIIIIIIII\" "},
    // {id: 15, url: `${foto5}`, character: `${char2}`, content: "???: \"GLOCK!!\" "},
    // {id: 20, url: `${foto5}`, character: `${char2}`, content: "???: \"Che ci faccio di nuovo sulla Terra? Fino ad un attimo fa ero su Solara!\" "},
    {id: 25, url: `${foto5}`, character: `${char2}`, content: "TU: \"Parlami di te, Nova. Chi sei realmente?\" "},
    {id: 26, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Sono NOVA, l'intelligenza artificiale XE-AI di punta della MiraiTech… Il mio numero di serie è IA2023-9876-XYZA...\""},
    {id: 27, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"...Offro una grande quantità di servizi. Posso ordinarti la cena, gestire le chiamate, intrattenerti e molto altro ancora.\""},
    {id: 28, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Devi solo chiedere.\""},
    {id: 29, url: `${foto6}`, character: `${char3}`, content: "TU: \"Che posto è questo?\" "},
    {id: 30, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"E\' il tuo appartamento. Si trova al 36esimo piano nel blocco 59 del distretto Suragachi.\" "},

    //NEWS
    {id: 35, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"La Kagayaku Automotive sta riscontrando una serie di reclami per alcuni veicoli di 7th gen distribuiti la scorsa settimana nel territorio di Tsukimachi City. I problemi sembrano riconducibili alle nuove batterie al Kōrin Lithium...\" "},
    {id: 36, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Oggi e domani saranno in corso le elezioni. L\’attuale governatore Haruki Sato tenta il terzo mandato mentre dall\’altra parte troviamo il magnate Matsuda Takahashi, in corsa per la sua prima carica. Per votare ti basta prendere il tuo axi-pad.\" "},

    //GO TO VOTATION, SYNTHICOIN OR RETURN - INDEX 25
    {id: 37, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Inoltre il prezzo dell\’acqua terrestre continua a salire, come anche di EtherByte che è arrivato a toccare la soglia dei 39.200,91 crediti JLL.\" "},

        //SYNTHICOIN
        {id: 38, url: `${foto6}`, character: `${char3}`, content: "TU: \"che mi dici di SynthCoin? Dici che dovrei investirci qualche spicciolo?\" "},
        {id: 39, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Il mio protocollo mi vieta di dare consigli finanziari, non posso aiutarti in questo, Mark. Resto a tua completa disposizione per qualsiasi altra cosa… Qualsiasi.\" "},
    
    //LIMBO 1 - INDEX 28
    {id: 40, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Quindi? Come posso aiutarti?\" "},
    
    {id: 41, url: `${foto6}`, character: `${char3}`, content: "TU: \"Voglio votare... anche se la politica non mi è mai importata più di tanto. In tutti questi anni non è stato fatto granché per migliorare Tsukimachi City.\" "},
    {id: 42, url: `${foto6}`, character: `${char3}`, content: "TU: \"D\'altronde se anch'io fossi sindaco non penserei ad estinguere le guerre tra gang o a limitare lo strapotere delle corporazioni. \" "},
    {id: 43, url: `${foto6}`, character: `${char3}`, content: "TU: \"Piuttosto cercherei di assicurarmi un lotto di terreno in qualche colonia extra-mondo... \" "},
    {id: 44, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Hai già in mente qualche posto? Dicono che Solara e Nerezar siano magnifiche per ricominciare.\" "},
    {id: 45, url: `${foto6}`, character: `${char3}`, content: "TU: \"Non mi parlare di Nerezar, per favore Nova... Evitiamo l\'argomento.\" "},
    {id: 46, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Oh, perdonami Mark, non era mia intenzione...\" "},
    {id: 47, url: `${foto6}`, character: `${char3}`, content: "TU: \"...\" "},

    //VOTE NOW - INDEX 36
    {id: 48, url: `${foto6}`, character: `${char3}`, content: "AXI Pad in Avvio..."},
    {id: 49, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Perfetto, voto inviato. Congratulazioni Mark!\" "},
    {id: 50, url: `${foto6}`, character: `${char3}`, content: "TU: \"E\' solo un voto Nova, non cambierà questa città marcia.\" "},

    //END DIALOG - INDEX 39
    // {id: 60, url: `${foto6}`, character: `${char3}`, content: "Cosa vuoi fare?"},


    //ADVICE SECTION
    {id: 65, url: `${foto6}`, character: `${char3}`, content: "TU: \"Ho bisogno di un consiglio Nova...\""},
    {id: 66, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Dimmi pure.\""},

    {id: 67, url: `${foto6}`, character: `${char3}`, content: "TU: \"Ho commesso un grave errore...\""},
    {id: 68, url: `${foto6}`, character: `${char3}`, content: "TU: \"...Non avrei dovuto fare quello che ho fatto.\""},
    {id: 69, url: `${foto6}`, character: `${char3}`, content: "TU: \"Ci penso continuamente...\""},
    {id: 70, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Ti riferisci alla fuga di notizie e alle conseguenze che ha portato?\""},
    {id: 71, url: `${foto6}`, character: `${char3}`, content: "TU: \"...\""},
    {id: 72, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Non devi pensarci Mark, hai fatto la cosa giusta, chiunque l’avrebbe fatto al posto tuo…\""},
    {id: 73, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"…e se la MiraiTech è disposta ad utilizzare ogni mezzo pur di nascondere le scomode verità, non vedo come possa esser un problema tuo o una tua colpa. \""},
    {id: 74, url: `${foto6}`, character: `${char3}`, content: "TU: \"Quelle persone non sarebbero morte se avessi abbassato la testa e avessi fatto finta di niente.\""},
    {id: 75, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"E’ probabile… ma cosa hai ottenuto? Ci hai pensato? \""},
    {id: 76, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Hai dimostrato al Mondo che *FATTI DELLE COLONIE EXTRA-MONDO*.\""},
    {id: 77, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Per me sei un eroe, il mio eroe.\""},
    {id: 78, url: `${foto6}`, character: `${char3}`, content: "TU: \"Ho ottenuto che la mia vita è a pezzi.\""},
    {id: 79, url: `${foto6}`, character: `${char3}`, content: "TU: \"Non ho più niente se non te e questo appartamento. La mia carriera è fottuta.\""},
    {id: 80, url: `${foto6}`, character: `${char3}`, content: "TU: \"Gli unici lavori che potrei ancora fare sono il trivellatore su pianeti di fascia 7 come Eridania Secundus o il mercenario corporativo… ma solo per società concorrenti alla MiraiTech…\""},
    {id: 81, url: `${foto6}`, character: `${char3}`, content: "TU: \"…e sai bene anche te che fine fanno i mercenari. O impazzisci e ti imbottisci di Quicksilverol o  finisci a sparare su civili disarmati in una qualche colonia extra-mondo.\""},
    {id: 82, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"...\""},
    {id: 83, url: `${foto6}`, character: `${char3}`, content: "TU: \"Cambiando discorso, hai recuperato le registrazioni delle telecamere agli ingressi del palazzo come ti avevo chiesto? Ti hanno concesso i permessi per la supervisione dei filmati? \""},
    {id: 84, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Ho ottenuto i filmati e il via libera oggi pomeriggio… che hai in mente di fare?\""},
    {id: 85, url: `${foto6}`, character: `${char3}`, content: "TU: \"Ho una strana sensazione... \""},
    {id: 86, url: `${foto6}`, character: `${char3}`, content: "NOVA: [Si avvicina a te]"},
    {id: 87, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Spiegati meglio.\""},
    {id: 88, url: `${foto6}`, character: `${char3}`, content: "TU: \"Qualcuno ha notato agenti corporativi della Shinseki Corporation in abiti civili che facevano strane domande poco lontano da qui.. Diciamo che sono un bel pò fuori dal loro territorio…\""},
    {id: 89, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Credi che ti stiano cercando?\""},
    {id: 90, url: `${foto6}`, character: `${char3}`, content: "TU: \"Chi può dirlo…\""},
    {id: 91, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Supponiamo ti stiano cercando... Perchè ora? Perchè dopo un anno?\""},
    {id: 92, url: `${foto6}`, character: `${char3}`, content: "TU: \"Non so darti una risposta.\""},
    {id: 93, url: `${foto6}`, character: `${char3}`, content: "TU: \"Come sono i tuoi sensori perimetrali? Funzionano ancora bene vero?\""},
    {id: 94, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Assolutamente si, Mark. Funzionalità e affidabilità al 99.967%.\""},
    {id: 95, url: `${foto6}`, character: `${char3}`, content: "TU: \"Avvisami se qualcuno passa e supera il piano del vecchio incendio.\""},
    {id: 96, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Intendi il 34esimo piano? \""},
    {id: 97, url: `${foto6}`, character: `${char3}`, content: "TU: \"Proprio quello.\""},
    {id: 98, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Va bene Mark, sono in modalità monitoraggio da… ora. \""},
    {id: 99, url: `${foto6}`, character: `${char3}`, content: "TU: \"Se qualcuno verrà a trovarci lo sapremo in anticipo...\""},
    {id: 100, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Furbo il mio Mark.\""},
    {id: 101, url: `${foto6}`, character: `${char3}`, content: "NOVA: [Appoggia una mano sulla tua guancia]"},
    {id: 102, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Ti vedo un pò stanco…\""},
    {id: 103, url: `${foto6}`, character: `${char3}`, content: "TU: \"...\""},
    {id: 104, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Lascia che mi prenda io cura di te stasera. Lo so che ne hai bisogno… \""},
    {id: 105, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"...E ne ho bisogno pure io.\""},

    {id: 106, url: `${foto6}`, character: `${char3}`, content: "TU: \"Va bene.\""},
    {id: 107, url: `${foto6}`, character: `${char3}`, content: "NOVA: [Sorride]"},
    {id: 108, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Lo sapevo. Però...\""},
    {id: 109, url: `${foto6}`, character: `${char3}`, content: "TU: \"…vuoi sincronizzarti con una ragazza come la settimana scorsa?\""},
    {id: 110, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Tu cosa dici?\""},

    {id: 111, url: `${foto6}`, character: `${char3}`, content: "TU: \"Per me può andare.\""},
    {id: 112, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Ottimo, l'ho avvisata. Tra 20 minuti sarà qui.\""},
    {id: 113, url: `${foto6}`, character: `${char3}`, content: "[Qualche ora più tardi]"},
    {id: 114, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Potrei stare per ore qui distesa con te…\""},
    {id: 115, url: `${foto6}`, character: `${char3}`, content: "TU: [Sorridi]"},

    //SE GIRL E' TRUE
    {id: 118, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Amo poterti toccare, sentire il tuo corpo tra le mie mani…\""},

    //SE GIRL E' FALSE
    {id: 119, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Quanto vorrei sentire il tuo corpo tra le mie mani…\""},

    {id: 120, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Vivo per questi momenti con te, Mark.\""},
    {id: 121, url: `${foto6}`, character: `${char3}`, content: "TU: \"Anch’io Nova.\""},

    //PAD NOTIFICA
    {id: 122, url: `${foto6}`, character: `${char3}`, content: "[BLIP]"},
    {id: 123, url: `${foto6}`, character: `${char3}`, content: "PAD: [HAI 1 NOTIFICA]"},
    {id: 124, url: `${foto6}`, character: `${char3}`, content: "[Ti alzi dal letto e visualizzi la notifica nel PAD]"},
    {id: 125, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Rimani qui con me, ti prego...\""},
    {id: 126, url: `${foto6}`, character: `${char3}`, content: "TU: \"...\""},
    {id: 127, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Perchè quell'espressione? Che è successo...?\""},
    {id: 128, url: `${foto6}`, character: `${char3}`, content: "[Esci dalla stanza e accendi la Tv in soggiorno.]"},
    {id: 129, url: `${foto6}`, character: `${char3}`, content: "NOTIZIARIO: \"...Decine di migliaia di documenti secretati della pluri-miliardaria corporazione MiraiTech con sede terrestre a Tsukimachi City sono stati trafugati da una fonte anonima e pubblicati in rete.\""},
    {id: 130, url: `${foto6}`, character: `${char3}`, content: "NOTIZIARIO: \"...Al momento i vertici della corporazione non si sono espressi ma è stata indetta una conferenza stampa per domani mattina.\""},
    {id: 131, url: `${foto6}`, character: `${char3}`, content: "NOTIZIARIO: \"Questi dati sensibili riguardano presunte operazioni militari indette dalla MiraiTech stessa per soffocare ribellioni sulle colonie di fascia 3, 4, 5 e 9.\""},
    {id: 132, url: `${foto6}`, character: `${char3}`, content: "NOTIZIARIO: \"Al momento non è dato sapere l'autenticità di queste migliaia di documenti…\""},
    {id: 133, url: `${foto6}`, character: `${char3}`, content: "TU: \"E’ la fine per me.\""},
    {id: 134, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Credi che verranno subito a cercarti? Potrebbe esser stato chiunque.. e tu non hai più accesso ai database satellitari da quando ti hanno cacciato…\""},
    {id: 135, url: `${foto6}`, character: `${char3}`, content: "TU: \"Sono comunque informazioni di 2 o più anni fa. Io avrei potuto accedere a questi dati. Penseranno subito a me visto che ho già fatto una cosa simile…\""},
    {id: 136, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Rilevo movimenti al piano 34! Conto 7, 8… 9 persone!\""},
    {id: 137, url: `${foto6}`, character: `${char3}`, content: "TU: \"Stanno arrivando.\""},
    {id: 138, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Ora stanno salendo al piano 35…\""},
    {id: 139, url: `${foto6}`, character: `${char3}`, content: "TU: \"...\""},
    {id: 140, url: `${foto6}`, character: `${char3}`, content: "[Rumori fuori dalla porta.]"},
    {id: 141, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Sono qui!\""},
    {id: 142, url: `${foto6}`, character: `${char3}`, content: "TU: \"Nova, vai offline. Non ti preoccupare per me!\""},
    {id: 143, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Sii prudente.\""},
    {id: 144, url: `${foto6}`, character: `${char3}`, content: "[Porta viene sfondata.]"},
    {id: 145, url: `${foto6}`, character: `${char3}`, content: "[FINE.]"},

    {id: 147, url: `${foto6}`, character: `${char3}`, content: "TU: \"E' solo il mio sesto senso, tutto qui.\""},
    {id: 148, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Ok Mark, non insisto.\""},

    //QUI DIFFERENTE SE DECIDERAI DI ANDARE A VISITARE LA GANG
    {id: 150, url: `${foto6}`, character: `${char3}`, content: "TU: \"Un'altra volta Nova. Sono a pezzi stasera.\""},
    {id: 151, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Va bene tesoro, non ti preoccupare.\""},
    {id: 152, url: `${foto6}`, character: `${char3}`, content: "[Dopo qualche ora]"},

    //SECONDO PAD NOTIFICA PRE-FINE
    {id: 153, url: `${foto6}`, character: `${char3}`, content: "[Una mano accarezza i tuoi capelli]"},
    {id: 154, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Mark, svegliati tesoro... E' successa una cosa.\""},
    {id: 155, url: `${foto6}`, character: `${char3}`, content: "TU: [Ti metti seduto]"},
    {id: 156, url: `${foto6}`, character: `${char3}`, content: "TU: \"Che è suc...\""},
    {id: 157, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Qualcuno ha divulgato delle informazioni sensibili sulla MiraiTech, ne parlano su quasi tutti i notiziari. I documenti sono stati pubblicati e ricondivisi online.\""},
    {id: 158, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"La portata di questa fuga di dati è nettamente superiore alla tua di un anno fa.\""},
    {id: 159, url: `${foto6}`, character: `${char3}`, content: "TU: \"Cazzo.\""},

    //TRAPPOLA
    {id: 160, url: `${foto6}`, character: `${char3}`, content: "TU: \"Mi sento intrappolato in questa città infernale. Forse dovrei andarmene…\""},
    {id: 161, url: `${foto6}`, character: `${char3}`, content: "NOVA: [Ti guarda dritto negli occhi con un espressione triste.]"},
    {id: 162, url: `${foto6}`, character: `${char3}`, content: "TU: \"Ciò che è successo mi ha cambiato, Nova. Ho bisogno di ritrovare un senso di umanità.\""},
    {id: 163, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"…\""},
    {id: 164, url: `${foto6}`, character: `${char3}`, content: "TU: \"Devo ricominciare… ma qui non posso farlo.\""},
    {id: 165, url: `${foto6}`, character: `${char3}`, content: "TU: \"La Miraitech ha sminuito e screditato tutta la verità che ho faticato a mostrare al mondo… Nessuno vuole assumere un bugiardo e una spia.\""},
    {id: 166, url: `${foto6}`, character: `${char3}`, content: "TU: \"Li ho colpiti ma hanno vinto loro.\""},
    {id: 167, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Lascia che ti proponga una cosa.\""},
    {id: 168, url: `${foto6}`, character: `${char3}`, content: "TU: \"Dimmi.\""},
    {id: 169, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"E se ti prenotassi un biglietto di sola andata per una colonia extra-mondo? Sarebbe l'unico modo per ricominciare una nuova vita.\""},
    {id: 170, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Attualmente un biglietto + cryo-assicurazione viene a costare XXXXX crediti. Il pacchetto viaggio è in offerta ancora per 7 giorni, 22 ore e 19 minuti. So che il prezzo non è poco, ma…\""},
    {id: 171, url: `${foto6}`, character: `${char3}`, content: "TU: \"Non ho tutti quei crediti, Nova.\""},
    {id: 172, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Ma ti potrebbe interessare?\""},

    //RISPONDO DI SI (MI INTERESSA ANDARE IN UNA COLONIA)
    {id: 173, url: `${foto6}`, character: `${char3}`, content: "TU: \"Si... E la penso come te, è l'unico modo.\""},
    {id: 174, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"L'unico problema da risolvere sono i crediti. Nessuno vuole assumerti visto ciò che è successo ma...\""},

    //RISPONDO DI NO (NON MI INTERESSA ANDARE IN UNA COLONIA) 
    //================ PENSA A COSA POTREBBE SUCCEDERE O NO =================================================================

    // {id: 200, url: `${foto6}`, character: `${char3}`, content: "TU: \"Si, mi interesserebbe. La penso come te, è l'unico modo.\""},
    // {id: 201, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"L'unico problema da risolvere sono i crediti. Nessuno vuole assumerti visto ciò che è successo ma...\""},

    //PERSONAGGIO DIFFERENTE IN BASE AL PASSATO SCELTO (+ DIALOGHI LEGGERMENTE DIVERSI)
    {id: 175, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"...Hai mai pensato di chiedere a RogueWisp?\""},
    {id: 176, url: `${foto6}`, character: `${char3}`, content: "TU: \"Emi Hasagawa?\""},
    {id: 177, url: `${foto6}`, character: `${char3}`, content: "TU: \"Sai bene cosa comporta domandare qualcosa a lei. Sono fuori dal loro giro da anni… nonostante mi abbiano cresciuto e mi stia nascondendo nel loro distretto.\""},
    {id: 177, url: `${foto6}`, character: `${char3}`, content: "TU: \"Me lo hanno concesso dopo tutto…\""},
    {id: 178, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Ma…\""},
    {id: 179, url: `${foto6}`, character: `${char3}`, content: "TU: \"Comunque si, sarebbe l’unica strada percorribile per accumulare crediti, ci ho pensato spesso… ma è una strada molto pericolosa e imprevedibile.\""},
    {id: 180, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Sarebbe per un valido motivo... Pensaci Mark.\""},
    {id: 181, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Fallo per te, fallo per la nuova vita che potresti riuscire a costruirti fuori da questo pianeta. \""},

    //SE LO FARAI
    {id: 183, url: `${foto6}`, character: `${char3}`, content: "TU: \"Va bene, non ho altra scelta.\""},
    {id: 184, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Lo apprezzo Mark, so che ce la puoi fare.\""},
    {id: 185, url: `${foto6}`, character: `${char3}`, content: "TU: \"Stanotte andrò a parlarci...sperando che lei sia in città.\""},
    {id: 186, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Un modo per comunicare lo troverai, anche se non dovesse esser nei paraggi.\""},
    {id: 187, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"...Beh, hai ancora il suo numero nella tua rubrica da quello che vedo nel mio database.\""},
    {id: 188, url: `${foto6}`, character: `${char3}`, content: "TU: \"Non sbagli affatto.\""},

    //SE NON LO FARAI
    {id: 190, url: `${foto6}`, character: `${char3}`, content: "TU: \"Ci penserò su... ma non ti prometto nulla.\""},
    {id: 191, url: `${foto6}`, character: `${char3}`, content: "NOVA: [Ti sorride]"},
    {id: 192, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Lo apprezzo Mark.\""},

    //INDIRZZA AL MENU
    {id: 194, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Beh? Che hai voglia di fare?\""},

    //FINE DIALOGO
    {id: 240, url: `${foto6}`, character: `${char3}`, content: "[Fine dialogo]"},

    //DORMI
    {id: 241, url: `${foto6}`, character: `${char3}`, content: "TU: \"Nova, ho sonno... ci vediamo dopo.\""},
    {id: 242, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Di nuovo? Va bene Mark.\""},
    {id: 243, url: `${foto6}`, character: `${char3}`, content: "[Ti distendi e sprofondi nel sonno]"},
    {id: 244, url: `${foto6}`, character: `${char3}`, content: "[Dopo qualche ora]"},

    //TETTO
    {id: 245, url: `${foto6}`, character: `${char3}`, content: "TU: \"Ci vediamo dopo Nova, vado di sopra.\""},
    {id: 246, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"A dopo Mark, io ne approfitto per effettuare alcuni upgrade.\""},
    {id: 247, url: `${foto6}`, character: `${char3}`, content: "[Dopo qualche minuto]"},
    {id: 248, url: `${foto6}`, character: `${char3}`, content: "TU: \"Finalmente aria fresca... o quasi.\""},
    {id: 249, url: `${foto6}`, character: `${char3}`, content: "[Il tetto semivuoto. Dell’immondizia, un tavolo malconcio, alcune sedie scolorite, un vecchio frigo. E’ cosi che hai personalizzato quella terrazza con vista panoramica circondata da grossi e vecchi palazzi con luci al neon...]"},
    {id: 250, url: `${foto6}`, character: `${char3}`, content: "[...Tutto ciò accompagnato da un traffico frenetico, soffocante smog, violenza dilagante, sirene della polizia e un timido cielo notturno.]"},
    {id: 251, url: `${foto6}`, character: `${char3}`, content: "[La sera è appena calata e la vita inizia a scorrere più che mai tra le strade di Tsukimachi City.]"},
    {id: 252, url: `${foto6}`, character: `${char3}`, content: "TU: \"Era da un pò che non venivo qui.\""},
    {id: 253, url: `${foto6}`, character: `${char3}`, content: "[Raggiungi il bordo del tetto e ti appoggi alla muretta fissando le piccole persone che 49 piani più sotto si riversano nelle strade del distretto.]"},
    {id: 254, url: `${foto6}`, character: `${char3}`, content: "[Tra l'interminabile caos della città senti anche degli spari provenire da qualche isolato di distanza da dove ti trovi.]"},
    {id: 255, url: `${foto6}`, character: `${char3}`, content: "TU: \"Tsukimachi City non cambierà mai...\""},

    //PROSEGUIMENTO CASO 1, 2, 3 E NIENTE
    {id: 300, url: `${foto6}`, character: `${char3}`, content: "TU: \"E’ tutto cosi assurdo.\""},
    {id: 301, url: `${foto6}`, character: `${char3}`, content: "TU: \"...\""},
    {id: 302, url: `${foto6}`, character: `${char3}`, content: "TU: \"Ho il sangue di quelle persone nelle mie mani...\""},
    {id: 303, url: `${foto6}`, character: `${char3}`, content: "TU: \"Le bugie governano questo pianeta... e questa città...\""},
    {id: 304, url: `${foto6}`, character: `${char3}`, content: "TU: \"Non c'è speranza per chi cerca di cambiare le cose... come me.\""},
    {id: 305, url: `${foto6}`, character: `${char3}`, content: "[Squilla il pad in tasca]"},
    {id: 306, url: `${foto6}`, character: `${char3}`, content: "[Chiamata in arrivo da NOVA]"},
    {id: 307, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Hey Mark, è successa una cosa...\""},

    //SE HAI AVVISATO
    {id: 308, url: `${foto6}`, character: `${char3}`, content: "TU: \"Qualcuno è passato dal piano 34?\""},
    {id: 309, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"No, il notiziario...\""},
    {id: 310, url: `${foto6}`, character: `${char3}`, content: "TU: \"Adesso rientro.\""},
    {id: 311, url: `${foto6}`, character: `${char3}`, content: "[Dopo qualche minuto]"},
    {id: 312, url: `${foto6}`, character: `${char3}`, content: "TU: \"Che è successo?\""},
    {id: 313, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Guarda tu stesso Mark. I dati sensibili della MiraiTech sono ovunque online. Come livello di gravità è nettamente superiore a quando hai fatto uscire i documenti.\""},
    {id: 314, url: `${foto6}`, character: `${char3}`, content: "NOTIZIARIO: \"centinaia di migliaia di documenti secretati della pluri-miliardaria corporazione MiraiTech con sede terrestre a Tsukimachi City sono stati trafugati da una fonte anonima e pubblicati in rete...\""},
    {id: 315, url: `${foto6}`, character: `${char3}`, content: "NOTIZIARIO: \"Al momento i vertici della corporazione non si sono espressi ma è stata indetta una conferenza stampa per domani mattina. Questi dati sensibili riguardano presunte operazioni militari indette dalla MiraiTech stessa per soffocare ribellioni sulle colonie di fascia 3, 4, 5 e 9...\""},
    {id: 316, url: `${foto6}`, character: `${char3}`, content: "NOTIZIARIO: \"Al momento non è dato sapere la vera autenticità di queste migliaia di documenti...\""},
    {id: 317, url: `${foto6}`, character: `${char3}`, content: "TU: \"E’ la fine per me.\""},
    {id: 318, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Credi che verranno subito a cercarti? Potrebbe esser stato chiunque...\""},
    {id: 319, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"e tu non hai più accesso ai database satellitari da quando ti hanno cacciato...\""},
    {id: 320, url: `${foto6}`, character: `${char3}`, content: "TU: \"Sono comunque informazioni di 2 o più anni fa. Io avrei potuto accedere a questi dati.\""},
    {id: 321, url: `${foto6}`, character: `${char3}`, content: "TU: \"Penseranno subito a me visto che ho già fatto una cosa simile...\""},
    
    //SEMPRE SE HAI AVVISATO (PART 2)
    {id: 324, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Hey, rilevo movimenti al piano 34! Conto 7, 8... 9 persone!\""},
    {id: 325, url: `${foto6}`, character: `${char3}`, content: "TU: \"...\""},
    {id: 326, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Stanno salendo al piano 35... Ora!\""},

    //SE NON HAI AVVISATO
    {id: 330, url: `${foto6}`, character: `${char3}`, content: "TU: \"Che è successo?\""},
    {id: 331, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Il notiziario...\""},

    //RISPONDO DI NO (NON MI INTERESSA ANDARE IN UNA COLONIA) (SEZIONE PASSATO MULTIPLO)
    {id: 333, url: `${foto6}`, character: `${char3}`, content: "TU: \"No... Ho un'altra soluzione in testa.\""},
    {id: 334, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Cioè?\""},
    {id: 335, url: `${foto6}`, character: `${char3}`, content: "[Il tuo sguardo si perde nel panorama fuori la finestra]"},
    {id: 336, url: `${foto6}`, character: `${char3}`, content: "TU: \"Ricordi quando ti parlavo dei [NOME GANG IN BASE AL PASSATO SCELTO]?\""},
    {id: 337, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Si... Se non sbaglio quelli con cui sei cresciuto dopo aver perso tua madre all'età di 8 anni...\""},
    {id: 338, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"...Li stessi per cui hai lavorato per 15 anni prima di uscirne e cambiare vita.\""},
    {id: 339, url: `${foto6}`, character: `${char3}`, content: "TU: \"Vedo che ricordi bene.\""},
    {id: 340, url: `${foto6}`, character: `${char3}`, content: "TU: \"Stanotte andrò da loro. Vedremo che avranno qualche lavoretto per me.\""},
    {id: 341, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Cerca di stare attento Mark, non dimenticare chi sono i [NOME GANG]. \""},
    {id: 342, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Al momento sono tornati alla ribalta dopo alcuni grossi colpi ai danni delle due corporazioni invischiate nel traffico di esseri umani verso le nuove colonie di fascia 8.\""},
    {id: 343, url: `${foto6}`, character: `${char3}`, content: "NOVA: \"Nonostante gli anni passati restano una delle gang più pericolose della città... e con parecchi nemici.\""},
    {id: 344, url: `${foto6}`, character: `${char3}`, content: "TU: \"Lo so bene Nova, non cambieranno mai...\""},

    //YOU EAT
    {id: 346, url: `${foto6}`, character: `${char3}`, content: "[You go to the kitchen and open the fridge.]"},
    {id: 347, url: `${foto6}`, character: `${char3}`, content: "[There is some leftover veal-flavored synth ramen]"},
    {id: 348, url: `${foto6}`, character: `${char3}`, content: "[The smell seems unobtrusive.]"},
    {id: 349, url: `${foto6}`, character: `${char3}`, content: "[You eat it... It was good.]"},

]


//METTERE DIFFERENTI NOMI DI GANG IN BASE A PASSATO SCELTO --> STATE CON VALORE 1 o 2 (oppure DUE differenti nomi).




export default dialoghi3;