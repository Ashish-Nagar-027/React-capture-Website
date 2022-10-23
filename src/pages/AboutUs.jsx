import AboutSection from '../Components/AboutSection'
import ServicesSection from '../Components/ServicesSection'
import Faq from '../Components/FaqSection'

// AniMations
import {motion} from "framer-motion"
import { pageAnimation } from './animation'


const AboutUs = () => {
    return (
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" >
            <AboutSection />
            <ServicesSection />
            <Faq />
        </motion.div>
    )
}

export default AboutUs
