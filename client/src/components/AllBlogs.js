import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";
import moment from "moment";
import { Link } from "react-router-dom";
const AllBlogs = () => {


    const [blogPosts, setBlogPosts] = useState(null);


    useEffect(() => {
        fetch("http://localhost:4000/allposts").then((res) => res.json()).then((data) => {
            setBlogPosts(data.data);
        })
    }, []);
    return (
        <>

            {blogPosts === null ? (
                <>Loading</>
            ) : (
                <>
                    {blogPosts.map((item) => (
                        <BlockData>
                            <p key={item.title}>Title : {item.title}</p>
                            <p key={item.author}>Author : {item.author}</p>
                            <p key={item.content}>Content : {item.content}</p>
                            <p key={item.countryName}>Country : {item.countryName}</p>
                            <p key={item.date}>Created Date :{moment(item.date).utc().format('YYYY-MM-DD')}</p>
================================================================
                        </BlockData>
                    ))}
                        <p style={{ textAlign: "center" }}>
                            <TextLink to="/">Back to Home </TextLink>
                        </p>
                </>
            )}

        </>

    );
};

const TextLink = styledComponents(Link)`
position: absolute;
left: 10px;
top: 10px;
font-weight: bold;
    text-decoration: none;
    `
const BlockData = styledComponents.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: green;`;

export default AllBlogs;
