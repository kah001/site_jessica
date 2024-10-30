import './index.scss'
import Cabecalho from '../../../components/cabecalho-marrom';
import Rodape from '../../../components/rodape';
import { motion } from 'framer-motion';
import { i18n } from '../../../translate/i18n';

export default function SobreMim() {
    return (
        <div className='pagina-sobre-mim'>
            <Cabecalho />

            <section className='sobre-mim'>
                <div className='biografia'>
                    <h3>{i18n.t('about.subtitle')}</h3>
                    <h1>JÉSSICA LIMA</h1>

                    <p>{i18n.t('about.paragraph1')}</p>

                    <p>{i18n.t('about.paragraph2')}</p>

                    <p>{i18n.t('about.paragraph3')}</p>
                </div>

                <div className='img'>
                    <motion.img src="assets/images/Foto-JessicaLima.jpg" alt="" />
                </div>
            </section>

            <div className='mapaFrase'>
                <img className='mapa' src="assets/images/MapaSobreMim.jpeg" alt="Mapa Mundi" />

                <section className='frase'>
                    <motion.h1
                        initial={{ opacity: 0, y: 50}}
                        whileInView={{ opacity: 1, y: 0}}
                        exit={{ opacity: 0, y: -50}}
                        transition={{ duration: 1, delay: 0.2}}
                    >{i18n.t('about.slogan')}</motion.h1>
                </section>
            </div>
            
            <Rodape />
        </div>
    )
}