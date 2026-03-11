import { useEffect, useState } from "react";

export default function BaiTap2(){
    const[data,setData] = useState([]);
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState(null);
    const url = "ashttps://jsonplaceholder.typicode.com/users";
    
    useEffect(()=>{
        fetch(url).then((res)=>res.json())
                .then((data)=>setData(data))
                .catch((err)=>setError(err.message))
                .finally(()=>setTimeout(()=>setLoading(false),1000))
    },[])
    

    if(error){
        return <p>Error: {error}</p>
    }

    return(
            <>
            {
                loading ? (
                     <p>Loading...</p>
                ) : (
                    data.map((user)=>{
                    return <p key={user.id}>Name: {user.name} - Email: {user.email}</p>
            })
                )
            }
            </>
        );
}