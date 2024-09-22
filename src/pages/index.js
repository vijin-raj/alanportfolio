import { Alert, Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Paper, Skeleton, Stack, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import { CiMail } from "react-icons/ci";
import { HiDownload } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { Toolbarstyle } from "@/theme/theme";
import { useEffect, useState } from "react";
import { cardIdo, cardWork, experienceWork, figmaimage, projectdata } from "@/data/mappingdata";
import { AlertBox } from "@/popup/alert";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import { Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Link from "next/link";


export default function Home() {
  const [data, setdata] = useState(null)
  const [activeButton, setActiveButton] = useState('all');
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const isMd = useMediaQuery(theme => theme.breakpoints.up('md'));
  const isXs = useMediaQuery(theme => theme.breakpoints.up('sm'));

  const [showAlert, setShowAlert] = useState(false);

  const handleClickalert = () => {
    setShowAlert(true);
    // Optionally, you can set a timeout to hide the alert after a few seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // Hide after 3 seconds
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

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setLoading(true);
    setValue(newValue);

    setTimeout(() => {
      if (newValue === 0) {
        setdata(projectdata);
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      handleChange(null, 0);
    }, 3000);
  }, []);

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

                      <Image src={'/assest/imagea.png'} alt="Alan"
                        className="image-about-1"
                        width={390}
                        height={416} />

                      <Box className="custom-smallbox-cardnew">
                        <Stack direction={"row"} gap={2} p={{ xs: 1.3, sm: 1.3, md: 1.3 }} display={"flex"} justifyContent={{ xs: "center", md: "unset" }} alignItems={"center"}>
                         
                         
                          <Image src={'/assest/fb.png'} alt="Alan"
                            className="custom-about-hov-icon"
                            width={6}
                            height={14} />
                           
                        
                          <Image src={'/assest/ball.png'} alt="Alan"
                            width={13}
                            height={13} />

                          <Image src={'/assest/insta.png'} alt="Alan"
                            width={14}
                            height={14} />
                      <a href="https://www.linkedin.com/in/alan-singh-478358315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                          <Image src={'/assest/in.png'} alt="Alan"
                            width={13}
                            height={13} />
                            </a>
                          <a href="https://www.behance.net/alansingh3" target="_blank" rel="noopener noreferrer">
                          <Image src={'/assest/be.png'} alt="Alan"
                            width={14}
                            height={10} />
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

      <Element name="Skills" className="element">
        <div className="skills-section">
          <Container maxWidth="md">
            <div className="skills-top">

              <Typography variant="h3" className="skills-h3">
                Skills
              </Typography>

              <Typography mt={3} className="skills-h4">
                There are many variations of passages of Lorem Ipsum available,
              </Typography>
              <Typography mt={1} className="skills-h4">
                but the majority have suffered alteration.
              </Typography>
              <Stack direction={"row"} gap={3} justifyContent={"center"} mt={3}  >
                {
                  figmaimage?.map((item, index) => {
                    return (
                      <Box key={index}>
                        <Image src={item?.image} alt="Alan"
                          className="mobile-icon-skill"
                          width={52}
                          height={52} />

                      </Box>
                    )
                  })
                }
              </Stack>

            </div>
          </Container>
        </div>
      </Element>


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
                    <Carousel indicators={true} sx={{ width: "80%", height: "100%" }}>
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

                    (loading ? Array.from(new Array(data?.length)) : data)?.map((item, index) => {

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
  );

}
