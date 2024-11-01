import './index.scss';
import { useEffect, useState, useRef } from "react";
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

  const insertSectionRef = useRef(null);
  const [editando, setEditando] = useState(false)

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
    e.preventDefault();
    try {
      const paramObj = {
        imagem: imagem,
        tipo: tipo,
        local: local
      }

      const url = `http://4.172.207.208:5030/projeto/andamento?x-access-token=${token}`;
      let response = await axios.post(url, paramObj);
      let id = response.data.novoId

      setImagem(null);
      setTipo('');
      setLocal('');

      consultar(token);
      alert(`Novo Projeto em andamento adcionado. Id: ${id}`);
    }
    catch (err) {
      if (err.response && err.response.data && err.response.data.erro) {
        alert(err.response.data.erro); 
      } else {
        alert('Erro desconhecido ao inserir projeto');
      }
    }
  }

  async function consultar() {
    try {
      const url = `http://4.172.207.208:5030/projeto/andamento/recente`;
      const resp = await axios.get(url);

      let dados = resp.data

      setIdRecente(dados.id);
      setImagemRecente(dados.imagem);
      setTipoRecente(dados.tipo);
      setLocalRecente(dados.local);
    }
    catch (err) {
    }
  }

  async function consultarPorId(id, token) {
    try {
      const url = `http://4.172.207.208:5030/projetos/andamento/${id}?x-access-token=${token}`;
      const resp = await axios.get(url);

      let dados = resp.data;

      setImagem(dados.imagem);
      setTipo(dados.tipo);
      setLocal(dados.local);

    } catch (err) {
      
    }
  }

  async function alterarRecente(e) {
    e.preventDefault();
    try {
      const paramObj = {
        imagem: imagem,
        tipo: tipo,
        local: local
      }

      const url = `http://4.172.207.208:5030/projeto/andamento/${id}?x-access-token=${token}`
      let resp = await axios.put(url, paramObj)

      alert(`Projeto em andamento do Id: ${id} Editado com Sucesso`)
      navigate('/adm/alteracoes')

      consultar(token);

      setEditando(false)
      setImagem(null);
      setTipo('');
      setLocal('');
    }
    catch (err) {
      if (err.response && err.response.data && err.response.data.erro) {
        alert(err.response.data.erro);
      } else {
        alert('Erro desconhecido ao inserir projeto'); 
      }
    }
  }

  async function deletarRecente() {
    try {
      const url = `http://4.172.207.208:5030/projeto/andamento/${idRecente}?x-access-token=${token}`;
      await axios.delete(url);

      alert(`Projeto em andamento do Id: ${idRecente} Deletado com Sucesso`)
      consultar(token)
    }
    catch (err) {
      alert('Nenhum registro encontrado')
      setImagemRecente(null);
      setTipoRecente('');
      setLocalRecente('');
    }
  }

  useEffect(() => {
    let usu = localStorage.getItem('USUARIO');
    setToken(usu);

    if (!usu) {
      navigate('/')
    }

    const carregarDados = async () => {
      if (id) {
        await consultarPorId(id, usu);
      } else {
        await consultar(usu);
      }
    };

    carregarDados()
  }, [id])

  const scrollToInsertSection = () => {
    if (insertSectionRef.current) {
      insertSectionRef.current.scrollIntoView({
        behavior: 'smooth', // Rolagem suave
      });
    }
  };

  return (
    <div className='pagina-alteracoes-adm' >
      <CabecalhoAdm />
      <div style={{ backgroundColor: "#D9D9D9", height: "50px" }} />

      <section className='secao-01' id='inserir' ref={insertSectionRef}>
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
                <button onClick={editando ? alterarRecente : inserir} > {id ? 'EDITAR' : 'INSERIR'} </button>
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

          <div className='acoes'>
            <div>
              <i className="fa-solid fa-trash-can" style={{ fontSize: '45px' }} onClick={deletarRecente} ></i>
              <Link to={`/adm/alteracoes/${idRecente}`} style={{ color: '#000' }} onClick={() => {
                scrollToInsertSection();
                consultarPorId(idRecente);
                setEditando(true);
              }} >
                <i className="fa-solid fa-pen-to-square" style={{ fontSize: '45px' }} ></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}