import styled from 'styled-components'
import { Link } from 'react-router-dom'

//images
import athlete from '../img/athlete-small.png'
import theracer  from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'

// AniMations
import {motion} from "framer-motion"

import { pageAnimation, fade, photoAnim , lineAnim, slider,sliderContainer} from './animation'



const OurWork = () => {
    return (
        <Work style={{background: "#fff"}} variants={pageAnimation} initial="hidden" animate="show" >
            <motion.div variants={sliderContainer}>
            <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
            </motion.div>
         <Movie>
            <motion.h2 variants={fade}>The Athlete</motion.h2>
            <motion.div className="line" variants={lineAnim}></motion.div>
            <Link>
            <Hide>
              <motion.img variants={photoAnim} src={ athlete } alt="athlete" />
             </Hide>
            </Link>
         </Movie>
         <Movie>
            <motion.h2>The Racer</motion.h2>
            <div className="line"></div>
            <Link> 
             <img src={ theracer } alt="the racer" />
            </Link>
         </Movie>
         <Movie>
            <motion.h2>Good Times</motion.h2>
            <div className="line"></div>
            <Link>
             <img src={ goodtimes } alt="goodtimes" />
            </Link>
         </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    color:black;
    padding: 5rem 10rem;
    motion.h2 {
        padding: 1rem 0rem;
    }
`

const Movie = styled.div `
padding-bottom: 10rem;
.line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
}
img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
}

`

const Hide = styled.div`
overflow:hidden;
 
`

// Frame animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background-color: #fffebf;
    z-index: 2;
`

const Frame2 = styled(Frame1)`
background: #ff8efb;

`
const Frame3 = styled(Frame1)`
background: #8ed2ff;

`
const Frame4 = styled(Frame1)`
background: #8effa0;

`



export default OurWork