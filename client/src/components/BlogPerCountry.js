import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";
import moment from "moment";


const BlogPerCountry = ({ country }) => {


    const [blogPosts, setBlogPosts] = useState(null);
    const [showContent, setShowContent] = useState(true);

    const toggleContent = () => {
        setShowContent(!showContent);
    };
    const deleteBlog = async (item) => {


        try {
            const response = await fetch(`http://localhost:4000/posts/${item._id}`, {
                method: 'DELETE',

            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }

        alert("Thank you, Your blog has been deleted successfully!");
        window.location.reload();
    }
    const editBlog = async (item) => {

        console.log("clicked here ", item);
        // try {
        //     const response = await fetch(`http://localhost:4000/posts/${item._id}`, {
        //         method: 'PATCH',

        //     });

        //     const data = await response.json();
        //     console.log(data);
        // } catch (error) {
        //     console.error(error);
        // }

    }

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
                    <Button onClick={toggleContent}>
                        {showContent ? `Hide Blogs of ${country}` : `View Blogs of ${country}`}
                    </Button>
                    <Blogs>
                        {showContent && blogPosts.map((item) => (
                            <BlockData>
                                <p key={item.title}>Title : {item.title}</p>
                                <p key={item.author}>Author : {item.author}</p>
                                <p key={item.content}>Content : {item.content}</p>
                                <p key={item.date}>Created Date :{moment(item.date).utc().format('YYYY-MM-DD')}</p>
                                ================================================================
                                <button onClick={() => editBlog(item)}>Update</button>
                                <button onClick={() => deleteBlog(item)}>Delete</button>
                            </BlockData>

                        ))}
                    </Blogs>
                </>
            )}

        </>

    );
};
const Blogs = styledComponents.div`
display: flex;
flex-direction: column;`

const Button = styledComponents.button`
height: 40px;
padding:10px;
color: blue;
background-color: orange;
:hover {
    cursor: pointer;
background-color: green;}`

const BlockData = styledComponents.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: green;`;

export default BlogPerCountry;
