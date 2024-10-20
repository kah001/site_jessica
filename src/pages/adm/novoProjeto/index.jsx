import './index.scss'
import { useState } from 'react'

export default function NovoProjeto() {
    const [nomeProjeto, setNomeProjeto] = useState('')
    const [nomeCliente, setNomeCliente] = useState('')
    const [contatoCliente, setContatoCliente] = useState('')
    const [dataInicio, setDataInicio] = useState('')
    const [tipoProjeto, setTipoProjeto] = useState('')
    const [descricao, setDescricao] = useState('')
    const [tarefa, setTarefa] = useState('')
    const [valorTotalEstimado, setValorTotalEstimado] = useState('')
    const [formaPagamento, setFormaPagamento] = useState('')

    function inserirProjeto() {

        setNomeProjeto('')
        setNomeCliente('')
        setContatoCliente('')
        setDataInicio('')
        setTipoProjeto('')
        setDescricao('')
    }

    function inserirTarefa() {

        setTarefa('')
    }

    return (
        <div className='pagina-novo-projeto'>
            <h1>Inserir um Novo Projeto</h1>

            <label>NOME DO PROJETO:</label>
            <input type="text" value={nomeProjeto} onChange={a => setNomeProjeto(a.target.value)}/>

            <label>NOME DO CLIENTE:</label>
            <input type="text" value={nomeCliente} onChange={a => setNomeCliente(a.target.value)}/>

            <label>CONTATO CLIENTE:</label>
            <input type="text" value={contatoCliente} onChange={a => setContatoCliente(a.target.value)} />

            <label>DATA DE INÍCIO:</label>
            <input type="date" value={dataInicio} onChange={a => setDataInicio(a.target.value)} />

            <label>TIPO DO PROJETO:</label>
            <input type="text" value={tipoProjeto} onChange={a => setTipoProjeto(a.target.value)} />
        
            <label>DESCRIÇÃO DO PROJETO:</label>
            <textarea value={descricao} onChange={a => setDescricao(a.target.value)}></textarea>


            <h1>TAREFAS</h1>
            <hr />

            <label>INSIRA UMA TAREFA:</label>
            <input type="text" value={tarefa} onChange={a => setTarefa(a.target.value)} />

            <div className='botao' onClick={inserirTarefa}>INSERIR</div>


            <h1>PAGAMENTO</h1>
            <hr />

            <label>VALOR TOTAL OU ESTIMADO:</label>
            <input type="text" value={valorTotalEstimado} onChange={a => setValorTotalEstimado(a.target.value)}/>

            <label>FORMA DE PAGAMENTO:</label>
            <input type="text" value={formaPagamento} onChange={a => setFormaPagamento(a.target.value)} />

            <div className='botao' onClick={inserirProjeto}>INSERIR NOVO PROJETO</div>
        </div>
    )
}