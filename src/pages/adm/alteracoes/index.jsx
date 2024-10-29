import './index.scss';
import { useEffect, useState } from "react";

import CabecalhoAdm from '../../../components/cabecalhoAdm';
import { Link, useNavigate, useParams } from "react-router-dom";

import axios from 'axios';

export default function AlteracoesAdm() {
  const [token, setToken] = useState(null);

  const [idRecente, setIdRecente] = useState(0);
  const [imagemRecente, setImagemRecente] = useState('');
  const [tipoRecente, setTipoRecente] = useState('');
  const [localRecente, setLocalRecente] = useState('');

  const { id } = useParams();

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
    try {

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
      consultar(token);
    }
    catch (err) {
      alert(`Erro: ${err.message}`)
    }
  }

  async function consultar(token) {
    try {
      const url = `http://localhost:5010/projeto/andamento/recente?x-access-token=${token}`;
      const resp = await axios.get(url);
      let dados = resp.data
      
      setIdRecente(dados.id)
      setImagemRecente(dados.imagem)
      setTipoRecente(dados.tipo)
      setLocalRecente(dados.local)
    }
    catch (err) {
      alert(`Erro: ${err.message}`)
    }
  }
  
  async function alterarRecente(){
    try {
      const paramObj = {
        imagem: imagem,
        tipo: tipo,
        local: local
      }

      const url = `http://localhost:5010/projeto/andamento/${idRecente}?x-access-token=${token}`
      let resp = await axios.put(url, paramObj)

      alert(`Projeto em andamento do Id: ${idRecente} Editador com Sucesso`)
      consultar(token);
    } 
    catch (err) {
      alert(`Erro: ${err.message}`);
    }
  }

  async function deletarRecente() {
    try {
      const url = `http://localhost:5010/projeto/andamento/${idRecente}?x-access-token=${token}`;
      let resp = await axios.delete(url);

      alert(`Projeto em andamento do Id: ${idRecente} Deletado com Sucesso`)
      consultar(token)
    }
    catch (err) {
      alert('Nenhum registro encontrado')
    }
  }

  useEffect(() => {
    let usu = localStorage.getItem('USUARIO');
    setToken(usu);

    if (usu === null || usu === undefined) {
      navigate('/')
    }
    consultar(usu)
  }, [])

  return (
    <div className='pagina-alteracoes-adm'>
      <CabecalhoAdm />
      <div style={{ backgroundColor: "#D9D9D9", height: "50px" }} />


      <section className='secao-01' id='inserir'>
        <div className="titulo">
          <h1>Página - PROJETOS</h1>
        </div>

        <form >
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
                  <label for="arquivo" style={{
                    fontSize: '25px',
                    color: '#fff',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}>ALTERAR</label>
                </label>
              }
              <input
                type="file"
                id='arquivo'
                accept='image/*'
                onChange={alterarImagem}
              />
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
                <button onClick={id ? alterarRecente : inserir} > {id ? 'EDITAR' : 'INSERIR'} </button>
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

            <div className='image-box'>
              {!imagemRecente &&

                <div className='img-recente-box'>
                </div>

              }
              <img className='imagem' src={imagemRecente} alt={imagemRecente} />
            </div>

            <div id='tipo'>
              <h2>TIPO {tipoRecente}</h2>
            </div>
            <div id='local'>
              <h1>LOCAL {localRecente}</h1>
            </div>
          </div>

          <div className='acoes'>
            <div>
              <i className="fa-solid fa-trash-can" style={{ fontSize: '70px' }} onClick={deletarRecente} ></i>
              <Link to={`/adm/alteracoes/${idRecente}`} style={{color: '#000'}} >
                <i className="fa-solid fa-pen-to-square" style={{ fontSize: '70px' }} ></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}