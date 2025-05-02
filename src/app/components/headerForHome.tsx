import React from "react"
import { Box, Typography } from "@mui/material"
import { TransitionLink } from '../animation/pageTransition'

export default function HomeHeader () {

    const buttons = [
        { id: '1', name: 'Home', destination: '/' },
        { id: '2', name: 'About', destination: '/about' },
        { id: '3', name: 'Projects', destination: '' },
        { id: '4', name: 'Contacts', destination: '' },
    ]

    return (
        <Box 
            py={2} 
            sx={{ 
                position: 'absolute',
                zIndex: '2',
                width: '50%', 
                background: 'linear-gradient(270deg,rgba(255, 255, 255, 0) 37%, rgba(153, 153, 153, 1) 100%)', 
                top: 0, 
                transform: 'translateX(100%)', 
                right: '50%', 
                height: '100%', 
                alignContent: 'center', 
                fontFamily: 'Start2P'
            }}
        >
            <Box p={3}>
            {
                buttons.map((nav, index) => {
                    return(
                        <Box key={index}>
                            <TransitionLink href={nav.destination}>
                                <p style={{ 
                                        marginBottom: '10px', 
                                        fontSize: '16px', 
                                        color: '#F03367', 
                                        textShadow: '3px 4px 3px rgba(0, 0, 0, 0.3)', 
                                        textTransform: 'uppercase'
                                    }}
                                >
                                    {nav.name}
                                </p>
                            </TransitionLink>
                        </Box>
                    )
                })
            }
            </Box>
        </Box>
    )
}
