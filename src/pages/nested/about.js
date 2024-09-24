import { AlertBox } from '@/popup/alert'
import { Box, Button, Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { CiMail } from 'react-icons/ci'
import { HiDownload } from 'react-icons/hi'
import { Element } from 'react-scroll'

const About = () => {
  const [open, setOpen] = useState(false);
  const isXs = useMediaQuery(theme => theme.breakpoints.up('sm'));

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    < >
     <Head>
        <title>
         Alan Portfolio
        </title>
        <meta name="keyword" content="about"/>
      </Head>
 
      <Element name="About" className="element">
        <div className="about-box-1">
          <Container
            className="maxwidth-container"
          >
            <Box className="about-box-2">
              <Box className="custom-card" >
                <Grid container spacing={2} className="padding-custom-card">
                  <Grid xs={12} md={5} >
                    <Box sx={{ position: "relative" }} className="alan-about-image">

                      <Image src={'/assest/imageabout.png'} alt="imgal"
                        className="image-about-1"
                        width={390}
                        height={416} />

                      <Box className="custom-smallbox-cardnew">
                        <Stack direction={"row"} gap={2} p={{ xs: 1.3, sm: 1.3, md: 1.3 }} display={"flex"} justifyContent={{ xs: "center", md: "unset" }} alignItems={"center"}>

                          <div className="hover-image-bubble">
                            <Image src={'/assest/fb.png'} alt="Alan"
                              className="custom-about-hov-icon"
                              width={6}
                              height={14} />
                          </div>
                          <div className="hover-ball-bubble">
                            <Image src={'/assest/ball.png'} alt="Alan"
                              width={13}
                              height={13} />
                          </div>

                          <div className="hover-insta-bubble">
                            <Image src={'/assest/insta.png'} alt="Alan"

                              width={14}
                              height={14} />
                          </div>

                          <a href="https://www.linkedin.com/in/alan-singh-478358315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <div className="hover-ind-bubble">
                              <Image src={'/assest/in.png'} alt="Alan"
                                width={13}
                                height={13} />
                            </div>
                          </a>



                          <a href="https://www.behance.net/alansingh3" target="_blank" rel="noopener noreferrer">
                            <div className="hover-be-bubble">
                              <Image src={'/assest/be.png'} alt="Alan"
                                width={14}
                                height={10} />
                            </div>
                          </a>

                        </Stack>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid xs={12} md={7} mt={{ xs: 4, md: 0 }}>
                    <Typography variant="h3" className="about-h3">About Me</Typography>
                    <Typography variant="h3" className="about-h2" mt={1.5}>I am Professional User Experience Designer</Typography>
                    <Typography variant="body2" textAlign={"justify"} className="about-body2" mt={1.6}>
                      I specialize in creating user-friendly interfaces
                      with over two years of experience in UI/UX design. My background in
                      Mechanical Engineering provides me with a unique
                      problem-solving perspective, which I apply to a
                      variety of design projects, from small business
                      websites to large-scale applications
                    </Typography>
                    <Typography variant="body2" textAlign={"justify"} className="about-body2" mt={1.6}>
                      I began my journey in 2022 and have since developed strong skills in tools like Figma,
                      Adobe XD, and Sketch. I’m passionate about end-to-end product design, ensuring that every step
                      is focused on delivering the best user experience.
                    </Typography>

                    <Typography variant="body2" className="about-body2" textAlign={"justify"} mt={2}>
                      Some quick facts about me:
                    </Typography>

                    <Box mt={1.5} ml={2.5}>
                      <ul>
                        <li className="li-about">
                          <Typography variant="body2" className="about-body2" textAlign="justify" mb={0.3}>
                            B.E. in Mechanical Engineering
                          </Typography>
                        </li>
                        <li className="li-about">
                          <Typography variant="body2" className="about-body2" textAlign="justify" mb={0.3}>
                            2+ years of experience in UI/UX Design
                          </Typography>
                        </li>
                        <li className="li-about">
                          <Typography variant="body2" className="about-body2" textAlign="justify" mb={0.3}>
                            Proficient in Figma, Adobe XD, and Sketch
                          </Typography>
                        </li>
                        <li className="li-about">
                          <Typography variant="body2" className="about-body2" textAlign="justify" mb={0.3}>
                            Strong problem-solving skills from an engineering background
                          </Typography>
                        </li>
                        <li className="li-about">
                          <Typography variant="body2" className="about-body2" textAlign="justify" mb={0.3}>
                            Enjoys outdoor activities and exploring new technologies
                          </Typography>
                        </li>
                      </ul>
                    </Box>
                    <Box mt={3} rowGap={2} className="button-box-about">
                      <a href="mailto:alansingh245@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button variant="contained" className="btn-contained" sx={{ backgroundColor: "#EDA323" }} startIcon={<CiMail style={{ color: "#F1F1F1" }} />} >
                          <Typography variant="button" className="button-about-span">Mail Me</Typography>
                        </Button>
                      </a>
                      <a href="/resume.pdf" download className='atagfooter'>
                        <Button
                          size={isXs === false ? 'small' : 'medium'}
                          onClick={handleClick}
                          variant="outlined"
                          className="btn-outlined"
                          sx={{ borderColor: "#EDA323", marginLeft: { sm: '20px' }, borderRadius: "8px" }}
                          startIcon={<HiDownload style={{ color: "#EDA323" }} />}
                        >

                          <Typography variant="button" className="button-about-span2">Download CV</Typography>

                        </Button>
                      </a>
                      <AlertBox open={open} close={handleClose} />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </div>
      </Element>

   </>
  )
}

export default About