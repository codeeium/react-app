import React, { useEffect, useState } from "react";
import axios from "axios";

// Define the shape of the data (TypeScript interface)
interface Post {
    id: number;
    title: string;
    body: string;
}

const App: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch data from JSONPlaceholder
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPosts(response.data);
            } catch (err) {
                setError("Failed to fetch posts. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [posts]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {/*<h2>{post.title}</h2>*/}
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
