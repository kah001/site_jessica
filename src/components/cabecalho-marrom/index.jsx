import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { i18n } from '../../translate/i18n';

export default function Cabecalho() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="comp-cabecalho">

            <div class="logo">
                <Link to='/'>
                    <img src="/assets/images/logo-tcc.png" alt="logo" height="100px" />
                </Link>
            </div>

            <nav className={`nav ${isOpen ? 'open' : ''} `}>
                <div class="item"><Link to='/'><a href="">{i18n.t('headerBrown.page1')}</a></Link></div>
                <div class="item"><Link to='/sobre'><a href="">{i18n.t('headerBrown.page2')}</a></Link></div>
                <div class="item"><Link to='/projetos'><a href="">{i18n.t('headerBrown.page3')}</a></Link></div>
                <div class="item"><Link to='/dicas'><a href="">{i18n.t('headerBrown.page4')}</a></Link></div>
                <div class="item"><Link to='/login'><img src="/assets/images/person-icon.png" alt="" height="50px" /></Link></div>
            </nav>

            <div className='menu-icon' onClick={toggleMenu}>
                <div className={`menu ${isOpen ? 'toggle' : ''}`}></div>
                <div className={`menu ${isOpen ? 'toggle' : ''}`}></div>
                <div className={`menu ${isOpen ? 'toggle' : ''}`}></div>
            </div>
        </div>
    )
}