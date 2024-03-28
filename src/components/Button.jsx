function Button({ title }) {
    return (
        <button
            onClick={() => {
                alert('Ruslan Salam')
            }}
        >
            {title}
        </button>
    )
}
export default Button;