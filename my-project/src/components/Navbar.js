import { Link } from "react-router-dom"
import React from "react"

function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Homepage</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar