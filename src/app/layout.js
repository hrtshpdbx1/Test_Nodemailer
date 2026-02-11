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
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Sidebar from "./components/Sidebar";
config.autoAddCss = false; // pour eviter le css auto de FA

// Déclaration de tes polices locales
const bbbReadMe = localFont({
  src: '../../public/fonts/BBBReadMe-Regular.woff2', // Chemin vers ton fichier
  variable: '--font-bbb-readme', // Nom de la variable CSS à utiliser
})

const openDyslexic = localFont({
  src: '../../public/fonts/OpenDyslexic-Regular.otf',
  variable: '--font-open-dyslexic',
})

const eido = localFont({
  src: '../../public/fonts/eido.otf',
  variable: '--font-eido',
})




export default function RootLayout({ children }) {

  /* ---  LES ÉTATS (STATES) --- */
// déplacé depuis le composant
const [custom, setCustom] = useState(
  {
  fontFamily: "--font-bbb-readme",
  fontSize: '12',
  lineHeight: '1.8',
  bgColor: 'rgb(84.699% 96.254% 83.914%)',
  textColor: 'rgb(13.81% 13.179% 9.5057%)',
}
); // State fontsize (test)

  // todo: Envoyer l'objet custom via un props 
  // settings={custom})

  
    /* ---  FONCTIONS --- */
    // todo : créer une fonction (handleChangeSettings) qui recevra les nouvelles valeurs depuis la Sidebar et mettra à jour le state custom avec setCustom.


  return (
    <html lang="fr" className={`${bbbReadMe.variable} ${openDyslexic.variable} ${eido.variable}`}>
      <body>


        <main>
          <Sidebar 
          value={Sidebar} />
          {children} </main> {/* contenu de des pages */}

      </body>
    </html>
  );
}

// APPLICATION DU STYLE
// peut être injecter dans la balise body 
// style={{ fontSize: custom.fontSize + 'px', ... }}.