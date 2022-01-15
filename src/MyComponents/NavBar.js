import React from 'react'
import styled from "styled-components";
import { BrowserRouter as  Link} from 'react-router-dom'


const NavTopStyled = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #aac2e4;
`
const NameStyled = styled.nav`
    flex: 1;
    color: #243a5e;
    padding: 5px;
    /* background: green; */
`
const EachText = styled.nav`
   padding: 5px  25px;
`
const NavStyled = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex: 2;
    color: #aac2e4;
`
const NavBar = () => {
    return (
        <>
        
        <NavTopStyled>
            <NameStyled>
                
                    DEV MARIAM
               
            </NameStyled>

            <NavStyled>                
                <Link to="/home"><EachText>HOME </EachText></Link>
                <Link to="/about"><EachText>ABOUT </EachText> </Link>
                <Link to="/projects"><EachText>PROJECTS</EachText></Link>
                <Link to="/contact"><EachText>CONTACT </EachText></Link>
                <Link to="/blog"><EachText>BLOG </EachText></Link>
                
            </NavStyled>
        </NavTopStyled>
        </>
    )
}

export default NavBar