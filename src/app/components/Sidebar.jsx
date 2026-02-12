"use client" // Indique à Next.js que c'est un composant client 
import React, { useState } from 'react'
// IMG
import Image from 'next/image' // obligatoire pour pour utiliser <Image />
import fontSizeIcon from '../../../public/img/icon/font-size.svg'
import lineHeightIcon from '../../../public/img/icon/line-height.svg'
// FA 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGear,
    faXmark
} from '@fortawesome/free-solid-svg-icons';



function Sidebar(props) {
    const { settings, onChangeSize, onChangeLineHeight, onResetSettings } = props;
    const { fontFamily, fontSize, lineHeight, bgColor, textColor } = settings


    /* --- 1. LES ÉTATS (STATES) --- */
    const [isOpen, setIsOpen] = useState(false); // State visibilité sidebar, fermé par défaut


    /* --- 2. LES FONCTIONS --- */
    function handleSizeClick(newSize) {
        const currentSize = Number(fontSize); 
        const nextSize = Math.max(8, currentSize + newSize);
        onChangeSize(nextSize);// On "appelle" le parent pour lui donner la nouvelle valeur
    }

    function handleHeightClick(newHeight) {
        const currentHeight = Number(lineHeight);
        // On limite entre 1 (serré) et 3 (très espacé)
        const nextHeight = Math.min(3, Math.max(1, currentHeight + newHeight));
        onChangeLineHeight(nextHeight.toFixed(1));
    }

    function handleResetSettings (settingsToReset) {
onResetSettings (settingsToReset)
    }


    //todo : fonction handleFontSelect
    // todo : fonction handleThemeSelect
    // todo : fonction handleReverseTheme



    return (
        <>
            {/* Le bouton ⚙️ */}
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
                    {/* --- FONT SELCET DROPDOWN ---  */}
                    <div className="sidebar__group">
                        <h3 className="sidebar__label">Police</h3>
                        <select id="font-select" className="sidebar_dropdown">
                            <option value="bbbreadme" className="opt-bbbreadme">BBB ReadMe</option>
                            <option value="eido" className="opt-eido">Eido</option>
                            <option value="accessibledfa" className="opt-accessibledfa">Accessible DFA</option>
                            <option value="opendyslexic" className="opt-opendyslexic">OpenDyslexic</option>
                            <option value="arial" className="opt-arial">Arial</option>
                            <option value="times" className="opt-times">Times</option>
                        </select>
                    </div>

                    {/* --- FONT SIZE BTN ---  */}
                    <div className="sidebar__group">
                        {/*  On affiche la valeur qui vient du parent */}
                        <h3 className="sidebar__label">Taille : {fontSize}px</h3>
                        <div className="sidebar__pill-group">
                            {/* Au clic, on appelle la fonction locale qui communique avec layout */}
                            <button className="pill-btn" onClick={() => handleSizeClick(-1)}>-</button>
                            <Image
                                src={fontSizeIcon}
                                alt="Icône taille de police"
                                width={20}
                                height={20}
                            />
                            <button className="pill-btn" onClick={() => handleSizeClick(1)}>+</button>
                        </div>
                    </div>

                    {/* --- LINE HEIGHT BTN ---  */}
                    <div className="sidebar__group">
                        <h3 className="sidebar__label">Interligne: {lineHeight}px</h3>
                        <div className="sidebar__pill-group">
                            {/* Au clic, on appelle la fonction locale qui communique avec layout */}
                            <button className="pill-btn" onClick={() => handleHeightClick(-0.1)}>-</button>
                            <Image
                                src={lineHeightIcon}
                                alt="Icône interligne"
                                width={20}
                                height={20}
                            />
                            <button className="pill-btn" onClick={() => handleHeightClick(0.1)}>+</button>
                        </div>
                    </div>

                    {/* --- THEME CHOICE ---  */}
                    <div className="sidebar__group">
                        <p>Thèmes :</p>
                        <div className="contrast-group">
                            <button className="contrast-circle contrast-control"
                                data-bg="rgb(84.699% 96.254% 83.914%)"
                                data-text="rgb(13.81% 13.179% 9.5057%)">
                            </button>
                            <button className="contrast-circle contrast-control"
                                data-bg="rgb(93.699% 99.691% 79.441%)"
                                data-text="rgb(26.999% 9.8793% 74.757%)">
                            </button>
                            <button className="contrast-circle contrast-control"
                                data-bg="rgb(96.702% 87.161% 90.199%)"
                                data-text="rgb(0.81603% 5.1251% 0%)">
                            </button>
                            <button className="contrast-circle contrast-control" data-bg="#b91c1c"
                                data-text="#fef2f2">
                            </button>
                            <button className="contrast-circle contrast-control" data-bg="color(display-p3 0.927 0.989 0.29)"
                                data-text="color(display-p3 0.302 0.023 0.149)">
                            </button>
                            <button className="contrast-circle contrast-control"
                                data-bg="rgb(21.176% 32.549% 7.8431%)"
                                data-text="#f7fee7">
                            </button>
                            <button className="contrast-circle contrast-control" data-bg="#2D2D2D"
                                data-text="#FFF0F0">
                            </button>
                            <button className="contrast-circle contrast-control"
                                data-bg="rgb(51.37% 99.562% 59.165%)"
                                data-text="rgb(6.1489% 1.6109% 2.6324%)">
                            </button>
                        </div>
                    </div>
                    {/* --- REVERSE---  */}
                    <div className="sidebar__group">
                        <div className="sidebar__toggle-wrapper">

                            <div className="switch">
                                <input type="checkbox" id="invert-toggle" />
                                <span className="slider round"></span>
                            </div>
                            <div className="sidebar__label">Inverser</div>
                        </div>
                    </div>
                    {/* --- RESET---  */}
                    <div className="sidebar__group">
                        <button 
                        onClick={handleResetSettings}
                        id="reset-theme" 
                        className="sidebar__reset-button" 
                        title="Réinitialiser le thème">
                            <i className="fa-solid fa-rotate-left"></i>
                            <span>Réinitialiser</span>

                        </button>
                    </div>
                </div>
            </aside>

        </>
    )
}

export default Sidebar