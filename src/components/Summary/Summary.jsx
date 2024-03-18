import './Summary.css'
import photo from '../../assets/summary/me.jpeg'
export const Summary = () =>{
    return(
        <>

        <div className="container-summary">
            <div className="container-photo">
                <img src={photo} alt="" className='photo'/>
            </div>            
            <div className="parrafos">
                <p>
                    Analista Programador y Analista de Redes e Infraestructura.
                    Especialista en Desarrollo Web y Administración de Servidores y Sistemas.
                    <br />
                    <strong>Back-End Java Spring-Boot & Front-End ReactJs.</strong>
                    <br />
                    DevOps Cloud CI/CD en ambientes de desarrollo, QA y producción.
                </p>
                <div className="container-btn">
                    <button className='btn-contact'>Leer más</button>
                </div>
            </div>

        </div>
        </>
    )
}