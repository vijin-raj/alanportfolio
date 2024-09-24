import { cardIdo } from '@/data/mappingdata'
import { Box, Button, Card, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const Whatido = () => {
  return (
    <>
        <div className="what-ido-sec">
        <Container className="container-workprocess">
          <div className="what-ido-1">
            <Grid container spacing={2}>
              <Grid md={6} className="workprocess-card-grid-all">
                <Typography variant="h3" className="h3-typo-workprocess" textAlign={{ xs: "center", md: "unset" }}>What I do?</Typography>
                <Box pr={{ md: 3, lg: 7 }}>
                  <Typography variant="subtitle1" className="subtittle-1-what-i-do" mt={2} pr={{ md: 10 }} textAlign={{ xs: "center", sm: "unset" }}>
                    I specialize in creating intuitive and user-centered digital experiences, focusing on seamless interaction design and aesthetic appeal. With a keen eye for detail,
                    I ensure that every interface I design is both functional and visually engaging for the end user.
                  </Typography>
                </Box>
                <Box mt={{ xs: 3, md: 3.5 }} mb={{ xs: 3, md: 0 }} sx={{ display: { xs: "flex", md: "unset" }, justifyContent: { xs: "center", md: "unset" } }} className="button-whatido-last">
                  <Button
                    variant="contained" className="btn-contained" sx={{ backgroundColor: "#EDA323" }} >
                    <Typography variant="button" className="button-about-span">Say Hello!</Typography>
                  </Button>
                </Box>
              </Grid>

              <Grid md={6} >
                <Stack spacing={2}
                  className="workprocess-card-grid"
                  direction="row"
                  useFlexGap
                  sx={{ flexWrap: 'wrap' }}
                >
                  {
                    cardIdo?.map((item, index) => {
                      return (
                        <Box className="what-ido-box" key={index} >
                          <Card variant="outlined" className="card-box2">
                            <Box className="padding-card-box">
                              <Typography variant="h3" className="h3-cardnew-work">{item?.name}</Typography>
                              <Typography variant="h4" mt={1.5} className="h6-cardnew-work">
                                {item?.content}
                              </Typography>
                            </Box>
                          </Card>
                        </Box>
                      )
                    })
                  }

                </Stack>

              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Whatido