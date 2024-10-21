import './index.scss';
import Rodape from '../../../components/rodape';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }
    
    return (
        <div className="pagina-home">
            <section className='secao-1'>
                <img className='background-img' src="../../../../assets/images/background-home.PNG" alt="" width='100%' />

                <div className={`cabecalho`}>

                    <div className="logo">
                        <Link to='/'><img src="/assets/images/logo-tcc.png" alt="" height="100px" /></Link>
                    </div>

                    <nav className={`nav ${isOpen ? 'open' : ''}`}>

                        <div class="item"><Link to='/'><a href="">Início</a></Link></div>
                        <div class="item"><Link to='/sobre'><a href="">Sobre Mim</a></Link></div>
                        <div class="item"><Link to='/projetos'><a href="">Projetos</a></Link></div>
                        <div class="item"><Link to='/dicas'><a href="">Dicas</a></Link></div>
                        <div class="item"><Link to='/login'><img src="/assets/images/person-icon.png" alt="" height="50px" /></Link></div>
                    </nav>

                    <div className='menu-icon' onClick={toggleMenu}>
                        <div className={`menu ${isOpen ? 'toggle' : ''}`}></div>
                        <div className={`menu ${isOpen ? 'toggle' : ''}`}></div>
                        <div className={`menu ${isOpen ? 'toggle' : ''}`}></div>
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

                <h1>BENEFÍCIOS</h1>

                <div className="beneficios">

                    <div className="justify-center">
                        <div className="linha" />
                    </div>

                    <div className="itens">

                        <div className="item">
                            <img src="../../../../assets/images/tv-icon.png" alt="" />

                            <div className="text">

                                <h2>TECNOLOGIA</h2>
                                <p>Grande uso da tecnologia, você poderá fazer um tour pela sua casa antes mesmo dela estar pronta</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src="../../../../assets/images/reembolso.png" alt="" />

                            <div className="text">
                                <h2>PREÇOS</h2>
                                <p>Acesso a todos os preços, desde o início até o fim, tanto no projeto quanto no gerenciamento do mesmo</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src="../../../../assets/images/barrinha.png" alt="" />

                            <div className="text">
                                <h2>PROJETOS</h2>
                                <p>O projeto de arquitetura é feito para você, cada detalhe escolhido por nossos clientes são essenciais</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="destaque">

                    <div className="itens">

                        <div className='item'>
                            <img src="../../../../assets/images/desenho-projeto.png" alt="" />
                            <h1>CONSTRUÇÃO</h1>
                        </div>

                        <div className='item'>
                            <img src="../../../../assets/images/desenho-interior.png" alt="" />
                            <h1>INTERIORES</h1>
                        </div>
                    </div>
                </div>

            </section>
            <Rodape />
        </div>
    );
}