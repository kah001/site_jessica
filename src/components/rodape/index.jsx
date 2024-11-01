import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { i18n } from '../../translate/i18n';    

export default function Rodape() {
    const I18N_STORAGE_KEY = 'i18nextLng'
    const [idioma] = useState(localStorage.getItem(I18N_STORAGE_KEY))

    function alterarIdioma(event) {
        localStorage.setItem(I18N_STORAGE_KEY, event.target.value)
        window.location = window.location
    }

    return (
        <div className='comp-rodape'>
            <div className='bloco'>
                <div className='icones'>
                    <div className='idiomas'>
                        <select onChange={alterarIdioma} value={idioma}>
                            <option value='pt-BR'>{i18n.t('footer.language1')}</option>
                            <option value='en-US'>{i18n.t('footer.language2')}</option>
                        </select>
                    </div>

                    <div className='contatos'>
                        <a href="https://www.instagram.com/jessicalima.sa/"><i className='fa-brands fa-instagram icon1'></i></a>
                        <a href="https://wa.me/353831022713"><i className='fa-brands fa-whatsapp icon2'></i></a>
                        <a href="mailto:arq.jessicalima@gmail.com"><i className='fa-regular fa-envelope icon3'></i></a>
                    </div>
                </div>

                <div className='blocos'>
                <div className='paginas'>
                        <h1>{i18n.t('footer.title1')}</h1>
                        <Link className='link' to='/'>{i18n.t('footer.page1')}</Link>
                        <Link className='link' to='/sobre'>{i18n.t('footer.page2')}</Link>
                        <Link className='link' to='/projetos'>{i18n.t('footer.page3')}</Link>
                        <Link className='link' to='/dicas'>{i18n.t('footer.page4')}</Link>
                    </div>

                    <div className='politica'>
                        <h1>{i18n.t('footer.title2')}</h1>
                        <Link className='link' to='/politica'>{i18n.t('footer.policy')}</Link>
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