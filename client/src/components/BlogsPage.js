import React, { useParams } from "react-router-dom";

const BlogsPage = () => {
    const { country } = useParams();

    return (
        <div>
            <h2>Welcome to {country}</h2>
        </div>
    )
}
export default BlogsPage;