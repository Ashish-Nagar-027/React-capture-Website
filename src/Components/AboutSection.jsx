import home1 from '../img/home1.png'

import {About, Description, Image, Hide} from '../styles.jsx'
// framer motion
import { motion } from "framer-motion"

// 
import { titleAnim, fade,photoAnim } from '../pages/animation'
import Wave from './Wave'
  
const AboutSection = ()  => {

    return (
       <About>
        <Description>
            <motion.div  className="title">
                <Hide>
                    <motion.h2 variants={titleAnim}  >We Work to make</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2  variants={titleAnim} >your <span>dreams</span> come</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim}  >true.</motion.h2>
                </Hide>
            </motion.div>
            <motion.p variants={fade}>Contact us for any photography or videography idea that you hav. We have professionals with amazing skills </motion.p>
            <motion.button variants={fade}>Contact Us</motion.button>
        </Description>
        <Image>
            <motion.img src={home1} alt="guy with a camera" variants={photoAnim} />
        </Image>
        <Wave />
       </About>
    )
}





export default AboutSection