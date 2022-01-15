import React from 'react'
import styled from "styled-components";
import opeyemi from "../Assets/opeyemi.jpeg"


const PictureStyled = styled.header`
    flex: 1;
    width: 40%;
`
const NameStyled = styled.header`
    flex: 1;
    width: 40%;
`
const HeaderStyled = styled.header`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #243a5e;
`
const TextStyled = styled.header`
    color: white;
    text-shadow: 2px 2px 4px #000000;
    font-size: 38px;
    margin-bottom: 7px;
`
const Header = () => {
    return (
        <>
        
        <HeaderStyled>
            <PictureStyled>
                 <img  src={opeyemi} alt="myImage" width="50%" height="50%" border="4px solid blue" border-radius="40px"/>
               
            </PictureStyled>
            <NameStyled>
                <p>
                    Hello there, 
                    I am <TextStyled>Afolabi, Opeyemi Mariam</TextStyled>
                    a software developer passionate about software products and focused on building innovative solution centric applications.
                    I am ready to start building your next product.
                </p>
            </NameStyled>
        </HeaderStyled>
        </>
    )
}

export default Header

