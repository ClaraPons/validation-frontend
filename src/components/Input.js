import React from "react";


const Input = ({label, type, value, placeholder, handleChange}) => {
    return (
        <section className="flex justify-center py-0.5">
            <div className="py-5 bg-amber-50 px-5 rounded">
                <label className="block mb-5 text-m ">{label}</label>
                <input className="border-2 border-amber-100 rounded w-[600px] p-1 focus:outline-none focus:border-amber-400" type={type} value={value} placeholder={placeholder} onChange={handleChange}/>
            </div>
        </section>
    )
}

export default Input