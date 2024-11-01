import './index.scss'
import Cabecalho from '../../../components/cabecalho-marrom'
import Rodape from '../../../components/rodape'
import { i18n } from '../../../translate/i18n'

export default function PoliticaPrivacidade() {
    return (
        <div className='pagina-politica-privacidade'>
            <Cabecalho />

            <section className='infos'>
                <h1 className='titulo'>{i18n.t('policy.title')}</h1>

                <ol>
                    <li><a href="#bem-vindo" className='link'>{i18n.t('policy.title1')}</a></li>
                    <li><a href="#informacoes-coletadas" className='link'>{i18n.t('policy.title2')}</a></li>
                    <li><a href="#informacoes-utilizadas" className='link'>{i18n.t('policy.title3')}</a></li>
                    <li><a href="#informacoes-protegidas" className='link'>{i18n.t('policy.title4')}</a></li>
                </ol>

                <section id='bem-vindo' className='bloco'>
                    <h1>{i18n.t('policy.title1')}</h1>
                    <br />
                    <p>{i18n.t('policy.text1')}</p>
                </section>

                <section id='informacoes-coletadas' className='bloco'>
                    <h1>{i18n.t('policy.title2')}</h1>
                    <br />
                    <p>{i18n.t('policy.text2')}</p>
                </section>

                <section id='informacoes-utilizadas' className='bloco'>
                    <h1>{i18n.t('policy.title3')}</h1>
                    <br />
                    <p>{i18n.t('policy.text3')}</p>
                </section>

                <section id='informacoes-protegidas' className='bloco'>
                    <h1>{i18n.t('policy.title4')}</h1>
                    <br />
                    <p>{i18n.t('policy.text4')}</p>
                </section>
            </section>

            <Rodape />
        </div>
    )
}