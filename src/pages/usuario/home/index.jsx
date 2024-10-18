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
                    <div className="linha"></div>

                    <div className="itens">

                        <div className="item">
                            <img src="../../../../assets/images/tv-icon.png" alt="" />
                            <h2>TECNOLOGIA</h2>
                            <p>Grande uso da tecnologia, você poderá fazer um tour pela sua casa antes mesmo dela estar pronta</p>
                        </div>

                        <div className="item">
                            <img src="../../../../assets/images/reembolso.png" alt="" />
                            <h2>PREÇOS</h2>
                            <p>Acesso a todos os preços, desde o início até o fim, tanto no projeto quanto no gerenciamento do mesmo</p>
                        </div>

                        <div className="item">
                            <img src="../../../../assets/images/barrinha.png" alt="" />
                            <h2>PROJETOS</h2>
                            <p></p>
                        </div>
                    </div>
                </div>

                <div className="destaque">
                    <div className='item'>
                        <img src="../../../../assets/images/desenho-projeto.png" alt="" />
                        <h1>CONSTRUÇÃO</h1>
                    </div>

                    <div className='item'>
                        <img src="../../../../assets/images/desenho-interior.png" alt="" />
                        <h1>INTERIORES</h1>
                    </div>
                </div>

            </section>
            <Rodape />
        </div>
    );
}