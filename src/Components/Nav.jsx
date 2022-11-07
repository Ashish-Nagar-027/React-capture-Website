import {Link} from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
    return (
        <StyledNav>
            <h1><Link to="/React-capture-Website" id='logo'>Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/React-capture-Website">1. About Us</Link>
                </li> 
                <li>
                    <Link to="/React-capture-Website/work">2. Our Work</Link>
                </li> 
                <li>
                   <Link to="/React-capture-Website/contact">3. Contact Us </Link>
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav =  styled.nav`
min-height:10vh;
margin: auto;
display:flex;
 justify-content: space-between;
 align-items: center;
 padding: 1rem 10rem;
 background: #282828;
 a {
    color: white;
    text-decoration: none;
 }

 ul {
    display: flex;
    list-style: none;
 }

 #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight:lighter;
 }

 li {
    padding-left: 10rem;
    position: relative;
 }

`
 

export default Nav