import React from 'react'
import styled from "styled-components";
// import { Carousel } from 'react-responsive-carousel'
import { RiTeamFill } from 'react-icons/ri';
// import { FaReact } from 'react-icons/fa';
import Javascript from '../Assets/javascript.svg'
import ReactCourse from '../Assets/react.svg'
import Css from '../Assets/css.svg'
import Html from '../Assets/html.svg'
import Version from '../Assets/version.svg'


const HeroStyled = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: auto;
`
const MainCardStyled = styled.header`
    display: flex;
    justify-content: space-around;
`
const CardStyled = styled.header`
    border: 3px solid black;
    width: 15%;
    height: 200px;
    padding: 15px;
    background:white;
    
`
const MiniCard = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 15%;
    height: 150px;
    padding: 15px;
    border: 3px solid #243a5e;
    border-radius: 15px 50px;
`
const Card = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 40vh;
    padding: 15px;
`

const HeroSectionOne = () => {
    return (
        <HeroStyled>
            
            <h1>
                ABOUT ME
            </h1>
          
            <p>
            A budding Software Engineer with focus on front End Technologies. looking out to take a challenging role as a Front-End
            Web Developer in a dynamic institution where I can build on my programming
            knowledge, enhance my technical skills and fulfill my leadership potential by
            providing quality service to the company, and ultimately myself.
            Below are the stacks I am conversant with.
            </p>
           
           <h2> QUALITIES</h2>
            <MainCardStyled>
            <CardStyled> 
                <RiTeamFill />
                <h3>TEAM PLAYER</h3>
                <h5>Having worked as part of a team severly, I can confidently say I function well as part of a team of any size</h5>
            </CardStyled>
            <CardStyled>
                <h3>TEACHABLE</h3>
                <h5>I am always ready to learn and take up challeges with a goal of becoming a better developer with each task</h5>
            </CardStyled>
            <CardStyled> 
                <h3>DATA</h3>
                <h5>With an understanding of Data structures and Algorithm, 
              I am able to write clean and efficient code with scalability always in mind.</h5>
            </CardStyled>
            <CardStyled>
                <h3>COMMUNICATION</h3>
                <h5>I am a great communicator with excellent reporting skills</h5>
            </CardStyled>
            </MainCardStyled>
           
            <h2> SKILLS</h2>
            <Card>
                {/* <Carousel
                    autoPlay={true}
                    interval={2000}
                    infiniteLoop
                    > */}
            <MiniCard><img src={Javascript} alt="Icon" width="50%"  height="50%" border="2px solid black"  /> Javascript</MiniCard>
                            <MiniCard> <img src= {Css} alt="Icon" width="50%"  height="50%" border="2px solid"  border-radius= "100px"/> CSS</MiniCard>
                            <MiniCard> <img src= {ReactCourse} alt="Icon" width="50%"  height="50%" border="2px solid" border-radius= "100px" />React</MiniCard>
                            <MiniCard> <img src= {Version} alt="Icon" width="50%"  height="50%" border="2px solid black"/> Version Control</MiniCard>
                            <MiniCard> <img src= {Html} alt="Icon" width="50%"  height="50%" border="2px solid black" />HTML</MiniCard>
             {/* </Carousel> */}

            </Card>
            
        </HeroStyled>
        
    )
}

export default HeroSectionOne
