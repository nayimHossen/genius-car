import axios from 'axios';
import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const getToken = async () => {
            const email = user?.user?.email;

            if (email) {
                const { data } = await axios.post('https://shielded-fortress-24229.herokuapp.com/login', { email })
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            }
        };
        getToken();
    }, []);
    return [token];
};

export default useToken;