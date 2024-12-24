import React from 'react';
import { createTheme, ThemeProvider, Button } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ff6347', // Tomato
        },
        secondary: {
            main: '#4caf50', // Green
        },
    },
});

const CustomTheme = () => (
    <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary">
            Custom Themed Button
        </Button>
    </ThemeProvider>
);

export default CustomTheme;
