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
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
          Listen to Music While Browsing:
          </Typography> */}
          <div className="setting-row">
            <h5 className="setting-voice" style={{color: 'white'}}>Soundtrack</h5>
            {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
            <div className="soundtrack setting-btn btn-white" style={{backgroundColor: 'crimson', cursor: 'pointer'}}><a href="https://www.youtube.com/watch?v=W5KJsQMKbwM" target='_blank'>Play Music from Youtube</a></div>
          </div>
          <div className='setting-row'>
            <h5 className="setting-voice" style={{color: 'white'}}>Restart the Game</h5>
            {/* <div className="soundtrack setting-btn" style={{backgroundColor: 'crimson'}}><a href="http://localhost:5173/">Reset</a></div> */}
            <div className="soundtrack setting-btn" style={{backgroundColor: 'crimson', cursor: 'pointer'}}><Reset/></div>
          </div>
          <div className='setting-row' style={{justifyContent: 'center'}}>
            <div className="soundtrack setting-btn" style={{backgroundColor: 'crimson', cursor: 'pointer'}} onClick={handleClose}>Close</div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}