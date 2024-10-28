import './index.scss'
import Cabecalho from '../../../components/cabecalho-marrom';
import Rodape from '../../../components/rodape';
import { motion } from 'framer-motion';

export default function SobreMim() {
    return (
        <div className='pagina-sobre-mim'>
            <Cabecalho />

            <section className='sobre-mim'>
                <div className='biografia'>
                    <h3>ARQUITETA</h3>
                    <h1>JÉSSICA LIMA</h1>

                    <p>Jéssica tem atualmente 31 anos, é casada com Fernando há 8 anos, ambos são cristãos e tem a fé como ponto principal em suas vidas.</p>

                    <p>Ela se formou em Arquitetura e Urbanismo em setembro de 2018, durante o curso e após a conclusão trabalhou em três prestigiados escritórios de Sorocaba, onde aprendeu desde como inciar o atendimento ao cliente até os detalhes de documentação para prefeitura.</p>

                    <p>Com todo o aprendizado nesses escritórios, ela foi criando seu próprio jeito de desenvolver seus projetos e atender seus clientes.</p>
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
                    >Arquitetura que viaja: inspirada por culturas e criada para o mundo.</motion.h1>
                </section>
            </div>
            
            <Rodape />
        </div>
    )
}