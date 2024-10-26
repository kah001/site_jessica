import './index.scss';
import { useEffect, useState } from "react";

import CabecalhoAdm from '../../../components/cabecalhoAdm';
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import { div } from 'framer-motion/client';
import { px } from 'framer-motion';

export default function AlteracoesAdm() {
    const [token, setToken] = useState(null);

    const navigate = useNavigate();

    const [imagem, setImagem] = useState(null);
    const [tipo, setTipo] = useState('');
    const [local, setLocal] = useState('');

    function alterarImagem(e) {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagem(reader.result);
            };

            reader.readAsDataURL(file);
        }
    }

    async function inserirProjetoAndamento() {
        const paramObj = {
            foto: imagem,
            tipo: tipo,
            local: local
        }

        const url = `http://localhost:5010/projeto/andamento?x-access-token=${token}`;
        let response = await axios.post(url, paramObj);
        let id = response.data.novoId

        alert(`Novo Projeto em andamento adcionado. Id: ${id}`)
    }

    useEffect(() => {
        let token = localStorage.getItem('USUARIO');
        setToken(token);

        if (token == 'null' || token == undefined) {
            navigate('/')
        }
    }, [])

    return (
        <div className='pagina-alteracoes-adm'>
            <CabecalhoAdm />
            <div style={{
                backgroundColor: "#D9D9D9",
                height: "50px"
            }}
            />


            <section className='secao-01'>
                <div className="titulo">
                    <h1>Página - PROJETOS</h1>
                </div>

                <form>
                    <div className='box'>

                        <div className='image-box'>
                            {imagem &&
                                <img
                                    src={imagem}
                                    alt="Imagem"
                                    className='imagem'
                                />
                            }

                            {imagem == null ?
                                <label for="arquivo" style={{
                                    display: "flex",
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}>
                                    <i class="fa-solid fa-image fa-flip-horizontal" style={{ fontSize: '70px' }} />
                                    <label style={{ fontSize: '25px' }}>IMAGEM</label>
                                </label>
                                :
                                <label for="arquivo" className='img-icon'>
                                    <i class="fa-solid fa-image fa-flip-horizontal" style={{ fontSize: '70px' }}></i>
                                </label>
                            }
                            <input
                                type="file"
                                id='arquivo'
                                name='arquivo'
                                accept='image/*'
                                onChange={alterarImagem}
                            />
                            {/* <i class='fa-solid fa-trash botao' onClick={() => setImagem(null)} /> */}
                        </div>

                        <div className='text-box'>
                            <label> TIPO: </label>
                            <input type="text" value={tipo} onChange={e => setTipo(e.target.value)} />

                            <label> LOCAL: </label>
                            <input type="text" value={local} onChange={e => setLocal(e.target.value)} />
                            <button onClick={inserirProjetoAndamento}> Inserir</button>
                        </div>
                    </div>
                </form>
            </section>

            <section className='secao-02'>
                <div className='titulo'>
                    <h1>PROJETO EM ANDAMENTO</h1>
                </div>

                <div className='inserir-imagem'>
                    {imagem &&

                        <img
                            className=''
                            src={imagem}
                            alt="Foto"
                        />

                    }
                </div>

                <div>
                    <p>Tipo (casas ou apartamentos)</p>

                    <h2>Local (cidade, pais)</h2>
                </div>

                <div>
                    <i className="fa-solid fa-trash-can"></i>

                    <i className="fa-solid fa-pen-to-square"></i>
                </div>
            </section>
        </div>
    )
}