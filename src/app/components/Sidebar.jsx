"use client" // Indique à Next.js que c'est un composant client 
import React, { useState } from 'react'
// IMG
import Image from 'next/image' // obligatoire pour pour utiliser <Image />
import fontSizeIcon from '../../../public/img/icon/font-size.png'
// FA 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGear,
    faXmark
} from '@fortawesome/free-solid-svg-icons';



function Sidebar(props) {

    /* --- 1. LES ÉTATS (STATES) --- */
    const [isOpen, setIsOpen] = useState(false); // State visibilité sidebar, fermé par défaut

    //todo : Récupérer dans les props les réglages actuels et la fonction pour les modifier
    // todo : map des onClick, le bouton + ne fera plus un setFontSize local. Il appellera la fonction reçue du Layout 

    /* --- 2. LES FONCTIONS --- */
    function changeSize(delta) {
        setFontSize((prev) => Math.max(8, prev + delta)); // Math.max(8, ...) empêche de descendre en dessous de 8px
    }

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
                        onClick={() => setIsOpen(false)}// Au clic, on change le state isOpen à false
                        aria-label="Fermer le menu">
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>

                <div className="sidebar__content">

                    {/* <p style={{ fontsize: fontsize }}> Mot </p>
                    <button onClick={increase}> + </button> */}
                    <div className="sidebar__group">
                        {/* On appelle la fonction avec -1 ou +1 */}
                        <h3 className="sidebar__label">Taille : {fontSize}px</h3>
                        <div className="sidebar__pill-group">
                            <button className="pill-btn" onClick={() => changeSize(-1)}>-</button>
                            <Image
                                src={fontSizeIcon}
                                alt="Icône taille de police"
                                width={20}
                                height={20}
                            />
                            <button className="pill-btn" onClick={() => changeSize(1)}>+</button>
                        </div>
                    </div>
                    {/* Ajoute ici tes autres groupes (Thèmes, Polices...) au fur et à mesure */}
                </div>
            </aside>

        </>
    )
}

export default Sidebar