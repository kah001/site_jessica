import './index.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    async function entrar() {
        const paramCorpo = {
            "nome": nome,
            "senha": senha
        }

        const url = `http://localhost:5010/adm/entrar`
        await axios.post(url, paramCorpo)
    }

    return (
        <div className='pagina-login'>
            <img src="assets/images/image-login.png" alt="" />
            
            <section className='bloco'>
                <div className='titulo'>
                    <h1>Seja muito Bem-vindo(a)!</h1>
                </div>

                <div className='info'>
                    <div>
                        <p>Nome:</p>
                        <input type="text" value={nome} onChange={a => setNome(a.target.value)} />
                    </div>
                    <div>
                        <p>Senha:</p>
                        <input type="password" placeholder='********' value={senha} onChange={a => setSenha(a.target.value)} /> 
                    </div>
                </div>

                <div className='botao' onClick={entrar}>ENTRAR</div>

            </section>
        </div>
    )
}