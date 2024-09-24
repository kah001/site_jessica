import './index.scss';

export default function Cabecalho() {
    return (
        <div className="comps-cabecalho">

            <div class="logo">
                <img src="/assets/images/logo-tcc.png" alt="" height="80px" />
            </div>

            <div class="item">
                <a href="">Sobre Mim</a>
            </div>

            <div class="item">
                <a href="">Depoimentos</a>
            </div>

            <div class="item">
                <a href="">Dicas</a>
            </div>
            <div class="item">
                <img src="/assets/images/person_24dp_FILL0_wght400_GRAD0_opsz24 (1).png" alt="" height="50px" />
            </div>
        </div>
    )
}