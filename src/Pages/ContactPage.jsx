import React from 'react'
import Contact from '../MyComponents/Contact'
import styled from "styled-components";

const ContactPageStyled = styled.header`
    /* width: 100%;
    height: 100vh; */
    /* display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; */
`
const ContactPage = () => {
    return (
        <ContactPageStyled>
            <Contact />
        </ContactPageStyled>
    )
}

export default ContactPage
