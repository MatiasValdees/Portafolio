import './Input.css'

export const Input = ({type,name,placeholder}) =>{
    return(
        <>
            <div className="coolinput">
            <label for="input" className="text">{name}:</label>
            <input type={type} placeholder={placeholder} name="input" className="input"/>
            </div>
        </>
    )
}