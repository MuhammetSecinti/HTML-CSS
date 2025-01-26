import getData from "./lib/service";
import { useEffect, useState } from "react";

function App() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const result = await getData(3); 
                setUserData(result);
            } catch (error) {
                console.error("Error in App:", error);
            }
        })();
    }, []);

    return (
        <div>
            {userData ? (
                <div>
                    <h1>{userData.name}</h1>
                    <p>{userData.email}</p>
                    <h2>Posts:</h2>
                    <ul>
                        {userData.posts.map(post => (
                            <li key={post.id}>{post.title}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
