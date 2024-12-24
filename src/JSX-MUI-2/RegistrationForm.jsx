import React, { useState } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Submit form data here
    };

    return (
        <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Username"
                            variant="outlined"
                            fullWidth
                            required
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            autoComplete="username"  // Added autocomplete attribute
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"  // Added autocomplete attribute for email
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            required
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            autoComplete="current-password"  // Added autocomplete attribute for password
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" fullWidth type="submit">
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default RegistrationForm;
