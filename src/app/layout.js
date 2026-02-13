// ROOT LAYOUT
// Le squelette: <html>, <body>, <Sidebar /> <nav>
// qui va entourer et qui va servir à créer chaque page de l'app

"use client" // Indique à Next.js que c'est un composant client 
import React, { useState } from 'react'

// ----------------------------------------------
// ------------------- IMPORTS ------------------
// ----------------------------------------------
import "./globals.css";
import localFont from 'next/font/local'
import { config, text } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Sidebar from "./components/Sidebar";
import BackToTop from './components/BackToTop';
config.autoAddCss = false; // pour eviter le css auto de FA

  // Valeurs par défauts
  const DEFAULTS = ({
    fontFamily: "--font-bbb-readme",
    fontSize: 13,
    lineHeight: 1.5,
    bgColor: 'rgb(84.699% 96.254% 83.914%)',
    textColor: 'rgb(13.81% 13.179% 9.5057%)',
  }) 


// Déclaration de tes polices locales
const bbbReadMe = localFont({
  src: '../../public/fonts/BBBReadMe-Regular.woff2', 
  variable: '--font-bbb-readme', 
})
const openDyslexic = localFont({
  src: '../../public/fonts/OpenDyslexic-Regular.otf',
  variable: '--font-open-dyslexic',
})
const eido = localFont({
  src: '../../public/fonts/eido.otf',
  variable: '--font-eido',
})
const accessibleDFA = localFont({
  src: '../../public/fonts/accessibledfa.woff',
  variable: '--font-accessibledfa',
})

export default function RootLayout({ children }) {

  /* ---  STATES --- */
  const [custom, setCustom] = useState(DEFAULTS);

  /* ---  FONCTIONS --- */
  const updateFontSize = (newSize) => {
    setCustom({
      ...custom, // copie l'objet actuel
      fontSize: newSize  // remplace avec nvlle valeur
    });
  };

  const updateLineHeight = (newHeight) => {
    setCustom({
      ...custom,
      lineHeight : newHeight
    })
  }

  const updateFontFamily = (selectedFont) => {
    //recoit une chaine de caractère
  setCustom ({
    ... custom,
    fontFamily : selectedFont
  })
  }

  const changeColors = (newBgColor, newTextColor) => {
    setCustom ({
      ...custom,
      bgColor: newBgColor,
    textColor: newTextColor,
    })
  }

  const reverseColors = (bgColor,textColor) => {
     setCustom ({
      ...custom,
      bgColor: textColor,
    textColor: bgColor,
    })
  }

  const resetSettings = () => {
  setCustom(DEFAULTS)
    }
  


  return (
    <html lang="fr" className={`${bbbReadMe.variable} ${openDyslexic.variable} ${eido.variable} ${accessibleDFA.variable} `}>
      
      {/* appliquation du style sur les variable du CSS (au lieu du body)*/}
      <body style={{ 
        "--main-background" : custom.bgColor,
        "--main-text" : custom.textColor,
        "--dynamic-line-height": custom.lineHeight,
        fontSize: `${custom.fontSize}px`,
        fontFamily :custom.fontFamily.startsWith('--') 
    ? `var(${custom.fontFamily})` 
    : custom.fontFamily
        }}>
        <main >
          {/* Communication enfant */}
          <Sidebar
            settings={custom}
            onChangeSize={updateFontSize}
            onChangeLineHeight={updateLineHeight}
            onResetSettings={resetSettings}
            onUpdateFontFamily={updateFontFamily}
            onChangeColors={changeColors}
            onReverseColors={reverseColors}
          />
          <BackToTop />
          {children}
        </main>

      </body>
    </html>
  );
}

