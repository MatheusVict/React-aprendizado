function SeuNome({ setNome }) { // A função dele é alterar o dado, seu state
    return(
        <div>
            <p>Informe o seu nome:</p>
            <input type="text" placeholder="seu nome" onChange={(e) => setNome(e.target.value)}/>
        </div>
    )
}

export default SeuNome