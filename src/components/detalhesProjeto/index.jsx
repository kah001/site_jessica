import './index.scss'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function DetalhesProjeto(props) {
    const [detalhes, setDetalhes] = useState(null)
    const [tarefas, setTarefas] = useState([])
    const [token, setToken] = useState(null)

    async function buscarTarefas() {
        const url = `http://localhost:5010/tarefa/${props.idProjeto}?x-access-token=${token}`
        let resp = await axios.get(url)

        setTarefas(resp.data)
    }

    useEffect(() => {
        let usu = localStorage.getItem('USUARIO')
        setToken(usu)
    }, [])

    return (
        <div className='comp-detalhes-projeto'>
            <div className='inicio'>
                <h1></h1>
            </div>


            <div className='titulo'>

            </div>


            <div className='sobre'>

            </div>


            <div className='tarefas'>
                <h1>Tarefas</h1>
                <hr />
                {tarefas.map(item => (
                    <div className='tarefa'>
                        <input type="checkbox" />
                        <p>{item.descricao}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}