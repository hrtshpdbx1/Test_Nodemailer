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


//Theme
const colors = [
    {
        id: 1,
        name: "Pistache & gris",
        bgColor: "rgb(84.699% 96.254% 83.914%)",
        textColor: "rgb(13.81% 13.179% 9.5057%)"
    },
    {
        id: 2,
        name: "Bleu & jaune",
        bgColor: "rgb(26.999% 9.8793% 74.757%)",
        textColor: "rgb(93.699% 99.691% 79.441%)"
        
    },
    {
        id: 3,
        name: "Rouge & blanc",
        bgColor: "#b91c1c",
        textColor: "#fef2f2"
    },
   
    {
        id: 4,
        name: "Kaki & blanc",
        bgColor: "rgb(21.176% 32.549% 7.8431%)",
        textColor: "#f7fee7"
    },
    {
        id: 5,
        name: "N&B",
        bgColor: "#2D2D2D",
        textColor: "#FFF0F0"
    },
    {
        id: 6,
        name: "Bleu & jaune (vif)",
        bgColor: "rgb(51.37% 99.562% 59.165%)",
        textColor: "rgb(6.1489% 1.6109% 2.6324%)"
    }
    //  {
    //     id: 5,
    //     name: "Jaune & marron",
    //     bgColor: "color(display-p3 0.302 0.023 0.149)",
    //     textColor: "color(display-p3 0.927 0.989 0.29)"
    //   {
    //     id: 3,
    //     name: "Rose pâle & noir",
    //     bgColor: "rgb(96.702% 87.161% 90.199%)",
    //     textColor: "rgb(0.81603% 5.1251% 0%)"
    // },  

];

function Sidebar(props) {
    const { settings, onChangeSize, onChangeLineHeight, onUpdateFontFamily, onResetSettings, onChangeColors, onReverseColors } = props;
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

    function handleResetSettings() {
        onResetSettings()
    }

    function handleFontSelect(selectedFont) {
        onUpdateFontFamily(selectedFont)
        // transmission de la valeur choisie au parent
    }

    function handleColorSelect(newBgColor, newTextColor) {
        onChangeColors(newBgColor, newTextColor)
    }

function handleReverseColors (bgColor, textColor) {
    onReverseColors(bgColor, textColor)
}


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
                    {/* --- FONT SELECT DROPDOWN ---  */}
                    <div className="sidebar__group">
                        <h3 className="sidebar__label">Police</h3>
                        <select
                            // onChange = {(event) => fonctionMAJ (event.target.value) }
                            onChange={(event) => handleFontSelect(event.target.value)}
                            value={settings.fontFamily}
                            id="font-select"
                            className="sidebar_dropdown">
                            <option value="--font-bbb-readme" className="opt-bbbreadme">BBB ReadMe</option>
                            <option value="--font-eido"
                                className="opt-eido">Eido</option>
                            <option value="--font-accessibledfa" className="opt-accessibledfa">Accessible DFA</option>
                            <option value="--font-open-dyslexic" className="opt-opendyslexic">OpenDyslexic</option>
                            <option value="Arial, sans-serif" className="opt-arial">Arial</option>
                            <option value="Times New Roman, serif" className="opt-times">Times</option>
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

                            {colors.map(color => (
                                <button
                                    key={color.id}
                                    className="contrast-circle"
                                    style={{
                                        "--btn-bg": color.bgColor,
                                        "--btn-text": color.textColor,
                                    }}
                                    onClick={() => handleColorSelect(color.bgColor, color.textColor)}
                                    title={color.name}/>
                            ))}
                        </div>
                    </div>
                    {/* --- REVERSE---  */}
                    <div className="sidebar__group">
                        <div className="sidebar__toggle-wrapper">

                            <div className="switch">
                                <input 
                                onClick={() => handleReverseColors(bgColor, textColor)}
                                type="checkbox" 
                                id="invert-toggle" />
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