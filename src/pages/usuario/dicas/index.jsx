import './index.scss'
import CabecalhoMarrom from '../../../components/cabecalho-marrom'
import Rodape from '../../../components/rodape'
import { motion } from 'framer-motion'
import { i18n } from '../../../translate/i18n'

export default function Dicas() {
    return (
        <div className='pagina-dicas'>
            <CabecalhoMarrom />

            <div className='inicio'>
                <img className='fundo' src="assets/images/dicas.jpg" alt="" />
                <h1 className='titulo'>{i18n.t('advices.title1')}</h1>
            </div>

            <section className='intro'>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >{i18n.t('advices.title2')}</motion.h1>
                <br />
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >{i18n.t('advices.paragraph1')}</motion.p>
                <br />
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >{i18n.t('advices.paragraph2')}</motion.p>
                <br />
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >{i18n.t('advices.paragraph3')}</motion.p>
            </section>

            <section className='dicas'>
                <motion.div className='dica'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1>{i18n.t('advices.topic1')}</h1>
                    <br />
                    <p>{i18n.t('advices.text1')}</p>
                    <br />
                    <p>{i18n.t('advices.text2')}</p>
                </motion.div>

                <motion.div className='dica'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1>{i18n.t('advices.topic2')}</h1>
                    <br />
                    <p>{i18n.t('advices.text3')}</p>
                </motion.div>

                <motion.div className='dica'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1>{i18n.t('advices.topic3')}</h1>
                    <br />
                    <p>{i18n.t('advices.text4')}</p>
                </motion.div>
            </section>

            <section className='frase'>
                <h1>“</h1>
                <h1>{i18n.t('advices.phrase')}</h1>
            </section>

            <Rodape />
        </div>
    )
}