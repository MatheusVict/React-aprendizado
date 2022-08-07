import styles from './Person.module.css'

function Person({ foto, nome, idade, prof }) {
    return(
        <div className={styles.personContainer}>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Prof: {prof}</p>
        </div>
    )
}

export default Person