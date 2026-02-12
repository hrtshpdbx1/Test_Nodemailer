//  PAGE.JS
// Le contenu : <Hero />, <About />, <Skills />, <Projects />, <Contact />)

import Link from "next/link";
import Image from 'next/image';
import HomepageSS from '../../public/img/screenshots/homepageSS.png';
import HomepagePGQ from '../../public/img/screenshots/homepagePGQ.png';
import ContactForm from '@/app/components/ContactForm.jsx';
import Sidebar from "./components/Sidebar";
// @ -> pointe vers le dossier src


// FA ICONE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckDouble,
  faCompassDrafting,
  faPeopleGroup,
  faBullhorn,
  faChartLine,
  faPenNib,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';
// import App from "next/app";



export default function Home() {
  return (
    <div>
      {/* <h1 className="text-2xl"> Homepage !</h1>
      <Link className="underline" href="/form">Formulaire </Link> */}

      <main id="main-content">

        {/* --- SECTION 1 --- */}
        <section id="section1" className="page-section section1">
          <div className="content-container">
            <div className="text">
              <h1>Bonjour !</h1>
              <p>Je suis Louise, une développeuse javascript fullstack en formation. Je souhaite créer et coder un web
                accessible
                à tous et toutes.</p>
            
            
            </div>
          </div>
        </section>

        {/* --- SECTION 2 --- */}

        <section id="section2" className="page-section section2">

            <div className="content-container">
              <div className="text_intro">
                <h2>À propos</h2>
                <p>Dans le courant des années 2000, j&apos;ai découvert que je pouvais personnaliser le layout de mon Myspace et
                  j&apos;ai passé des
                  heures à bidouiller du CSS sur le PC fixe familial. C&apos;était ma première expérience de code et c&apos;était aussi
                  déroutant que grisant. J&apos;étais fascinée par ces caractères obscurs capable de créer des univers aussi
                  riches, et quelques semaines plus tard, j&apos;avais refait le layout des profil de tout mon entourage.</p>
                <p>
                  <em>Fast forwards de quelques années </em> : après mes études d&apos;Arts Numériques aux Beaux-Arts, je passe 4
                  ans dans l&apos;associatif à lutter contre les violences
                  sexistes et sexuelles en
                  milieux festifs. L&apos;envie de créer est restée ainsi que le besoin de <em>mettre mon énergie au service de
                    causes qui comptent.</em>
                </p>
                <p>
                  Quand j&apos;ai intégré la formation Full Stack JavaScript Developer chez Interface3 en septembre dernier, la
                  boucle s&apos;est
                  bouclée. Retrouver HTML, CSS et JavaScript avec une vision plus large a été une révélation. Ayant moi-même
                  un
                  handicap invisible,
                  je suis particulièrement sensible à l&apos;accessibilité. Ce qui m&apos;anime aujourd&apos;hui : construire un web qui soit
                  fun et
                  attrayant, mais surtout à la portée de tout le monde.
                </p>
                <p>
                  Je <em>recherche actuellement un stage</em> où je pourrai allier créativité, éthique et impact, pour
                  contribuer à un web plus
                  inclusif et respectueux.
                </p>
              </div>
            </div>
        </section>

        {/* --- SECTION 3 --- */}
        {/* --- Compétences --- */}

        <section id="section3" className="page-section section3">
          <div className="text_intro">

            <h2>Compétences & Apprentissages</h2>

            <p className="competences-intro">
              Forte d&apos;une solide expérience en gestion de projet et en plaidoyer
              je combine aujourd&apos;hui mes compétences transversales avec une expertise technique en développement web.
              Éligible aux mesures d&apos;embauche <strong>activa.brussels</strong> (aptitude réduite), je recherche des
              opportunités
              où l&apos;impact social rencontre l&apos;innovation technologique.
            </p>
          </div>
          <div className="div_skills">
            <div className="skills-columns">
              <div className="skills-category">

                <h3>Stack Technique <small>(work in progress)</small></h3>
                <ul className="skills-list learning">
                  <li><span className="icon-logo html"></span> HTML5, CSS3</li>
                  <li><span className="icon-logo js"></span> JavaScript (ES6+)</li>
                  <li><span className="icon-logo react"></span> React.js </li>
                  <li><span className="icon-logo node"></span> Node.js, Express</li>
                  <li><span className="icon-logo mongodb"></span> MongoDB</li>
                  <li><span className="icon-logo figma"></span> UI/UX Design (Figma)</li>
                </ul>
              </div>


              <div className="skills-category">
                <h3>Compétences</h3>
                <ul className="skills-list mastery">
                  {/* <li><i className="fa-solid fa-check-double"></i>  Gestion et coordination de projets</li> */}
                  <li>
                    <FontAwesomeIcon icon={faCheckDouble} />
                    <span>Gestion et coordination de projets</span>
                  </li>
                    <li>
                      <FontAwesomeIcon icon={faCompassDrafting} />
                      <span>Conception d’outils pédagogiques</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faPeopleGroup} />
                      <span>Facilitation de groupe</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faBullhorn} />
                      <span>Missions de plaidoyer</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faChartLine} />
                      <span>Suivi-évaluation</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faPenNib} />
                      <span>Collaboration interdisciplinaire</span>
                    </li>
                </ul>
              </div>
            </div>

            <div className="skills-links-container">
              <a href="../path/to/votre-cv.pdf" className="btn btn-outline btn-skill" download>
                <i className="fa-solid fa-file-pdf"></i>
                <span>Télécharger mon CV</span>
              </a>

              <a href="https://www.linkedin.com/in/ton-profil/" target="_blank" className="btn btn-outline btn-skill">
                <i className="fa-brands fa-linkedin"></i>
                <span>Retrouvez-moi sur LinkedIn</span>
              </a>
            </div>
          </div>
          <p className="competences-intro">

          </p>
        </section>

        {/* --- SECTION 4 --- */}
        {/* --- Projets --- */}

        <section id="section4" className="page-section section4">
          <div className="section-intro">
            <h2>Projets sélectionnés</h2>
            <div className="projects_container">

              <div className="projet_elem">
                <h4>Social Script</h4>
                <Image
                  src={HomepageSS}
                  width={500}
                  height={500}
                  alt="Capture d'écran de Social Script"  />
                  <p>
                    Un <strong>simulateur d&apos;interactions sociales</strong> bienveillant pour personnes neurodivergentes.
                    Le projet rend explicites les codes sociaux implicites à travers des scénarios interactifs, permettant de
                    pratiquer sans crainte du jugement.
                  </p>
                  <div className="btn_container">
                    <a href="/frontend/social-script.html" target="_blank" rel="noopener">
                      <button className="btn btn-outline">En savoir plus</button>
                  </a>
              </div>
            </div>

            <div className="projet_elem">
              <h4>The Pay Gap Quest</h4>
                  <Image
                  src={HomepagePGQ}
                    width={500}
                    height={500}
                    alt="Capture d'écran de PayGap Quest"
                  />

                <p>
                  Une plateforme interactive de <strong>sensibilisation aux inégalités salariales</strong> en Belgique.
                  L&apos;outil propose un calculateur de salaire juste et des ressources pour aider les femmes à reprendre le
                  pouvoir sur leur carrière.
                </p>
                <div className="btn_container">
                  <a href="/frontend/paygap-quest.html" target="_blank" rel="noopener">
                    <button className="btn btn-outline">En savoir plus</button>
                </a>
            </div>
          </div>
        </div>
    </div>
    </section >

        {/* --- SECTION 5 --- */}
        {/* --- CONTACT FORM --- */}
        <section id="section5" className="page-section section5">
          <div className="section-intro">
            <h2>Grandissons ensemble</h2>
            <p>Je suis à la recherche d&apos;une opportunité de stage (8 à 12 semaines) en tant que Développeuse JavaScript Full
              Stack, suite à ma formation chez Interface3. N&apos;hésitez pas à me contacter si vous cherchez une stagiaire,
              si vous avez une question ou simplement pour
              faire connaissance.</p>

            <div className="contactform_container">
              <div id="contact">
            
    
                <ContactForm />
              </div>
            </div>
          </div>
        </section>



      </main>

      
    </div>
  );
}