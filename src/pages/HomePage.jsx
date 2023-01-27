import axios from "../api/AxiosConfig";
import { useEffect, useState } from "react";

const HomePage = () => {

    const [response, setResponse] = useState({});

    useEffect(() => {
        axios.get("/teacher/random")
            .then(json => setResponse(json.data));
    }, []);

    console.log(response);


    return (
        <main>
            <h1 id="entrance"> {response.firstname || "Amogus"}, right now, I'm developing a react + spring app ...</h1>
        </main>
    );
}

export default HomePage;