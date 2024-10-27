import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import Cabecalho from '../../../components/cabecalho-marrom';
import Rodape from '../../../components/rodape';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

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


    async function enviar() {
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

            <section className='tecnologia'>
                <div className='imagem'>
                    <img src="assets/images/jessica-tecnologias.jpg" alt="" />
                </div>

                <div className='info'>
                    <h1>Tecnologia</h1>
                    <hr />
                    <p>Grande uso da tecnologia durante o desenvolvimento dos projetos, você poderá  fazer um tour pela sua casa antes mesmo dela estar pronta</p>
                </div>
            </section>


            <section className='softwares'>
                <h1>Softwares Utilizados</h1>

                <div className='imagens'>
                    <img src="assets/images/archicad.jpeg" alt="" />
                    <img src="assets/images/lumion.jpg" alt="" />
                </div>
            </section>


            <section className='formulario'>
                <h1>FORMULÁRIO DE CONTATO</h1>

                <input type="text" placeholder='Insira seu nome' value={nome} onChange={a => setNome(a.target.value)} />
                <input type="text" placeholder='Insira seu email' value={email} onChange={a => setEmail(a.target.value)} />
                <input type="text" placeholder='Insira seu telefone' value={telefone} onChange={a => setTelefone(a.target.value)} />
                <select value={pais} onChange={a => setPais(a.target.value)}>
                    <option>Brasil</option>
                    <option>Estados Unidos</option>
                    <option>Irlanda do Norte</option>
                    <option>Irlanda do Sul</option>
                </select>
                <textarea placeholder='Insira sua mensagem' value={mensagem} onChange={a => setMensagem(a.target.value)}></textarea>

                <div className='botao' onClick={enviar}>ENVIAR</div>
            </section>

            <Rodape />
        </div>
    )
}