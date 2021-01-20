import { useEffect, useState } from "react";
import { User } from "../../Models/user";

const baseUrl: string = "http://localhost:3001/users";

const GetUsers = (): [User[], boolean] => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchUrl() {
        const response = await fetch(baseUrl);
        const json = await response.json();
        setData(json);
        setLoading(false);
    }

    useEffect(() => {
        fetchUrl();
    }, []);

    return [data, loading];
}

export { GetUsers };