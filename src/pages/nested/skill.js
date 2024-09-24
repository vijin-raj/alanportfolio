import { figmaimage } from '@/data/mappingdata'
import { Box, Container, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Element } from 'react-scroll'

const Skill = () => {
  return (
    <>
       <Head>
        <title>
         Skill Section
        </title>
        <meta name="keyword" content="skill"/>
      </Head>
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
  </>
  )
}

export default Skill