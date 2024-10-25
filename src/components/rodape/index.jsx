import './index.scss';

export default function Rodape() {


    return (
        <div className='comp-rodape'>

            <div className="pages">

                <div className='Espaço-Logo'>
                    <img src="/assets/images/logo-tcc.png" alt="Logo da Empresa" height={210} width={218} />
                </div>

                <div className="Paginas">
                    <h1 className='Titulo1'>Páginas</h1>
                    
                    <div className='Links'>
                        <a className='Link1' href=""> Início </a>
                        <a className='Link2' href=""> Sobre Mim </a>
                        <a className='Link3' href=""> Dicas </a>
                        <a className='Link4' href=""> Projetos </a>
                    </div>
                </div>
            </div>

            <div className='Espaço-Linha'>
                <div className="Linha-Branca"></div>
            </div>

            <div className="Icones-Contato">
                <img className='icon-instagram' src="/assets/images/instagram.png" alt="Logo da Empresa" height={48} width={49.23} />
                <img className='icon-whatsapp' src="/assets/images/whatsapp.png" alt="Logo da Empresa" height={48} width={49.23} />
                <img className='icon-email' src="/assets/images/email.png" alt="Logo da Empresa" height={48} width={49.23} />
            </div>
        </div>
    )
}