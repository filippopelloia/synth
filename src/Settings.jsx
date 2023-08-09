import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SettingsIcon from '@mui/icons-material/Settings';
import Reset from './Reset.jsx'
// import {Link} from 'react-router-dom'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  color: '#fff',
  border: '3px solid crimson',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

export default function Settings() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className="setting-icon" onClick={handleOpen}><SettingsIcon /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="setting-row">
            <h5 className="setting-voice" style={{color: 'white'}}>Soundtrack from Youtube</h5>
            {/* <div className="soundtrack setting-btn btn-white" style={{backgroundColor: 'crimson', cursor: 'pointer'}}><a href="https://www.youtube.com/watch?v=W5KJsQMKbwM" target='_blank'>PLAY MUSIC FROM YouTube</a></div> */}
            <button className="btn-standard red-special">
              <a className='btn__content' href="https://www.youtube.com/watch?v=W5KJsQMKbwM" target='_blank'>
                <h5>PLAY</h5>
              </a>
            </button>
          </div>
          <div className='setting-row'>
            <h5 className="setting-voice" style={{color: 'white'}}>Restart the Game</h5>

            {/* <div className="soundtrack setting-btn" style={{backgroundColor: 'crimson', cursor: 'pointer'}}><Reset/></div> */}
            <button className="btn-standard red-special">
              <h5 className='btn__content'><Reset/></h5>
            </button>

          </div>
          <div className='setting-row' style={{justifyContent: 'center'}}>
            {/* <div className="soundtrack setting-btn" style={{backgroundColor: 'crimson', cursor: 'pointer'}} onClick={handleClose}>CLOSE</div> */}
            <button className="btn-standard red-standard" onClick={handleClose}>
              <h5 className='btn__content'>CLOSE</h5>
              <span className="btn__label">08735AH</span>
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}