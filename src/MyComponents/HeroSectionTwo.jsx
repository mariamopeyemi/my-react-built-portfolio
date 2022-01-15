import React from 'react'
import styled from "styled-components";

const HeroStyled = styled.header`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
`
const HeroSectionTwo = () => {
    return (
        <HeroStyled>
            <h1>PROJECTS</h1>
        </HeroStyled>
    )
}

export default HeroSectionTwo
