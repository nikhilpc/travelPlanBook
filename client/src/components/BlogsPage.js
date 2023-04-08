import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styledComponents from "styled-components";
import { useNavigate } from "react-router-dom";
const BlogsPage = () => {
    const navigate = useNavigate();
    const { country } = useParams();
    const [maps, setMap] = useState(null);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${country}/?fullText=true`)
            .then((res) => res.json())
            .then((data) => {
                setMap(data);
            });
    }, []);
    return (
        <div>
            <Heading>Welcome to {country}</Heading>
            <Back onClick={() => navigate("/")}>Home</Back>

            {maps === null ? (
                <>Loading</>
            ) : (
                <>
                    {" "}
                    {maps.map((item) => (
                        <BlockData>
                            <div key={item.name.common}>
                                Country Name : {item.name.common}
                            </div>
                            <div key={item.capital}>Capital : {item.capital}</div>
                            <div key={item.population}>Population : {item.population}</div>

                            <div key={item.maps.googleMaps}>
                                Google Map Link :{" "}
                                <a href={item.maps.googleMaps}>Map of {country}</a>
                            </div>
                            <div key={item.timezones}>Timezone : {item.timezones}</div>
                            <div key={item.flags.png}>
                                <Img src={item.flags.png} alt="flagImage"></Img>
                            </div>
                        </BlockData>
                    ))}
                </>
            )}
        </div>
    );
};

const Back = styledComponents.button`
:hover {
    background-color: orange;
    cursor: pointer;}
    right: 10px;
    height: 40px;
    margin-top: 30px;
    postion: absolute;
    color: blue;
    background-color: white;`;

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
