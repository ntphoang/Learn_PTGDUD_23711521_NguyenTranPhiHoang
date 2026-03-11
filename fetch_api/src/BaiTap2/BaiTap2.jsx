import { useEffect, useState } from "react";

export default function BaiTap2(){
    const[data,setData] = useState([]);
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState(null);
    const url = "https://jsonplaceholder.typicode.com/users";
    
    try {
        useEffect(()=>{
            async function fetchUser() {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            
            setData(data);
            }
            fetchUser();
        },[]);
    } catch (err) {
        throw new Error(err.message);
    } finally{
        setTimeout(()=>{setLoading(false)},1000);
    }
    

    return(
            <>
            {
                loading ? (
                     <p>Loading...</p>
                ) : (
                    data.map((user)=>{
                    return <p key={user.id}>Name: {user.name} - Email: {user.email}</p>
            }))
            }
            </>
        );
}