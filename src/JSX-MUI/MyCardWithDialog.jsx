import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, Box } from '@mui/material';

const MyCardWithDialog = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleDialogOpen = () => {
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                        Material UI Card
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        This is a simple card component with a button that opens a dialog when clicked.
                    </Typography>
                </CardContent>
                <Button size="small" color="primary" onClick={handleDialogOpen}>
                    Open Dialog
                </Button>
            </Card>

            {/* Dialog Component */}
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                        This is some content inside the dialog. You can add any kind of content here, including forms, text, or images.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default MyCardWithDialog;
