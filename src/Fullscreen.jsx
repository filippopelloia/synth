import React, {useState} from 'react'
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import Button from '@mui/material/Button';
import './App.css';

export default function Fullscreen() {
    const[fullscreen, setFullscreen] = useState(false)

    const crimsonIconStyle = {
        color: 'crimson',
        opacity: 0.735,
        fontSize: '1.95em',
        filter: 'blur(0.75px)'
    };

    const handleFullscreenToggle = () => {
        if (document.fullscreenEnabled) {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(err => {
                    console.log('Errore durante il passaggio alla modalità schermo intero:', err);
                });
                setFullscreen(true);
            } else {
                document.exitFullscreen();
                setFullscreen(false);
            }
        } else {
            console.log('Fullscreen is not support in your browser.');
        }
    };

  return (
    <>
        <Button onClick={handleFullscreenToggle}>
            {fullscreen ? 
                <FullscreenExitIcon style={crimsonIconStyle} /> :
                <FullscreenIcon style={crimsonIconStyle} />
            }
        </Button>
    </>
  )
}
