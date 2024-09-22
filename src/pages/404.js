
import { Box, Button, Typography, styled} from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Linkstyle = styled(Link)({
    color: "black",
    fontWeight: 600,
    fontSize: "14px",
    fontFamily: "monospace",
    textDecoration: "none"
  })

const PageNotFound = () => {
    
const router = useRouter()

    useEffect(() => {
        const id = setTimeout(() => {
         router.push('/')
        },3000)
        return() => clearTimeout(id)
    },[])
  return (
    <Box sx={{margin: 20}}>
     <Typography variant='h5'>
        Whoops! Page not found
     </Typography>
     <Linkstyle href="/">
       <Button variant='text'>Go to Home</Button>
     </Linkstyle>
    </Box>
  )
}

export default PageNotFound