import './index.scss';
import Rodape from '../../../components/rodape';
import { Link } from 'react-router-dom';

export default function Home() {


    return (
        <div className="pagina-home">
            <section className='secao-1'>
                <img className='background-img' src="../../../../assets/images/background-home.PNG" alt="" width='100%' />
                <div className="cabecalho">

                    <div class="logo">
                        <Link to='/'>
                            <img src="/assets/images/logo-tcc.png" alt="" height="100px" />
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

                <div className="text-block">
                    <div className="text">

                        <h1>Construa sua casa com harmonia</h1>

                        <h2>Planejamento, previsão de gastos e cronograma da obra</h2>
                    </div>
                </div>
            </section>

            <section className='secao-2'>

                <div className="beneficios">
                    <h1>BENEFÍCIOS</h1>
                    <div className="linha">&nbsp;</div>

                    <div className="item">
                        <img src="" alt="" />
                        <p></p>
                    </div>

                    <div className="item">
                        <img src="" alt="" />
                        <p></p>
                    </div>

                    <div className="item">
                        <img src="" alt="" />
                        <p></p>
                    </div>
                </div>

                <div className="destaque">
                    <div className='item'>
                        <img src="" alt="" />
                    </div>

                    <div className='item'>
                        <img src="" alt="" />
                    </div>
                </div>

            </section>
            <Rodape />
        </div>
    );
}