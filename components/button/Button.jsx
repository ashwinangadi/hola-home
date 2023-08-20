const Button = ({className, text, type}) =>{
    return (
        <button type={type} className={className}>{text}</button>
    )
}
export default Button