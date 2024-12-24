import React from 'react';
import {Card, CardContent, CardActions, Button, Grid, Typography, Paper} from '@mui/material';

const MyCardLayout = () => {
    const cardData = [
        {
            title: 'Card 1',
            description: 'This is a description for card 1.',
        },
        {
            title: 'Card 2',
            description: 'This is a description for card 2.',
        },
        {
            title: 'Card 3',
            description: 'This is a description for card 3.',
        },
        {
            title: 'Card 4',
            description: 'This is a description for card 4.',
        },
    ];

    return (
        <Paper sx={{padding: 4}}>
            <Grid container spacing={4}>
                {cardData.map((card, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card sx={{height: '100%'}}>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {card.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default MyCardLayout;
