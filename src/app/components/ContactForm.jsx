"use client"
// Indique à Next.js que ce composant s'exécute côté client (par défaut Serveur)
import { useState } from 'react'
import React from 'react'
import { sendEmail } from '@/lib/sendEmail'

function ContactForm() {
    const [inputValue, setInputValue] = useState("")
    // Initialisation de l'état "inputValue" avec une chaîne vide
    // setInputValue est la fonction qui permettra de mettre à jour cette valeur
    const [status, setStatus] = useState("")

    async function handleAction(formData) {
        const result = await sendEmail(formData);
        if (result.success) {
            setStatus("Email envoyé avec succès !");
        } else {
            setStatus("Erreur lors de l'envoi.");
        }
    }

    return (
        <div>
            <div className='contactform_container'>
                <form action={handleAction} className='flex flex-col'>
                    <label>Prénom : </label>
                    <input className='p-2 mb-4 border border-gray-600'
                        type="text"
                        id="forname"
                        name="forname"
                        placeholder="Ada"
                        required />

                    <label>Nom : </label>
                    <input className='p-2 mb-4 border border-gray-600'
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Lovelace"
                        required />

                    <label>E-mail : </label>
                    <input className='p-2 mb-4 border border-gray-600'
                        type="email"
                        id="from"
                        name="from"
                        placeholder="ada.byron@analytica.com"
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
                </div>
            </div>
        </div>
    )
}

export default ContactForm