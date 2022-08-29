import React from "react";


const Input = ({label, type, value, placeholder, handleChange, error}) => {

    // console.log({error.msg})

    return (
        <section className="flex justify-center py-0.5">
            <div className="py-4 bg-amber-50 px-5 rounded">
                <label className="block mb-2 text-m ">{label}</label>
                <input className={`border-2 border-amber-100 rounded w-[600px] p-1 focus:outline-none focus:border-amber-400 ${error ? ('border-red-300') : ('') }`} type={type} value={value} placeholder={placeholder} onChange={handleChange} />
                {error && <p className="flex m-t-10 text-red-500 text-sm">{error.map(err=>err.msg)}</p>}
            </div>
        </section>
    )
}

// Faire une variable {error} qui devra récupérer les infos à afficher (donc la phrase du msg)
// Mapper dans la page formulaire (le faire dans l'input ?). 
// Le composant devra récupérer les infos du param (ou du msg ?) et les afficher après la div MAIS filtrer le résultat du map avant ? 
// faire un map pour récup infos, filtrer les infos (dans input ou dans formulaire ?), récupérer l'info et l'envoyer dans {error} 
// qui s'affichera après la div dans l'input 
// 

export default Input