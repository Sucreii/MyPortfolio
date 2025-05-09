'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import { Box, Typography } from "@mui/material"

const cards = [
    { id: 1, title: 'Pic', url: '/assets/album/Album1.png' }, 
    { id: 2, title: 'Pic', url: '/assets/album/Album2.png' }, 
    { id: 3, title: 'Pic', url: '/assets/album/Album3.png' }, 
    { id: 4, title: 'Pic', url: '/assets/album/Album1.png' }, 
    { id: 5, title: 'Pic', url: '/assets/album/Album2.png' }, 
    { id: 7, title: 'Pic', url: '/assets/album/Album1.png' }, 
    { id: 6, title: 'Pic', url: '/assets/album/Album3.png' }, 
]

interface cardProps { 
    card: {
        url: string;
        title: string;
        id: number;
    }
}

const Albums = () => {
    return(
        <Box>
            {/* <Box display="flex" height={192} alignItems="center" justifyContent="center">
                <Typography fontWeight={600} textTransform="uppercase" color="#888">
                Scroll down
                </Typography>
            </Box> */}
            <HorizontalScrollCarousel />
            {/* <Box display="flex" height={192} alignItems="center" justifyContent="center">
                <Typography fontWeight={600} textTransform="uppercase" color="#888">
                Scroll up
                </Typography>
            </Box> */}
        </Box>
    )
}

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  
    return (
        <Box ref={targetRef} sx={{ position: "relative", height: "300vh" }}>
            <Box position="sticky" top={0} display="flex" height="100vh" alignItems="center" overflow="hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </Box>
        </Box>
    )
}

const Card = ({ card }: cardProps) => {
    return (
        <Box
            key={card.id}
            className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
            sx={{ height: 450, width: 450, position: "relative", overflow: "hidden", backgroundColor: "#e0e0e0" }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    transition: "transform 0.3s",
                }}
                className="group-hover:scale-110"
            ></Box>

            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 10,
                    display: "grid",
                    placeContent: "center",
                }}
            >
                <Typography
                    sx={{
                        background: "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
                        padding: 4,
                        fontSize: "3rem",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        color: "#fff",
                        backdropFilter: "blur(4px)",
                    }}
                >
                    {card.title}
                </Typography>
            </Box>
        </Box>
    )
}
export default Albums