import React from "react";
import bali from "../images/bali.jpeg";
import greece from "../images/greece.jpeg";
import india from "../images/india.jpeg";
import styledComponents from "styled-components";
const About = () => {
  return (
    <Block>
      <Heading>About</Heading>
      <Text>
        This website is made with love 💙 🧡 for people who wish to plan their
        travel and are willing to share their experience and advices about the
        places visited. Share and enjoy!{" "}
      </Text>
      <Images>
        <Img src={bali} alt="Bali"></Img>
        <Img src={greece} alt="Bali"></Img>
        <Img src={india} alt="Bali"></Img>
      </Images>
    </Block>
  );
};
const Img = styledComponents.img`
height: 20em;
padding: 1em;
`;
const Images = styledComponents.div`
    height: 10px
    display: flex;
    `;
const Block = styledComponents.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;
const Text = styledComponents.p`
margin-left: 20px;
    font-size: 2rem;
    `;
const Heading = styledComponents.h1`
color: orange;
    font-size: 3rem;
    `;
export default About;
