import React from 'react';
import styledComponents from'styled-components';
const About = () => {
    return (
        <Block>
            <Heading>About</Heading>
            <Text>This website is made with love 💙 🧡 for people who wish to plan their travel and are willing to share their experience and advices about the places visited. Share and enjoy! </Text>
        </Block>
    )
    }

    const Block = styledComponents.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
    const Text = styledComponents.p`
    font-size: 2rem;
    `
    const Heading = styledComponents.h1`
color: orange;
    font-size: 3rem;
    `
export default About;