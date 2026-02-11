"use client" // Indique à Next.js que c'est un composant client 
import React, { useState } from 'react'
// FA 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGear,
    faXmark
} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    /* --- 1. LES ÉTATS (STATES) --- */
    const [isOpen, setIsOpen] = useState(false); // State visibilité sidebar, fermée par défaut
    const [fontsize, setFontsize] = useState(12); // State fontsize (test)

    /* --- 2. LES FONCTIONS --- */
    function increase() {
        setFontsize(fontsize + 1); // On utilise la fonction de modification de l'état
    }
    // function increase() {
    //     setfontsize(fontsize + 1)

    // }
    return (
        <>

            {/* Le bouton Trigger (Gear icon) */}
            <button
                id="logo_trigger_menu"
                onClick={() => setIsOpen(true)} // Au clic, on change le state isOpen à true
                aria-label="Ouvrir le menu">
                <FontAwesomeIcon icon={faGear} />
            </button>

            {/* Sidebar  */}
            {/*  si isOpen est vrai, on ajoute la classe 'sticky' 
                sinon on ne met rien. */}
                {/* todo: vérifier si class sticky s'applique, cf Nesting mess */}
            <aside id="sidebar" className={
                isOpen ?
                'sticky' :
                ''}>
                <div className="sidebar__header">
                    <h2 className="sidebar__title">Réglages</h2>
                    <button 
                    id="closeCustomBlock" 
                    onClick={() => setIsOpen(false)}  // Au clic, on change le state isOpen à false
                    aria-label="Fermer le menu"> 
                     <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>

                <div className="sidebar__content">

                    {/* <p style={{ fontsize: fontsize }}> Mot </p>
                    <button onClick={increase}> + </button> */}
                    <div className="sidebar__group">
                        <h3 className="sidebar__label">Taille : {fontsize}px</h3>
                        <div className="sidebar__pill-group">
                            <button className="pill-btn" onClick={() => setFontsize(fontsize - 1)}>-</button>
                            <span className="pill-value">A</span>
                            <button className="pill-btn" onClick={() => setFontsize(fontsize + 1)}>+</button>
                        </div>
                    </div>
                    {/* Ajoute ici tes autres groupes (Thèmes, Polices...) au fur et à mesure */}
                </div>
            </aside>

        </>
    )
}

export default Sidebar