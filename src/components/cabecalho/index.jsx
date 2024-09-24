import './index.scss';

export default function Cabecalho() {
    return (
        <div className="comps-cabecalho">

            <div class="logo">
                <img src="/assets/images/logo-tcc.png" alt="" height="80px" />
            </div>

            <div class="item">
                <a href="">Início</a>
            </div>
            <div class="item">
                <a href="">Sobre Mim</a>
            </div>
            <div class="item">
                <a href="">Projetos</a>
            </div>

            <div class="item">
                <a href="">Dicas</a>
            </div>

            <div class="item">
                <a href="">Entrar</a>
            </div>
            <div class="item">
                <img src="/assets/images/person-icon.png" alt="" height="50px" />   
            </div>
        </div>
    )
}