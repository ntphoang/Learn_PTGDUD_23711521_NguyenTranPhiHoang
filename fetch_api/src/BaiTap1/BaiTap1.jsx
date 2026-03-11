import { useEffect, useState } from "react";

export default function BaiTap1(){
    const[users,setUsers] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/users";
    useEffect(()=>{
        async function fetchUser() {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setUsers(data);
        }
        fetchUser();
    },[]);

    return(
        <>
        {users.map((user)=>{
            return <p key={user.id}>Name: {user.name} - Email: {user.email}</p>
        })}
        </>
    );
}