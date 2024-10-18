import './index.scss';


export default function Login (){



    return (
        <div className='pagina-login'>
            
            <section className='login'>
                <section className='espaço-seta'>
                    <img className='seta' src="/assets/images/seta-login.png" alt=""/>
                </section>
                <h2 className='titulo'>Seja muito Bem-Vindo(a)!</h2>
                <section className='inputs'>
                    <section className='input1'>
                        <p>Nome:</p>
                        <input className='nome' type="text" placeholder='nome de usuario'/>
                    </section>
                    <section className='input2'>
                        <p>Senha:</p>
                        <input className='senha' type="text" placeholder='senha'/>
                    </section>
                </section>
                <button className='entrar'>Entrar</button>
            </section>
        </div>
    )
}