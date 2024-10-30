import './index.scss'
import CabecalhoAdm from '../../../components/cabecalhoAdm'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function NovoProjeto() {
    const [nomeProjeto, setNomeProjeto] = useState('')
    const [nomeCliente, setNomeCliente] = useState('')
    const [contatoCliente, setContatoCliente] = useState('')
    const [dataInicio, setDataInicio] = useState('')
    const [tipoProjeto, setTipoProjeto] = useState('')
    const [descricao, setDescricao] = useState('')
    const [tarefa, setTarefa] = useState('')
    const [valorTotalEstimado, setValorTotalEstimado] = useState('')
    const [valorPago, setValorPago] = useState('')
    const [formaPagamento, setFormaPagamento] = useState('')
    const [token, setToken] = useState(null)
    const [erroProjeto, setErroProjeto] = useState('')
    const [erroTarefa, setErroTarefa] = useState('')

    const navigate = useNavigate()

    async function inserirProjeto() {
        if (nomeProjeto !== '' && nomeCliente !== '' && contatoCliente !== '' && dataInicio !== '' && tipoProjeto !== '' && descricao !== '' && valorTotalEstimado !== '' && valorPago !== '' && formaPagamento !== '') {
            const paramCorpo = {
                "nome": nomeProjeto,
                "cliente": nomeCliente,
                "contato": contatoCliente,
                "inicio": dataInicio,
                "tipo": tipoProjeto,
                "descricao": descricao,
                "valor": valorTotalEstimado,
                "pago": valorPago,
                "pagamento": formaPagamento
            }

            const url = `http://localhost:5010/projeto?x-access-token=${token}`
            await axios.post(url, paramCorpo)

            setNomeProjeto('')
            setNomeCliente('')
            setContatoCliente('')
            setDataInicio('')
            setTipoProjeto('')
            setDescricao('')
            setValorTotalEstimado('')
            setFormaPagamento('')
        } else {
            let mensagem = '*Preencha os campos solicitados'
            setErroProjeto(mensagem)
        }
    }

    async function inserirTarefa() {
        if (tarefa != '') {
            const url = `http://localhost:5010/tarefa`
            await axios.post(url, tarefa)

            setTarefa('')
        } else {
            let mensagem = '*Insira as informações solicitadas'
            setErroTarefa(mensagem)
        }
    }

    useEffect(() => {
        let usu = localStorage.getItem('USUARIO')
        setToken(usu)

        if (!usu) {
            navigate('/')
        }
    }, [navigate])

    return (
        <div className='pagina-novo-projeto'>
            <CabecalhoAdm />

            <h1 className='titulo'>Inserir um Novo Projeto</h1>

            <div className='info'>

                <div className='item'>
                    <label>NOME DO PROJETO:</label>
                    <input type="text" value={nomeProjeto} onChange={a => setNomeProjeto(a.target.value)} />
                </div>

                <div className='item'>
                    <label>NOME DO CLIENTE:</label>
                    <input type="text" value={nomeCliente} onChange={a => setNomeCliente(a.target.value)} />
                </div>

                <div className='item'>
                    <label>CONTATO CLIENTE:</label>
                    <input type="text" value={contatoCliente} onChange={a => setContatoCliente(a.target.value)} />
                </div>

                <div className='item'>
                    <label>DATA DE INÍCIO:</label>
                    <input type="date" value={dataInicio} onChange={a => setDataInicio(a.target.value)} />
                </div>

                <div className='item'>
                    <label>TIPO DO PROJETO:</label>
                    <input type="text" value={tipoProjeto} onChange={a => setTipoProjeto(a.target.value)} />
                </div>

                <div className='item'>
                    <label>DESCRIÇÃO DO PROJETO:</label>
                    <textarea value={descricao} onChange={a => setDescricao(a.target.value)}></textarea>
                </div>
            </div>

            <div className='tarefas'>
                <div className='tarefa'>
                    <h1>TAREFAS</h1>
                    <hr />
                </div>

                <div className='tarefa'>
                    <label>INSIRA UMA TAREFA:</label>
                    <input type="text" value={tarefa} onChange={a => setTarefa(a.target.value)} />
                </div>

                <div className='botao' onClick={inserirTarefa}>INSERIR</div>
            </div>

            <div className='pagamentos'>
                <div className='pagamento'>
                    <h1>PAGAMENTO</h1>
                    <hr />
                </div>

                <div className='pagamento'>
                    <label>VALOR TOTAL OU ESTIMADO:</label>
                    <input type="text" value={valorTotalEstimado} onChange={a => setValorTotalEstimado(a.target.value)} />
                </div>

                <div className='pagamento'>
                    <label>VALOR PAGO:</label>
                    <input type="text" value={valorPago} onChange={a => setValorPago(a.target.value)} />
                </div>

                <div className='pagamento'>
                    <label>FORMA DE PAGAMENTO:</label>
                    <input type="text" value={formaPagamento} onChange={a => setFormaPagamento(a.target.value)} />
                </div>

                <div className='botao' onClick={inserirProjeto}>INSERIR NOVO PROJETO</div>
            </div>
        </div>
    )
}