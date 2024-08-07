import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    if (token) {
        localStorage.setItem('jwt-token', token);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(response.data.data);
                setData(response.data.data); // Set only the data part of the response
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{color: "red"}}>Error: {error}</p>;

    return (
        <div>
            <h1>Data:</h1>
            <pre>{JSON.stringify(data)}</pre>
        </div>
    );
};

export default Home;
