import './index.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Cabecalho from '../../../components/cabecalho-marrom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Rodape from '../../../components/rodape'


import image1 from '../../../images/construcao1.jpg'
import image2 from '../../../images/construcao2.jpg'
import image3 from '../../../images/construcao3.jpg'
import image4 from '../../../images/construcao5.jpg'

import car1img1 from '../../../images/carrossel1-1.jpg'
import car1img2 from '../../../images/carrossel1-2.jpg'
import car1img3 from '../../../images/carrossel1-3.jpg'
import car1img4 from '../../../images/carrossel1-4.jpg'
import car1img5 from '../../../images/carrossel1-5.jpg'
import car1img6 from '../../../images/carrossel1-6.jpg'
import car1img7 from '../../../images/carrossel1-7.jpg'
import car1img8 from '../../../images/carrossel1-8.jpg'
import car1img9 from '../../../images/carrossel1-9.jpg'
import car1img10 from '../../../images/carrossel1-10.jpg'

import car6img1 from '../../../images/carrossel6-1.jpg'
import car6img2 from '../../../images/carrossel6-2.jpg'
import car6img3 from '../../../images/carrossel6-3.jpg'
import car6img4 from '../../../images/carrossel6-4.jpg'
import car6img5 from '../../../images/carrossel6-5.jpg'


export default function Projetos() {
    const [imagemRecente, setImagemRecente] = useState('');
    const [tipoRecente, setTipoRecente] = useState('');
    const [localRecente, setLocalRecente] = useState('');

    const carrosselConstrucao = [
        { id: 1, img: image1 },
        { id: 2, img: image2 },
        { id: 3, img: image3 },
        { id: 4, img: image4 }
    ]

    const carrossel1 = [
        { id: 1, img: car1img1 },
        { id: 2, img: car1img2 },
        { id: 3, img: car1img3 },
        { id: 4, img: car1img4 },
        { id: 5, img: car1img5 },
        { id: 6, img: car1img6 },
        { id: 7, img: car1img7 },
        { id: 8, img: car1img8 },
        { id: 9, img: car1img9 },
        { id: 10, img: car1img10 }
    ]
    const carrossel2 = [
        { id: 1 },
        { id: 2 }
    ]
    const carrossel3 = [
        { id: 1 },
        { id: 2 }
    ]
    const carrossel4 = [
        { id: 1 },
        { id: 2 }
    ]
    const carrossel5 = [

    ]
    const carrossel6 = [
        { id: 1, img: car6img1 },
        { id: 2, img: car6img2 },
        { id: 3, img: car6img3 },
        { id: 4, img: car6img4 },
        { id: 5, img: car6img5 }
    ]

    async function consultar() {
        try {
            const url = `http://localhost:5010/projeto/andamento/recente`;
            const resp = await axios.get(url);

            let dados = resp.data

            if (dados && dados.id) {
                setImagemRecente(dados.imagem);
                setTipoRecente(dados.tipo);
                setLocalRecente(dados.local);
            }
        }
        catch (err) {
        }
    }

    useEffect(() => {

        consultar();
    }, [])

    return (
        <div className='pagina-projetos'>
            <Cabecalho />

            <section className='construcao'>
                <h1>CONSTRUÇÃO</h1>

                <div>
                    <Swiper className='carrossel-construcao'
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        modules={[Autoplay, Pagination, Navigation]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        loop={true}
                    >
                        {carrosselConstrucao.map((item) => (
                            <SwiperSlide className='item-construcao' key={item.id}>
                                <img src={item.img} alt="" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section className='interiores'>
                <h1>INTERIORES</h1>

                <div>
                    <Swiper className='carrossel carrossel1'
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        modules={[Autoplay, Pagination, Navigation]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        loop={true}
                    >
                        {carrossel1.map(item => (
                            <SwiperSlide className='item-carrossel' key={item.id}>
                                <img src={item.img} alt="" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


                <Swiper className='carrossel carrossel2'
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                >
                    {carrossel2.map(item => (
                        <SwiperSlide className='item-carrossel' key={item.id}>
                            <img src={item.img} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>


                <Swiper className='carrossel carrossel3'
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    loop={true}
                >
                    {carrossel3.map(item => (
                        <SwiperSlide className='item-carrossel' key={item.id}>
                            <img src={item.img} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>


                <Swiper className='carrossel carrossel4'
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Navigation, Pagination]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                >
                    {carrossel4.map(item => (
                        <SwiperSlide key={item.id} className='item-carrossel'>
                            <img src={item.img} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>


                <Swiper className='carrossel carrossel5'
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Navigation, Pagination]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                >
                    {carrossel5.map(item => (
                        <SwiperSlide key={item.id} className='item-carrossel'>
                            <img src={item.img} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>


                <Swiper className='carrossel carrossel6'
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    loop={true}
                >
                    {carrossel6.map(item => (
                        <SwiperSlide className='item-carrossel' key={item.id}>
                            <img src={item.img} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </section>

            <section className='projeto-andamento'>
                <div className='titulo'>
                    <h1>PROJETO EM ANDAMENTO</h1>
                </div>

                <div className='form'>

                    <div className="box">

                        <div className='image-box'>
                            {!imagemRecente &&

                                <div className='img-recente-box' style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '15px'
                                }}>
                                    <p><b>Nenhum projeto em andamento no momento</b></p>
                                </div>

                            }
                            <img className='imagem' src={imagemRecente} alt={imagemRecente} />
                        </div>

                        <div id='tipo'>
                            <h2>TIPO : {tipoRecente.toLocaleUpperCase()}</h2>
                        </div>
                        <div id='local'>
                            <h1>LOCAL : {localRecente.toLocaleUpperCase()}</h1>
                        </div>
                    </div>
                </div>
            </section>

            <Rodape />
        </div>
    )
}