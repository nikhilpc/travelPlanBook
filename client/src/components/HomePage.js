import image from "../images/BannerImage.png";
import styledComponents from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const HomePage = () => {
  const [country1, setCountry1] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/independent?status=true")
      .then((res) => res.json())
      .then((data) => {
        // data.map((country) => {
        //   setCountry1(country.name.official)})})
        setCountries(data);
      });
  }, []);

  return (
    <>
    <MainHeading>Budget Travel Guide</MainHeading>
      <SearchDiv>
        <BannerImage src={image} alt="logo" />
        <Form>
          <input type="text" placeholder="Enter country name:" />
          <Button type="submit">Search</Button>
        </Form>
      </SearchDiv>
      <H1>List of Countries</H1>
      <CountryList>
        {countries.map((country) => (
          <CountryButton key={country.name.common} >{country.name.common}</CountryButton>
        ))}
      </CountryList>
    </>
  );
};

const MainHeading = styledComponents.h1`
    font-size: 50px;
    position:relative;
    left: 35vw;
    color: Orange;
    `
const H1 = styledComponents.h1`
    font-size: 12px;
    padding-left: 10px;
    `
const CountryButton = styledComponents.button`
    font-size: 8px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px;
`;

const CountryList = styledComponents.div`
display: flex;
flex-wrap: wrap;  
max-width: 95vw;
padding: 0 20px;
justify-content: center;
`;
const BannerImage = styledComponents.img`
    width: 30%;
    height: 30%;
    left: 35vw;
    top: 5vh;
    position: relative;
    margin-bottom:40px;
    `;
const SearchDiv = styledComponents.div`
    display: flex;
    flex-direction: column;
    position: relative;`;

const Button = styledComponents.button`
margin-left: 5px;
`;

const Form = styledComponents.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
   `;
export default HomePage;
