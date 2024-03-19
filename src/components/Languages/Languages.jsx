import './Languages.css'
import { Carousel } from '../Carousel/Carousel'
import { Subtitle } from '../Subtitle/Subtitle'


export const Languages = () =>{



    
    return(
        <>
            <div className="container-languages">
            <Subtitle title={'Languages'}/>
                <Carousel/>
            </div>

        </>
    )
}