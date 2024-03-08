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
                            <h3>Lenguages</h3>
                            <ul>
                                <li> Java <i className="fa-brands fa-java"></i></li>
                                <li> Python <i class="fa-brands fa-python"></i></li>
                                <li> C# </li>
                                <li> JavaScript <i className="fa-brands fa-js"></i></li>
                                <li> ReactJS <i className="fa-brands fa-react"></i></li>
                                <li> HTML <i class="fa-brands fa-html5"></i></li>
                                <li> CSS <i class="fa-brands fa-css3-alt"></i></li>
                                <li> Linux <i class="fa-brands fa-linux"></i></li>
                                <li> SQL / NoSQL <i class="fa-solid fa-database"></i></li>
                            </ul>
                        </div>
                        <div className="footer-tecnologies">
                        <h3>Tecnologies</h3>
                        <ul>
                            <li> Spring-Boot </li>
                            <li> Jenkins <i class="fa-brands fa-jenkins"></i></li>
                            <li> Docker <i class="fa-brands fa-docker"></i></li>
                            <li> AWS <i class="fa-brands fa-aws"></i></li>
                            <li> Vmware <i class="fa-solid fa-server"></i></li>
                            <li> .NET </li>
                            <li> Reddis </li>
                        </ul>
                    </div>
                </div>
               
            </div>
          </div>
          <div className="footer-social">
                    <h3>Social</h3>
                        <div className="container-icon-social-footer">
                        <i className="fa-brands fa-github icon-social"></i>
                        <i className="fa-brands fa-linkedin icon-social"></i>
                        <i className="fa-brands fa-whatsapp icon-social"></i>
                        <i className="fa-brands fa-instagram icon-social"></i>
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