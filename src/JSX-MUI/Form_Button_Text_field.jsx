import React, { useState } from 'react';
import { Button, TextField, Card, CardContent, Typography, Container, Box } from '@mui/material';

const MyApp = () => {
    const [input, setInput] = useState('');

    const handleClick = () => {
        alert(`You entered: ${input}`);
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ marginTop: 4 }}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                            MUI React Example
                        </Typography>
                        <TextField
                            label="Enter something"
                            variant="outlined"
                            fullWidth
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            sx={{ marginBottom: 2 }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleClick}
                            sx={{ width: '100%' }}
                        >
                            Show Input
                        </Button>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default MyApp;
