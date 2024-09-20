import React from 'react';

export default function Footer(): React.JSX.Element {
    /* Gets Current Year for Copyright Tag */
    var date = new Date();
    var currYear: number = date.getFullYear();

    return (
        <footer className="footer">
            <section className="footer__credits">
                <div className="footer__credits__container">
                    <p className="footer__credits__title">
                        Credits
                    </p>
                    <hr className="footer__credits__row"/>
                    <a
                        href="https://compressor.io/"
                        className="footer__credits__link"
                        target="_blank"
                    >
                        compressor.io
                    </a>
                    <a
                        href="https://ezgif.com/"
                        className="footer__credits__link"
                        target="_blank"
                    >
                        ezgif.com
                    </a>
                    <a
                        href="https://favicon.io/"
                        className="footer__credits__link"
                        target="_blank"
                    >
                        favicon.io
                    </a>
                    <a
                        href="https://app.flowcv.com/dashboard"
                        className="footer__credits__link"
                        target="_blank"
                    >
                        flowcv.io
                    </a>
                    <a
                        href="https://fontawesome.com/"
                        className="footer__credits__link"
                        target="_blank"
                    >
                        fontawesome.com
                    </a>
                    <a
                        href="https://www.freeconvert.com/"
                        className="footer__credits__link"
                        target="_blank"
                    >
                        freeconvert.com
                    </a>
                    <a
                        href="https://getwaves.io/"
                        className="footer__credits__link"
                        target="_blank"
                    >
                        getwaves.io
                    </a>
                    <a
                        href="https://icons8.com/icons/"
                        className="footer__credits__link"
                        target="_blank"
                    >
                        icons8.com
                    </a>
                </div>
            </section>
            <hr className="footer__row"/>
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