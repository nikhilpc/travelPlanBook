import React, { useState } from 'react';


function BlogForm(country) {
    const countryName = country.country;
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const proxy = "http://localhost:4000"
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
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                Author:
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </label>
            <label>
                Content:
                <textarea value={content} onChange={(e) => setContent(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default BlogForm;
