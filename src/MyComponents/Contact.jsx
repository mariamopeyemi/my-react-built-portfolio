import React from 'react'
import { BrowserRouter as  Link} from 'react-router-dom'
import styled from "styled-components";
import { FiInstagram } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

const Footer = styled.footer`
    width: 100%;
    height:5vh;
    background:#aac2e4;
    text-align:center;
    padding-top: 20px;
`
const ContactSocials = styled.header`
    display: flex;
    height: 90%;
    width: 90%;
    /* background: purple; */
    flex-direction: row;
    justify-content: space-between;
`
const ContactForm = styled.header`
    display: flex;
    flex: 1;
    flex-direction: column;
    color:#243a5e;
    /* background: green; */
    padding: 10%;
`
const Socials = styled.header`
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;

`
const ContactStyled = styled.header`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const Contact = () => {
    return (
        <ContactStyled>
            <div>
                <h1>CONTACT ME</h1>
            </div>
            <ContactSocials>
                <ContactForm>
                    <p>
                    <h5>Got a project in mind?</h5>
                    <h1>Get In Touch.</h1>

                    <h4>opeyemi.dev@gmail.com</h4>
                    <h3>+234 906 598 4246</h3>
                    </p>
                </ContactForm>
                <Socials>
                    <Link to="/https://www.instagram.com/mariam_afox"><FiInstagram/></Link>
                    <Link to="/https://mariamopeyemi.github.io/"><BsGithub/></Link>
                    <Link to="/https://linkedin.com/in/opeyemi-m-afolabi-b590a5155"><FaLinkedinIn/></Link>
                    <Link to="/https://twitter.com/mariam_afox"><BsTwitter/></Link>
                    <Link to="/blog"><BsWhatsapp/></Link>
                </Socials>
            </ContactSocials>
            <Footer>
                2022 &copy;Dev Mariam
            </Footer>
        </ ContactStyled>
    )
}

export default Contact
