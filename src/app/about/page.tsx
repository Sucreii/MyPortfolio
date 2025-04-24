import React from "react"
import { Box } from "@mui/material"
import Image from "next/image"
// import Header from '../components/headers'
import cover from '../assets/aboutCover.svg'
import styles from '../page.module.css'

export default function About () {

    // const 

    return(
        <Box>
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
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    <p className={styles.title}> SCROLL DOWN </p>
                </Box>
            </Box>
        </Box>
    )
}