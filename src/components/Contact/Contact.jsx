import './Contact.css'
import heroku from '/tecnologies/heroku.webp'
import vercel from '/tecnologies/vercel.webp'
import react from '/tecnologies/react.webp'
import springBoot from '/tecnologies/spring-boot.webp'
import mongo from '/tecnologies/mongo.webp'
import { useState } from 'react'
import { NavbarBack } from '../NavbarBack/NavbarBack'
export const Contact = () => {
  
  const [data, setData]=useState({
    name:"",
    email:"",
    phone:"",
    subject:"",
    message:""
  })

  const handleData = ({target:{name,value}}) =>{
      setData({
        ...data,
        [name]:value
      })
  }
  const sendData = (e) => {
    e.preventDefault();
    console.log(data)
  }

    return (
      <>
      {
        <NavbarBack/>
      }
        <div className="container-contact">
          <form className="form" onSubmit={sendData}>
            <p className="title">Contact me! </p>
            <p className="message">
              This email will be sent with Back-End Java Spring Boot on Heroku !
            </p>
            <label>
              <input
              className="input"
              type="text"
              required
              name='name'
              value={data.name}
              onChange={handleData}
              />
              <span>Name</span>
            </label>

            <label>
              <input className="input"
              type="email"
              required
              name='email'
              value={data.email}
              onChange={handleData}
              />
              <span>Email</span>
            </label>

            <label>
              <input className="input"
              type="number"
              required 
              name='phone'
              value={data.phone}
              onChange={handleData}
              />
              <span>Phone</span>
            </label>

            <label>
              <input className="input"
              type="text"
              required
              name='subject'
              value={data.subject}
              onChange={handleData}
              />
              <span>Subject</span>
            </label>
            <label>
              <input className="input"
              type="text"
              required
              name='message'
              value={data.message}
              onChange={handleData}
              />
              <span>Message</span>
            </label>
            <button className="submit">Send!</button>
          </form>
          <div className="container-deploy">
                <div className="container-credit">
                    <p className='credit'>Este portafolio fue desarrollado con las tecnologías de <strong>ReactJS & Vercel</strong> para Front-End y su despliegue,
                    <strong> Java Spring-Boot y Heroku</strong> para Back-End y <strong>MongoDB Atlas</strong> para guardar cada mensaje enviado.</p>
                </div>
                <div className="container-tecnologies-contact">
                <div className="container-img-tec">
                    <img src={react} alt="react" className='img-credit'/>
                    </div>
                    <div className="container-img-tec">
                    <img src={springBoot} alt="spring-boot" className='img-credit'/>
                    </div>
            
                    <div className="container-img-tec">
                    <img src={mongo} alt="mongo" className='img-credit'/>
                    </div>
                    <div className="container-img-tec">
                    <img src={heroku} alt="heroku" className='img-credit' />
                    </div>
                    <div className="container-img-tec">
                    <img src={vercel} alt="vercel" className='img-credit'/>
                    </div>

                </div>
            </div>
        </div>
      </>
    );
}