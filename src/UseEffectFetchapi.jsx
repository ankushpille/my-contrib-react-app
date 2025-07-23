import {useState, useEffect} from 'react'

 function UseEfffectFetchapi(){
    const [users,setUsers] = useState([]);
    const [loading,isLoading] = useState(true)

    useEffect(() => {
       const fetchUsers = async () => {
        try{
           const response = await fetch('https://jsonplaceholder.typicode.com/users')
           const data = await response.json()
           setUsers(data);
           isLoading(false);
        }
        catch(error){
              console.log("error fetching users")
              isLoading(false);
        }
       }
       fetchUsers();
    },[])


    if(loading) return <p>Loading..</p>
    return(
        <>
          <h1>users list</h1>
          <ul>
           {users.map(users => (
               <li key={users.id}>{users.name}</li>
           ))}
           </ul>
        </>
    )
}

export default UseEfffectFetchapi;