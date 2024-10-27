import './index.scss'
import Cabecalho from '../../../components/cabecalho-marrom';
import Rodape from '../../../components/rodape';

export default function SobreMim() {
    return (
        <div className='pagina-sobre-mim'>
            <Cabecalho/>
            <div className='sobreMim'>
                <section className='biografia'>
                    <h3 className='sub-titulo'> ARQUITETA </h3>
                    <h1 className='titulo'> JÉSSICA LIMA </h1>

                    <p className='p1'>
                        Jéssica tem atualmente 31 anos, é casada com Fernando há 8 anos, ambos são cristãos e tem a fé como ponto principal em suas vidas.
                    </p>

                    <p className='p2'>
                        Ela se formou em Arquitetura e Urbanismo em setembro de 2018, durante o curso e após a conclusão trabalhou em três prestigiados escritórios de Sorocaba, onde aprendeu desde como iniciar o atendimento ao cliente até os detalhes de documentação para prefeitura.
                    </p>

                    <p className='p3'>
                        Com todo o aprendizado nesses escritórios, ela foi criando seu próprio jeito de desenvolver seus projetos e atender seus clientes. 
                    </p>
                </section>

                <section className='imageJessica'>
                    <img className='Jessica' src="assets/images/Foto-JessicaLima.jpg" alt="Imagem da Jessica Lima" />
                </section>
            </div>

            <div className='textos'>
                <section className='texto1'>
                    <p>Ao longo desses anos, já desenvolveu diversos projetos residenciais de construção, projetos residenciais de interiores, projetos de lojas para shoppings, legalização e muito mais. Com projetos em Sorocaba, São Paulo e Dublin na Irlanda. </p>
                </section>

                <section className='texto2'>
                    <p>Atualmente Jéssica está morando na Irlanda para aperfeiçoar o inglês, viver novas experiências e conhecer a bela arquitetura europeia.</p>
                </section>
            </div>

            <div className='mapaFrase'>
                <img className='mapa' src="assets/images/MapaSobreMim.jpeg" alt="Mapa Mundi" />

                <section className='frase'>
                    <h1>Arquitetura que viaja: inspirada por culturas e criada para o mundo.</h1>
                </section>
            </div>
            <Rodape/>
        </div>
    )
}