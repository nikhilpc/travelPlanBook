import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";
import moment from "moment";


const BlogPerCountry = ({ country, blogPosts, fetchBlogs }) => {

    const [showContent, setShowContent] = useState(true);
    const [editedBlogId, setEditedBlogId] = useState(null);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const proxy = "http://localhost:4000"

    const toggleContent = () => {
        setShowContent(!showContent);
    };
    const deleteBlog = async (item) => {


        try {
            const response = await fetch(proxy + `/posts/${item._id}`, {
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
        setEditedBlogId(item._id)
        setTitle(item.title)
        setAuthor(item.author)
        setContent(item.content)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(new Date(), "date")
        const bodyData = { title, author, content, countryName: country, date: new Date() }
        console.log(bodyData, "bodyData")
        try {
            const response = await fetch(proxy + `/posts/${editedBlogId}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bodyData),

            });


            const data = await response.json();
            console.log(data, "data")
            if (data) {
                fetchBlogs()
            }


        } catch (error) {
            console.error(error);
        }

    };

    useEffect(() => {
        (async () => {
            fetchBlogs()
        })()
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
                                <p key={item.date}>Date :{moment(item.date).utc().format('YYYY-MM-DD')}</p>
                                ================================================================
                                <button onClick={() => editBlog(item)}>Edit</button>
                                {editedBlogId === item._id && <form onSubmit={handleSubmit}>
                                    <label>
                                        Title:
                                        <input type="text" value={title} id="title" onChange={(e) => setTitle(e.target.value)} required />
                                    </label>
                                    <label>
                                        Author:
                                        <input type="text" value={author} id="author" onChange={(e) => setAuthor(e.target.value)} required />
                                    </label>
                                    <label>
                                        Content:
                                        <textarea value={content} id="content" onChange={(e) => setContent(e.target.value)} required />
                                    </label>
                                    <button type="submit" id="submit-btn" >Update</button>
                                </form>}
                                <button onClick={() => deleteBlog(item)}>Delete</button>
                            </BlockData>

                        ))}
                    </Blogs>
                </>
            )
            }

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
