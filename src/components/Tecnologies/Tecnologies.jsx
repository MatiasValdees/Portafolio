import './Tecnologies.css'
import { useEffect, useState } from 'react'
import { Subtitle } from '../Subtitle/Subtitle'
import {getTecnologies} from '../../services/getTecnologies';


export const Tecnologies = () =>{

    const [tecnologies,setTecnologies]=useState([]);
    useEffect(()=>{
        const data=getTecnologies();
        setTecnologies(data)
    },[])

    let position=0;
    const addPosition=() =>{
        position++
    }

    const [selected,setSelected]=useState([]);

    const addToList = (id) =>{
        if (!selected.some((Id)=>Id===id)){
            setSelected([
                ...selected,
                id
            ]);
        }else{
            setSelected(
                selected.filter((Id)=>Id!=id)
            );
        }
    }
    
    const getClassNames = (id) => {
        return selected.includes(id) ? `content mosaico${position} rotate` :  `content mosaico${position}`;
    };

    return(
        <>
            <div className="container-tecnologies">
                <Subtitle title={'Tecnologies'}/>
                <div className="container-grid">
                {
                    tecnologies.map((tec)=>{
                        {
                            addPosition()
                         }
                            return <div
                                    // className={`${'content mosaico'+position}`}
                                    className={getClassNames(tec.id)}
                                    onClick={() => addToList(tec.id)}
                                    key={tec.id}
                                    >
                                        <img src={tec.img} alt=""  className='img-mosaico'/>
                                        <div className="back-img-grid">
                                            <p className="name-tecnology">
                                                {tec.name}
                                            </p>
                                            <p className="exp-tecnology">
                                                Nivel: {tec.level}
                                            </p>
                                            <p className="exp-tecnology">
                                                {tec.exp} de experiencia.
                                            </p>
                                        </div>
                                    </div>
                    })
                }
                {
                    <div className='credit-grid mosaico8 content'>
                        <p>
                        Desarrollado por Matias Valdes Development FullStack & DevOps !
                        </p>
                    </div>
                }
                </div>
            </div>
        </>
    )
}