import React from "react";

const Button = ({text, type}) => {
    return (
    <section className="flex justify-center py-5">
        <button type={type} className="text-white bg-amber-500 rounded py-1.5 px-5 hover:bg-amber-700 my-4">{text}</button>
    </section>
    )
}

export default Button