import { useState, useEffect } from "react"
import Button from "../components/Button"
import H1 from "../components/H1"
import Input from "../components/Input"
import Select from "../components/Select"

const Users = () => {

    const cities = [
        {
            city:'Paris'
        }, 
        {
            city:'Los Angeles'
        },{
            city:'Tokyo'
        }
    ]
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [options, setOptions] = useState([])

    const handleChangeName = (e) => {
        setName(e.target.value)
        // console.log(name);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
        // console.log(password);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
        console.log(email);
    }

    const handleSelect = (e) => {
        setCity(e.target.value)
    }

    // const createSelectOptions = () => {
    //
    //     let formattedCities = cities.map((city) =>{return {city}})

    //     setOptions(formattedCities)
    //     console.log(options);
    // }

    const postUser = async (e) => {
       e.preventDefault()

        const user = {
            name,
            password,
            email,
        }

        const request = await fetch('http://localhost:5006/users', {
            method:'POST', 
            headers: {
                'Content-type':'application/json'
            }, 
            body: JSON.stringify(user)
        })
        const response = await request.json()
        // console.log(response.map((r)=> {
        //    return r.param
        // }));
        
        // console.log(cities.map((city) =>{return city}));
    }

    return(
        <>
            <H1>Formulaire</H1>
            <form onSubmit={postUser}>
                <Input label='Name' type='text' value={name} placeholder='Enter Name' handleChange={handleChangeName}/>
                <Input label='Password' type='password' value={password} placeholder='Enter Password' handleChange={handleChangePassword}/>
                <Input label='Email' type='email' value={email} placeholder='Enter Email' handleChange={handleChangeEmail}/>
                <Select label='Choose a city:' value={city} text={cities.map((city) =>{return city.city})} handleChange={handleSelect}/>
                <Button type='submit' text='Submit'/>
            </form>
        </>
    )
}

export default Users