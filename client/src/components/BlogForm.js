import React, { useState } from 'react';


function BlogForm(country) {
    const countryName = country.country;
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const proxy = "http://localhost:4000"

    const handleClick = () => {



        // alert("Thank you, Your blog has been posted successfully!");
        // window.location.reload();

    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const bodyData = { title, author, content, countryName: countryName }

        try {
            const response = await fetch(proxy + `/posts`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bodyData),


            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <form onSubmit={handleSubmit}>
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
            <button type="submit" id="submit-btn" disabled={!(title && author && content)} onClick={handleClick}>Submit</button>
        </form>
    );
}

export default BlogForm;
