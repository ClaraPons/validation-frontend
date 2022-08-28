import React from "react";

const Select = ({label, handleChange, options, required}) => {
    return (
       <>
        <section className="flex justify-center py-0.5">
            <div className="py-4 bg-amber-50 px-5 rounded">
                <label className="block mb-2.5 text-m"  htmlFor="city-select">{label}</label>

                <select onChange={handleChange} className="border-2 border-amber-100 rounded w-[600px] p-1 focus:outline-none focus:border-amber-400 required:border-red-300" name="cities" id="city-select" required={required}>
                    <option value=''>Select an option</option>
                        {options.map((option) => {
                            return (
                                <option key={option.value} value={option.value}>{option.text}</option>
                            )
                        })}
                </select>
            </div>
        </section>
    </>
    )
}

export default Select