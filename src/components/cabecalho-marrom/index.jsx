import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho() {
    return (
        <div className="comps-cabecalho">

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
                        <Link to='/Sobre-Mim'>
                            <a href="">Sobre Mim</a>
                        </Link>
                    </div>

                    <div class="item">
                        <Link to='/Projetos'>
                            <a href="">Projetos</a>
                        </Link>
                    </div>

                    <div class="item">
                        <Link to='/Dicas'>
                            <a href="">Dicas</a>
                        </Link>
                    </div>

                    <div class="item">
                        <Link to='/Entrar'>
                            <a href="">Entrar</a>
                        </Link>
                    </div>

                    <div class="item">
                        <Link to='/Entrar'>
                            <img src="/assets/images/person-icon.png" alt="" height="50px" />
                        </Link>
                    </div>
        </div>
    )
}