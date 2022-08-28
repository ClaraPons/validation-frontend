import { useState, useEffect } from "react"
import Button from "../components/Button"
import H1 from "../components/H1"
import Input from "../components/Input"
import Select from "../components/Select"

const Users = () => {

    const cities = [
        {
            value:'Paris',
            text:'Paris'
        }, 
        {
            value:'Los Angeles', 
            text:'Los Angeles'
        },{
            value:'Tokyo', 
            text:'Tokyo'
        }
    ]
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [options, setOptions] = useState([])
    const [image, setImage] = useState('')
    const [errors, setErrors] = useState([])

    useEffect(() => {
        createSelect()
    }, [])

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

    const handleChangeImage= (e) => {
        setImage(e.target.value)
    }

    const createSelect = () => {
        const formattedOptions = cities.map(city => {
            return {
              value: city.value,
              text: city.text
            }
          })
      
          setOptions(formattedOptions)
    
    }

    const postUser = async (e) => {
       e.preventDefault()

        const user = {
            name,
            password,
            email,
            city, 
        }

        const request = await fetch('http://localhost:5006/users', {
            method:'POST', 
            headers: {
                'Content-type':'application/json'
            }, 
            body: JSON.stringify(user)
        })
        const response = await request.json()
       
        if(request.status === 400){
            setErrors(response)
        }else{
            setName('')
            setPassword('')
            setEmail('')
            setImage('')
            setCity('')
            setErrors([])
            alert('Done')
        }

        // setErrors(response)
        // console.log(response);

        //  const result = errors.filter(word => word.param === "password");

    }

    return(
        <>
            <H1>Formulaire</H1>
            <form onSubmit={postUser}>
                <Input label='Name' type='text' required={!name} error={errors.filter(error => error.param === "name")} value={name} placeholder='Enter Name' handleChange={handleChangeName}/>
                <Input label='Password' required={!password} type='password' error={errors.filter(error => error.param === "password")} value={password} placeholder='Enter Password' handleChange={handleChangePassword}/>
                <Input label='Email' type='text' required={!email}  value={email} error={errors.filter(error => error.param === "email")} placeholder='Enter Email' handleChange={handleChangeEmail}/>
                <Input label='Image' type='text' required={!image} value={image} placeholder='Enter your picture' handleChange={handleChangeImage}/>
                <Select label='Choose a city:' required={!city} options={options} value={city} handleChange={handleSelect}/>
                <Button type='submit' text='Submit' disabled={!name || !password || !email || !image || !city}/>
            </form>
        </>
    )
}

export default Users