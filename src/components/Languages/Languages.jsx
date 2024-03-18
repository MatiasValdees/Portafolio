import './Languages.css'
import { Carousel } from '../Carousel/Carousel'
import { Subtitle } from '../Subtitle/Subtitle'


export const Languages = () =>{



    
    return(
        <>
        <div className="section">
            <Subtitle title={'Languages'}/>
            <div className="container-languages">
                <Carousel/>
            </div>
        </div>

        </>
    )
}