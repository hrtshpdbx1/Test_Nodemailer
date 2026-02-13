import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faRocket, faCheckDouble, faCompassDrafting, faPeopleGroup, faBullhorn, faChartLine, faPenNib, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/project-detail.css';

export default function SocialScript() {
    return (
        <div className="projectPageWrapper bbbreadme">
            <nav className="projectNav">
                <Link href="/" className="back-link">
                    <button className="btn">
                        <FontAwesomeIcon icon={faArrowLeft} style={{marginRight: '10px'}} /> 
                        Retour au portfolio
                    </button>
                </Link>
            </nav>

            <main id="main-content" className="projectPage">
                <header className="projectHero">
                    <h1>Social Script</h1>
                    <p className="projectTagline">
                        SocialScript est un simulateur interactif d&apos;entraînement aux situations sociales,
                        développé dans le cadre d&apos;un workshop HTML/CSS/JavaScript de ma formation Developper Javascript
                        Fullstack à Interface3. Le projet répond à un besoin d&apos;apprentissage explicite des codes sociaux dans un
                        environnement sécurisé, particulièrement utile pour les personnes neurodivergentes.
                    </p>

                    <div className="projectMeta">
                        <div className="metaContainerLeft">
                            <div className="metaItem">
                                <strong>Type</strong>
                                <ul><li>Workshop</li></ul>
                            </div>
                            <div className="metaItem">
                                <strong>Rôle</strong>
                                <ul>
                                    <li>Développement</li>
                                    <li>Design</li>
                                    <li>Rédaction</li>
                                </ul>
                            </div>
                            <div className="metaItem">
                                <strong>Tech</strong>
                                <ul>
                                    <li>HTML / CSS</li>
                                    <li>JavaScript</li>
                                    <li>JSON Server</li>
                                </ul>
                            </div>
                        </div>
                        <div className="metaContainerRight">
                            <div className="metaItem">
                                <a href="https://github.com/hrtshpdbx1/SocialScript" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                    <FontAwesomeIcon icon={faGithub} style={{marginRight: '8px'}} /> Code source
                                </a>
                            </div>
                            <div className="metaItem">
                                <a href="https://social-script-nine.vercel.app" target="_blank" rel="noopener noreferrer" className="btn primary btn-outline">
                                    <FontAwesomeIcon icon={faRocket} style={{marginRight: '8px'}} /> Demo
                                </a>
                            </div>
                        </div>
                    </div>

                    <figure className="imagePlaceholder">
                        <img src="/img/screen/homepage.png" alt="capture d'écran de la page d'accueil du site SocialScript" />
                        <figcaption>Capture d&apos;écran de la page d&apos;accueil du site SocialScript</figcaption>
                    </figure>
                </header>

                {/* --- OBJECTIFS PROJET --- */}
                <section className="projectSection">
                    <div className="highlight">
                        <h2>Objectif du projet</h2>
                        <p>
                            Ce projet vient d&apos;un besoin que j&apos;ai rencontré personnellement. Étant autiste et TDAH, c&apos;est par la
                            répétition et l&apos;analyse consciente des interactions que j&apos;ai acquis des compétences sociales qui ne me venaient pas naturellement. J&apos;ai
                            toujours rêvé d&apos;un environnement où m&apos;entraîner sans craindre les malentendus ou les faux
                            pas du temps réel. Ce projet est cette réalisation : un simulateur où les personnes neurodivergentes
                            peuvent expérimenter, analyser et progresser dans un cadre structuré et bienveillant.
                        </p>

                        <h3>Fonctionnalités clés :</h3>
                        <ul className="projectList">
                            <li><strong>Affichage dynamique :</strong> Gestion des scénarios via JavaScript et un JSON server.</li>
                            <li><strong>Génération d&apos;avatars :</strong> Utilisation de Dicebear API pour générer des interlocuteur..ices uniques.</li>
                            <li><strong>Feedback pédagogique :</strong> Explication détaillée des codes implicites et possibilité de rejouer pour explorer toutes les issues possibles.</li>
                            <li><strong>Ressources :</strong> Pages comprenant diverses ressources facilement accessibles grâce au champ de recherches et labels.</li>
                        </ul>
                    </div>
                </section>

                {/* --- DESIGN --- */}
                <section className="projectSection">
                    <div className="projet_design">
                        <h2>Design</h2>
                        <div className="elem_design">
                            <p>
                                Mes recherches graphiques ont abouti à un design qui reprend le logo de l&apos;autisme (un sigle
                                infini) en l&apos;intégrant au S de Social Script. Cette fusion symbolise une boucle d&apos;apprentissage
                                continue et fluide tout en respectant les normes WCAG AAA voulues sur le site.
                            </p>
                        </div>
                        <figure className="imagePlaceholder">
                            <img src="/img/screen/croquislogo2.png" alt="Croquis et recherches graphiques" />
                            <figcaption>Croquis et recherches graphiques</figcaption>
                            <img src="/img/screen/recherchesgraphiques.png" alt="Différentes versions du logo" style={{marginTop: '20px'}} />
                            <figcaption>Différentes versions du logo réalisées sur Illustrator</figcaption>
                        </figure>
                    </div>
                </section>

                {/* --- DEFI TECH --- */}
                <section className="projectSection">
                    <div className="project-technique">
                        <h2>Défis techniques : L&apos;Accessibilité</h2>
                        <div className="intro-text">
                            <p>
                                Pour un projet s&apos;adressant aux personnes neurodivergentes, l&apos;accessibilité n&apos;est pas une option,
                                mais le socle de l&apos;expérience utilisateur. Mon défi a été de réduire la charge cognitive tout en
                                assurant une navigation robuste pour les technologies d&apos;assistance.
                            </p>
                        </div>

                        <div className="article-point">
                            <div className="point-content">
                                <h3>1. Navigation sémantique native</h3>
                                <p>
                                    J&apos;ai privilégié l&apos;utilisation des balises HTML5 <code>&lt;details&gt;</code> et 
                                    <code>&lt;summary&gt;</code> pour les FAQ et les sections d&apos;analyse.
                                </p>
                            </div>
                            <div className="point-media">
                                <div className="htmlConcept">
                                    <span className="codeComment">L&apos;élément natif permet de gérer l&apos;ouverture/fermeture sans JS</span>
                                    <code>
                                        &lt;details&gt;<br/>
                                        &nbsp;&nbsp;&lt;summary&gt;Titre de la FAQ&lt;/summary&gt;<br/>
                                        &nbsp;&nbsp;&lt;p&gt;Contenu accessible par défaut.&lt;/p&gt;<br/>
                                        &lt;/details&gt;
                                    </code>
                                </div>
                                <div className="benefit-box">
                                    <strong>L&apos;intérêt technique :</strong> Ces balises offrent une interactivité native sans
                                    JavaScript. Elles sont <strong>accessibles par défaut</strong> : le navigateur gère lui-même le focus
                                    clavier et communique automatiquement l&apos;état aux lecteurs d&apos;écran.
                                </div>
                            </div>
                            <figure className="imagePlaceholder">
                                <video loop muted playsinline controls>
                                    <source src="/img/screen/testnavclavier.mp4" type="video/mp4" />
                                </video>
                                <figcaption>Capture d&apos;écran vidéo de la FAQ</figcaption>
                            </figure>
                        </div>

                        <div className="article-point">
                            <div className="point-content">
                                <h3>2. Gestion proactive du Focus</h3>
                                <p>
                                    Dans une application dynamique où le contenu est généré par JavaScript,
                                    le curseur clavier se perd souvent lors d&apos;un rafraîchissement. J&apos;ai implémenté un système de <strong>Focus Management</strong>.
                                </p>
                            </div>
                            <div className="point-media">
                                <div className="codeConcept">
                                    <span className="codeComment">On force le focus sur le bouton suivant pour guider l&apos;utilisateur clavier</span>
                                    <code>
                                        const nextBtn = document.querySelector(&apos;.option-btn&apos;);<br/>
                                        nextBtn.focus(&#123; focusVisible: true &#125;);
                                    </code>
                                </div>
                                <div className="benefit-box">
                                    <strong>Focus dynamique :</strong> Dès que l&apos;utilisateur valide un choix, j&apos;utilise la méthode <code>.focus()</code>. Cela garantit une navigation fluide au clavier et évite les clics inutiles.
                                </div>
                            </div>
                            <figure className="imagePlaceholder">
                                <img src="/img/screen/scenario1.png" alt="Démonstration du focus visible" />
                                <figcaption>Capture d&apos;écran montrant le focus visible sur le premier bouton de réponse</figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* --- LEÇONS APPRISES --- */}
                <section className="projectSection">
                    <div className="highlight">
                        <h2>Ce que j&apos;ai appris</h2>
                        <p>
                            Ce projet m&apos;a permis de transformer mes engagements en faveur de l&apos;inclusion en compétences techniques.
                            En m&apos;appuyant sur les standards du W3C, j&apos;ai consolidé ma pratique de l&apos;accessibilité native.
                        </p>
                        <div className="article-point">
                            <h3>Maîtrise des standards et outils</h3>
                            <p>
                                J&apos;ai approfondi l&apos;usage du duo details/summary et la gestion du focus. L&apos;utilisation de **Wave** et des **axe DevTools** fait désormais partie de mon workflow.
                            </p>
                        </div>
                        <div className="article-point">
                            <h3>Analyse critique du workflow</h3>
                            <p>
                                Si <strong>JSON Server</strong> a été un excellent choix pour un premier projet, il a montré ses limites pour la production. Le test via <strong>VoiceOver</strong> a été l&apos;étape la plus formatrice.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <div className="projectFooter">
                <p>Prêt·e à discuter d&apos;accessibilité et de neuro-inclusion ?</p>
                <Link href="/#contact" className="btn">Me contacter</Link>
            </div>

            <footer className="main-footer-inverted">
                <div className="footer-container">
                    <div className="footer-left">
                        <Link href="/" className="footer-logo">Louise Moraldy</Link>
                    </div>
                    <div className="footer-right">
                        <div className="social-icons">
                            <a href="https://github.com/ton-profil" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="https://instagram.com/ton-profil" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="mailto:ton-email@exemple.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}