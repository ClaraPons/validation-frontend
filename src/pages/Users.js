import { useState, useEffect } from "react"
import Grid from "../components/Grid"
import Usercard from '../components/Usercard'
import H1 from "../components/H1"


const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const request = await fetch('http://localhost:5006/users')
        const response = await request.json()
        setUsers(response)
    }

    return(
        <>
        <H1>Users Cards</H1>
        <Grid>
            {users.map((user) => {
                return(
                   <Usercard user={user}/>
                   
                )
            })}
        </Grid>
        </>
    )
}

export default Users