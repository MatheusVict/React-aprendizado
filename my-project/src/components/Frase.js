import styles from './Frase.module.css'

function Frase() {
    return(
        <div className={styles.fraseContainer}>
            <h1 className={styles.fraseContent}>VDD linda disse tudo</h1>
            <h2>Alô</h2>
        </div>
    )
}

export default Frase