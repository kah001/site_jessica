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
                    <img src="/assets/images/logo-tcc.png" alt="logo" height="80px" />
                </Link>
            </div>

            <nav className={`nav ${isOpen ? 'open' : ''} `}>
                <div class="item"><Link to='/adm/alteracoes'><a href="">Alterações</a></Link></div>
                <div class="item"><Link to='/adm/projetos/novo'><a href="">Novo Projeto</a></Link></div>
                <div class="item"><Link to='/adm/projetos'><a href="">Projetos</a></Link></div>
                <div class="item"><Link to='/adm/formularios'><a href="">Formulários</a></Link></div>
            </nav>

            <div className='menu-icon' onClick={toggleMenu}>
                <div className={`menu ${isOpen ? 'toggle' : ''}`}></div>
                <div className={`menu ${isOpen ? 'toggle' : ''}`}></div>
                <div className={`menu ${isOpen ? 'toggle' : ''}`}></div>
            </div>
        </div>
    )
}