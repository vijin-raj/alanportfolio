import { experienceWork } from '@/data/mappingdata'
import { Box, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import { Element } from 'react-scroll'

const Experience = () => {
  return (
   <>
   <Head>
        <title>
        Alan Portfolio
        </title>
        <meta name="keyword" content="experience"/>
      </Head>
      <Element name="Experience" className="element">
        <div className="experiences-sec">
          <Container maxWidth="lg">
            <div className="my-experiences-1">
              <Typography variant="h3" mt={3} mb={2.5} textAlign={"center"} className="h3-projects">Experiences</Typography>
              <Typography variant="subtitle1" textAlign={"center"} className="myProject-subtitle" mt={2}>Here is a quick summary of my most recent experiences</Typography>

              <Box mt={5} >
                <Grid container spacing={1} >
                  <Grid >
                    <Stack spacing={4}
                      className="workprocess-card-grid"
                      direction="row"
                      useFlexGap
                      sx={{ flexWrap: 'wrap' }}
                    >
                      {
                        experienceWork?.map((item, index) => {
                          return (

                            <Box key={index}>
                              <Card className="card-experience-boxshadow" >
                                <CardContent>
                                  <Typography mt={1} gutterBottom variant="h3" className="h3-cardexperience">
                                    {item?.name}
                                  </Typography>

                                  <Typography gutterBottom variant="h6" className="h6-cardexperience">
                                    {item?.company}
                                  </Typography>

                                  <Typography mt={1} gutterBottom variant="subtitle2" className="subtitle-experience">
                                    {item?.duration}
                                  </Typography>

                                  <Typography gutterBottom variant="subtitle1" className="subtitle1-experience">
                                    {item?.content}
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Box>

                          )
                        })
                      }
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </Container>
        </div>
      </Element>
   </>
  )
}

export default Experience