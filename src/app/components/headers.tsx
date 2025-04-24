import React from "react"
import { Box } from "@mui/material"

export default function Header () {

    const buttons = [
        { id: '1', name: 'Home', destination: '' },
        { id: '2', name: 'About Me', destination: '' },
        { id: '3', name: 'Projects', destination: '' },
        { id: '4', name: 'Contacts', destination: '' },
    ]

    return (
        <Box 
            py={2} 
            sx={{ width: '100%', background: '#D9D9D9', top: 0, position: 'sticky' }}
        >
            <Box>
                {
                    buttons.map((nav, index) => {
                        return(
                            <Box key={index}>
                                <a href={nav.destination}>
                                    <p 
                                        style={{ 
                                            fontFamily: 'Start2P', 
                                            fontSize: '16px', 
                                            color: '#F03367', 
                                            textShadow: '3px 4px 3px rgba(0, 0, 0, 0.3)'
                                        }}
                                    >
                                        {nav.name}
                                    </p>
                                </a>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}
