function BemVindo({ nome }) {  // imprimir a saudação de acordo com oq ele recebe de nome
    function gerarBoasvindas(algumnome) {
        return `Seja bem vindo ${algumnome}`
    }
    
    return(
        <div>
            {nome && <p>{gerarBoasvindas(nome)} </p>}
        </div>
    )
}

export default BemVindo