import './index.scss';
import { useState } from 'react';

import CabecalhoAdm from '../../../components/cabecalhoAdm';
import axios from 'axios';

export default function ProjetosAdm() {
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

    async function inserirProjetoAndamento() {
        const paramObj = {
            foto: imagem,
            tipo: tipo,
            local: local
        }

        // n tem token (n vai dar tempo de eu fazer o role de pegar o token da localstorage)
        const url = `http://localhost:5010/andamento?x-access-token=${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJubV9hZG0iOiJmZWxwcyIsImlhdCI6MTcyOTg2ODA2NX0.BoDLeZ4hnTowwObEVBgUJYF3fdDhfT15ET2w9Tz0yxI'}`; 
        let response = await axios.post(url, paramObj);
        let id = response.data.novoId

        
        console.log(id)
    }

    return (
        <div className='pagina-projetos-adm'>
            <CabecalhoAdm />

            <form>
                <label> IMAGEM: </label>
                <input
                    type="file"
                    accept='image/*'
                    onChange={alterarImagem}
                />
                <i class='fa-solid fa-trash botao' onClick={() => setImagem(null)} />

                <div>
                    <label> TIPO: </label>
                    <input type="text" value={tipo} onChange={e => setTipo(e.target.value)} />

                    <label> LOCAL: </label>
                    <input type="text" value={local} onChange={e => setLocal(e.target.value)} />
                </div>

                <button onClick={inserirProjetoAndamento}> Inserir</button>
            </form>

            {imagem &&
                <div className='imagem'>
                    <img
                        id='inimigo'
                        src={imagem}
                        alt="Foto"
                    />
                </div>
            }
        </div>
    )
}