const messages = {
    pt: {
        translations: { //configurado como defaultNS no i18n, ele vai ser utilizado para armazenar as mensagens
            headerBrown: {
                page1: 'Início',
                page2: 'Sobre Mim',
                page3: 'Projetos',
                page4: 'Dicas'
            },
            home: {
                slogan1: 'Desenhando o futuro, construindo o presente',
                slogan2: 'Do conceito ao concreto, fazemos acontecer',
                slogan3: 'Cada detalhe conta na criação de um ambiente único',
                button: 'Ver Projetos',
                techTitle: 'Tecnologia',
                techText: 'Grande uso da tecnologia durante o desenvolvimento dos projetos, você poderá fazer um tour pela sua casa antes mesmo dela estar pronta',
                priceTitle: 'Preços',
                priceText: 'Acesso a todos os preços, desde o início até o fim do projeto, também durante o desenvolvimento do mesmo',
                projectTitle: 'Projeto',
                projectText: 'O projeto de arquitetura é feito para você, cada detalhe escolhido por nossos clientes é essencial',
                software: 'Softwares Utilizados',
                formTitle: 'FORMULÁRIO DE CONTATO',
                formName: 'Insira seu nome',
                formEmail: 'Insira seu email',
                formPhoneNumber: 'Insira seu telefone',
                formCountry: 'Selecione o seu país',
                option1: 'Brasil',
                option2: 'Estados Unidos',
                option3: 'Irlanda do Norte',
                option4: 'Irlanda do Sul',
                formMessage: 'Insira sua mensagem',
                formButton: 'ENVIAR',
                formError: '*Preencha o formulário de contato com as informações solicitadas'
            },
            about: {
                subtitle: 'ARQUITETA',
                paragraph1: 'Jéssica tem atualmente 31 anos, é casada com Fernando há 8 anos, ambos são cristãos e tem a fé como ponto principal em suas vidas.',
                paragraph2: 'Ela se formou em Arquitetura e Urbanismo em setembro de 2018, durante o curso e após a conclusão, trabalhou em três prestigiados escritórios de Sorocaba, onde aprendeu desde como iniciar o atendimento ao cliente até os detalhes de documentação para a prefeitura.',
                paragraph3: 'Com todo o aprendizado nesses escritórios, ela foi criando seu próprio jeito de desenvolver seus projetos e atender seus clientes.',
                slogan: 'ARQUITETURA QUE VIAJA: INSPIRADA POR CULTURAS E CRIADA PARA O MUNDO'
            },
            projects: {
                title1: 'CONSTRUÇÃO',
                title2: 'INTERIORES',
                title3: 'PROJETO EM ANDAMENTO',
                type: 'TIPO:',
                locale: 'LOCAL:',
                message: 'Nenhum projeto em andamento no momento'
            },
            advices: {
                title1: 'PONTOS IMPORTANTES NA HORA DE ESCOLHER UM TERRENO',
                title2: 'Veja abaixo dicas que podem te ajudar',
                paragraph1: 'Escolher um terreno para construir não é uma tarefa tão simples como talvez possa parecer.',
                paragraph2: 'Alguns pontos são mais óbvios, como a localização, se existe comércios ou escolas por perto, se o local tem fácil acesso, se é uma região segura.',
                paragraph3: 'Mas existem outros pontos de extrema importância que muitas vezes o cliente não tem o conhecimento técnico para avaliar. Vou dar alguns exemplos a seguir:',
                topic1: 'Estrutura da casa',
                text1: 'Se você quer fazer uma casa aproveitando um nível inferior você precisa de um terreno em declive, se você quer uma casa mais elevada, daquelas onde a garagem está no nível acima, você precisa de um terreno em aclive.',
                text2: 'Mas se você quer uma casa térrea, inteira no nível da rua e comprar um terreno em aclive ou declive, você terá um gasto muito alto e desnecessário com a retirada ou colocação da terra, com muros de arrimo, com muita estrutura extra que não seria necessária se fosse comprado um terreno adequado para o projeto desejado.',
                topic2: 'Posição do sol',
                text3: 'Verificar a posição do sol com relação ao terreno também é um ponto importante para ser observado na escolha do terreno. Dependendo da posição do terreno, a relação da casa com o sol pode ser muito diferente. Caso você queira fazer uma piscina nos fundos, por exemplo, comprar um terreno onde praticamente nunca se tem o sol no quintal, pode ser um grande problema',
                topic3: 'Localidade',
                text4: 'Ainda falando sobre estrutura, é importante ver se não existe alguma nascente, rio ou corrego próximo ao terreno, pois a presença de águas nas proximidades pode impactar completamente na dureza do solo. Quanto menos resistente ao solo, mais será necessário gastar com a estrutura da fundação, que em geral já é o momento em que boa parte do orçamento é gasto. Uma dica útil é conversar com vizinhos que já tenham construído para saber como foi sobre a dureza do solo, ou saber se até mesmo algum deles pagou para fazer o estudo de solo.',
                phrase: 'Para todos essas questões, é importante ter o auxílio de um profissional. Então antes mesmo de fechar a compra do terreno, já é o momento onde o relacionamento com o arquiteto se faz necessário iniciar'
            },
            login: {
                title: 'Bem-vinda!',
                name: 'NOME:',
                password: 'SENHA',
                button: 'ENTRAR'
            },
            footer: {
                title1: 'Páginas',
                page1: 'Início',
                page2: 'Sobre Mim',
                page3: 'Projetos',
                page4: 'Dicas',
                title2: 'Política',
                policy: 'Privacidade',
                language1: 'Português (Brasil)',
                language2: 'Inglês'
            },
            policy: {
                title: 'POLÍTICA DE PRIVACIDADE',
                title1: 'Bem-vindo!',
                text1: 'Aqui você terá acesso à política de privacidade dessa plataforma, tendo informações de quais informações suas são coletadas, como e para que fim as utilizamos e também como as suas informações são protegias com segurança. É importante que você leia esta política, para saber como os seus dados são utilizados e como eles são protegidos.',
                title2: 'Informações que são coletadas',
                text2: 'As únicas informações que são coletadas, são as informações fornecidas por você durante o preenchimento do formulário de contato, onde você nos informa seu nome, email, número de telefone, país em que mora e insere a sua mensagem.',
                title3: 'Como suas informações são utilizadas',
                text3: 'Todas essas informações que foram coletadas são utilizadas pela profissional a fim de oferecer um serviço personalizado aos seus clientes. Ou seja, todas as informações fornecidas por você são armazenadas e utilizadas a fim de te oferecer o melhor atendimento possível.',
                title4: 'Como suas informações são protegidas',
                text4: 'Utilizamos algumas medidas para ajudar a proteger as suas informações. Todas as uas informações são armazenadas, e utilizamos criptografia, para protegê-las, para que apenas a profissional tenha acesso a elas, a fim de prestar um serviço mais personalizado aos seus clientes. Ou seja, é imposto um controle de acesso administrativo, para limitar quem terá acesso e quem não terá acesso às suas informações.'
            }
        }
    }
}

export { messages }