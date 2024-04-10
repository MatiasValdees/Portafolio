import { SubBanner } from '../SubBanner/SubBanner';
import './Banner.css'
import { useEffect, useState } from "react";

export const Banner = () => {

  const [write, setWrite] = useState('');
  const [repeat,setRepeat] = useState(true);
  const fullname = "Matías N. Valdés Reyes";
  const profession = "Desarrollador Full-Stack And DevOps !";
  const description = [fullname, profession]

  const intervalo = async (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

const writing=async()=>{

    for (const phrase of description){
        for (let i=0; i<=phrase.length; i++){
          setWrite(phrase.substring(0,i,1))
          await intervalo(200)
          
        }
        await intervalo(500)

        for (let i=0; i<=phrase.length; i++){
         setWrite(phrase.substring(0,phrase.length-i,1))
          await intervalo(120)
        }
        
    }
    setRepeat(!repeat)
}
  useEffect(() => {
    writing();
  }, [repeat])

  return (
    <>
      <div className="container-banner">
        <h1 className="title-Banner">
          Hola! Soy <span className="span-Banner"> {write} <span className="cursor"></span> </span>
        </h1>
      </div>
      <SubBanner/>
    </>
  );
};
