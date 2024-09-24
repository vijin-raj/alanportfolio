import { useEffect } from 'react'
import { useState } from 'react'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Skeleton, Tab, Tabs, Typography, useMediaQuery } from '@mui/material'
import Head from 'next/head'
import { FaArrowRight } from 'react-icons/fa'
import Carousel from 'react-material-ui-carousel'
import { Element } from 'react-scroll'
import { projectdata } from '@/data/mappingdata'

const ProjectAll = () => {
    const [data, setdata] = useState(null)
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
    const isMd = useMediaQuery(theme => theme.breakpoints.up('md'));
  
    
  const handleChange = (event, newValue) => {
    setLoading(true);
    setValue(newValue);

    setTimeout(() => {
      if (newValue === 0) {
        setdata(projectdata?.slice(0,6));
      } else if (newValue === 1) {
        const ProjectFilter = projectdata.filter((arr) => arr.name === 'UI/UX Case Study');
        setdata(ProjectFilter);
      } else if (newValue === 2) {
        const ProjectFilter = projectdata.filter((arr) => arr.name === 'Website UI-UX Design');
        setdata(ProjectFilter);
      } else if (newValue === 3) {
        const ProjectFilter = projectdata.filter((arr) => arr.name === 'Mobile Application UI-UX DESIGN');
        setdata(ProjectFilter);
      }

      else {
        setdata(projectdata);
      }
      setLoading(false);
    }, 3000);
  };

  const handleClickalert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      handleChange(null, 0);
    }, 3000);
  }, []);
  return (
    <>
       <Head>
        <title>
        Alan Portfolio
        </title>
        <meta name="keyword" content="project"/>
      </Head>

       <Element name="Project" className="element">
        <div className="my-projects">
          <Container maxWidth="lg">
            <div className="my-projects-1">
              <Typography variant="h3" mb={2} textAlign={"center"} className="h3-projects">My Projects</Typography>
              <Typography variant="subtitle1" textAlign={"center"} className="myProject-subtitle">Here are some projects I worked on, showcasing my UI/UX design skills and contributions.</Typography>
              <Box mt={3} className="tab-box">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                  TabIndicatorProps={{ style: { display: 'none' } }}

                >
                  <Tab label="All" className="custom-tab" />
                  <Tab label="UI/UX Case Study" className="custom-tab" />
                  <Tab label="Website Design" className="custom-tab" />
                  <Tab label="Mobile Application Design" className="custom-tab" />

                </Tabs>
              </Box>
              <Box mt={{ xs: 5, sm: 10 }} mb={8}>

                <Grid container spacing={2} direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {!isMd ? (
                    <Carousel indicators={true} sx={{ width: "80%", height: "100%" }} navButtonsAlwaysInvisible={true}>
                      {(loading ? Array.from(new Array(3)) : data)?.map((item, index) => {
                        return (
                          <Grid item md={4} key={index} sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}>

                            <Box sx={{ width: { xs: '100%', sm: "90%", md: "95%" } }}   >

                              <Card className="card-project-boxshadow" >
                                <CardActionArea>
                                  {
                                    item ?
                                      <CardMedia
                                        component="img"
                                        height="75%"
                                        image={item?.image}
                                        alt="green iguana"
                                      /> :
                                      <Skeleton sx={{ height: 290, width: { xs: 600, sm: 500, md: 600 } }} animation="wave" variant="rectangular" />
                                  }

                                  {
                                    item ?
                                      <CardContent>
                                        <Typography gutterBottom variant="h6" className="h6-myprojcard-1" component="div">
                                          {item?.name}
                                        </Typography>

                                        <Typography gutterBottom variant="h3" className="h3-myprojcard-1" mt={1}>
                                          {item?.title}
                                        </Typography>
                                        <Typography variant="h5" className="h5-myprojcard-1" mt={1} mb={1}>
                                          {item?.content}

                                        </Typography>
                                        <Box mt={2} mb={1.5}>
                                          {item?.link ? (
                                            <a href={item?.link} target="_blank" rel="noopener noreferrer" >
                                              <Button
                                                variant="outlined"
                                                className="btn-outlined-project"
                                                sx={{ borderColor: "#EDA323" }}
                                                endIcon={<FaArrowRight style={{ color: "#EDA323" }} />}

                                              >
                                                <Typography variant="h3" className="button-about-spanproject">{item?.btncontent}</Typography>
                                              </Button>
                                            </a>
                                          ) : <Button
                                            variant="outlined"
                                            onClick={handleClickalert}
                                            className="btn-outlined-project"
                                            sx={{ borderColor: "#EDA323" }}
                                            endIcon={<FaArrowRight style={{ color: "#EDA323" }} />}
                                          >
                                            <Typography variant="h3" className="button-about-spanproject">{item?.btncontent}</Typography>
                                          </Button>}

                                        </Box>
                                      </CardContent> : (
                                        <Box sx={{ pt: 1, height: "160px" }}>
                                          <Skeleton animation="wave" width="50%" mt={1} mb={1} />
                                          <Skeleton animation="wave" width="80%" mt={1} />
                                          <Skeleton variant="rectangular" width="90%" height={100} mt={1} mb={1} />
                                          <Skeleton animation="wave" width="60%" mt={1} />

                                        </Box>
                                      )

                                  }


                                </CardActionArea>
                              </Card>

                            </Box>

                          </Grid>
                        )
                      })

                      }
                    </Carousel>
                  ) : (

                    (loading ? Array.from(new Array(3)) : data)?.map((item, index) => {

                      return (
                        <Grid item md={4} key={index} sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}>

                          <Box sx={{ width: { xs: '100%', sm: "90%", md: "95%" } }}   >

                            <Card className="card-project-boxshadow" >
                              <CardActionArea>
                                {
                                  item ?
                                    <CardMedia
                                      component="img"
                                      height="75%"
                                      image={item?.image}
                                      alt="green iguana"
                                    /> :
                                    <Skeleton sx={{ height: 290, width: { xs: 600, sm: 500, md: 600 } }} animation="wave" variant="rectangular" />
                                }

                                {
                                  item ?
                                    <CardContent>
                                      <Typography gutterBottom variant="h6" className="h6-myprojcard-1" component="div">
                                        {item?.name}
                                      </Typography>

                                      <Typography gutterBottom variant="h3" className="h3-myprojcard-1" mt={1}>
                                        {item?.title}
                                      </Typography>
                                      <Typography variant="h5" className="h5-myprojcard-1" mt={1} mb={1}>
                                        {item?.content}

                                      </Typography>
                                      <Box mt={2} mb={1.5}>
                                        {item?.link ? (
                                          <a href={item?.link} target="_blank" rel="noopener noreferrer" >
                                            <Button
                                              variant="outlined"

                                              className="btn-outlined-project"
                                              sx={{ borderColor: "#EDA323" }}
                                              endIcon={<FaArrowRight style={{ color: "#EDA323" }} />}
                                            >
                                              <Typography variant="h3" className="button-about-spanproject">{item?.btncontent}</Typography>
                                            </Button>
                                          </a>
                                        ) : <Button
                                          variant="outlined"
                                          type="button"
                                          onClick={handleClickalert}
                                          className="btn-outlined-project"
                                          sx={{ borderColor: "#EDA323" }}
                                          endIcon={<FaArrowRight style={{ color: "#EDA323" }} />}
                                        >
                                          <Typography variant="h3" className="button-about-spanproject">{item?.btncontent}</Typography>
                                        </Button>}

                                      </Box>
                                    </CardContent> : (
                                      <Box sx={{ pt: 1, height: "160px" }}>
                                        <Skeleton animation="wave" width="50%" mt={1} mb={1} />
                                        <Skeleton animation="wave" width="80%" mt={1} />
                                        <Skeleton variant="rectangular" width="90%" height={100} mt={1} mb={1} />
                                        <Skeleton animation="wave" width="60%" mt={1} />

                                      </Box>
                                    )

                                }


                              </CardActionArea>
                            </Card>

                          </Box>

                        </Grid>
                      )
                    })
                  )}
                </Grid>
              </Box>
            </div>

          </Container>

        </div>
      </Element>
    </>
  )
}

export default ProjectAll