import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import H1 from '../components/H1'
import Userprofile from '../components/Userprofile'


const User = () => {

    const params = useParams()
    const [user, setUser] = useState([])

    useEffect(() => {
        getUser()
    },[])


    const getUser = async () => {
        const request = await fetch(`http://localhost:5006/users/${params.slug}`)
        const response = await request.json()
        // console.log(response)
        setUser(response)
    }

    // console.log(user);


    return(
        <>
            <H1>{user.name}'s Profile</H1>
            <Userprofile user={user} />
        </>
    )
}

export default User