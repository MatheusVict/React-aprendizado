function SayMyName(props) { // Componente dinâmico
    return (
        <div>
            <p>
                Olá {props.nome}
            </p>
        </div>
    )
}

export default SayMyName