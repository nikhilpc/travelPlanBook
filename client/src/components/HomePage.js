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
      setCountries(data);})
        
  }, []);
    
  return (
    <>
    <SearchDiv>
      <BannerImage src={image} alt="logo" />
      <Form>
        <input type="text" placeholder="Enter country name:" />
        <Button type="submit">Search</Button>
      </Form>
    </SearchDiv>
    <h1>Countries</h1>
    <CountryList>
      
    {console.log(countries)}
      
    </CountryList></>
  );
};

const CountryList = styledComponents.div`
display: flex;
flex-direction: ;
align-items: center;
`
const BannerImage = styledComponents.img`
    width: 30%;
    height: 30%;
    left: 35vw;
    top: 5vh;
    position: relative;
    margin: 70px 0 40px;
    `;
const SearchDiv = styledComponents.div`
    display: flex;
    flex-direction: column;
    position: relative;`;

const Button = styledComponents.button`
margin-left: 5px;
`

const Form = styledComponents.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
   `;
export default HomePage;
