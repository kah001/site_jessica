import './index.scss'
import { useState } from 'react'
import DetalhesProjeto from '../detalhesProjeto'

export default function ProjetoAdm(props) {
    const [mostrarDetalhes, setMostrarDetalhes] = useState(false)

    function mostrar() {
        setMostrarDetalhes(!mostrarDetalhes)
    }

    return (
        <div className='comp-projeto-adm'>
            <div className={mostrarDetalhes ? 'open' : 'projeto'} onClick={mostrar}>
                <h1 >
                    Projeto {props.id} <div>{mostrarDetalhes ? <i className='fa-solid fa-x icon'></i> : ''}</div>
                </h1>
            </div>

            {mostrarDetalhes && <DetalhesProjeto idProjeto={props.id} />}
        </div>
    )
}