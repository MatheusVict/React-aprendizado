import Button from "./Button"

function Evento() { // O valor passado no APP aqui é exibido o valor do comoparametro
    
    function myBtn() {
        console.log('Primeiro evento')
    }

    function segundoEvento() {
        console.log('Segundo rapaz')
    }

    function Terceiro() {
        console.log('Terceiro')
    }

    return ( // Event foi criado no componente Button e ativa a função
        <>
            <p>Apera e botão tony</p>
            <Button event={myBtn} text="Primeiro"/> 
            <Button event={segundoEvento} text="Segundo"/>
            <button onClick={Terceiro}>Terceiro</button>
        </>
    )
}

export default Evento