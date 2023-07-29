import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 435,
  bgcolor: 'crimson',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '5px',
  p: 4,
};

export default function Reset() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="unSelect" onClick={handleOpen}>RESET</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h5 className="setting-voice" style={{ color: 'white'}}>Do you want to restart the game?</h5>
          <div className="setting-row" style={{width: '32vh'}}>
            <div className="soundtrack setting-btn btn-white" style={{backgroundColor: 'black', cursor: 'pointer'}}><a href="http://localhost:5173/">RESET</a></div>
            <div className="soundtrack setting-btn" style={{backgroundColor: 'transparent', cursor: 'pointer'}} onClick={handleClose}>RETURN</div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
