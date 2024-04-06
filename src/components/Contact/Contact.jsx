import './Contact.css'
import koyeb from '/tecnologies/koyeb.webp'
import vercel from '/tecnologies/vercel.webp'
import react from '/tecnologies/react.webp'
import springBoot from '/tecnologies/spring-boot.webp'
import mongo from '/tecnologies/mongo.webp'
import { useState } from 'react'
import { NavbarBack } from '../NavbarBack/NavbarBack'
import { sendMessage } from '../../services/sendMessage'

const initialData={
  name:"",
  email:"",
  phone:"",
  subject:"",
  message:""
}
export const Contact = () => {
  
  const [data, setData]=useState(initialData)

  const handleData = ({target:{name,value}}) =>{
      setData({
        ...data,
        [name]:value
      })
  }
  const sendData = async(e) => {
    e.preventDefault();
    await sendMessage(data);
    setData(initialData);
  }

    return (
      <>
      {
        <NavbarBack/>
      }
        <div className="container-contact">
          <form className="form" onSubmit={sendData}>
            <p className="title">Contáctame! </p>
            <p className="message">
              Este Correo será enviado desde Back-End Java Spring Boot desplegado en Koyeb !
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
                    <strong> Java Spring-Boot y Koyeb</strong> para Back-End y <strong>MongoDB Atlas</strong> para guardar cada mensaje enviado.</p>
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
                    <img src={koyeb} alt="koyeb" className='img-credit' />
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