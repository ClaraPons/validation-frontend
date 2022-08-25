import React from "react";


const Users = ({ user }) => {
    return (
        <section className="flex justify-center py-1 drop-shadow-2xl ">
            <div className="flex bg-gray-50 border-2 rounded p-2 w-[580px] my-5 ">
                <img className="h-[250px] w-[250px] rounded object-cover" src={user.profile_picture}/>
                <div className="text-left p-5">
                    <h1 className="text-gray-400 text-xl py-3 font-medium">{user.name}</h1>
                    <p>Password : {user.password}</p>
                    <p>Email : {user.email}</p>
                    <p>City : {user.city}</p>
                </div>
            </div>
        </section>
    )
}

export default Users