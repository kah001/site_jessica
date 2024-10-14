import './index.scss';

export default function Rodape() {


    return (
        <div className='comps-rodape'>
            <div className="Links">
                <div className="Paginas">
                    <h1 className='Titulo1'>Páginas</h1>
                    <a className='Link' href=""> Início </a>
                    <a className='Link' href=""> Sobre Mim </a>
                    <a className='Link' href=""> Dicas </a>
                    <a className='Link' href=""> Projetos </a>
                </div>
                <div className="Minha-Conta">&nbsp;</div>
            </div>
            <div className='Espaço-Linha'>
                <div className="Linha-Branca">&nbsp;</div>
            </div>
            
            <div className="Icones-Contato">&nbsp;</div>
        </div>
    )
}