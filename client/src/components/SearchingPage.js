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
        setSearchTerm(e.target.textContent);
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

    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const fetchSuggestions = (value) => {
        const suggestions = ['Barbados', 'Suriname', 'Namibia', 'Guinea', 'Vanuatu', 'Samoa', 'France', 'Andorra', 'Azerbaijan', 'Maldives', 'Saint Lucia', 'Panama', 'Timor-Leste', 'North Macedonia', 'Denmark', 'Egypt', 'Estonia', 'Czechia', 'Bahamas', 'Uruguay', 'Comoros', 'Costa Rica', 'Togo', 'São Tomé and Príncipe', 'Netherlands', 'Australia', 'Malaysia', 'Nepal', 'Cuba', 'North Korea', 'Moldova', 'Zambia', 'Dominica', 'Marshall Islands', 'Tonga', 'Peru', 'Cape Verde', 'Kiribati', 'Finland', 'Ivory Coast', 'Pakistan', 'Djibouti', 'Micronesia', 'Slovenia', 'Kyrgyzstan', 'Switzerland', 'Kuwait', 'Seychelles', 'United Kingdom', 'Fiji', 'Yemen', 'Central African Republic', 'Belgium', 'Argentina', 'Madagascar', 'South Africa', 'Latvia', 'Zimbabwe', 'Gabon', 'Romania', 'Germany', 'Bangladesh', 'Jordan', 'Mozambique', 'Israel', 'Eritrea', 'Indonesia', 'Japan', 'Spain', 'Afghanistan', 'United Arab Emirates', 'Malawi', 'Turkey', 'Belarus', 'Montenegro', 'Bosnia and Herzegovina', 'Eswatini', 'Lithuania', 'Turkmenistan', 'Ethiopia', 'Hungary', 'Chad', 'Nigeria', 'San Marino', 'Ukraine', 'Haiti', 'Botswana', 'Portugal', 'Guyana', 'Ireland', 'Mauritius', 'Saint Kitts and Nevis', 'Iceland', 'Chile', 'Kazakhstan', 'China', 'Armenia', 'Bolivia', 'Sudan', 'Vietnam', 'Burundi', 'Canada', 'Colombia', 'Lesotho', 'Guatemala', 'Uzbekistan', 'Senegal', 'Gambia', 'Liechtenstein', 'Tuvalu', 'Equatorial Guinea', 'Bhutan', 'Paraguay', 'Grenada', 'Papua New Guinea', 'Jamaica', 'Republic of the Congo', 'Poland', 'Russia', 'Mauritania', 'Burkina Faso', 'DR Congo', 'Benin', 'Uganda', 'Mongolia', 'Laos', 'Algeria', 'Brunei', 'Kenya', 'Sri Lanka', 'Dominican Republic', 'Austria', 'Luxembourg', 'Georgia', 'Slovakia', 'Norway', 'Thailand', 'India', 'Morocco', 'Nicaragua', 'Qatar', 'Brazil', 'New Zealand', 'Singapore', 'Syria', 'Belize', 'Venezuela', 'Bahrain', 'Cameroon', 'Cyprus', 'United States', 'Angola', 'Tunisia', 'Monaco', 'Rwanda', 'Trinidad and Tobago', 'Malta', 'Mexico', 'Antigua and Barbuda', 'South Korea', 'Niger', 'Albania', 'Somalia', 'Liberia', 'Myanmar', 'Tanzania', 'Iraq', 'Saint Vincent and the Grenadines', 'Libya', 'Sierra Leone', 'Serbia', 'Ghana', 'South Sudan', 'Sweden', 'Greece', 'Philippines', 'Guinea-Bissau', 'Saudi Arabia', 'Palau', 'Bulgaria', 'Nauru', 'Cambodia', 'Italy', 'Mali', 'Iran', 'Tajikistan', 'Oman', 'El Salvador', 'Lebanon', 'Vatican City', 'Ecuador', 'Croatia', 'Solomon Islands', 'Honduras']
            .filter(suggestion => suggestion.toLowerCase().startsWith(value.toLowerCase()));
        setSuggestions(suggestions);
    }
    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        // Fetch suggestions based on the input value
        fetchSuggestions(value);
    }

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setCountry(suggestion)
        setSuggestions([]);
    }
    return (
        <>
            <Headers>
                <LoginButton />
                <LogoutButton />
                <MainHeading>Budget Travel Guide</MainHeading>
                <AboutUs to="/about">About Us</AboutUs>

            </Headers>

            <Profile >Profile</Profile>

            <BannerImage src={image} alt="logo" />


            <Division>
                <Input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Enter Country Name"
                    autoFocus
                />
                {suggestions.length > 0 && (
                    <UL>
                        {suggestions.map(suggestion => (
                            <LI key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
                                {suggestion}
                            </LI>
                        ))}
                    </UL>
                )}
            </Division>
            <Button type="submit" onClick={(e) => navigateToBlog(e)}>
                Search
            </Button>



            <H1>List of Countries</H1>
            <CountryList>
                {countries.map((country) => (
                    <CountryButton key={country.name.common} onClick={countrySelected}>
                        {country.name.common}
                    </CountryButton>
                ))}
            </CountryList>
        </>
    )
}


const LI = styledComponents.li`
            :hover {
                background - color: yellow;
            cursor: pointer;
            border: 1px solid red;
            font-weight: bold;
}
            list-style-type: none

            `

const Input = styledComponents.input`
            width: 15vw;
            margin-right: 5px;
            `
const UL = styledComponents.ul`
            background-color: orange;
            padding: 10px;
            color: black;
            width: 15vw;
            `
const Division = styledComponents.div`
            position: relative
            display: flex;
            flex-direction: row;
            width: 30vw;
            `

const Headers = styledComponents.div`

            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            justify-content: space-between;
            -webkit-box-align: center;
            `;

const MainHeading = styledComponents.h1`
            font - size: 50px;
            position: relative;
            color: Orange;
            `;
const H1 = styledComponents.h1`
            font - size: 12px;
            padding - left: 10px;
            `;
const CountryButton = styledComponents.button`
            font - size: 8px;
            padding: 10px;
            border: 1px solid black;
            border - radius: 5px;
            margin: 10px;
            `;

const AboutUs = styledComponents(Link)`
            margin - right: 30px;
            text - decoration: none;
            `;
const CountryList = styledComponents.div`
            display: flex;
            flex - wrap: wrap;
            max-width: 95vw;
            padding: 0 20px;
            justify - content: center;
            `;
const BannerImage = styledComponents.img`
            width: 30 %;
            height: 30 %;
            left: 30vw;
            position: relative;
            `;


const Button = styledComponents.button`
position: relative;
bottom: 1.5vw;
width: 5vw;
left: 30vw;
            `;

export default SearchingPage