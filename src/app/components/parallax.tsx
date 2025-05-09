'use client'
import { useEffect, useRef } from 'react'
import { Box, Typography, Stack, Grid } from '@mui/material'
import { Parallax } from 'react-scroll-parallax'
import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import styles from '../page.module.css'
import 'animate.css'

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.3, 
        },
    },
}
  
const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function Home() {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })
    const controls = useAnimation()

    const display = [
        { id: 1, title: 'GENSHIN', name: 'Genshin Impact', gif: 'SampleGameVid.mp4' },
        { id: 2, title: 'VALO', name: 'Valorant', gif: 'SampleGameVid.mp4' },
        { id: 3, title: 'MARVEL RIVALS', name: 'Marvel Rivals', gif: 'SampleGameVid.mp4' },
        { id: 4, title: 'REPO', name: 'Repo', gif: 'SampleGameVid.mp4' },
        { id: 5, title: 'DONT STARVE', name: 'Dont Starve together', gif: 'SampleGameVid.mp4' },
        { id: 6, title: 'LEFT4DEAD2', name: 'Left4Dead2', gif: 'SampleGameVid.mp4' },
    ]

    useEffect(() => {
        if (isInView) {
            controls.start({ scale: 1.05, transition: { duration: 0.5 } })
        } else {
            controls.start({ scale: 0.50, transition: { duration: 0.5 } })
        }
    }, [isInView, controls])

    return (
        <Box sx={{ bgcolor: 'black', color: 'white', minHeight: '200vh', p: 4 }}>
            <Grid container spacing={4} alignItems="center">
                <Grid size={{ xs: 12, md: 6 }}>
                    <Parallax speed={-10}>
                        <motion.div
                            ref={ref}
                            variants={containerVariants}
                            initial='hidden'
                            animate={isInView ? 'show' : 'hidden'}
                        >
                            {
                                display.map((item, index) => (
                                    <Box mb={6} key={index} >
                                        <motion.div variants={itemVariants}>
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                style={{ 
                                                    height: 'auto', 
                                                    width: '100%', 
                                                    objectFit: 'cover', 
                                                    marginBottom: '10px', 
                                                    transform: 'scale(1)', 
                                                    // transition: 'transform 0.5s ease-in-out'
                                                }}
                                            >
                                                <source src={`/assets/videos/${item.gif}`} type='video/mp4'/>
                                            </video>
                                        </motion.div>
                                    </Box>
                                ))
                            }
                        </motion.div>
                    </Parallax>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Parallax speed={10}>
                        <Box sx={{ display: 'flex' }}>
                            <Box
                                sx={{
                                    position: 'fixed', 
                                    top: 0, 
                                    // right: 0, 
                                    // width: '50vw', 
                                    height: '100vh', 
                                    // display: 'flex', 
                                    // flexDirection: 'column', 
                                    // justifyContent: 'center', 
                                    zIndex: 1, 
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{ mb: 2, color: '#00ffcc' }}
                                    className={styles.title}
                                >
                                    I LOVE GAMES
                                </Typography>
                                <Typography sx={{ color: '#AFAFAF', fontFamily: 'Commissioner' }}>
                                    I love to spend my leisure time playing games together with my friends and just have fun
                                </Typography>
                            </Box>
                        </Box>
                    </Parallax>
                </Grid>
            </Grid>
        </Box>
    )
}
