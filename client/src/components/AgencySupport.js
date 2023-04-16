import React from 'react';
import styledComponents from 'styled-components';
import Img from '../assets/CustomerSupport.jpeg'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
const AgencySupport = () => {
    return (
        <Division>
            <H1>Agency Support</H1>
            <Image src={Img} alt="Agency Support" />

            <Para>Thank you, please wait.. Our customer support specilist will contact you shortly to complete the request!</Para>
            <TextLink to="/">Back to Home </TextLink>
            <SearchBar />
        </Division>
    )
}
const TextLink = styledComponents(Link)`
    color: black;
    text-decoration: none;
    padding-top: 20px;
    :hover{
        color: orange;
    }
    `
const H1 = styledComponents.h1`
padding-bottom: 20px;
`
const Image = styledComponents.img`
padding-bottom: 20px;  
`
const Para = styledComponents.p`
color: purple;
font-size: 20px;`
const Division = styledComponents.div`
color: orange;
font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    `
export default AgencySupport;
