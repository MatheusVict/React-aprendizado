import Item from "./Item"

function List() {
    return(
        <>
        <h2>
            Fragments
        </h2>
        <ul>
            <Item marca="Ferrari" lancamento={1950}/>
            <Item marca="Mercedes" lancamento={2010}/>
            <Item marca="Willians" lancamento={1974}/>
            <Item marca="Porshe" lancamento={1970}/>
        </ul>
        </>
    )
}

export default List