import './index.scss';
import Rodape from '../../../components/rodape';
import { Link } from 'react-router-dom';

export default function Home() {


    return (
        <div className="pagina-home">

            <section className='secao-1'>

                <div className="cabecalho">

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
                {/* <img className='background' src="/assets/images/back-home.png" alt="" /> */}

                <div className="text-block">
                    <div className="text">

                    <h1>Construa sua casa com harmonia</h1>

                    <h2>Planejamento, previsão de gastos e cronograma da obra</h2>
                    </div>
                </div>
            </section>
                <Rodape />
        </div>
    );
}