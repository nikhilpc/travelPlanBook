import React, { useState } from 'react';
import styledComponents from "styled-components";
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        fetchSuggestions(value);
    }

    const fetchSuggestions = (value) => {
        const suggestions = ['Barbados', 'Suriname', 'Namibia', 'Guinea', 'Vanuatu', 'Samoa', 'France', 'Andorra', 'Azerbaijan', 'Maldives', 'Saint Lucia', 'Panama', 'Timor-Leste', 'North Macedonia', 'Denmark', 'Egypt', 'Estonia', 'Czechia', 'Bahamas', 'Uruguay', 'Comoros', 'Costa Rica', 'Togo', 'São Tomé and Príncipe', 'Netherlands', 'Australia', 'Malaysia', 'Nepal', 'Cuba', 'North Korea', 'Moldova', 'Zambia', 'Dominica', 'Marshall Islands', 'Tonga', 'Peru', 'Cape Verde', 'Kiribati', 'Finland', 'Ivory Coast', 'Pakistan', 'Djibouti', 'Micronesia', 'Slovenia', 'Kyrgyzstan', 'Switzerland', 'Kuwait', 'Seychelles', 'United Kingdom', 'Fiji', 'Yemen', 'Central African Republic', 'Belgium', 'Argentina', 'Madagascar', 'South Africa', 'Latvia', 'Zimbabwe', 'Gabon', 'Romania', 'Germany', 'Bangladesh', 'Jordan', 'Mozambique', 'Israel', 'Eritrea', 'Indonesia', 'Japan', 'Spain', 'Afghanistan', 'United Arab Emirates', 'Malawi', 'Turkey', 'Belarus', 'Montenegro', 'Bosnia and Herzegovina', 'Eswatini', 'Lithuania', 'Turkmenistan', 'Ethiopia', 'Hungary', 'Chad', 'Nigeria', 'San Marino', 'Ukraine', 'Haiti', 'Botswana', 'Portugal', 'Guyana', 'Ireland', 'Mauritius', 'Saint Kitts and Nevis', 'Iceland', 'Chile', 'Kazakhstan', 'China', 'Armenia', 'Bolivia', 'Sudan', 'Vietnam', 'Burundi', 'Canada', 'Colombia', 'Lesotho', 'Guatemala', 'Uzbekistan', 'Senegal', 'Gambia', 'Liechtenstein', 'Tuvalu', 'Equatorial Guinea', 'Bhutan', 'Paraguay', 'Grenada', 'Papua New Guinea', 'Jamaica', 'Republic of the Congo', 'Poland', 'Russia', 'Mauritania', 'Burkina Faso', 'DR Congo', 'Benin', 'Uganda', 'Mongolia', 'Laos', 'Algeria', 'Brunei', 'Kenya', 'Sri Lanka', 'Dominican Republic', 'Austria', 'Luxembourg', 'Georgia', 'Slovakia', 'Norway', 'Thailand', 'India', 'Morocco', 'Nicaragua', 'Qatar', 'Brazil', 'New Zealand', 'Singapore', 'Syria', 'Belize', 'Venezuela', 'Bahrain', 'Cameroon', 'Cyprus', 'United States', 'Angola', 'Tunisia', 'Monaco', 'Rwanda', 'Trinidad and Tobago', 'Malta', 'Mexico', 'Antigua and Barbuda', 'South Korea', 'Niger', 'Albania', 'Somalia', 'Liberia', 'Myanmar', 'Tanzania', 'Iraq', 'Saint Vincent and the Grenadines', 'Libya', 'Sierra Leone', 'Serbia', 'Ghana', 'South Sudan', 'Sweden', 'Greece', 'Philippines', 'Guinea-Bissau', 'Saudi Arabia', 'Palau', 'Bulgaria', 'Nauru', 'Cambodia', 'Italy', 'Mali', 'Iran', 'Tajikistan', 'Oman', 'El Salvador', 'Lebanon', 'Vatican City', 'Ecuador', 'Croatia', 'Solomon Islands', 'Honduras']
            .filter(suggestion => suggestion.toLowerCase().startsWith(value.toLowerCase()));
        setSuggestions(suggestions);
    }

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setSuggestions([]);
    }

    return (
        <Division>
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Enter a country name"
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
    );
}
const LI = styledComponents.li`
:hover {
    background-color: yellow;
    cursor: pointer;
    border: 1px solid red;
    font-weight: bold;
}
list-style-type: none

`
const UL = styledComponents.ul`
background-color: orange;
padding: 10px;
color: black;
`
const Division = styledComponents.div`
height:5px;
width: 10vw;

    `
export default SearchBar;
