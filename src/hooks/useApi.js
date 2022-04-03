import React, {useState, useEffect} from 'react';
import Api from '../services/Api';

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const get = async (path, parameters) => {
        console.log("fetching" , path);
        setLoading(true);
        try {
            const response = await Api.get(path, {
                params: {
                    ...parameters
                }
                }
            );
            setLoading(false);
            setResults(response.data);
        } catch (e) {
            console.log(e);
            setError(e);
        }
    };
    const post = async(path, data) => {
        setLoading(true);
        try{
            const response = await Api.post(path, {...data});
            setLoading(false);
            setResults(response.data);
        } catch (e) {
            console.log(e);
            setError(e);
        }
    };
    return [loading, results, error, get, post];
};
