import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const SlideBar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => setOpen(!open);

    return (
        <Box sx={{ display: 'flex' }}>
            <IconButton color="primary" onClick={toggleDrawer} edge="start">
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={open} onClose={toggleDrawer}>
                <List>
                    <ListItem button>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
};

export default SlideBar;
