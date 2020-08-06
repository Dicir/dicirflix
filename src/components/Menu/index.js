import React from 'react';
// import Logo from '../../assests/img/Logo.png --> Utilizei link direto!
import './Menu.css';
//import ButtonLink from '../ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src="https://fontmeme.com/permalink/200805/1ec6f5be48fbc0353ff43feed8527691.png" alt="Logo Dicir Flix" />
            </a>

            <Button as="a" className="Button" href="/">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;