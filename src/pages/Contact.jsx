// AniMations
import {motion} from "framer-motion"
import { pageAnimation,titleAnim } from './animation'
import styled from "styled-components"


const ContactUs = () => {
    return (
        <ContactStyle exit="exit" variants={pageAnimation} initial="hidden" animate="show" style={{background :'white'}} >
        <Title>
            <Hide>
              <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
            </Hide>
        </Title> 
        <div>
            <Hide>
              <Social variants={titleAnim}>
                  <Circle />
                  <h2>Send Us A Message</h2>
              </Social>
            </Hide>
            <Hide>
              <Social variants={titleAnim}>
                  <Circle />
                  <h2>Send an email</h2>
              </Social>
            </Hide>
            <Hide>
              <Social variants={titleAnim}>
                  <Circle />
                  <h2>Twitter </h2>
              </Social>
            </Hide>
        </div>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
padding: 5rem 10rem;
color: #353535;
min-height: 90vh;
color: white;
    
`

const Hide = styled.div`
    overflow: hidden; 

`

const Title = styled.div`
margin-bottom: 4rem;
color: black; 

`

const Circle = styled.div`
    width:3rem;
    height:3rem;
    background-color: #353535;
    border-radius: 50%;
`

const Social = styled(motion.div)`
display: flex;
align-items: center;
h2 {
    margin: 2rem;
    color: #353535;
}

`

export default ContactUs