import React from "react";
import {Link} from 'react-router-dom'

import Button from "./Button"

const Users = ({ user }) => {
    return (
        <div className=" flex flex-col bg-gray-50 border-2 rounded p-2 drop-shadow-2xl ">
            <img className=" h-[300px] w-[300px] rounded object-cover" src={user.profile_picture}/>
            <h1 className="text-gray-400 text-xl text-center p-3 font-medium">{user.name}</h1>
            {/* <p>Password : {user.password}</p>
            <p>Email : {user.email}</p>
            <p>City : {user.city}</p> */}
            <Link className="flex justify-center" to={`/${user.slug}`}>
                <Button type="button" text='Discover'/>
            </Link>
        </div>
    )
}

export default Users