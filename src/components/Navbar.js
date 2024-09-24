import { Box, Container, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Stack, Typography, useTheme } from '@mui/material'
import React, { useContext, useState } from 'react'

import { Link as ScrollLink } from 'react-scroll';
import { Appbarstyle, MaterialUISwitch, Toolbarstyle } from '@/theme/theme';
import Switch from '@/helper/toggleswitch';
import ThemeSwitch from '@/helper/toggleswitch';
import { ThemeContext } from '@/theme/fontheme';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from "react-icons/io5"
import { AlertBox } from '@/popup/alert';

export const Navbar = () => {
    const theme = useTheme()
    const [open, setOpen] = useState(false);
    const [state, setState] = React.useState({
        right: false,
    });
   
    const { toggleTheme } = useContext(ThemeContext)
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <ListSubheader  sx={{background: theme?.palette?.mode === "dark" && "#000000" }}>
                <Stack direction={"row"} justifyContent={"space-between"}  alignItems={"center"} mt={2} mb={2}>
                 
                    <Box sx={{ display: "flex", gap: 0.7 }}>
                     <Box  mt={1.3} className="Box-name-menu-1-mob"sx={{ backgroundColor: "#EDA323" }}>
                            <Typography className='typo-nav-mob'>A</Typography>
                        </Box>
                            <Typography variant='h3' className='h5-nav-mob'>
                                Alan Singh 
                    
                            </Typography>
                        
                   
                    </Box>
                    <IoClose style={{color: "#000000"}} fontSize='medium' onClick={toggleDrawer(anchor, false)} /> 
                </Stack>
            </ListSubheader>
            <Divider sx={{background: theme?.palette?.mode === "dark" && "#FFF"}} variant="middle" />
            <List>
                {['About', 'Skills', 'Experience', 'Project', "Contact"].map((text, index) => (

                    <ListItem key={text} disablePadding>
                        <ScrollLink to={text} smooth={true} duration={500} className='style-pointer'>
                            <ListItemButton onClick={toggleDrawer(anchor, false)}>
                                <ListItemText primary={text} style={{fontSize: "16px"}} />
                            </ListItemButton>
                        </ScrollLink>
                    </ListItem>

                ))}
            </List>
            <Divider sx={{background: theme?.palette?.mode === "dark" && "#FFF" }} variant="middle" />

            {/* <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} mt={1} pr={2} pl={2}>
                <Box>
                   
                </Box>
                <MaterialUISwitch />
            </Stack> */}

            <div className='custom-download-cv'   onClick={handleClick}>
              <a href="/resume.pdf" download className='atagfooter'>
                <Typography variant='h6' className='body1-menu-variant' textAlign={"center"} color={"#FFFFFF"}>Download CV</Typography>
                </a>
            </div>
            <AlertBox open={open} close={handleClose} />

        </Box>
    );

    return (
        <>
            <Appbarstyle sx={{ background: theme?.palette?.mode === "light" ? "#FFF" : theme.palette.primary.main}} component="nav">
                <Container maxWidth="lg" sx={{ background: theme?.palette?.mode === "light" ? "#FFF" : theme.palette.primary.main}}>
                    <Toolbarstyle sx={{ background: theme?.palette?.mode === "light" ? "#FFF" : theme.palette.primary.main }} >
                        <Box sx={{ display: "flex" }}  gap={0.8} >
                        <Box className="Box-name-menu-1"sx={{ backgroundColor: "#EDA323" }}>
                            <Typography className='typo-nav'>A</Typography>
                        </Box>
                            <Typography variant='h3' className='h5-nav'>
                                Alan Singh 
                            </Typography>
                        </Box>
                        <Box sx={{ display: { xs: 'none', sm: 'none', md: "flex", lg: "flex" }, }} >
                            <Stack direction="row"
                                justifyContent="space-between"
                                alignItems={"center"}
                                width="20%"
                                gap={5}
                            >
                                <ScrollLink to="Home" smooth={true} duration={600} >
                                    <Typography variant='h6' className='h6-nav' >Home</Typography>
                                </ScrollLink>
                                <ScrollLink to="About"  smooth={true} duration={600} >
                                    <Typography variant='h6' className='h6-nav'>About</Typography>
                                </ScrollLink>
                                <ScrollLink to="Skills" smooth={true} duration={600} >
                                    <Typography variant='h6' className='h6-nav'>Skill</Typography>
                                </ScrollLink>
                                <ScrollLink to="Experience" smooth={true} duration={600} >
                                    <Typography variant='h6' className='h6-nav'>Experience</Typography>
                                </ScrollLink>
                                <ScrollLink to="Project" smooth={true} duration={600} >
                                    <Typography variant='h6' className='h6-nav'>Project</Typography>
                                </ScrollLink>

                                <ScrollLink to="Contact" smooth={true} duration={600} >
                                    <Typography variant='h6' className='h6-nav'>Contact</Typography>
                                </ScrollLink>

                                {/* <ThemeSwitch funct={toggleTheme} />  */}
                    
                                    {/* <MaterialUISwitch  /> */}
                                   
                            </Stack>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', sm: 'flex', md: "none", lg: "none" }, }}>

                            {['right'].map((anchor) => (
                                <React.Fragment key={anchor}>
                                    <GiHamburgerMenu style={{color: "#000000"}} fontSize='medium' onClick={toggleDrawer(anchor, true)}>{anchor}</GiHamburgerMenu>
                                    <Drawer 
                                        transitionDuration={{ enter: 500, exit: 500 }}
                                        anchor={anchor}
                                        open={state[anchor]}
                                        onClose={toggleDrawer(anchor, false)}
                                    >
                                        {list(anchor)}
                                    </Drawer>
                                </React.Fragment>
                            ))}
                        </Box>
                    </Toolbarstyle>
                </Container>
            </Appbarstyle>

        </>

    )

}

