import { useState } from 'react'

function Condicional() {

    function enviarEmail(e) {
        e.preventDefault()
        console.log('Enviado')
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail() {
        setUserEmail('')
    }

    const [email, setEmail] = useState()//No onChange a vada digito muda o valor da var(email)
    const [userEmail, setUserEmail] = useState()

    return (
        <div>
        <h2>Cadastre-se</h2>
        <form>
            <input type='text' placeholder='Digite o Email' onChange={(e) => setEmail(e.target.value)}/> 
            <button type="submit" onClick={enviarEmail}>Cadastre-se</button>
            {userEmail && ( //Isso é um if, pq só renderiza quando é preenchido, ou seja, ele ta checando se é true o && se tiver executa isso
                <div>
                    <h4>O email é: {userEmail}</h4>
                    <button onClick={limparEmail}>Limpar</button>
                </div>
            )}
        </form>
        </div>
    )
}

export default Condicional