import { useState, useEffect} from 'react';


const useFetch = (url)=>{
    const [ data, setData] = useState(null);
    const [ pending, setPending] = useState(true);
    const [ error, setError] = useState(null);
    useEffect(()=>{
        fetch(url).then(results=>{
            if(results.ok){
             throw Error ("couldn't get results");
            }
            results.json();
        })
        .then(data=>{
            setPending(false);
            setData(data);
            setError(null);
        })
        .catch(err=>{
            setError(err.message);
            setPending(false);
        })

    },[url]);
    return { data, pending, error};
}

export default useFetch;