import './index.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import CabecalhoAdm from '../../../components/cabecalhoAdm'

export default function Formularios() {
    const [pais, setPais] = useState('')
    const [formularios, setFormularios] = useState([])
    const [token, setToken] = useState(null)
    const navigate = useNavigate()

    async function pesquisarFormulario() {
        const url = pais 
        ? `http://localhost:5010/formulario/${pais}?x-access-token=${token}`
        : `http://localhost:5010/formulario?x-access-token=${token}`
        let resp = await axios.get(url)

        setFormularios(resp.data)
    }
    

    useEffect(() => {
        let usu = localStorage.getItem('USUARIO')
        setToken(usu)

        if (!usu) {
            navigate('/')
        } else {
            pesquisarFormulario()
        }
        console.log('Token:', usu)
    }, [navigate])

    useEffect(() => {
        if (token) {
            pesquisarFormulario(); // Chama novamente quando o país muda
        }
    }, [pais, token]);

    return (
        <div className='pagina-formularios'>
            <CabecalhoAdm />

            <div className='pesquisa'>
                <select value={pais} onChange={a => setPais(a.target.value)}>
                    <option value="">Selecione um país</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Estados Unidos">Estados Unidos</option>
                    <option value="Irlanda do Norte">Irlanda do Norte</option>
                    <option value="Irlanda do Sul">Irlanda do Sul</option>
                </select>

            </div>

            <section className='formularios'>
                {formularios.map((item, pos) => (
                    <div className='formulario' key={pos}>
                        <h1>Formulário {item.id}</h1>
                        <p><i className='fa-solid fa-user'></i> {item.cliente}</p>
                        <p><i className='fa-regular fa-envelope'></i> {item.email}</p>
                        <p><i className='fa-solid fa-phone'></i> {item.telefone}</p>
                        <p><i className='fa-solid fa-house'></i> {item.pais}</p>
                        <p><i className='fa-solid fa-pen-to-square'></i> {item.mensagem}</p>
                        <p><i className='fa-regular fa-calendar'></i> {new Date(item.dia).toLocaleDateString()}</p>
                        <p><i className='fa-regular fa-clock'></i> {new Date(item.dia).toLocaleTimeString()}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}