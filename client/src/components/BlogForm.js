import React, { useState } from 'react';


function BlogForm() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const proxy = "http://localhost:4000"
    const handleSubmit = async (e) => {
        e.preventDefault();

        const bodyData = { _id: "tests", title, author, content }

        try {
            const response = await fetch(proxy + `/api/posts`, {
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
