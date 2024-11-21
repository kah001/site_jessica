import './index.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function DetalhesProjeto(props) {
    
    const [detalhes, setDetalhes] = useState([])
    const [token, setToken] = useState(null)
    const [tarefas, setTarefas] = useState([])
    const navigate = useNavigate()

    async function buscarDetalhes(id) {
        try {
            const url = `http://4.172.207.208:5030/projeto/${id}`
            let resp = await axios.get(url)
    
            setDetalhes(resp.data)    
        } 
        catch (err) {
            
        }
    }
    async function buscarTarefas(id) {
        try {
            const url = `http://4.172.207.208:5030/tarefa/${id}`
            let resp = await axios.get(url)
    
            setTarefas(resp.data)
        }
        catch (err) {

        }
    }

    useEffect(() => {
        try {
            let usu = localStorage.getItem('USUARIO')
            setToken(usu)

            if (!usu) {
                navigate('/')
            } else {
                buscarDetalhes(props.id)
                buscarTarefas(props.id)
            }
        }
        catch (err) {
        }
    }, [navigate, buscarTarefas])

    return (
        <div className='comp-detalhes-projeto'>
            {detalhes.map((item) => (
                <div key={item.id} className='detalhes'>
                    <div className='titulo'>
                        <h1>{item.nome}</h1>
                        <p>{item.tipo}</p>
                        <p>Iniciado em {new Date(item.inicio).toLocaleDateString()}</p>
                    </div>

                    <div className='cliente'>
                        <i className='fa-solid fa-user icon'></i>
                        <h2>{item.cliente} | </h2>
                        <i className='fa-solid fa-comment icon'></i>
                        <h2>{item.contato}</h2>
                    </div>

                    <div className='desc'>
                        <p><b>Sobre o projeto:</b></p>
                        <p>{item.descricao}</p>
                    </div>

                    <div className='tarefas'>
                        <h1>Tarefas</h1>
                        <hr />
                        {tarefas.map((item) => (
                            <div className='tarefa' key={item.id}>
                                <input type="checkbox" />
                                <p>{item.descricao}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}