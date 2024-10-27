import './index.scss';
import { useEffect, useState } from "react";

import CabecalhoAdm from '../../../components/cabecalhoAdm';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

export default function AlteracoesAdm() {
    const [token, setToken] = useState(null);

    const [imagemRecente, setImagemRecente] = useState('');
    const [tipoRecente, setTipoRecente] = useState('');
    const [localRecente, setLocalRecente] = useState('');

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

    async function inserir(e) {
        e.preventDefault() // faz a tela n recarregar quando insere

        const paramObj = {
            imagem: imagem,
            tipo: tipo,
            local: local
        }

        const url = `http://localhost:5010/projeto/andamento?x-access-token=${token}`;
        let response = await axios.post(url, paramObj);
        let id = response.data.novoId

        alert(`Novo Projeto em andamento adcionado. Id: ${id}`);
        setImagem(null);
        setTipo('');
        setLocal('');
        consultar();
    }

    async function consultar(token) {
        try {
            const url = `http://localhost:5010/projeto/andamento/recente?x-access-token=${token}`;
            const resp = await axios.get(url);
            let dados = resp.data
            console.log(dados)

            setImagemRecente(dados.imagem)
            setTipoRecente(dados.tipo)
            setLocalRecente(dados.local)
        }
        catch (error) {
            console.error('Erro ao consultar:', error.message);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('USUARIO');
        setToken(token);

        if (token === 'null' || token === undefined) {
            navigate('/')
        }
        consultar(token)
    }, [navigate])

    return (
        <div className='pagina-alteracoes-adm'>
            <CabecalhoAdm />
            <div style={{ backgroundColor: "#D9D9D9", height: "50px" }} />


            <section className='secao-01'>
                <div className="titulo">
                    <h1>Página - PROJETOS</h1>
                </div>

                <form>
                    <div className='box'>

                        <div className='image-box'>
                            {imagem &&
                                <img
                                    className='imagem'
                                    src={imagem}
                                    alt="Imagem"
                                />
                            }

                            {imagem == null ?
                                <label for="arquivo" style={{
                                    display: "flex",
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    cursor: 'pointer'
                                }} >
                                    <i class="fa-solid fa-image fa-flip-horizontal" style={{ fontSize: '70px' }} />

                                    <label style={{ fontSize: '25px', cursor: 'pointer' }}>IMAGEM</label>
                                </label>
                                :
                                <label for="arquivo" className='img-icon' style={{
                                    display: "flex",
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    cursor: 'pointer'
                                }}>
                                    <i class="fa-solid fa-image fa-flip-horizontal" style={{ fontSize: '70px', color: '#fff' }}></i>
                                    <label for="arquivo" style={{ fontSize: '25px', color: '#fff', fontWeight: '700', cursor: 'pointer' }}>ALTERAR</label>
                                </label>
                            }
                            <input
                                type="file"
                                id='arquivo'
                                accept='image/*'
                                onChange={alterarImagem}
                            />
                            {/* <i class='fa-solid fa-trash botao' onClick={() => setImagem(null)} /> */}
                        </div>

                        <div className='text-box'>

                            <div className='text'>
                                <div>
                                    <label> TIPO: </label>
                                    <input type="text" value={tipo} onChange={e => setTipo(e.target.value)} placeholder='Casas ou Apartamentos...' />
                                </div>

                                <div>
                                    <label> LOCAL: </label>
                                    <input type="text" value={local} onChange={e => setLocal(e.target.value)} placeholder='Cidade, País...' />
                                </div>
                            </div>

                            <div className="button">
                                <button onClick={inserir} required> INSERIR </button>
                            </div>
                        </div>
                    </div>
                </form>
                <div style={{ backgroundColor: "#D9D9D9", height: "50px" }} />
            </section>

            <section className='secao-02'>


                <div className='titulo'>
                    <h1>PROJETO EM ANDAMENTO</h1>
                </div>

                <div className='form'>

                    <div className="box">


                        <div className="">

                            <div className='image-box'>

                                <img className='imagem' src={imagemRecente} alt={imagemRecente} />
                            </div>
                            <div><h2>TIPO {tipoRecente}</h2>
                            </div>
                            <div>
                                <h1>LOCAL {localRecente}</h1>
                            </div>
                        </div>


                    </div>

                    <div>
                        <i className="fa-solid fa-trash-can"></i>

                        <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                </div>
            </section>
        </div>
    )
}