import './index.scss'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { i18n } from '../../../translate/i18n'

export default function Login() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    async function entrar() {
        if (nome !== '' && senha !== '') {
            const paramCorpo = {
                "nome": nome,
                "senha": senha
            }
    
            const url = `http://4.172.207.208:5030/adm/entrar`
            let resp = await axios.post(url, paramCorpo)
    
            if (resp.data.erro !== undefined) {
                alert(resp.data.erro)
            } else {
                localStorage.setItem('USUARIO', resp.data.token)
                navigate('/adm/projetos')
            }
        }
    }

    function enter(a) {
        if (a.key == 'Enter') {
            entrar()
        }
    }
    
    return (
        <div className='pagina-login'>
            <img src="assets/images/backlogin.png" alt="" />

            <section className='bloco'>
                <div className='bloco1'>
                    <Link to='/'><img src="/assets/images/seta.png" alt="" /></Link>
                    <h1>{i18n.t('login.title')}</h1>

                    <label>{i18n.t('login.name')}</label>
                    <input type="text" value={nome} onChange={a => setNome(a.target.value)} />

                    <label>{i18n.t('login.password')}</label>
                    <input type="password" placeholder="********" onKeyUp={enter} value={senha} onChange={a => setSenha(a.target.value)} />

                    <div className='botao' onClick={entrar}>{i18n.t('login.button')}</div>
                </div>

                <div className='bloco2'>
                    <img src="assets/images/logo-tcc.png" />
                </div>
            </section>
        </div>
    )
}