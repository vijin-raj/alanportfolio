import { Appbarstyle, Toolbarstyle } from '@/theme/theme'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { CiMail } from "react-icons/ci";
import { IoCopyOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import React from 'react'
import Image from 'next/image';
import { Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export const Footer = () => {

  const options = {
    duration: 3000,
    smooth: true,
  };

  const scrollToTop = () => {
    scroll.scrollToTop(options);
  };
  return (
    <>
      <Element name="Contact" className="element">
        <Container maxWidth="lg">
          <div className='footer-div'>

            <Box className="box-footer-1" mb={2} >
              <Typography variant="h3" className='footer-h3'>Get in touch</Typography>

            </Box>

            <Box mb={3}>

              <Typography variant="h4" className='p-footer'>
                {`What’s next? Feel free to reach out to me if you're looking ,`}
              </Typography>

              <Typography variant="h4" className='p-footer'>
                for a developer have a query, or simply want to connect.
              </Typography>

            </Box>

            <Box className="box-footer-2" mb={0.8} mt={5}>
              <Stack direction="row" spacing={{ xs: 1, sm: 2 }} alignItems={"center"}>
                <CiMail className='footer-icon-1' />
                <a href="mailto:alansingh245@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography variant="h2" className='h2-footer'>alansingh245@gmail.com</Typography>
                </a>
                <IoCopyOutline className='footer-icon-1' />
              </Stack>
            </Box>

            <Box className="box-footer-2" mb={3} mt={2} >
              <Stack direction="row" spacing={{ xs: 1, sm: 2 }} alignItems={"center"}>
                <LuPhone />
                <a href="tel:+918903250232" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography variant="h2" className='h2-footer'>+91 8903250232</Typography>
                </a>
                <IoCopyOutline className='footer-icon-1' />
              </Stack>
            </Box>



          </div>
        </Container>
      </Element>
      <Appbarstyle position="static" sx={{ backgroundColor: "#132238", marginTop: '10px' }}>
        <Container maxWidth="lg">
          <div className='footer-div2'>
            <Grid container >
              <Grid xs={4} >
                <Typography variant="h3" className='footer-h6'>{`Let's Connect`}</Typography>
              </Grid>
              <Grid xs={4} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Stack direction={"row"} gap={{ xs: 1.3, sm: 3, md: 5 }} p={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>

                  <Image src={'/assest/fb.png'} alt="Alan"
                    className='image-fb-footer'
                    width={9}
                    height={19} />

                  <Image src={'/assest/ball.png'} alt="Alan"
                    className='image-ball-footer'
                    width={18}
                    height={18} />
                  <a href="https://www.behance.net/alansingh3" target="_blank" rel="noopener noreferrer">
                    <Image src={'/assest/be.png'} alt="Alan"
                      className='image-insta-footer'
                      width={18}
                      height={15} />
                  </a>
                  <Image src={'/assest/insta.png'} alt="Alan"
                    className='image-insta-footer'
                    width={18}
                    height={18} />
                  <a href="https://www.linkedin.com/in/alan-singh-478358315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                    <Image src={'/assest/in.png'} alt="Alan"
                      className='image-in-footer'
                      width={18}
                      height={18} />
                  </a>
                </Stack>
              </Grid>
              <Grid xs={4}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }} gap={{ xs: 1, sm: 2 }} >

                  <Typography variant="h5" className='footer-h6 footer-end' sx={{ cursor: "pointer" }} onClick={scrollToTop}>{`Back to Top`}</Typography>
                  <Image src={'/assest/arrow.png'} onClick={scrollToTop} style={{ cursor: "pointer" }} alt="Alan"
                    className='footer-arrow-final'
                    width={18}
                    height={24} />

                </Box>

              </Grid>
            </Grid>
          </div>
        </Container>
      </Appbarstyle>
    </>

  )
}
