import axios from "axios";

async function getData(userId) {
    try {
        
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userData = userResponse.data;

        
        const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const postsData = postsResponse.data;

        return {
            ...userData,
            posts: postsData
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

export default getData;
