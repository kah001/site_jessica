import './index.scss';
import { Link } from 'react-router-dom';

export default function Rodape() {

    return (
        <div className='comp-rodape'>
            <div className='bloco'>
                <div className='icones'>
                    <div className='idiomas'>
                        <select>
                            <option>Português (Brasil)</option>
                            <option>English</option>
                        </select>
                    </div>

                    <div className='contatos'>
                        <a href="https://www.instagram.com/jessicalima.sa/"><i className='fa-brands fa-instagram icon1'></i></a>
                        <a href="https://wa.me/353831022713"><i className='fa-brands fa-whatsapp icon2'></i></a>
                        <i className='fa-regular fa-envelope icon3'></i>
                    </div>
                </div>

                <div className='blocos'>
                <div className='paginas'>
                        <h1>Páginas</h1>
                        <Link className='link' to='/'>Início</Link>
                        <Link className='link' to='/sobre'>Sobre mim</Link>
                        <Link className='link' to='/projetos'>Projetos</Link>
                        <Link className='link' to='/dicas'>Dicas</Link>
                    </div>

                    <div className='politica'>
                        <h1>Política</h1>
                        <Link className='link'>Política de Privacidade</Link>
                    </div>
                </div>
            </div>

            <div className='bloco2'>
                <div className='linha'>
                    <hr />
                </div>

                <div className='info'>
                    <div className='img'>
                        <img src="assets/images/logo-tcc.png" alt="" />
                    </div>

                    <div className='copy'>
                        <p>&copy; Copyright</p>
                    </div>
                </div>
            </div>
        </div>
    )
}