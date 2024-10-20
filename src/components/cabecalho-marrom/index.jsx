import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Cabecalho() {
    const [isOpen, setIsOpen] = useState(false)

    function menuToggle() {
        setIsOpen(true)
    }
    
    return (
        <div className="comp-cabecalho">

            <div class="logo">
                        <Link to='/'>
                            <img src="/assets/images/logo-tcc.png" alt="" height="80px" />
                        </Link>
                    </div>

                    <div class="item">
                        <Link to='/'>
                            <a href="">Início</a>
                        </Link>
                    </div>

                    <div class="item">
                        <Link to='/sobre'>
                            <a href="">Sobre Mim</a>
                        </Link>
                    </div>

                    <div class="item">
                        <Link to='/projetos'>
                            <a href="">Projetos</a>
                        </Link>
                    </div>

                    <div class="item">
                        <Link to='/dicas'>
                            <a href="">Dicas</a>
                        </Link>
                    </div>

                    <div class="item">
                        <Link to='/login'>
                            <a href="">Entrar</a>
                        </Link>
                    </div>

                    <div class="item">
                        <Link to='/login'>
                            <img src="/assets/images/person-icon.png" alt="" height="50px" />
                        </Link>
                    </div>
        </div>
    )
}