import './index.scss';
import { useState,  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Login (){
    const [nome, setNome] =  useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    async function entrar() {
        const paramCorpo = {
            "nome": nome, 
            "senha": senha
        }

        const url = `http://localhost:5010/adm/entrar`
        let resp = await axios.post(url, paramCorpo)
        alert(resp.data)
    }


    return (
        <div className='pagina-login'>

        <img className='fundo' src="/assets/images/image-login.png" alt=""/>            
            <section className='login'>
                <section className='espaço-seta'>
                    <img className='seta' src="/assets/images/seta-login.png" alt=""/>
                </section>

                <h2 className='titulo'>Seja muito Bem-Vindo(a)!</h2>

                <section className='inputs'>
                    <section className='input1'>
                        <p>Nome:</p>
                        <input className='nome' type="text" value={nome} onChange={a => setNome(a.target.valueAsDate)}/>
                    </section>

                    <section className='input2'>
                        <p>Senha:</p>
                        <input className='senha' type="password" value={senha} onChange={a => setSenha(a.target.value)}/>
                    </section>
                </section>
                
                <button className='entrar' onClick={entrar}>Entrar</button>
            </section>
        </div>
    )
}
