import React, { useEffect, useState } from 'react'
import User from './User';

const Async = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            return response.json();
        }).then((data)=>{
            console.log(data)
            setUsers(data);
            setLoading(false);
        }).catch((err)=>{
            console.log("couldn't fetch data")
            console.log(err)
        })

    },[])
  return (
    <ul style={{textDecoration: 'none', listStyleType: 'none'}}>
        <h1>Users</h1>
        {loading && <p>Loading...</p>}
        {users && users.map((user)=>(
                <li key={user.id}><User name = {user.name} id={user.id} email={user.email} website={user.website} /> </li>
            ))}
    </ul>
  )
}

export default Async