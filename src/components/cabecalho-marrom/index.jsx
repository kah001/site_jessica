import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Cabecalho() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="comp-cabecalho">

            <div class="logo">
                <Link to='/'>
                    <img src="/assets/images/logo-tcc.png" alt="" height="100px" />
                </Link>
            </div>

            <nav className={`nav ${isOpen ? 'open' : ''} `}>

                <div class="item"><Link to='/'><a href="">Início</a></Link></div>
                <div class="item"><Link to='/Sobre-Mim'><a href="">Sobre Mim</a></Link></div>
                <div class="item"><Link to='/Projetos'><a href="">Projetos</a></Link></div>
                <div class="item"><Link to='/Dicas'><a href="">Dicas</a></Link></div>
                <div class="item"><Link to='/Login'><img src="/assets/images/person-icon.png" alt="" height="50px" /></Link></div>
            </nav>

            <div className='menu-icon' onClick={toggleMenu}>
                <div className={`menu ${isOpen ? 'toggle' : ''}`}></div>
                <div className={`menu ${isOpen ? 'toggle' : ''}`}></div>
                <div className={`menu ${isOpen ? 'toggle' : ''}`}></div>
            </div>
        </div>
    )
}