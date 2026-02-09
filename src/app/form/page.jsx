"use client"
// Indique à Next.js que ce composant s'exécute côté client (par défaut Serveur)
import { useState } from 'react'
import React from 'react'
import { sendEmail } from '@/lib/sendEmail'

function Page() {
    const [inputValue, setInputValue] = useState("")
    // Initialisation de l'état "inputValue" avec une chaîne vide
    // setInputValue est la fonction qui permettra de mettre à jour cette valeur
    const [status, setStatus] = useState("")

    async function handleAction(formData) {
        const result = await sendEmail(formData);
        if (result.success) {
            setStatus("Email envoyé avec succès !");
            // todo : vider le formulaire
        } else {
            setStatus("Erreur lors de l'envoi.");
        }
    }

    return (
        <div>
            <h2 className='text-lg'> Test Form </h2>


            <div className='flex flex-col gap-3 w-md'>
                <form action={handleAction} className='flex flex-col'>
                    <label>Votre nom : </label>
                    <input className='p-2 mb-4 border border-gray-600'
                        type="text"
                        id="lasname"
                        name="lastname"
                        required />

                    <label>Votre Prenom : </label>
                    <input className='p-2 mb-4 border border-gray-600'
                        type="text"
                        id="forname"
                        name="forname"
                        required />

                    <label>Votre Mail : </label>
                    <input className='p-2 mb-4 border border-gray-600'
                        type="email"
                        id="from"
                        name="from"
                        required />

                    <label>Message </label>
                    <textarea className='p-2 mb-4 border border-gray-600'
                        id="message"
                        name="message"
                        rows="4"
                        cols="50"
                        required />

                    <button
                        type="submit" className='p-2 bg-black text-white'> Envoyer </button>
                </form>
                {status && <p className="mt-2 font-bold">{status}</p>}
                <div>
                    <h3 className='text-lg'> Exercice </h3>
                    <input className='p-2 mb-4 border border-gray-600'
                        type="text"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                    //À chaque touche tapée, on récupère l'événement 'e', 
                    // puis on met à jour l'état avec la valeur actuelle du champ
                    />

                    {/* Affichage en temps réel de ce qui est stocké dans l'état */}
                    <p> Tu as écrit : {inputValue}</p>
                </div>
            </div>
        </div>
    )
}

export default Page