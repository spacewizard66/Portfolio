import React from 'react';

export default function Footer() {
    /* Functions Gets Current Year for Copyright Tag */
    var date = new Date();
    var currYear: number = date.getFullYear();

    return (
        <footer className="footer">
            <section className="footer__socials">
                <a className="footer__link email" href="mailto:mason4work@outlook.com?subject=Portfolio" target="_blank" rel="noreferrer">
                    <span>Email</span>
                </a>
                <a className="footer__link linkedin" href="https://www.linkedin.com/in/mason-galat/" target="_blank" rel="noreferrer">
                    <span>LinkedIn</span>
                </a>
                <a className="footer__link github" href="https://github.com/spacewizard66" target="_blank" rel="noreferrer">
                    <span>Github</span>
                </a>
            </section>
            <small className="footer__copyright">
                &copy; {currYear}, Made with ❤️ by Mason Galat.
            </small>
        </footer>
    );
};