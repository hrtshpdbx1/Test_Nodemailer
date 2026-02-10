// ROOT LAYOUT
// Le squelette: <html>, <body>, <Sidebar /> <nav>
// qui va entourer et qui va servir à créer chaque page de l'app


// ----------------------------------------------
// ------------------- IMPORTS ------------------
// ----------------------------------------------
import "./globals.css";
import localFont from 'next/font/local'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; 
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
  return (
    <html lang="fr" className={`${bbbReadMe.variable} ${openDyslexic.variable} ${eido.variable}`}>
      <body>
        {/* La sidebar viendra ici plus tard */}
        {children}
      </body>
    </html>
  );
}
