import './index.scss'
import Cabecalho from '../../../components/cabecalho-marrom'
import Rodape from '../../../components/rodape'
import { i18n } from '../../../translate/i18n'

export default function PoliticaPrivacidade() {
    return (
        <div className='pagina-politica-privacidade'>
            <Cabecalho />

            <section className='infos'>
                <h1>{i18n.t('policy.title')}</h1>

                <ol>
                    <li><a href="#bem-vindo" className='link'>{i18n.t('policy.topic1')}</a></li>
                    <li><a href="#informacoes-coletadas" className='link'>{i18n.t('policy.topic2')}</a></li>
                    <li><a href="#informacoes-utilizadas" className='link'>{i18n.t('policy.topic3')}</a></li>
                    <li><a href="#informacoes-protegidas" className='link'>{i18n.t('policy.topic4')}</a></li>
                </ol>


                <section id='bem-vindo' className='bloco'>
                    <h1>Bem-vindo(a)!</h1>
                    <br />
                    <p>Aqui você terá acesso à política de privacidade dessa plataforma, tendo informações de quais informações suas são coletadas, como e para que fim as utilizamos e também como as suas informações são protegias com segurança. É importante que você leia esta política, mas aqui abaixo, está um breve resumo:</p>

                    <div className='resumo'>
                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </section>

                <section id='informacoes-coletadas' className='bloco'>
                    <h1>Informações coletadas</h1>
                    <br />
                    <p>As únicas informações que são coletadas, são as informações fornecidas por você dutante o preenchimento do formulário de contato, onde você nos informa seu nome, email, número de telefone, país em que mora e insere a sua mensagem.</p>
                </section>

                <section id='informacoes-utilizadas' className='bloco'>
                    <h1>Como suas informações são utilizadas</h1>
                    <br />
                    <p></p>
                </section>

                <section id='informacoes-protegidas' className='bloco'>
                    <h1>Como suas informações são protegidas</h1>
                    <br />
                    <p></p>
                </section>
            </section>

            <Rodape />
        </div>
    )
}