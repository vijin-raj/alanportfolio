import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './footer'

export const Layout = ({children}) => {

  return (
   <>
   <Navbar/>
    {children}
     <Footer/>   
   </>
  )
}
