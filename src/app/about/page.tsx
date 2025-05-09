'use client'

import { useRef } from "react"
import styles from '../page.module.css'
import { Box, Typography, Grid } from "@mui/material"
import { motion, useTransform, useScroll } from "framer-motion"
import Image from "next/image"

import Header from '../components/headers'
import cover from '../assets/aboutCover.svg'
import ScrollPar from '../components/parallax'
import AlbumScroll from '../components/albums'

export default function About () {

    return(
        <Box>
            <Header />
            <Box 
                sx={{ 
                    height: '100vh', 
                    width: '100%'
                }}
            >
                <Image 
                    src={cover}
                    alt="cover"
                    layout="fill"
                    style={{ objectFit: 'cover', zIndex: 1 }}
                />
                
                <Box
                    sx={{ 
                        position: 'absolute', 
                        width: '100%', 
                        height: '100vh',
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center'
                    }}
                >
                    <Typography
                        variant='h3'
                        className={styles.title}
                    >
                        SCROLL DOWN
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex', 
                    justifyContent: 'center',
                    minHeight: '300vh', 
                }}
            >
                <Box
                    pt={10}
                    sx={{
                        width: { xs: '80%', md: '60%' },
                    }}
                >
                    <ScrollPar />
                </Box>
            </Box>

            <AlbumScroll />

            <Box
                py={10}
                sx={{
                    width: { xs: '80%', md: '50%' }, 
                    display: 'flex',
                    margin: '0 auto', 
                }}
            >
                <Grid container spacing={2}>
                    <Grid sx={{ height: '100%', boxSizing: 'border-box' }}>
                        <Typography
                            variant="h4"
                            sx={{ mb: 2, color: '#00ffcc' }}
                            className={styles.title}
                        >
                            Add Me
                        </Typography>
                    </Grid>

                    <Grid>
                        <Typography>.sucrei</Typography>
                        <Typography>1192207773</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}