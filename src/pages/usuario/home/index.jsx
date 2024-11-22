import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cabecalho from '../../../components/cabecalho-marrom';
import Rodape from '../../../components/rodape';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { i18n } from '../../../translate/i18n';

import img1 from '../../../images/construcao3.jpg'
import img2 from '../../../images/construcao2.jpg'
import img3 from '../../../images/construcao1.jpg'


export default function Home() {
    const imagens = [
        { id: 1, img: img1, slogan: i18n.t('home.slogan1') },
        { id: 2, img: img2, slogan: i18n.t('home.slogan2') },
        { id: 3, img: img3, slogan: i18n.t('home.slogan3') }
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
            let mensagem = i18n.t('home.formError')
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
                        delay: 5200,
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
                                        <Link to='/projetos' className='botao'><div>{i18n.t('home.button')}</div></Link>
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
                transition={{ duration: 1, type: 'tween', stiffness: 100, delay: 0.5 }}
            >
                <div className='imagem'>
                    <img src="assets/images/jessica-tecnologias.jpg" alt="" />
                </div>

                <div className='info'>
                    <h1>{i18n.t('home.techTitle')}</h1>
                    <hr />
                    <p>{i18n.t('home.techText')}</p>
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
                    <h1>{i18n.t('home.priceTitle')}</h1>
                    <p>{i18n.t('home.priceText')}</p>
                </motion.div>

                <motion.div className='projeto'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                >
                    <i className='fa-solid fa-user-pen'></i>
                    <h1>{i18n.t('home.projectTitle')}</h1>
                    <p>{i18n.t('home.projectText')}</p>
                </motion.div>
            </section>

            <section className='softwares'>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >{i18n.t('home.software')}</motion.h1>

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
                <h1>{i18n.t('home.formTitle')}</h1>

                <input type="text" placeholder={i18n.t('home.formName')} value={nome} onChange={a => setNome(a.target.value)} />
                <input type="text" placeholder={i18n.t('home.formEmail')} value={email} onChange={a => setEmail(a.target.value)} />
                <input type="text" placeholder={i18n.t('home.formPhoneNumber')} value={telefone} onChange={a => setTelefone(a.target.value)} />
                <select value={pais} onChange={a => setPais(a.target.value)}>
                    <option value="">{i18n.t('home.formCountry')}</option>
                    <option value="Brasil">{i18n.t('home.option1')}</option>
                    <option value="Estados Unidos">{i18n.t('home.option2')}</option>
                    <option value="Irlanda do Norte">{i18n.t('home.option3')}</option>
                    <option value="Irlanda do Sul">{i18n.t('home.option4')}</option>
                </select>
                <textarea placeholder={i18n.t('home.formMessage')} value={mensagem} onChange={a => setMensagem(a.target.value)}></textarea>

                <div className='botao' onClick={enviar}>{i18n.t('home.formButton')}</div>
                {erro &&
                    <p className='erro'>{erro}</p>
                }
            </motion.section>

            <Rodape />
        </div>
    )
}