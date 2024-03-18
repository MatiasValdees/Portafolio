import './Subtitle.css'

export const Subtitle = ({title}) => {
    return(
        <>
        <h3 className='text-subtitle'>
           {title}<span className="cursor-subtitle">I</span>
        </h3>
        </>
    )
}