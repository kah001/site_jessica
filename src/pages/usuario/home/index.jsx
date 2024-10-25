import './index.scss';
import { useState, useEffect } from 'react';
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


    return (
        <div className='pagina-home'>
            <Cabecalho />

            <section className='slogan'>
                <Swiper className='carrossel'
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                        delay: 3000,
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
                                        <div className='botao'>Ver este Projeto</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className='tecnologia'>
                <div className='imagem'>

                </div>

                <div className='info'>
                    <h1>Tecnologia</h1>
                    <hr />
                    <p>Grande uso da tecnologia durante o desenvolvimentos dos projetos, você poderá  fazer um tour pela sua casa antes mesmo dela estar pronta</p>
                </div>
            </section>

            <Rodape />
        </div>
    )
}