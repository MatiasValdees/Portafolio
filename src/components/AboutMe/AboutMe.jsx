import './AboutMe.css'

export const AboutMe = () =>{
    return(
        <>
        <div className="container-about-me" id='AboutMe'>
            <h1>About me</h1>
            <div className="container-summary-about-me">
                <p>Tengo 26 años, cuento con 6 años de experiencia en el mundo TI, me gusta el desarrollo y cuento con habilidades sólidas en lógicas de programación y redes, es por esto que tomé un perfil profesional de Development y DevOps.</p>
            </div>
            <div className="container-habilities">
                <p>Con habilidades blandas genuinas, destaco por mi empatía, solidaridad y autocrítica. Siempre estoy dispuesto a ayudar de manera eficiente y proactiva, tanto en lo profesional como en lo personal. </p>
            </div>
            <div className="container-hobbies">
                <h2>Hobbies & Gustos</h2>
                <ul className='list-hobbies'>
                    <li className='item-hobbie' >Camping <i className="fa-solid fa-campground"></i></li>
                    <li className='item-hobbie'>Trekking <i className="fa-solid fa-person-hiking"></i></li>
                    <li className='item-hobbie'>Naturaleza <i className="fa-solid fa-mountain-sun"></i></li>
                    <li className='item-hobbie'>Viajes <i className="fa-solid fa-plane"></i></li>
                    <li className='item-hobbie'>Amigos <i className="fa-solid fa-user-group"></i></li>
                    <li className='item-hobbie'>Estudiar <i className="fa-solid fa-book"></i></li>
                </ul>
            </div>
        </div>
        </>
    )
}

