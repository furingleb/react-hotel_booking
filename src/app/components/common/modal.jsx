import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';

const Modal = ({ open, onClose, title, children }) => {
  return (
    <Dialog className='modal' onClose={onClose} open={open} keepMounted>
      <DialogTitle className='modal-title'>
        {title}
        <IconButton className='modal-btn__close' onClick={onClose}>
          <CloseIcon aria-label='close' />
        </IconButton>
      </DialogTitle>
      {children}
    </Dialog>
  );
};

export default Modal;
