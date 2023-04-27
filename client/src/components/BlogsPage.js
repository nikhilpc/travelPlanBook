import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styledComponents from "styled-components";
import { useNavigate } from "react-router-dom";
import BlogForm from "./BlogForm";
import BlogPerCountry from "./BlogPerCountry";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
const BlogsPage = () => {
    const navigate = useNavigate();
    const { country } = useParams();
    const [blogPosts, setBlogPosts] = useState(null);
    const { user, isAuthenticated } = useAuth0();


    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${country}/?fullText=true`)
            .then((res) => res.json())
            .then((data) => {
                setBlogPosts(data);
            });
    }, []);

    return (
        <>
            <BlogPageDiv>
                <Back onClick={() => navigate("/")}>🏠 Home</Back>
                <Heading>Welcome to {country}</Heading>

            </BlogPageDiv>
            {blogPosts === null ? (
                <>Loading</>
            ) : (
                <>
                    {blogPosts.map((item) => (
                        <BlockData>
                            <div key={item.name.common}>
                                Country Name : {item.name.common}
                            </div>
                            <div key={item.capital}>Capital : {item.capital}</div>
                            <div key={item.population}>Population : {item.population}</div>

                            <div key={item.maps.googleMaps}>
                                Google Map:<a href={item.maps.googleMaps}>Map of {country}</a>
                            </div>
                            <div key={item.timezones}>Timezone : {item.timezones[0]}</div>
                            <div key={item.flags.png}>
                                <Img src={item.flags.png} alt="flagImage"></Img>
                            </div>

                        </BlockData>
                    ))}
                </>
            )}

            <h1>Blogs about {country}</h1>
            <h2>Title</h2>
            <h3>{country} is one of the famous tourist location in the world!</h3>
            {isAuthenticated ? <><BlogForm country={country} />
                <BlogPerCountry country={country} />
                <DivisionButton>
                    <a href="/allblogs">
                        <Button>All country blogs</Button>
                    </a>
                </DivisionButton></> : <>Please login to add blogs <LoginButton /></>}
        </>

    );
};
const Button = styledComponents.button`
color: blue;
background-color: orange;
:hover {
    cursor: pointer;
background-color: green;}`
const DivisionButton = styledComponents.div`
color: blue`
const BlogPageDiv = styledComponents.div`
padding-left: 30px;
display: flex;
`
const Back = styledComponents.button`
:hover {
    cursor: pointer;
background-color: green;}
    border-radius: 10px;
    border: none;
    height: 60px;
    margin-top: 30px;
    postion: absolute;
    color: blue;
    background-color: orange;`;

const Img = styledComponents.img`
    margin-top: 10px;
    height: 5em;
    border: 0.1px solid black;
    box-shadow: 3px 3px 3px 3px #ddd;`;

const Heading = styledComponents.h1`
    left: 50vw;
    width: 95vw;
    display: inline-block;
    font-size: 3rem;
    color: orange;
    text-align: center;`;

const BlockData = styledComponents.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: green;`;

export default BlogsPage;
