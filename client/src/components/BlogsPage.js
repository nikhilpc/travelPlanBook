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
    const [countryDetails, setCountryDetails] = useState(null);
    const { user, isAuthenticated } = useAuth0();
    const [blogPosts, setBlogPosts] = useState(null);
    const fetchBlogs = async () => {
        const data = await fetch(`http://localhost:4000/posts/${country}`)
        const blogs = await data.json()
        console.log(blogs, "Blogs from fetch")
        setBlogPosts(blogs.data)
    }

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${country}/?fullText=true`)
            .then((res) => res.json())
            .then((data) => {
                setCountryDetails(data);
            });
    }, []);

    return (
        <>
            <BlogPageDiv>
                <Back onClick={() => navigate("/")}>🏠 Home</Back>
                <Heading>Welcome to {country}</Heading>

            </BlogPageDiv>
            {countryDetails === null ? (
                <>Loading</>
            ) : (
                <>
                    {countryDetails.map((item) => (
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
            <BlogHeading>
                <h1>Blogs about {country}</h1>
                <h2>{country} is one of the famous tourist location in the world!</h2>

                {isAuthenticated ? <BlogForm country={country} fetchBlogs={fetchBlogs} /> : <h3>Please login to write blogs <LoginButton /></h3>}

            </BlogHeading>

            <BlogPerCountry country={country} blogPosts={blogPosts} fetchBlogs={fetchBlogs} />
            <div>
                <a href="/allblogs">
                    <Button>All country blogs</Button>
                </a>
            </div>

        </>

    );
};

const BlogHeading = styledComponents.div`
color: maroon;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}`
const Button = styledComponents.button`
height: 40px;
padding:10px;
color: blue;
background-color: orange;
:hover {
    cursor: pointer;
background-color: green;}`

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
