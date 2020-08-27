import { useState,useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = "6ec1a598f622b6311";

const useGoogleSearch = (term,page) =>{
    const [data, setData] = useState(null);

   useEffect(() => {
        const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}&start=${page}`
        console.log(url);
        const fetchData = async()=>{
            await fetch(url)
            .then(responce =>responce.json())
            .then(result=>setData(result))
        }
         fetchData();
    }, [ term,page ]);

    return { data }
}

export default useGoogleSearch;
