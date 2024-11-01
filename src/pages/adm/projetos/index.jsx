import './index.scss';
import CabecalhoAdm from '../../../components/cabecalhoAdm';
import ProjetoAdm from '../../../components/projeto';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function ProjetosAdm() {
    const [projetos, setProjetos] = useState([])
    const [token, setToken] = useState(null)
    const navigate = useNavigate()

    async function buscarProjeto() {
        const url = `http://4.172.207.208:5030/projeto?x-access-token=${token}`
        let resp = await axios.get(url)

        setProjetos(resp.data)
    }

    useEffect(() => {
        let usu = localStorage.getItem('USUARIO')
        setToken(usu)

        if (!usu) {
            navigate ('/')
        }
    }, [])

    return (
        <div className='pagina-projetos-adm'>
            <CabecalhoAdm />

            {projetos.map(item => (
                <ProjetoAdm 
                    key={item.id} 
                    id={item.id} //propriedade
                />
            ))}
            
        </div>
    )
}