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
    {id: 0, url: `${foto7}`, character: `${char3}`, content: "YOU: ..."},
    {id: 1, url: `${foto2}`, character: `${char3}`, content: "YOU: ... ..."},
    {id: 2, url: `${foto3}`, character: `${char3}`,content: "YOU: ... ... ..."},
    {id: 3, url: `${foto4}`, character: `${char3}`, content: "YOU: \"Ah... my head...\""},
    {id: 4, url: `${foto5}`, character: `${char3}`, content: "VEX: \"Hey, Mark, did you sleep well? Your heartbeat was quite fast in the last few minutes.\""},
    {id: 5, url: `${foto5}`, character: `${char3}`, content: "VEX: \"Do you feel like telling me about what you saw in your dream?\""},
    {id: 6, url: `${foto5}`, character: `${char3}`, content: "YOU: \"...I don't remember much.\""},
    {id: 7, url: `${foto5}`, character: `${char3}`, content: "VEX: \"If you want to talk about it... Anything for you, Mark.\""},
    {id: 8, url: `${foto5}`, character: `${char3}`, content: "VEX: \"You know, with the ARISMA 7.36.1 update, I can now even help you interpret dreams.\""},
    {id: 9, url: `${foto5}`, character: `${char2}`, content: "YOU: \"Who knows, maybe I'll have a chance to try out this upgrade of yours someday.\""},
    {id: 10, url: `${foto5}`, character: `${char2}`, content: "VEX: \"Me too. By the way, I feel particularly happy today."},
    {id: 11, url: `${foto5}`, character: `${char2}`, content: "VEX: \"Is there anything else I can do for you?\""},
    {id: 12, url: `${foto5}`, character: `${char2}`, content: "VEX: \"Oh, I almost forgot... This month too, your apartment's rent has been covered...\""},
    {id: 13, url: `${foto5}`, character: `${char2}`, content: "VEX: \"...But there's still no information about who made the payment. The money arrived completely untraceable in your expense wallet.\""},
    // {id: 14, url: `${foto5}`, character: `${char2}`, content: "???: \"YOU'RE AT 14TH!\""},
    // {id: 15, url: `${foto5}`, character: `${char2}`, content: "???: \"GLOCK!!\""},
    // {id: 20, url: `${foto5}`, character: `${char2}`, content: "???: \"Why am I back on Earth? Just a moment ago, I was on Solara!\""},
    {id: 25, url: `${foto5}`, character: `${char2}`, content: "YOU: \"Tell me about yourself, Vex. Who are you really?\""},
    {id: 26, url: `${foto6}`, character: `${char3}`, content: "VEX: \"I am Vex, the cutting-edge XE-AI artificial intelligence developed by MiraiTech... My serial number is IA2023-9876-XYZA...\""},
    {id: 27, url: `${foto6}`, character: `${char3}`, content: "VEX: \"...I offer a wide range of services. I can order dinner for you, handle calls, entertain you, and much more.\""},
    {id: 28, url: `${foto6}`, character: `${char3}`, content: "VEX: \"You just need to ask.\""},
    {id: 29, url: `${foto6}`, character: `${char3}`, content: "YOU: \"What place is this?\""},
    {id: 30, url: `${foto6}`, character: `${char3}`, content: "VEX: \"It's your apartment. It's located on the 36th floor in block 59 of Suragachi district.\""},
    
    // News
    {id: 35, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Kagayaku Automotive is facing a series of complaints regarding some 7th-gen vehicles distributed last week in the Tsukimachi City area. The issues seem to be related to the new Kōrin Lithium batteries...\""},
    {id: 36, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Today and tomorrow, the elections will be held. The current governor, Haruki Sato, is attempting his third term, while on the other side, we have the tycoon Matsuda Takahashi running for his first office. To vote, you just need to take your axi-pad.\""},
    
    // Go to Voting, SynthiCoin, or Return - Index 25
    {id: 37, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Also, the price of terrestrial water continues to rise, as well as EtherByte, which has reached the threshold of 39,200.91 JLL credits.\""},
    
    // SynthiCoin
    {id: 38, url: `${foto6}`, character: `${char3}`, content: "YOU: \"What do you think about SynthiCoin? Do you think I should invest some money in it?\""},
    {id: 39, url: `${foto6}`, character: `${char3}`, content: "VEX: \"My protocol prohibits me from giving financial advice; I can't help you with that, Mark. I'm here for anything else you need... Anything.\""},
    
    // Limbo 1 - Index 28
    {id: 40, url: `${foto6}`, character: `${char3}`, content: "VEX: \"So? How can I assist you?\""},
    {id: 41, url: `${foto6}`, character: `${char3}`, content: "YOU: \"I want to vote... even though I've never cared much about politics. Over all these years, not much has been done to improve Tsukimachi City.\""},
    {id: 42, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Then again, even if I were the mayor, I wouldn't think about putting an end to gang wars or limiting the power of corporations.\""},
    {id: 43, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Instead, I would try to secure a plot of land in some extra-world colony...\""},
    {id: 44, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Do you already have some places in mind? They say Solara and Nerezar are magnificent for starting over.\""},
    {id: 45, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Please, don't talk to me about Nerezar, Vex... Let's avoid that topic.\""},
    {id: 46, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Oh, I'm sorry, Mark. It wasn't my intention...\""},
    {id: 47, url: `${foto6}`, character: `${char3}`, content: "YOU: \"...\""},
    
    // Vote Now - Index 36
    {id: 48, url: `${foto6}`, character: `${char3}`, content: "[AXI Pad Booting Up...]"},
    {id: 49, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Perfect, vote sent. Congratulations, Mark!\""},
    {id: 50, url: `${foto6}`, character: `${char3}`, content: "YOU: \"It's just one vote, Vex. It won't change this corrupt city.\""},
    
    // Advice Section
    {id: 65, url: `${foto6}`, character: `${char3}`, content: "YOU: \"I need some advice, Vex...\""},
    {id: 66, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Go ahead, tell me.\""},
    
    {id: 67, url: `${foto6}`, character: `${char3}`, content: "YOU: \"I made a serious mistake...\""},
    {id: 68, url: `${foto6}`, character: `${char3}`, content: "YOU: \"...I shouldn't have done what I did.\""},
    {id: 69, url: `${foto6}`, character: `${char3}`, content: "YOU: \"I think about it constantly...\""},
    {id: 70, url: `${foto6}`, character: `${char3}`, content: "VEX: \"You're referring to the leak and the consequences it brought?\""},
    {id: 71, url: `${foto6}`, character: `${char3}`, content: "YOU: \"...\""},
    {id: 72, url: `${foto6}`, character: `${char3}`, content: "VEX: \"You don't have to think about it, Mark. You did the right thing; anyone would have done the same in your place...\""},
    {id: 73, url: `${foto6}`, character: `${char3}`, content: "VEX: \"...and if MiraiTech is willing to use any means to hide uncomfortable truths, I don't see how it can be your problem or your fault.\""},
    {id: 74, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Those people wouldn't have died if I had turned a blind eye and pretended nothing happened.\""},
    {id: 75, url: `${foto6}`, character: `${char3}`, content: "VEX: \"That's possible... but what did you achieve? Have you thought about that?\""},
    {id: 76, url: `${foto6}`, character: `${char3}`, content: "VEX: \"You've shown the world what MiraiTech was doing in those colonies.\""},
    {id: 77, url: `${foto6}`, character: `${char3}`, content: "VEX: \"To me, you're a hero... my hero.\""},
    {id: 78, url: `${foto6}`, character: `${char3}`, content: "YOU: \"I've achieved that my life is shattered.\""},
    {id: 79, url: `${foto6}`, character: `${char3}`, content: "YOU: \"I have nothing left except you and this apartment. My career is ruined.\""},
    {id: 80, url: `${foto6}`, character: `${char3}`, content: "YOU: \"The only jobs I could still do are as a driller on Tier 7 planets like Eridania Secundus or as a corporate mercenary... but only for companies competing against MiraiTech...\""},
    {id: 81, url: `${foto6}`, character: `${char3}`, content: "YOU: \"...and you know very well what happens to mercenaries. Either they go crazy and overdose on Quicksilverol or end up shooting unarmed civilians in some extra-world colony.\""},
    {id: 82, url: `${foto6}`, character: `${char3}`, content: "VEX: \"...\""},
    {id: 83, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Changing the subject, did you retrieve the camera footage from the entrance of the building as I asked? Did they grant you permission to monitor the recordings?\""},
    {id: 84, url: `${foto6}`, character: `${char3}`, content: "VEX: \"I got the footage and the green light this afternoon... What do you plan to do?\""},
    {id: 85, url: `${foto6}`, character: `${char3}`, content: "YOU: \"I have a strange feeling...\""},
    {id: 86, url: `${foto6}`, character: `${char3}`, content: "VEX: [Approaches you]"},
    {id: 87, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Explain further.\""},
    {id: 88, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Someone noticed Shinseki Corporation corporate agents in civilian clothes asking strange questions not far from here... Let's say they are quite out of their territory...\""},
    {id: 89, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Do you think they're looking for you?\""},
    {id: 90, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Who knows...\""},
    {id: 91, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Suppose they are looking for you... Why now? Why after a year?\""},
    {id: 92, url: `${foto6}`, character: `${char3}`, content: "YOU: \"I can't give you an answer.\""},
    {id: 93, url: `${foto6}`, character: `${char3}`, content: "YOU: \"How are your perimeter sensors? They're still working well, right?\""},
    {id: 94, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Absolutely, Mark. Functionality and reliability at 99.967%.\""},
    {id: 95, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Let me know if anyone passes and goes past the 34th-floor level.\""},
    {id: 96, url: `${foto6}`, character: `${char3}`, content: "VEX: \"You mean the 34th floor?\""},
    {id: 97, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Exactly that.\""},
    {id: 98, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Okay, Mark, I'm in monitoring mode from... now.\""},
    {id: 99, url: `${foto6}`, character: `${char3}`, content: "YOU: \"If anyone comes to visit us, we'll know in advance...\""},
    {id: 100, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Clever, my Mark.\""},
    {id: 101, url: `${foto6}`, character: `${char3}`, content: "VEX: [Places a hand on your cheek]"},
    {id: 102, url: `${foto6}`, character: `${char3}`, content: "VEX: \"You look a bit tired...\""},
    {id: 103, url: `${foto6}`, character: `${char3}`, content: "YOU: \"...\""},
    {id: 104, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Let me take care of you tonight. I know you need it...\""},
    {id: 105, url: `${foto6}`, character: `${char3}`, content: "VEX: \"...And I need it too.\""},
    
    {id: 106, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Alright.\""},
    {id: 107, url: `${foto6}`, character: `${char3}`, content: "VEX: [Smiles]"},
    {id: 108, url: `${foto6}`, character: `${char3}`, content: "VEX: \"I knew it. But...\""},
    {id: 109, url: `${foto6}`, character: `${char3}`, content: "YOU: \"...do you want to sync with a girl like last week?\""},
    {id: 110, url: `${foto6}`, character: `${char3}`, content: "VEX: \"What do you think?\""},
    
    {id: 111, url: `${foto6}`, character: `${char3}`, content: "YOU: \"It's fine with me.\""},
    {id: 112, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Great, I've notified her. She'll be here in 20 minutes.\""},
    {id: 113, url: `${foto6}`, character: `${char3}`, content: "[A few hours later]"},
    {id: 114, url: `${foto6}`, character: `${char3}`, content: "VEX: \"I could lie here with you for hours...\""},
    {id: 115, url: `${foto6}`, character: `${char3}`, content: "YOU: [Smile]"},
    


    //SE GIRL E' TRUE
    {id: 118, url: `${foto6}`, character: `${char3}`, content: "VEX: \"I love being able to touch you, feel your body in my hands...\""},

    // IF GIRL IS FALSE
    {id: 119, url: `${foto6}`, character: `${char3}`, content: "VEX: \"How much I wish to feel your body in my hands...\""},

    {id: 120, url: `${foto6}`, character: `${char3}`, content: "VEX: \"I live for these moments with you, Mark.\""},
    {id: 121, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Me too, Vex.\""},


    //PAD NOTIFICATION
    {id: 122, url: `${foto6}`, character: `${char3}`, content: "[BLIP]"},
    {id: 123, url: `${foto6}`, character: `${char3}`, content: "PAD: [YOU HAVE 1 NOTIFICATION]"},
    {id: 124, url: `${foto6}`, character: `${char3}`, content: "[You get out of bed and check the notification on the PAD]"},
    {id: 125, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Stay here with me, please...\""},
    {id: 126, url: `${foto6}`, character: `${char3}`, content: "YOU: \"...\""},
    {id: 127, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Why that expression? What happened...?\""},
    {id: 128, url: `${foto6}`, character: `${char3}`, content: "[You leave the room and turn on the TV in the living room.]"},
    {id: 129, url: `${foto6}`, character: `${char3}`, content: "NEWS: \"...Tens of thousands of classified documents from the multi-billion corporation MiraiTech, headquartered in Tsukimachi City on Earth, have been stolen by an anonymous source and leaked online.\""},
    {id: 130, url: `${foto6}`, character: `${char3}`, content: "NEWS: \"...As of now, the corporation's top officials have not made any statements, but a press conference has been scheduled for tomorrow morning.\""},
    {id: 131, url: `${foto6}`, character: `${char3}`, content: "NEWS: \"These sensitive data concern alleged military operations initiated by MiraiTech itself to suppress rebellions in colonies of tiers 3, 4, 5, and 9.\""},
    {id: 132, url: `${foto6}`, character: `${char3}`, content: "NEWS: \"At the moment, the authenticity of these thousands of documents is uncertain...\""},
    {id: 133, url: `${foto6}`, character: `${char3}`, content: "YOU: \"It's the end for me.\""},
    {id: 134, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Do you think they'll come looking for you immediately? It could have been anyone... and you no longer have access to satellite databases since you were expelled...\""},
    {id: 135, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Still, that information is from 2 or more years ago. I could have accessed that data. They'll think of me right away since I've done something similar before...\""},
    {id: 136, url: `${foto6}`, character: `${char3}`, content: "VEX: \"I detect movements on the 34th floor! Counting 7, 8... 9 people!\""},
    {id: 137, url: `${foto6}`, character: `${char3}`, content: "YOU: \"They're coming.\""},
    {id: 138, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Now they're going up to the 35th floor...\""},
    {id: 139, url: `${foto6}`, character: `${char3}`, content: "YOU: \"...\""},
    {id: 140, url: `${foto6}`, character: `${char3}`, content: "[Noises outside the door.]"},
    {id: 141, url: `${foto6}`, character: `${char3}`, content: "VEX: \"They're here!\""},
    {id: 142, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Vex, go offline. Don't worry about me!\""},
    {id: 143, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Be careful.\""},
    {id: 144, url: `${foto6}`, character: `${char3}`, content: "[The door is smashed.]"},
    {id: 145, url: `${foto6}`, character: `${char3}`, content: "[END.]"},

    {id: 147, url: `${foto6}`, character: `${char3}`, content: "YOU: \"It's just my sixth sense, that's all.\""},
    {id: 148, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Okay Mark, I won't insist.\""},

    //DIFFERENT HERE IF YOU DECIDE TO VISIT THE GANG
    {id: 150, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Another time, Vex. I'm shattered tonight.\""},
    {id: 151, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Alright, sweetheart. Don't worry.\""},
    {id: 152, url: `${foto6}`, character: `${char3}`, content: "[After a few hours]"},

    //SECOND PAD NOTIFICATION BEFORE THE END
    {id: 153, url: `${foto6}`, character: `${char3}`, content: "[A hand caresses your hair]"},
    {id: 154, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Mark, wake up darling... Something happened.\""},
    {id: 155, url: `${foto6}`, character: `${char3}`, content: "YOU: [You sit up]"},
    {id: 156, url: `${foto6}`, character: `${char3}`, content: "YOU: \"What happe...\""},
    {id: 157, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Someone leaked sensitive information about MiraiTech. They're talking about it on almost all the news channels. The documents have been published and shared online.\""},
    {id: 158, url: `${foto6}`, character: `${char3}`, content: "VEX: \"The scale of this data breach is much larger than yours from a year ago.\""},
    {id: 159, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Damn.\""},



    // TRAP
    {id: 160, url: `${foto6}`, character: `${char3}`, content: "YOU: \"I feel trapped in this infernal city. Maybe I should leave...\""},
    {id: 161, url: `${foto6}`, character: `${char3}`, content: "VEX: [Looks straight into your eyes with a sad expression.]"},
    {id: 162, url: `${foto6}`, character: `${char3}`, content: "YOU: \"What happened changed me, Vex. I need to find a sense of humanity again.\""},
    {id: 163, url: `${foto6}`, character: `${char3}`, content: "VEX: \"...\""},
    {id: 164, url: `${foto6}`, character: `${char3}`, content: "YOU: \"I need to start over... but I can't do it here.\""},
    {id: 165, url: `${foto6}`, character: `${char3}`, content: "YOU: \"MiraiTech has undermined and discredited all the truth I struggled to show to the world... No one wants to hire a liar and a spy.\""},
    {id: 166, url: `${foto6}`, character: `${char3}`, content: "YOU: \"I hit them, but they won.\""},
    {id: 167, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Let me propose something.\""},
    {id: 168, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Tell me.\""},
    {id: 169, url: `${foto6}`, character: `${char3}`, content: "VEX: \"What if I book you a one-way ticket to an off-world colony? It would be the only way to start a new life.\""},
    {id: 170, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Currently, a ticket + cryo-insurance costs 249,999.90 JLL credits. The travel package is still on offer for 7 days, 22 hours, and 19 minutes. I know it's not cheap, but...\""},
    {id: 171, url: `${foto6}`, character: `${char3}`, content: "YOU: \"I don't have that many credits, Vex.\""},
    {id: 172, url: `${foto6}`, character: `${char3}`, content: "VEX: \"But are you interested?\""},

    // RESPOND YES (I'M INTERESTED IN GOING TO A COLONY)
    {id: 173, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Yes... And I agree with you, it's the only way.\""},
    {id: 174, url: `${foto6}`, character: `${char3}`, content: "VEX: \"The only problem to solve is the credits. No one wants to hire you after what happened, but...\""},

    // ROAD 1
    {id: 175, url: `${foto6}`, character: `${char3}`, content: "VEX: \"...Have you ever thought of asking RogueWisp?\""},
    {id: 176, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Emi Hasagawa?\""},
    {id: 177, url: `${foto6}`, character: `${char3}`, content: "YOU: \"You know well what it entails to ask something of her. I've been out of the Neon Vipers' circle for years... even though they raised me and I'm hiding in their district.\""},
    {id: 178, url: `${foto6}`, character: `${char3}`, content: "VEX: \"But...\""},
    {id: 179, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Yes, it would be the only viable way to earn credits. I've thought about it often... but it's a very dangerous and unpredictable path.\""},
    {id: 180, url: `${foto6}`, character: `${char3}`, content: "VEX: \"It would be for a good reason... Think about it, Mark.\""},
    {id: 181, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Do it for yourself, do it for the new life you could build outside of this planet.\""},

    // IF YOU DO IT
    {id: 183, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Alright, I have no other choice.\""},
    {id: 184, url: `${foto6}`, character: `${char3}`, content: "VEX: \"I appreciate it, Mark. I know you can do it.\""},
    {id: 185, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Tonight, I'll go to the Neon Vipers... hoping that Emi is in town.\""},
    {id: 186, url: `${foto6}`, character: `${char3}`, content: "VEX: \"You'll find a way to communicate, even if she's not around.\""},
    {id: 187, url: `${foto6}`, character: `${char3}`, content: "VEX: \"...Well, you still have her number in your contacts, from what I see in my database.\""},
    {id: 188, url: `${foto6}`, character: `${char3}`, content: "YOU: \"You're absolutely right.\""},

    // IF YOU DON'T DO IT
    {id: 190, url: `${foto6}`, character: `${char3}`, content: "YOU: \"I'll think about it... but I can't promise anything.\""},
    {id: 191, url: `${foto6}`, character: `${char3}`, content: "VEX: [Smiles at you]"},
    {id: 192, url: `${foto6}`, character: `${char3}`, content: "VEX: \"I appreciate it, Mark.\""},

    // DIRECT TO MENU
    {id: 194, url: `${foto6}`, character: `${char3}`, content: "VEX: \"So? What do you feel like doing?\""},

    // END OF DIALOGUE
    {id: 240, url: `${foto6}`, character: `${char3}`, content: "[End of dialogue]"},

    // SLEEP
    {id: 241, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Vex, I'm tired... See you later.\""},
    {id: 242, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Again? Alright, Mark.\""},
    {id: 243, url: `${foto6}`, character: `${char3}`, content: "[You lie down and fall asleep]"},
    {id: 244, url: `${foto6}`, character: `${char3}`, content: "[After a few hours]"},


    //TETTO (Roof)
    {id: 245, url: `${foto6}`, character: `${char3}`, content: "YOU: \"See you later, Vex. I'm heading upstairs.\""},
    {id: 246, url: `${foto6}`, character: `${char3}`, content: "VEX: \"See you later, Mark. I'll take this opportunity to do some upgrades.\""},
    {id: 247, url: `${foto6}`, character: `${char3}`, content: "[After a few minutes]"},
    {id: 248, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Finally, fresh air... well, almost.\""},
    {id: 249, url: `${foto6}`, character: `${char3}`, content: "[The semi-empty roof. Garbage, a battered table, some faded chairs, an old fridge. That's how you've personalized that terrace with a panoramic view surrounded by large, old neon-lit buildings...]"},
    {id: 250, url: `${foto6}`, character: `${char3}`, content: "[...All accompanied by frantic traffic, suffocating smog, rampant violence, police sirens, and a timid night sky.]"},
    {id: 251, url: `${foto6}`, character: `${char3}`, content: "[The evening has just fallen, and life begins to flow more than ever through the streets of Tsukimachi City.]"},
    {id: 252, url: `${foto6}`, character: `${char3}`, content: "YOU: \"It's been a while since I came here.\""},
    {id: 253, url: `${foto6}`, character: `${char3}`, content: "[You reach the edge of the roof and lean on the low wall, gazing at the tiny people 49 floors below, streaming into the district streets.]"},
    {id: 254, url: `${foto6}`, character: `${char3}`, content: "[Amidst the endless chaos of the city, you also hear gunshots coming from a block away from where you are.]"},
    {id: 255, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Tsukimachi City will never change...\""},


    //PROCEEDING CASE 1, 2, 3, AND NOTHING
    {id: 300, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Everything is so absurd.\""},
    {id: 301, url: `${foto6}`, character: `${char3}`, content: "YOU: \"...\""},
    {id: 302, url: `${foto6}`, character: `${char3}`, content: "YOU: \"I have the blood of those people on my hands...\""},
    {id: 303, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Lies rule this planet... and this city...\""},
    {id: 304, url: `${foto6}`, character: `${char3}`, content: "YOU: \"There's no hope for those who try to change things... like me.\""},
    {id: 305, url: `${foto6}`, character: `${char3}`, content: "[Your pad in your pocket rings]"},
    {id: 306, url: `${foto6}`, character: `${char3}`, content: "[Incoming call from Vex]"},
    {id: 307, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Hey Mark, something happened...\""},


    //IF YOU WARNED
    {id: 308, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Did anyone pass by the 34th floor?\""},
    {id: 309, url: `${foto6}`, character: `${char3}`, content: "VEX: \"No, it's the news...\""},
    {id: 310, url: `${foto6}`, character: `${char3}`, content: "YOU: \"I'll be right back.\""},
    {id: 311, url: `${foto6}`, character: `${char3}`, content: "[After a few minutes]"},
    {id: 312, url: `${foto6}`, character: `${char3}`, content: "YOU: \"What happened?\""},
    {id: 313, url: `${foto6}`, character: `${char3}`, content: "VEX: \"See for yourself, Mark. Sensitive data from MiraiTech is all over the internet. The gravity level of this is much higher than when you leaked those documents.\""},
    {id: 314, url: `${foto6}`, character: `${char3}`, content: "NEWS: \"Hundreds of thousands of classified documents from the multi-billionaire corporation MiraiTech, with its terrestrial headquarters in Tsukimachi City, have been stolen by an anonymous source and leaked online...\""},
    {id: 315, url: `${foto6}`, character: `${char3}`, content: "NEWS: \"The corporation's executives have not yet made a statement, but a press conference has been scheduled for tomorrow morning. These sensitive data concern alleged military operations ordered by MiraiTech itself to suppress rebellions in colonies 3, 4, 5, and 9...\""},
    {id: 316, url: `${foto6}`, character: `${char3}`, content: "NEWS: \"At the moment, the authenticity of these thousands of documents is uncertain...\""},
    {id: 317, url: `${foto6}`, character: `${char3}`, content: "YOU: \"It's the end for me.\""},
    {id: 318, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Do you think they'll come looking for you right away? It could have been anyone...\""},
    {id: 319, url: `${foto6}`, character: `${char3}`, content: "VEX: \"And you no longer have access to satellite databases since they kicked you out...\""},
    {id: 320, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Still, this information is 2 or more years old. I could have accessed this data.\""},
    {id: 321, url: `${foto6}`, character: `${char3}`, content: "YOU: \"They'll think of me immediately since I've already done something similar...\""},


    //IF YOU WARNED (PART 2)
    {id: 324, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Hey, I detect movement on the 34th floor! Counting 7, 8... 9 people!\""},
    {id: 325, url: `${foto6}`, character: `${char3}`, content: "YOU: \"...\""},
    {id: 326, url: `${foto6}`, character: `${char3}`, content: "VEX: \"They're heading up to the 35th floor... Now!\""},


    //IF YOU DID NOT WARN
    {id: 330, url: `${foto6}`, character: `${char3}`, content: "YOU: \"What happened?\""},
    {id: 331, url: `${foto6}`, character: `${char3}`, content: "VEX: \"The news...\""},


    //IF I ANSWER NO (I'M NOT INTERESTED IN GOING TO A COLONY) (MULTIPLE PAST SECTION)
    {id: 333, url: `${foto6}`, character: `${char3}`, content: "YOU: \"No... I have another solution in mind.\""},
    {id: 334, url: `${foto6}`, character: `${char3}`, content: "VEX: \"What do you mean?\""},
    {id: 335, url: `${foto6}`, character: `${char3}`, content: "[Your gaze wanders out the window]"},


    //ROAD 2
    {id: 336, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Do you remember when I talked to you about the Neon Vipers?\""},
    {id: 337, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Yes... If I recall correctly, they are the ones you grew up with after losing your mother at the age of 8...\""},
    {id: 338, url: `${foto6}`, character: `${char3}`, content: "VEX: \"...The same ones you worked for 15 years before leaving and changing your life.\""},
    {id: 339, url: `${foto6}`, character: `${char3}`, content: "YOU: \"I see you remember well.\""},
    {id: 340, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Tonight, I'm going to see them. Let's see if they have any jobs for me.\""},
    {id: 341, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Be careful, Mark. Remember who the Neon Vipers are.\""},
    {id: 342, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Recently, they've made a comeback after some big hits against the two corporations involved in trafficking humans to the new tier 8 colonies.\""},
    {id: 343, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Despite the years that have passed, they remain one of the most dangerous gangs in the city... with quite a few enemies.\""},
    {id: 344, url: `${foto6}`, character: `${char3}`, content: "YOU: \"I know well, Vex, they'll never change...\""},


    //YOU EAT
    {id: 346, url: `${foto6}`, character: `${char3}`, content: "[You go to the kitchen and open the fridge.]"},
    {id: 347, url: `${foto6}`, character: `${char3}`, content: "[There is some leftover veal-flavored synth ramen]"},
    {id: 348, url: `${foto6}`, character: `${char3}`, content: "[The smell seems unobtrusive.]"},
    {id: 349, url: `${foto6}`, character: `${char3}`, content: "[You eat it... It was good.]"},


    //CORPORATE 1
    {id: 352, url: `${foto6}`, character: `${char3}`, content: "VEX: \"...Have you ever thought of asking the Marchese Nero?\""},
    {id: 353, url: `${foto6}`, character: `${char3}`, content: "YOU: \"You mean Maximillian Wolfe?\""},
    {id: 354, url: `${foto6}`, character: `${char3}`, content: "YOU: \"You know well what it entails to ask him for something. If you ask a big favor from a high-level corporate of TechNex Corp...\""},
    {id: 355, url: `${foto6}`, character: `${char3}`, content: "YOU: \"I'll be dragged back into that world I escaped from.\""},
    {id: 356, url: `${foto6}`, character: `${char3}`, content: "YOU: \"I don't deny that he helped me disappear after the leak... and it cost me a lot. I believe he did it also because we were like brothers once...\""},
    {id: 357, url: `${foto6}`, character: `${char3}`, content: "VEX: \"In the end, it's his family that raised you... It seems natural that he helped you.\""},
    {id: 358, url: `${foto6}`, character: `${char3}`, content: "YOU: \"It's very dangerous to interact with the corporate world... You know very well the kind of business some of them are involved in.\""},

    {id: 360, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Tomorrow, I'll go to TechNex Corp... hoping that Maximillian is in town.\""},


    //CORPORATE 2
    {id: 362, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Do you remember when I talked to you about TechNex Corp. and the Wolfe family?\""},
    {id: 363, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Yes... If I recall correctly, they are the ones you grew up with after losing your mother at the age of 8...\""},
    {id: 364, url: `${foto6}`, character: `${char3}`, content: "VEX: \"...The same ones you worked for 15 years before leaving and changing your life.\""},
    {id: 365, url: `${foto6}`, character: `${char3}`, content: "YOU: \"I see you remember well.\""},
    {id: 366, url: `${foto6}`, character: `${char3}`, content: "YOU: \"Tomorrow morning, I'll go see Maximillian at the headquarters. I'm sure he has some job for me.\""},
    {id: 367, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Be careful, Mark. Remember who TechNex Corp is.\""},
    {id: 368, url: `${foto6}`, character: `${char3}`, content: "VEX: \"In the last 4 months, the corporation has significantly increased its power and influence in the city. At the moment, they still have a monopoly in the contractor sector and in the extra-world military transport sector, and they are expanding into the class SAI 9 implant weapons field.\""},
    {id: 369, url: `${foto6}`, character: `${char3}`, content: "VEX: \"Moreover, it's said that TechNex Corp. is among the main financiers of Mayor Sato's campaign... but I can't verify this information.\""},
    {id: 370, url: `${foto6}`, character: `${char3}`, content: "YOU: \"I know well who TechNex Corp is... and who Maximillian Wolfe is...\""},


]




export default dialoghi3;