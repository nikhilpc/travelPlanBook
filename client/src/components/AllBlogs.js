import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";


const AllBlogs = () => {


    const [maps, setMap] = useState(null);


    useEffect(() => {
        fetch("http://localhost:4000/allposts").then((res) => res.json()).then((data) => {
            setMap(data.data);
        })
    }, []);
    return (
        <>

            {maps === null ? (
                <>Loading</>
            ) : (
                <>
                    {maps.map((item) => (
                        <BlockData>
                            <p key={item.title}>Title : {item.title}</p>
                            <p key={item.author}>Author : {item.author}</p>
                            <p key={item.content}>Content : {item.content}</p>
                            <p key={item.countryName}>Country : {item.countryName}</p>
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

export default AllBlogs;
