import './Card.css'
export const Card = ({language:{img,name,stack,exp,framework,uses}}) =>{
    return (

      <>
        <div className="container-card">
          <div className="card">
            <img className="img" src={img} alt="" />
            <div className="textBox">
              <p className="name-lenguage">{name}</p>
              <span>{stack}</span>
              <p className="framework">{framework}</p>
              <div className="container-desc">
            <p className="description">
                {exp} de experiencia desarrollando:
              </p>
              <ul className='list-card'> 
                {
                    uses.map((use)=>{
                      return  <li key={use}>
                            {use}
                        </li>
                    })
                }
              </ul>
            </div>
            </div>
          </div>
        </div>
      </>
    );

}