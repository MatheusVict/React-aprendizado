import PropTypes from 'prop-types'

function Item(props) {
    return(
        <>
            <li>{props.marca} - {props.lancamento}</li>
            <p>Equipe de F1</p>
        </>
    )
}

Item.propTypes = { // Determinando o tipo dos props, parecido o jeito de determinar os campos no banco de dados
    marca: PropTypes.string.isRequired, // isRequired obrigatorio
    lancamento: PropTypes.number.isRequired,
} // Tem q acessar a propriedade com p minusculo

Item.defaultProps = { //  Default padrão
    marca: 'Sem registro dessa marca',
    lancamento: 0
}

export default Item