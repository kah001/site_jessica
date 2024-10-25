import './index.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function CabecalhoAdm() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="comp-cabecalho-adm">

            <div class="logo">
                <Link to='/'>
                    <img src="/assets/images/logo-tcc.png" alt="" height="100px" />
                </Link>
            </div>

            <nav className={`nav ${isOpen ? 'open' : ''} `}>
                <div class="item"><Link to='/'><a href="">Início</a></Link></div>
                <div class="item"><Link to='/sobre'><a href="">Sobre Mim</a></Link></div>
                <div class="item"><Link to='/projetos'><a href="">Projetos</a></Link></div>
            </nav>

            <div className='menu-icon' onClick={toggleMenu}>
                <div className={`menu ${isOpen ? 'toggle' : ''}`}></div>
                <div className={`menu ${isOpen ? 'toggle' : ''}`}></div>
                <div className={`menu ${isOpen ? 'toggle' : ''}`}></div>
            </div>
        </div>
    )
}