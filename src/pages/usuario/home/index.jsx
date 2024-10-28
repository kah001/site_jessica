import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import Cabecalho from '../../../components/cabecalho-marrom';
import Rodape from '../../../components/rodape';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

import img1 from '../../../images/construcao3.jpg'
import img2 from '../../../images/construcao2.jpg'
import img3 from '../../../images/construcao1.jpg'
import { Link } from 'react-router-dom';

export default function Home() {
    const imagens = [
        { id: 1, img: img1, slogan: 'Desenhando o futuro, construindo o presente' },
        { id: 2, img: img2, slogan: 'Do conceito ao concreto, fazemos acontecer' },
        { id: 3, img: img3, slogan: 'Cada detalhe conta na criação de um ambiente único' }
    ]

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [pais, setPais] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [erro, setErro] = useState('')


    async function enviar() {
        if (nome !== '' && email !== '' && telefone !== '' && pais !== '' && mensagem !== '') {
            const paramCorpo = {
                "cliente": nome,
                "email": email,
                "telefone": telefone,
                "pais": pais,
                "mensagem": mensagem
            }
            const url = `http://localhost:5010/formulario`
            await axios.post(url, paramCorpo)

            setNome('')
            setEmail('')
            setTelefone('')
            setMensagem('')
            setErro('')
        } else {
            let mensagem = '*Preencha o formulário de contato com as informações solicitadas'
            setErro(mensagem)
        }
    }

    return (
        <div className='pagina-home'>
            <Cabecalho />

            <section className='slogan'>
                <Swiper className='carrossel'
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                        delay: 3200,
                        disableOnInteraction: false
                    }}
                    loop={true}
                >
                    {imagens.map(item => (
                        <SwiperSlide key={item.id}>
                            <div className='bloco'>
                                <div className='img'>
                                    <img src={item.img} alt="" />
                                </div>

                                <div className='texto'>
                                    <h1>{item.slogan}</h1>

                                    <div className='botoes'>
                                        <Link to='/projetos' className='botao'><div>Ver Projetos</div></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <motion.section className='tecnologia'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1, type: 'tween', stiffness: 100, delay: 0.3 }}
            >
                <div className='imagem'>
                    <img src="assets/images/jessica-tecnologias.jpg" alt="" />
                </div>

                <div className='info'>
                    <h1>Tecnologia</h1>
                    <hr />
                    <p>Grande uso da tecnologia durante o desenvolvimento dos projetos, você poderá  fazer um tour pela sua casa antes mesmo dela estar pronta</p>
                </div>
            </motion.section>

            <section className='infos'>
                <motion.div className='dinheiro'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <i className='fa-solid fa-money-bill-transfer'></i>
                    <h1>Preços</h1>
                    <p>Acesso a todos os preços, desde o início até o fim do projeto, também durante o desenvolvimento do mesmo</p>
                </motion.div>

                <motion.div className='projeto'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                >
                    <i className='fa-solid fa-user-pen'></i>
                    <h1>Projeto</h1>
                    <p>O projeto de arquitetura é feito para você, cada detalhe escolhido por nossos clientes é essencial </p>
                </motion.div>
            </section>

            <section className='softwares'>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >Softwares Utilizados</motion.h1>

                <motion.div className='imagens'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <img src="assets/images/archicad.jpeg" alt="" />
                    <img src="assets/images/lumion.jpg" alt="" />
                </motion.div>
            </section>


            <motion.section className='formulario'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, type: 'tween', stiffness: 100, delay: 0.2 }}
            >
                <h1>FORMULÁRIO DE CONTATO</h1>

                <input type="text" placeholder='Insira seu nome' value={nome} onChange={a => setNome(a.target.value)} />
                <input type="text" placeholder='Insira seu email' value={email} onChange={a => setEmail(a.target.value)} />
                <input type="text" placeholder='Insira seu telefone' value={telefone} onChange={a => setTelefone(a.target.value)} />
                <select value={pais} onChange={a => setPais(a.target.value)}>
                    <option value="">Selecione o seu país</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Estados Unidos">Estados Unidos</option>
                    <option value="Irlanda do Norte">Irlanda do Norte</option>
                    <option value="Irlanda do Sul">Irlanda do Sul</option>
                </select>
                <textarea placeholder='Insira sua mensagem' value={mensagem} onChange={a => setMensagem(a.target.value)}></textarea>

                <div className='botao' onClick={enviar}>ENVIAR</div>
                {erro &&
                    <p className='erro'>{erro}</p>
                }
            </motion.section>

            <Rodape />
        </div>
    )
}