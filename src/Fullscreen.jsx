import * as React from 'react'
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import Button from '@mui/material/Button';
import './App.css';

export default function Fullscreen() {

    const crimsonIconStyle = {
        color: 'crimson',
        opacity: 0.735,
        fontSize: '2.25em',
    };

  return (
    <>
        <Button>
            <FullscreenIcon style={crimsonIconStyle} />
        </Button>
    </>
  )
}
