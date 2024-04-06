import './Languages.css'
import { Carousel } from '../Carousel/Carousel'
import { Subtitle } from '../Subtitle/Subtitle'


export const Languages = () =>{



    
    return(
        <>
            <div className="container-languages" id='section-languages'>
            <Subtitle title={'Lenguajes'}/>
                <Carousel/>
            </div>

        </>
    )
}