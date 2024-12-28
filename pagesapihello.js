```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{   
        const fetchData = async ()=>{
            try{
                const res = await fetch('/api/hello');
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                  }
                const json = await res.json();
                setData(json);
            } catch (error) {
                setError(error);
            } finally{
                setLoading(false);
            }
        }
        fetchData();
    },[])
    if(loading){
        return <p>Loading...</p>    
    }
    if(error){
        return <p>Error: {error.message}</p>
    }
    return(
        <div> 
            <h1>About Page</h1>
            <p>{data.message}</p>
        </div>
    );
}
```