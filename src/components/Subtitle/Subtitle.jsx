import './Subtitle.css'

export const Subtitle = ({title,id}) => {
    return(
        <>
        <div className="container-subtitle" id={id}>
            <h3 className='text-subtitle'>
            {title}<span className="cursor-subtitle">l</span>
            </h3>
        </div>
        </>
    )
}