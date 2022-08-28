import React from "react";

const Button = ({text, type, disabled}) => {
    return (
    <section className="flex justify-center py-1.5">
        <button type={type} className="text-white bg-amber-500 rounded py-2 px-10 hover:bg-amber-700 my-4 disabled:opacity-60 disabled:cursor-not-allowed" disabled={disabled}>{text}</button>
    </section>
    )
}

export default Button