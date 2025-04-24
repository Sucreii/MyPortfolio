import React from "react"
import { Box, Grid, Typography, Stack } from "@mui/material"
import Image from "next/image"
import HomeHeader from './components/headerForHome'
import Footer from './components/footer'
import coverPage from './assets/background.png'

export default function Home() {

  const details = [
    { site: 'Viber', details: 'Viber://chat?number=09155259183', display: '(+63) 915 525 9183', icon: 'Phone.png', alt: 'Viber' },
    { site: 'LinkedIn', details: 'https://www.linkedin.com/in/kyle-carmela-odtohan/', display: 'LinkedIn/KyleCarmela', icon: 'LinkedIn.png', alt: 'LinkedIn' },
    { site: 'Gmail', details: 'KyleCarmela.Odtohan@gmail.com', display: 'KyleCarmela.Odtohan@gmail.com', icon: 'EMail.png', alt: 'GMail' }
  ]

  return(
    <Box sx={{ background: 'linear-gradient(180deg,rgba(255, 255, 255, 1) 60%, rgba(255, 247, 225, 1) 100%)' }}>
      <HomeHeader />

      <Box 
        sx={{ 
          width: '100%', 
          height: '100vh', 
          position: 'relative'
        }}
      >
        <Image
          src={coverPage}
          alt="cover"
          layout="fill"
          style={{ objectFit: 'cover', zIndex: 1 }}
        />
        <Box 
          sx={{
            position: 'absolute', 
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: '2px',
            width: { xs: '80%', md: 'auto' }, 
            zIndex: 3
          }}
        >
          <img 
            src={'/assets/MyPic.png'}
            alt="MyPicture"
          />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: {md: '-45px', xs: '-30px'} }}>
        <Box
          p={2}
          sx={{ 
            width: { xs: '80%', md: '50%' }, 
            background: 'rgba(240, 240, 240, 0.85)', 
            display: 'flex',
            position: 'relative', 
            justifyContent: 'center', 
            alignItems: 'center', 
            borderRadius: '5px', 
            zIndex: '50'
          }}
        >
          {
            details.map(( display, index) => (
              <Box key={index} style={{ marginRight: '7px'}}>
                <Grid container>
                  <Grid><img src={`/assets/${display.icon}`} /></Grid>
                  <Grid columns={{ xs: 12, md: 4}} sx={{ alignContent: 'center'}}>
                    <Stack sx={{ display: {xs: 'none', md: 'block'}}}>
                      <p style={{ fontSize: 16 }}>{display.site}</p>
                      <a href={display.details} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px'}}>{display.display}</a>
                    </Stack>

                    <Stack sx={{ display: {xs: 'block', md: 'none'} }}>
                      <a href={display.details} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px'}}>{display.site}</a>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            ))
          }
        </Box>
      </Box>

      <Box sx={{ px: { xs: '10%', md: '15%' }, py: { xs: '20%', md: '10%' }, width: {xs: 'none', md: '70%'} }}>
        <Typography 
          pb={2}
          sx={{ 
            fontFamily: 'Start2P',
            fontSize: { xs: '25px', md: '40px' }, 
            color: '#41DDA5', 
            textShadow: '3px 4px 3px rgba(0, 0, 0, 0.3)'
          }}
        >
          KYLE CARMELA ODTOHAN
        </Typography>
        <p style={{ fontSize: 18, paddingBottom: '20px' }}>I’m a Front-End Web Developer based in the Philippines.</p>
        <p style={{ fontSize: 14 }}>I like creating minimalist website that fits the company’s profile. Currently I am UI/UX design and animations. When I’m not working I hang out in discord and play with my friends. My game genres6 are FPS, RPG, and Online MultiPlayer </p>

      </Box>

      <Box sx={{ display: {xs: 'none', md: 'block'} }}>
        <img 
          src={'/assets/GrassWide.png'}
          alt="MyPicture"
          style={{ width: '100%' }}
        />
      </Box>
      <Box sx={{ display: {xs: 'block', md: 'none'} }}>
        <img 
          src={'/assets/Grass.png'}
          alt="MyPicture"
          style={{ width: '100%' }}
        />
      </Box>

      <Footer />
    </Box>
  )
}
