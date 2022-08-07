function Lista({ itens }) {
    return(
        <>
            <h2>Lista dos meus frameworks</h2> 
            {itens.length > 0 ? ( // Isso é um If diferente
                // como retorno em jsx se usa () não {} nas array fuctions.Tudo q estiver entre {} é javaScript
                itens.map((item, index) => ( // index = indice do elemento, geralmente se usa o id do back
                    <p key={index}>{item}</p> // o key fica na tag pq é o key de cada item na tag// Isso é um map
                ))) : ( // Esse : é um else pra esse if alternado
                    <p>Não possui itens na lista</p>
                )}                          
                 
        </>
    )
}

export default Lista