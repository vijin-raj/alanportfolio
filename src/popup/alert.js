import { Alert, Snackbar } from '@mui/material'
import React from 'react'

export const AlertBox = (props) => {
    const {open, close} = props
  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={close}>
    <Alert
      onClose={close}
      severity="success"
      variant="filled"
      sx={{ width: {xs:'70%', sm: "100%", md: "100%"} }}
    >
      Resume Downloaded
    </Alert>
  </Snackbar>
  )
}
