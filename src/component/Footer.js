function Footer() {
    /* Functions Gets Current Year for Copyright Tag */
    var d = new Date();
    var currYear = d.getFullYear();

    return (
        <footer className="footer">
            <section className="footer-social">
                <a className="footer-social-link email" href="mailto:mason4work@outlook.com?subject=Portfolio" target="_blank" rel="noreferrer">
                    <span>Email</span>
                </a>
                <a className="footer-social-link linkedin" href="https://www.linkedin.com/in/mason-galat/" target="_blank" rel="noreferrer">
                    <span>LinkedIn</span>
                </a>
                <a className="footer-social-link github" href="https://github.com/spacewizard66" target="_blank" rel="noreferrer">
                    <span>Github</span>
                </a>
            </section>
            <small className="footer-copyright">
                &copy; {currYear}, Made with ❤️ by Mason Galat.
            </small>
        </footer>
    )
}
export default Footer;