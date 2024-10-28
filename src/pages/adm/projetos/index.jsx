import './index.scss';
import CabecalhoAdm from '../../../components/cabecalhoAdm';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function ProjetosAdm() {
    const [token, setToken] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        let usu = localStorage.getItem('USUARIO')
        setToken(usu)

        if (usu == undefined) {
            navigate ('/')
        }
    }, [])

    return (
        <div className='pagina-projetos-adm'>
            <CabecalhoAdm />
        </div>
    )
}