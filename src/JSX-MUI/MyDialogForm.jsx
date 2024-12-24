import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Box, Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

const MyDialogForm = () => {
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // Handle form submit
    const onSubmit = (data) => {
        console.log('Form Submitted:', data);
        reset(); // Reset form after submission
        setOpen(false); // Close dialog after submission
    };

    // Open dialog
    const handleClickOpen = () => {
        setOpen(true);
    };

    // Close dialog
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ textAlign: 'center', marginTop: 5 }}>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Open Form Dialog
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Enter Your Information</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            {/* Name Field */}
                            <Grid item xs={12}>
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    {...register('name', { required: 'Name is required' })}
                                    error={!!errors.name}
                                    helperText={errors.name?.message}
                                />
                            </Grid>

                            {/* Email Field */}
                            <Grid item xs={12}>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: 'Please enter a valid email',
                                        },
                                    })}
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                            </Grid>

                            {/* Phone Number Field */}
                            <Grid item xs={12}>
                                <TextField
                                    label="Phone Number"
                                    variant="outlined"
                                    fullWidth
                                    {...register('phone', {
                                        required: 'Phone number is required',
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: 'Phone number must be 10 digits',
                                        },
                                    })}
                                    error={!!errors.phone}
                                    helperText={errors.phone?.message}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit(onSubmit)} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default MyDialogForm;
