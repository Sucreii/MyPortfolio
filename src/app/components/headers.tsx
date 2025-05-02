"use client"
import React, { useState } from 'react'
import { Box, Backdrop, SpeedDial, SpeedDialAction } from "@mui/material"
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import { TransitionLink } from '../animation/pageTransition'

export default function Header () {

    const buttons = [
        { id: '1', name: 'Home', destination: '/' },
        { id: '2', name: 'About', destination: '/about' },
        { id: '3', name: 'Projects', destination: '/projects' },
        { id: '4', name: 'Contacts', destination: '' },
    ]

    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <Box>
            <Box 
                mt={2}
                p={2} 
                sx={{ 
                    width: '50%', 
                    top: 0, 
                    position: 'sticky', 
                    zIndex: '999', 
                    background: 'rgba(204, 204, 204, 0.3)', 
                    borderRadius: '10px', 
                    backdropFilter: 'blur(10px)',
                    transform: 'translateX(50%)', 
                    display: { xs: 'none', lg: 'flex' }, 
                    justifyContent: 'center'
                }}
            >
                {
                    buttons.map((nav, index) => (
                        <Box px={2} key={index}>
                            <TransitionLink href={nav.destination}>
                                <p style={{ 
                                        fontSize: '16px', 
                                        color: '#F03367', 
                                        textShadow: '3px 4px 3px rgba(0, 0, 0, 0.3)', 
                                        textTransform: 'uppercase', 
                                        fontFamily: 'Start2P',
                                    }}
                                >
                                    {nav.name}
                                </p>
                            </TransitionLink>
                        </Box>
                    ))
                }
            </Box>

            <Backdrop open={open} sx={{ zIndex: 998 }} />
            <Box
                sx={{ 
                    display: { xs: 'block', lg: 'none' }, 
                    position: 'fixed', 
                    bottom: 16,
                    right: 16,
                    zIndex: 999,
                }}
            >
                <SpeedDial 
                    ariaLabel="Menu"
                    icon={<SpeedDialIcon />}
                    onOpen={handleOpen}
                    onClose={handleClose}
                    open={open}
                    sx={{ 
                        position: 'fixed', 
                        bottom: 16, 
                        right: 16, 
                        zIndex: 999
                    }}
                >
                    {
                        buttons.map((nav, index) => (
                            <SpeedDialAction 
                                key={index}
                                tooltipTitle={
                                    <TransitionLink href={nav.destination}>
                                        <p style={{ 
                                                marginBottom: '10px', 
                                                fontSize: '16px', 
                                                color: '#F03367', 
                                                textShadow: '3px 4px 3px rgba(0, 0, 0, 0.3)', 
                                                textTransform: 'uppercase', 
                                                fontFamily: 'Start2P',
                                            }}
                                        >
                                            {nav.name}
                                        </p>
                                    </TransitionLink>
                                }
                                tooltipOpen
                                onClick={handleClose}
                            />
                        ))
                    }
                </SpeedDial>
            </Box>
            
        </Box>
    )
}
