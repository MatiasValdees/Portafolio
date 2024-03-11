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
                    Analista Programado y Analista de Redes e Infraestructura.
                    Especialisto en Desarrollo Web y Administración de Servidores y Sistemas.
                    DevOps Cloud CI/CD en los ambientes de desarrollo, QA y producción.
                </p>
                <div className="container-btn">
                    <button className='btn-contact'>Leer más</button>
                </div>
            </div>

        </div>
        </>
    )
}