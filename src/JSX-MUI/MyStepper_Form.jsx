import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Box, Typography, TextField, Grid, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

const MyStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
    });

    const steps = ['Personal Information', 'Shipping Address', 'Confirm Details'];

    // Handle next step
    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    // Handle previous step
    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    // Handle form data change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission (final step)
    const handleSubmit = () => {
        console.log('Form Submitted:', formData);
    };

    return (
        <Box sx={{ width: '100%', padding: 3 }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Box sx={{ paddingTop: 3 }}>
                {activeStep === 0 && (
                    <Box>
                        <Typography variant="h6">Personal Information</Typography>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            sx={{ marginBottom: 2 }}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            sx={{ marginBottom: 2 }}
                        />
                    </Box>
                )}

                {activeStep === 1 && (
                    <Box>
                        <Typography variant="h6">Shipping Address</Typography>
                        <TextField
                            label="Address"
                            variant="outlined"
                            fullWidth
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            sx={{ marginBottom: 2 }}
                        />
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    label="City"
                                    variant="outlined"
                                    fullWidth
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Zip Code"
                                    variant="outlined"
                                    fullWidth
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                )}

                {activeStep === 2 && (
                    <Box>
                        <Typography variant="h6">Confirm Details</Typography>
                        <Typography>Name: {formData.name}</Typography>
                        <Typography>Email: {formData.email}</Typography>
                        <Typography>Address: {formData.address}</Typography>
                        <Typography>City: {formData.city}</Typography>
                        <Typography>Zip: {formData.zip}</Typography>
                    </Box>
                )}

                <Box sx={{ paddingTop: 3 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                        sx={{ marginRight: 2 }}
                    >
                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                    {activeStep > 0 && (
                        <Button variant="outlined" onClick={handleBack}>
                            Back
                        </Button>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default MyStepper;
