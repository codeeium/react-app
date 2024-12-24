import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const BlogCard = () => (
    <Card sx={{ maxWidth: 345 }}>
        <CardContent>
            <Typography variant="h5" component="div">
                Blog Post Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
                This is a short excerpt from the blog post. Click below to read more.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" color="primary">
                Read More
            </Button>
        </CardActions>
    </Card>
);

export default BlogCard;
