import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Card, CardContent, Typography, Box } from '@mui/material';

const MyResponsiveForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = () => {
        setSubmittedData({ name, email });
    };

    return (
        <Container>
            <Box sx={{ marginTop: 4 }}>
                <Grid container spacing={3}>
                    {/* Form Inputs */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            fullWidth
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>

                {/* Submitted Data Card */}
                {submittedData && (
                    <Card sx={{ marginTop: 4 }}>
                        <CardContent>
                            <Typography variant="h6">Submitted Data</Typography>
                            <Typography variant="body1">
                                <strong>Name:</strong> {submittedData.name}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Email:</strong> {submittedData.email}
                            </Typography>
                        </CardContent>
                    </Card>
                )}
            </Box>
        </Container>
    );
};

export default MyResponsiveForm;
