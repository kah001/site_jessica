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
                    <li><a href="#bem-vindo" className='link'>{i18n.t('policy.topic1')}</a></li>
                    <li><a href="#informacoes-coletadas" className='link'>{i18n.t('policy.topic2')}</a></li>
                    <li><a href="#informacoes-utilizadas" className='link'>{i18n.t('policy.topic3')}</a></li>
                    <li><a href="#informacoes-protegidas" className='link'>{i18n.t('policy.topic4')}</a></li>
                </ol>

                <section id='bem-vindo' className='bloco'>
                    <h1>Bem-vindo(a)!</h1>
                    <br />
                    <p>Aqui você terá acesso à política de privacidade dessa plataforma, tendo informações de quais informações suas são coletadas, como e para que fim as utilizamos e também como as suas informações são protegias com segurança. É importante que você leia esta política, mas aqui abaixo, está um breve resumo:</p>
                </section>

                <section id='informacoes-coletadas' className='bloco'>
                    <h1>Informações coletadas</h1>
                    <br />
                    <p>As únicas informações que são coletadas, são as informações fornecidas por você dutante o preenchimento do formulário de contato, onde você nos informa seu nome, email, número de telefone, país em que mora e insere a sua mensagem.</p>
                </section>

                <section id='informacoes-utilizadas' className='bloco'>
                    <h1>Como suas informações são utilizadas</h1>
                    <br />
                    <p>Todas essas informações que foram coletadas são utilizadas pela profissional a fim de oferecer um serviço personalizado aos seus clientes. Ou seja, todas as informações fornecidas por você são armazenadas e utilizadas </p>
                </section>

                <section id='informacoes-protegidas' className='bloco'>
                    <h1>Como suas informações são protegidas</h1>
                    <br />
                    <p>Utilizamos algumas medidas para ajudar a proteger as suas informações. Todas as uas informações são armazenadas, e utilizamos criptografia, para protegê-las, para que apenas a profissional tenha acesso a elas, a fim de prestar um serviço mais personalizado aos seus clientes. Ou seja, é imposto um controle de acesso administrativo, para limitar quem terá acesso e quem não terá acesso às suas informações.</p>
                </section>
            </section>

            <Rodape />
        </div>
    )
}