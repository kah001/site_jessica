import './index.scss';
import CabecalhoAdm from '../../../components/cabecalhoAdm';
import Projeto from '../../../components/projeto';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ProjetosAdm() {
    const [projetos, setProjetos] = useState([])
    const [token, setToken] = useState(null)
    const navigate = useNavigate()

    async function buscarProjeto() {
        try {
            const url = `http://localhost:5010/projeto?x-access-token=${token}`
            let resp = await axios.get(url)
    
            setProjetos(resp.data)
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
                buscarProjeto()
            }
        }
        catch (err) {

        }
    }, [navigate, buscarProjeto])

    return (
        <div className='pagina-projetos-adm'>
            <CabecalhoAdm />

            <div className='projetos'>
                {projetos.map(item => (
                    <Projeto key={item.id} id={item.id} />
                ))}
            </div>

        </div>
    )
}