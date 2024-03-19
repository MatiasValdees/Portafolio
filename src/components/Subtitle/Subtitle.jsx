import './Subtitle.css'

export const Subtitle = ({title}) => {
    return(
        <>
        <div className="container-subtitle">
            <h3 className='text-subtitle'>
            {title}<span className="cursor-subtitle">l</span>
            </h3>
        </div>
        </>
    )
}