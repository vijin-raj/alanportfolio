import {Box, Card, CardContent, Container, Grid, Paper,Stack,Typography, useMediaQuery } from "@mui/material";
import { Toolbarstyle } from "@/theme/theme";
import {cardWork} from "@/data/mappingdata";
import Image from "next/image";
import { Element} from 'react-scroll';
import About from "./nested/about";
import Skill from "./nested/skill";
import Whatido from "./nested/whatido";
import Experience from "./nested/experience";
import ProjectAll from "./nested/project";


export default function Home() {
  const isMd = useMediaQuery(theme => theme.breakpoints.up('md'));
  const isXs = useMediaQuery(theme => theme.breakpoints.up('sm'));


  return (
    <>

      <Element name="Home" className="element">
        <Box component={"main"} className="home-box-1" >
          <Toolbarstyle />
          <Container maxWidth="lg" >
            <div className="home-head">
              <Grid container spacing={2} direction={isMd ? 'row' : 'column-reverse'}>
                <Grid item md={6}>
                  <Box mt={{ xs: 1, md: 5 }} mb={5}>
                    <Box mb={1.5}>
                      <Image src={'/assest/round.png'} alt="Picture of the author"
                        width={16}
                        height={16} />
                    </Box>
                    <p className="home-ptag"> Hey!</p>
                    <Typography variant="h1" className="h1-home" mt={1.5}>
                      <span className="im-span">{`I'm`}</span>
                      <span className="span-name">
                        Alan Singh
                      </span>
                      <span className="im-span span-responsive">{` an UI/UX Designer.`}</span>
                    </Typography>
                    <Typography variant="h1" className="ux-ui-cont" mt={0.5}>{`an UI/UX Designer.`}</Typography>
                    <Box mt={{ xs: 1, sm: 2 }} className="mob-line-home" sx={{ display: "flex", justifyContent: "center", position: "relative", right: "30px" }}>

                      <Image src={'/assest/line.png'} alt="Picture of the author"
                        className="image-line-home"
                        width={320}
                        height={19} />

                    </Box>
                    <Typography variant="body1" className="body1-home-content" mt={{ sm: 1, md: 3 }}>I am a
                      <span className="bg-img-ux img-pad-1" style={{ padding: '2px', marginLeft: "2px", marginRight: "2px" }}> UI/UX Designer </span>
                      with more than   <span className="bg-img-ux img-pad-2" style={{ padding: '2px' }}> 2 years </span>of experience, specializing
                      in designing elegant and user-centric web applications. My goal is to create digital
                      products that are visually engaging,
                      easy to navigate, and optimized for both user satisfaction and business outcomes</Typography>
                  </Box>
                  <Stack direction="row" spacing={0.5}>
                    <Paper elevation={0} className="paper-color-home">
                      <Box mt={{ xs: 1.5, sm: 2.3 }}>
                        <Typography variant="h3" className="h4-typohome-textVarient">
                          2Y+
                        </Typography>
                        <Typography variant="h5" className="p-experience">
                          Experience
                        </Typography>
                      </Box>
                    </Paper>
                    <Paper elevation={0} className="paper-color-home">
                      <Box mt={{ xs: 1.5, sm: 2.3 }}>
                        <Typography variant="h3" className="h4-typohome-textVarient">
                          10+
                        </Typography>
                        <Typography variant="h5" className="p-experience">
                          Project Completed
                        </Typography>
                      </Box>
                    </Paper>
                  </Stack>
                </Grid>
                <Grid item md={6} >
                  <Box mt={7} mb={{ md: 2 }}>
                    <Box mb={1.5} className="alan-home-box">
                      {
                        isXs === false ?
                          <Image src={'/assest/almobvieew.png'} alt="Alan"
                            className="image-home-alan-mobile"
                            width={250}
                            height={311} />
                          :
                          <Image src={'/assest/alanhome2.png'} alt="Alan"
                            className="image-home-alan"
                            width={580}
                            height={520} />
                      }

                    </Box>
                  </Box>
                </Grid>
              </Grid>

            </div>
          </Container>
        </Box>
      </Element>

      <About/>

      <div className="work-process">
        <Container maxWidth="md" className="container-workprocess">
          <div className="workprocess-top">
            <Grid container spacing={1} >
              <Grid item md={5} className="workprocess-card-grid-all" >

                <Typography variant="h3" className="h3-typo-workprocess" textAlign={{ xs: "center", md: "unset" }}>Work Process</Typography>
                <Typography variant="subtitle1" className="subtittle-1-work" mt={2} textAlign={{ xs: "center", sm: "unset" }}>
                  Streamline your tasks with efficient planning and collaboration to achieve seamless project execution.
                  Focus on quality and consistency to ensure successful outcomes at every stage
                </Typography>

                <Typography variant="subtitle1" className="subtittle-1-work" mt={2} textAlign={{ xs: "center", sm: "unset" }}>
                  Prioritize tasks, allocate resources effectively, and maintain clear communication.
                  Continuously monitor progress to ensure timely and high-quality results
                </Typography>
              </Grid>

              <Grid item md={7} mt={{ xs: 4, sm: 0, md: 0 }} >
                <Stack spacing={2}
                  className="workprocess-card-grid"
                  direction="row"
                  useFlexGap
                  sx={{ flexWrap: 'wrap' }}
                >
                  {
                    cardWork?.map((item, index) => {
                      return (
                        <Box key={index}>
                          <Card variant="outlined" className="card-box">
                            <CardContent>
                              <Image src={item?.image} alt="Alan"
                                width={52}
                                height={52} />
                              <Typography variant="h3" className="h3-card-work">{index + 1}. {item?.name}</Typography>
                              <Typography variant="subtitle1" className="h6-card-work" mt={1}>
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
          </div>
        </Container>

      </div>

      <Skill/>
      <Whatido/>
      <Experience/>
      <ProjectAll/>
   
    </>
  );

}
