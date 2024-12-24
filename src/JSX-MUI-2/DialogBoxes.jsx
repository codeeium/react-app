import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

const ConfirmationDialog = ({ open, onClose }) => (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogContent>
            Are you sure you want to proceed with this action?
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} color="primary">
                Cancel
            </Button>
            <Button onClick={onClose} color="primary" autoFocus>
                Confirm
            </Button>
        </DialogActions>
    </Dialog>
);

const DialogBoxes = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Open Dialog
            </Button>
            <ConfirmationDialog open={open} onClose={handleClose} />
        </div>
    );
};

export default DialogBoxes;
