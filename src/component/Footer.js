import React from "react";
var d = new Date();
var currYear = d.getFullYear();

function Footer() {
    return (
        <React.StrictMode>
            <footer className="home-footer">
                <div className="social-div">
                    <a className="social-link email" href="mailto:mason4work@outlook.com?subject=Portfolio" target="_blank" rel="noreferrer"><span>Email</span></a>
                    <a className="social-link linkedin" href="https://www.linkedin.com/in/mason-galat/" target="_blank" rel="noreferrer"><span>LinkedIn</span></a>
                    <a className="social-link github" href="https://github.com/spacewizard66" target="_blank" rel="noreferrer"><span>Github</span></a>
                </div>
                <div className="copyright-div">
                    <p className="copyright">&copy; {currYear}, Made with ❤️ by Mason Galat.</p>
                </div>
            </footer>
        </React.StrictMode>
    )
}
export default Footer;