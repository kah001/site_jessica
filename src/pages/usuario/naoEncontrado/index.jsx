import './index.scss'
import { Link } from 'react-router-dom';

export default function NaoEncontrado() {
    return (
        <div className='pagina-nao-encontrado'>
            <img className='NaoEnc' src="assets/images/NaoEnc.jpg" alt="Mapa Mundi" />
            <div class="item"><Link to='/'><a href="">Voltar a Pagina Inicial</a></Link></div>
        </div>
    )
}