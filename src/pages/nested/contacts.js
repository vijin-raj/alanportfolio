import { Stack, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'

const Contacts = () => {
  return (
    <>
      <Head>
        <title>
          Next Contacts
        </title>
        <meta name="keyword" content="home" />
      </Head>

      <Stack spacing={5} mt={10} mb={20}>
        <Typography variant='h3'>Contact</Typography>
        <Typography color="grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ligula nulla, iaculis eu
          sollicitudin vitae,
          dignissim sit amet nibh. Nullam nisl ipsum, ultricies in aliquet nec, maximus quis ipsum. Vestibulum mattis vulputate erat, et eleifend neque. Nunc lorem sem, bibendum eu nisi et, mattis fringilla mi.

        </Typography>
      </Stack>
    </>
  )
}

export default Contacts