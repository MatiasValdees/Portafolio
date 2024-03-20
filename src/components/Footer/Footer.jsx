import './Footer.css'

export const Footer = () => {
    return (
      <>
        <footer className="footer">
          <div className="footer-main">
            <div className="about-me">
                Desarrollador Full-Stack & DevOps, especializado en Java Spring-Boot & ReactJs,
                expericencia sólida en CI/CD con tecnologías Docker y Jenkins.
            </div>
            <div className="footer-categories">
                    <div className="tec-leng-footer">
                        <div className="footer-lenguages">
                            <h3>Languages</h3>
                            <ul>
                                <li> Java <i className="fa-brands fa-java"></i></li>
                                <li> Python <i className="fa-brands fa-python"></i></li>
                                <li> C# </li>
                                <li> JavaScript <i className="fa-brands fa-js"></i></li>
                                <li> HTML <i className="fa-brands fa-html5"></i></li>
                                <li> CSS <i className="fa-brands fa-css3-alt"></i></li>
                                <li> SQL / NoSQL <i className="fa-solid fa-database"></i></li>
                            </ul>
                        </div>
                        <div className="footer-tecnologies">
                        <h3>Tecnologies</h3>
                        <ul>
                            <li> Spring-Boot </li>
                            <li> ReactJS <i className="fa-brands fa-react"></i></li>
                            <li> Jenkins <i className="fa-brands fa-jenkins"></i></li>
                            <li> Docker <i className="fa-brands fa-docker"></i></li>
                            <li> AWS <i className="fa-brands fa-aws"></i></li>
                            <li> Vmware <i className="fa-solid fa-server"></i></li>
                            <li> .NET </li>
                            <li> Redis </li>
                            <li> Linux <i className="fa-brands fa-linux"></i></li>
                        </ul>
                    </div>
                </div>
               
            </div>
          </div>
          <div className="footer-social">
                    <h3>Social</h3>
                        <div className="container-icon-social-footer">
                        <a href="https://www.linkedin.com/in/matias-valdes-reyes/" target="_blank"><i className="fa-brands fa-linkedin icon-social"></i></a>
                        <a href="https://github.com/MatiasValdees" target="_blank"><i className="fa-brands fa-github icon-social"></i></a>
                        <a href="https://api.whatsapp.com/send/?phone=%2B56952116195" target="_blank"><i className="fa-brands fa-whatsapp icon-social"></i></a>
                        <a href="https://www.instagram.com/matiasvaldes._/" target="_blank"><i className="fa-brands fa-instagram icon-social"></i></a>
                    </div>
                </div>
          <hr className='line'/>
          <div className="footer-secundary">
          © Desarrollada por Matías N. Valdés Reyes - DevOps & FullStack
          </div>
        </footer>
      </>
    );
}