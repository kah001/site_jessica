import './index.scss'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
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
        let resp = await axios.post(url, paramCorpo)

        if (resp.data.erro != undefined) {
            alert(resp.data.erro)
        } else {
            localStorage.setItem('USUARIO', resp.data.token)
            navigate('/projetos/adm')
        }
    }

    return (
        <div className='pagina-login'>
            <img src="assets/images/backlogin.png" alt="" />

            <section className='bloco'>
                <div className='bloco1'>
                    <Link to='/'><img src="/assets/images/seta.png" alt="" /></Link>
                    <h1>Bem-Vindo(a)!</h1>

                    <label> NOME: </label>
                    <input type="text" value={nome} onChange={a => setNome(a.target.value)} />

                    <label> SENHA: </label>
                    <input type="password" placeholder="********" value={senha} onChange={a => setSenha(a.target.value)} />

                    <div className='botao' onClick={entrar}>ENTRAR</div>
                </div>

                <div className='bloco2'>
                    <img src="assets/images/logo-tcc.png" />
                </div>
            </section>
        </div>
    )
}