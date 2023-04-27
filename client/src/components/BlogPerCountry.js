import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";
import moment from "moment";


const BlogPerCountry = ({ country }) => {


    const [blogPosts, setBlogPosts] = useState(null);
    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        setShowContent(!showContent);
    };


    useEffect(() => {
        fetch(`http://localhost:4000/posts/${country}`).then((res) => res.json()).then((data) => {
            setBlogPosts(data.data);
        })
    }, []);
    return (
        <>

            {blogPosts === null ? (
                <>Loading</>
            ) : (
                <>
                    <button onClick={toggleContent}>
                        {showContent ? `Hide Blogs of ${country}` : `View Blogs of ${country}`}
                    </button>
                    {showContent && blogPosts.map((item) => (
                        <BlockData>
                            <p key={item.title}>Title : {item.title}</p>
                            <p key={item.author}>Author : {item.author}</p>
                            <p key={item.content}>Content : {item.content}</p>
                            <p key={item.date}>Created Date :{moment(item.date).utc().format('YYYY-MM-DD')}</p>
                            ================================================================
                        </BlockData>
                    ))}
                </>
            )}

        </>

    );
};


const BlockData = styledComponents.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: green;`;

export default BlogPerCountry;
