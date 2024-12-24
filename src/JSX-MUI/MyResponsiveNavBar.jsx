import React, { useState } from 'react';
import { AppBar, Box, Button, CssBaseline, Drawer, IconButton, Toolbar, Typography, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const MyResponsiveNavBar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawerToggle = () => {
        setOpenDrawer(!openDrawer);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            {/* AppBar: Top Navigation Bar */}
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none', md: 'none' } }} // Hide the menu button on larger screens
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        My Website
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            {/* Drawer: Sidebar Navigation */}
            <Drawer
                variant="temporary"
                open={openDrawer}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true, // Improve mobile performance
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' }, // Show drawer only on small screens
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <List>
                    <ListItem button>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Services" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Contact" />
                    </ListItem>
                </List>
            </Drawer>

            {/* Main Content */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: 'background.default',
                    p: 3,
                    mt: 8, // To avoid the content being hidden behind AppBar
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Welcome to My Website
                </Typography>
                <Typography variant="body1">
                    This is a simple responsive navigation bar example built with MUI in React.
                </Typography>
            </Box>
        </Box>
    );
};

export default MyResponsiveNavBar;
