import React from "react";

const Select = ({label, value, handleChange, text}) => {
    return (
       <>
        <section className="flex justify-center py-0.5">
            <div className="py-5 bg-amber-50 px-5 rounded">
                <label className="block mb-5 text-m"  htmlFor="city-select">{label}</label>

                <select onChange={handleChange} className="border-2 border-amber-100 rounded w-[600px] p-1 focus:outline-none focus:border-amber-400" name="cities" id="city-select">
                    <option value="">Please choose an option</option>
                    <option value={value}>{text}</option>
                    <option value={value}>{text}</option>
                    <option value={value}>{text}</option>
                </select>
            </div>
        </section>
    </>
    )
}

export default Select