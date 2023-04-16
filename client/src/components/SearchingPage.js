import image from "../images/BannerImage.png";
import styledComponents from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Profile from "./Profile";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const SearchingPage = () => {
    const [country, setCountry] = useState("");
    const [countries, setCountries] = useState([]);

    const countrySelected = (e) => {
        setCountry(e.target.textContent);
    };

    const navigateToBlog = (e) => {
        e.preventDefault();
        if (country) {
            window.location.href = `/blog/${country}`;
        } else {
            window.location.href = "/search";
        }
    };

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/independent?status=true")
            .then((res) => res.json())
            .then((data) => {
                setCountries(data);
            });
    }, []);

    return (
        <div>
            <Headers>
                <MainHeading>Budget Travel Guide</MainHeading>
                <AboutUs to="/about">About Us</AboutUs>

            </Headers>
            <LoginButton />
            <LogoutButton />
            <Profile >Profile</Profile>
            <SearchDiv>
                <BannerImage src={image} alt="logo" />
                <Form>
                    {country === "" ? (
                        <input type="text" placeholder="Enter country name:" autoFocus />
                    ) : (
                        <input type="text" value={country} autoFocus />
                    )}
                    <Button type="submit" onClick={(e) => navigateToBlog(e)}>
                        Search
                    </Button>
                </Form>
            </SearchDiv>
            <H1>List of Countries</H1>
            <CountryList>
                {countries.map((country) => (
                    <CountryButton key={country.name.common} onClick={countrySelected}>
                        {country.name.common}
                    </CountryButton>
                ))}
            </CountryList>
        </div>
    )
}
const Headers = styledComponents.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

const MainHeading = styledComponents.h1`
    font-size: 50px;
    position:relative;
    left: 35vw;
    color: Orange;
    `;
const H1 = styledComponents.h1`
    font-size: 12px;
    padding-left: 10px;
    `;
const CountryButton = styledComponents.button`
    font-size: 8px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px;
`;

const AboutUs = styledComponents(Link)`
margin-right: 30px;
text-decoration: none;
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
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
   `;
export default SearchingPage