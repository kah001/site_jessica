import './index.scss'
import { useState } from 'react'
import DetalhesProjeto from '../detalhesProjeto'

export default function Projeto(props) {
    const [detalhes, setDetalhes] = useState(false)

    function mostrarDetalhes() {
        setDetalhes(!detalhes)
    }

    return (
        <div onClick={mostrarDetalhes} className='comp-projeto'>
            <div className={`projeto ${detalhes ? 'open' : ''}`}>
                <h1>Projeto {props.id}</h1>
            </div>

            {detalhes &&
                <DetalhesProjeto id={props.id} />
            }
        </div>
    )
}