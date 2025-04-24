import React from "react"
import { Box } from "@mui/material"

export default function Footer () {

    return (
        <Box 
            py={2} 
            sx={{ width: '100%', background: '#CCCCCC', bottom: 0, zIndex: '999', px: { xs: '10%', md: '15%' }, fontSize: { xs: '10px', md: '12px' } }}
        >
            © 2025  |  KYLE CARMELA ODTOHAN
        </Box>
    )
}
