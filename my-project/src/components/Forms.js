import { useState } from 'react' // Sempre importar pra alterar
import styles from './Forms.module.css' // Importando o estilo unico desse componente


function Forms() {
    function cadastroUser(event) {
        event.preventDefault()
        console.log(name) //Imprime o valor q foi resgatado pelo set e pelo onChange
        console.log('cadastrado')
        console.log(`Usuário ${name} Senha: ${password}`)
    }
    const [name, setName] = useState('Matheus')   // Name = oq vou ler set = oq vou alterar, da pra passar um valor default e passar no form, tipo deixar a senha salva
    const [password, setPassword] = useState()  // Isso é bom pra editar forms e deixar salvo a senha
    return (
        <div className={styles.form}>
            <h1>Cadastre-se</h1>
            <form action="#" onSubmit={cadastroUser} className={styles.formContainer}>
                <div>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" className={styles.formContent} placeholder="Bora mermão" onChange={(e) => setName(e.target.value)} value={name}/> 
                </div>
                <div>
                    <label htmlFor="senha">Senha: </label>
                    <input type="password" placeholder="Senha pai" className={styles.formContent} onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                <div>
                    <input type="submit" className={styles.formButton} value="cadastro"/>
                </div>
            </form>
        </div>
    )
}

export default Forms