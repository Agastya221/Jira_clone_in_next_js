import Head from 'next/head'
import Image from 'next/image'
import Navbar from './Navbar'
import Sidenavbar from './Sidenavbar'
import MainContent from './MainContent'
import { Container } from '@mui/material'
// import { display } from '@mui/system'


export default function Home() {
  return (
    <>
    <Container sx={{disableGutters:true, height:"100vh", display:"flex"}} >
      <Sidenavbar/>
      <Navbar/>
      <MainContent/>
      </Container>
    </>
  )
}
