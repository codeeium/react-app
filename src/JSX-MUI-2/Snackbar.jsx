import React, { useState } from 'react';
import { Snackbar, Button } from '@mui/material';

const SnackbarApp = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClick}>
                Show Alert
            </Button>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                message="This is a notification!"
                onClose={handleClose}
            />
        </div>
    );
};

export default SnackbarApp;
