import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faRocket, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/project-detail.css';

export default function PayGapQuest() {
    return (
        <div className="projectPageWrapper bbbreadme">
            {/* --- NAVIGATION --- */}
            <nav className="projectNav">
                <Link href="/" className="back-link">
                    <button className="btn">
                        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '10px' }} />
                        Retour au portfolio
                    </button>
                </Link>
            </nav>

            <main id="main-content" className="projectPage">
                <header className="projectHero">
                    <h1>PayGap Quest</h1>
                    <p className="projectTagline">
                        PayGap Quest est un simulateur interactif conçu pour lever le voile sur les
                        inégalités de rémunération et transformer la
                        négociation de carrière en un exercice accessible à toutes. En traduisant des données macro-économiques
                        complexes en une
                        expérience utilisateur fluide et pédagogique, cet outil permet aux femmes de simuler leurs trajectoires,
                        de calculer
                        leur manque à gagner et de structurer leur discours pour exiger une rémunération à la hauteur de leur
                        talent.
                    </p>

                    <div className="projectMeta">
                        <div className="metaContainerLeft">
                            <div className="metaItem">
                                <strong>Type</strong>
                                <ul>
                                    <li>Hackathon (72H)</li>
                                </ul>
                            </div>
                            <div className="metaItem">
                                <strong>Rôle</strong>
                                <ul>
                                    <li>Porteuse de projet</li>
                                    <li>Développement Front-End</li>
                                    <li>Rédaction du contenu</li>
                                </ul>
                            </div>
                            <div className="metaItem">
                                <strong>Tech</strong>
                                <ul>
                                    <li>HTML / CSS</li>
                                    <li>JavaScript</li>
                                    <li>PHP / JSON</li>
                                </ul>
                            </div>
                        </div>
                        <div className="metaContainerRight">
                            <div className="metaItem">
                                <a href="https://github.com/sahardel92/PayGapHackathon" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                    <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} /> Code Source
                                </a>
                            </div>
                            <div className="metaItem">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="btn primary btn-outline">
                                    <FontAwesomeIcon icon={faRocket} style={{ marginRight: '8px' }} /> Demo
                                </a>
                            </div>
                        </div>
                    </div>

                    <section className="projectSection">
                        <div className="highlight">
                            <h2>À propos de cette démo</h2>
                            <p><strong>Cette version est une démonstration interactive Frontend uniquement.</strong> Elle
                                présente le design visuel et les interactions conçus durant l&apos;événement. Pour faciliter l&apos;accès immédiat,
                                cette démo présente la structure fidèle au prototype original, bien que les calculs en temps réel (Backend via PHP) soient ici simulés. L&apos;architecture complète reste consultable sur GitHub.</p>
                        </div>
                    </section>

                    <div className="project-homepage_screen">
                        <figure className="imagePlaceholder">
                            <video loop muted playsinline controls>
                                <source src="/img/screen/homepage_animation_v2.mp4" type="video/mp4" />
                            </video>
                            <figcaption>Page d&apos;accueil du projet PayGap Quest</figcaption>
                        </figure>
                    </div>
                </header>

                {/* --- OBJECTIFS PROJET --- */}
                <section className="projectSection">
                    <div className="projet_purpose">
                        <h2>Objectif du projet</h2>
                        <p>J&apos;ai proposé ce projet pour répondre au thème <em>« @Finances, 3 jours pour prouver que la finance
                            peut être créative, accessible et engagée»</em> au Hackathon d’Interface3 (novembre 2025), et fut rapidement
                            rejointe par une équipe super motivée issues des différentes formations.</p>
                        <p>En Belgique, l’égalité salariale est un enjeu de justice sociale : les femmes gagnent encore en
                            moyenne 20 % de moins que les hommes, travaillant symboliquement "gratuitement" à partir du 20 octobre. L&apos;absence de
                            négociation peut coûter jusqu&apos;à 1 million d&apos;euros sur une carrière.</p>

                        <h3>Fonctionnalités clés :</h3>
                        <ul className="projectList">
                            <li><strong>Calculateur salarial :</strong> Comparatif dynamique basé sur le secteur, l’ancienneté et le genre.</li>
                            <li><strong>Feuille de route :</strong> Guide de négociation salarial structuré et téléchargeable en PDF.</li>
                            <li><strong>Boîte à outils :</strong> Annuaire de ressources (livres, podcasts, lois) pour s&apos;informer.</li>
                            <li><strong>API Sectorielle :</strong> Structuration des données réelles du rapport 2024 de l&apos;IEFH.</li>
                        </ul>
                    </div>
                </section>

                {/* --- TECHNIQUES --- */}
                <section className="projectSection">
                    <div className="project-technique">
                        <h2>Défis techniques & Réalisations</h2>

                        <div className="article-point">
                            <div className="point-content">
                                <h3>Le calculateur d&apos;écart salarial</h3>
                                <p>Le défi majeur a été l&apos;harmonisation entre le traitement des données en PHP et leur affichage côté Front-end.
                                    Nous avons travaillé sur un flux asynchrone (JSON) permettant d&apos;interroger les secteurs et d&apos;afficher les écarts sans rechargement.</p>
                            </div>
                            
                            <figure className="imagePlaceholder">
                                <img src="/img/screen/PayGap.drawio.png" alt="Diagramme de l&apos;architecture backend" />
                                <figcaption>Architecture logicielle</figcaption>
                            </figure>

                            <div className="point-media">
                                <div className="jsonConcept">
                                    <span className="codeComment">Extrait de la structure JSON consommée</span>
                                    <code>
                                        <span className="json-key">"IT"</span>: &#123;<br />
                                        &nbsp;&nbsp;<span className="json-key">"ecartHF"</span>: <span className="json-number">0.18</span>,<br />
                                        &nbsp;&nbsp;<span className="json-key">"metiers"</span>: &#123;<br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="json-key">"Developpeur Full-Stack"</span>: &#123; <span className="json-key">"base"</span>: <span className="json-number">3300</span> &#125;<br />
                                        &nbsp;&nbsp;&#125;<br />
                                        &#125;
                                    </code>
                                </div>
                            </div>
                        </div>

                        <div className="article-point">
                            <div className="point-content">
                                <h3>Le compteur dynamique</h3>
                                <p>J&apos;ai conçu une logique hybride en JavaScript qui détecte la date du jour : un compte à rebours avant le 20 octobre, et un compteur de temps écoulé après cette date.</p>
                            </div>
                            <div className="point-media">
                                <div className="codeConcept">
                                    <span className="codeComment">Calcul dynamique du temps</span>
                                    <code>
                                        <span className="keyword">function</span> <span className="attr">updateCounter</span>() &#123;<br />
                                        &nbsp;&nbsp;<span className="keyword">const</span> today = <span className="keyword">new</span> Date();<br />
                                        &nbsp;&nbsp;<span className="keyword">let</span> diff = today - unequalPayDay;<br />
                                        &nbsp;&nbsp;<span className="keyword">const</span> diffDays = Math.<span class="keyword">floor</span>(diff / (1000 * 60 * 60 * 24));<br />
                                        &nbsp;&nbsp;counterElement.innerHTML = `Depuis $&#123;diffDays&#125; jours...`;<br />
                                        &#125;
                                    </code>
                                </div>
                                <figure className="imagePlaceholder">
                                    <video loop muted playsinline controls>
                                        <source src="/img/screen/compteur_fast.mp4" type="video/mp4" />
                                    </video>
                                    <figcaption>Capture vidéo du compteur dynamique</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- LEÇONS --- */}
                <section className="projectSection">
                    <div className="highlight">
                        <h2>Ce que j&apos;ai appris</h2>
                        <ul className="projectList">
                            <li><strong>Collaboration intensive :</strong> Intégration Front/Back en équipe.</li>
                            <li><strong>Git Flow sous tension :</strong> Gestion des conflits sur un sprint de 72h.</li>
                            <li><strong>UX Temporelle :</strong> Transformer une donnée froide en expérience percutante.</li>
                        </ul>
                    </div>
                </section>

                {/* --- CREDITS --- */}
                <section className="projectSection">
                    <div className="article-point">
                        <h2>Crédits 💖</h2>
                        <p>Ce projet est le fruit d&apos;une collaboration intense :</p>
                        <ul className="projectList">
                            <li><strong>Développement Frontend :</strong> Sara, Victoria et Moi 🤗.</li>
                            <li><strong>Développement Backend :</strong> Sahar D.</li>
                            <li><strong>Design :</strong> Romane.</li>
                        </ul>
                    </div>
                </section>
            </main>

            <div className="projectFooter">
                <p>Vous cherchez une stagiaire soucieuse de l&apos;accessibilité ?</p>
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