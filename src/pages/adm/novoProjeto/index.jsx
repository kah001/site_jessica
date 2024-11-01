import './index.scss'
import CabecalhoAdm from '../../../components/cabecalhoAdm'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function NovoProjeto() {
    const [token, setToken] = useState(null)
    
    const [nomeProjeto, setNomeProjeto] = useState('')
    const [nomeCliente, setNomeCliente] = useState('')
    const [contatoCliente, setContatoCliente] = useState('')
    const [dataInicio, setDataInicio] = useState('')
    const [tipoProjeto, setTipoProjeto] = useState('')
    const [descricao, setDescricao] = useState('')
    
    const [descricaoTarefa, setDescricaoTarefa] = useState('')
    const [idProjeto, setIdProjeto] = useState(0)
    
    const [valorTotalEstimado, setValorTotalEstimado] = useState('')
    const [valorPago, setValorPago] = useState('')
    const [formaPagamento, setFormaPagamento] = useState('')

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

            const url = `http://4.172.207.208:5030/projeto?x-access-token=${token}`
            let resp = await axios.post(url, paramCorpo)

            setNomeProjeto('')
            setNomeCliente('')
            setContatoCliente('')
            setDataInicio('')
            setTipoProjeto('')
            setDescricao('')
            setValorTotalEstimado('')
            setValorPago('')
            setFormaPagamento('')
            alert(`Novo Projeto adcionado. Id: ${resp.data.novoId}`)
        } else {
            let mensagem = 'Preencha os campos solicitados'
            alert(mensagem)
        }
    }

    async function inserirTarefa() {
        if (descricaoTarefa !== '' && idProjeto !== '') {
            let tarefa = {
                descricao: descricaoTarefa,
                projeto: idProjeto
            }
            const url = `http://4.172.207.208:5030/tarefa?x-access-token=${token}`
            let resp = await axios.post(url, tarefa)

            setDescricaoTarefa('')
            setIdProjeto('')
            alert(`Nova Tarefa adcionada. Id: ${resp.data.novoId}`)
        } else {
            let mensagem = 'Preencha os campos solicitados'
            alert(mensagem)
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

                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>

                    <div className='item'>
                        <label>NOME DO PROJETO:</label>
                        <input type="text" placeholder='Projeto 01, 02...' value={nomeProjeto} onChange={a => setNomeProjeto(a.target.value)} />
                    </div>

                    <div className='item'>
                        <label>NOME DO CLIENTE:</label>
                        <input type="text" placeholder='Fulano...' value={nomeCliente} onChange={a => setNomeCliente(a.target.value)} />
                    </div>

                    <div className='item'>
                        <label>CONTATO CLIENTE:</label>
                        <input type="text" placeholder='+12 (34) 56789...' value={contatoCliente} onChange={a => setContatoCliente(a.target.value)} />
                    </div>

                    <div className='item'>
                        <label>DATA DE INÍCIO:</label>
                        <input type="date" value={dataInicio} onChange={a => setDataInicio(a.target.value)} />
                    </div>

                    <div className='item'>
                        <label>TIPO DO PROJETO:</label>
                        <input type="text" placeholder='Casa, Apartamento...' value={tipoProjeto} onChange={a => setTipoProjeto(a.target.value)} />
                    </div>

                    <div className='item'>
                        <label>DESCRIÇÃO DO PROJETO:</label>
                        <textarea value={descricao} placeholder='Um pouco sobre o projeto...' onChange={a => setDescricao(a.target.value)}></textarea>
                    </div>
                </div>
            </div>

            <div className='tarefas'>
                <div className='tarefa'>
                    <h1>TAREFAS</h1>
                </div>
                <div style={{
                    border: '1px solid #000',
                    width: '80%'
                }}>
                </div>

                <div className='tarefa'>
                    <label>DESCRIÇÃO DA TAREFA:</label>
                    <input type="text" placeholder='Terminar de escrev...' value={descricaoTarefa} onChange={a => setDescricaoTarefa(a.target.value)} />

                    <label>ID DO PROJETO:</label>
                    <input type="text" placeholder='0, 1...' value={idProjeto} onChange={a => setIdProjeto(a.target.value)} />
                </div>

                <div className='botao' onClick={inserirTarefa}>INSERIR TAREFA</div>
            </div>

            <div className='pagamentos'>
                <div className='pagamento'>
                    <h1>PAGAMENTO</h1>
                </div>
                <div style={{
                    border: '1px solid #000',
                    width: '80%',
                    margin: '20px'
                }}>
                </div>

                <div>
                    <div className='pagamento'>
                        <label>VALOR TOTAL OU ESTIMADO:</label>
                        <input type="text" placeholder='R$ 1.000,00...' value={valorTotalEstimado} onChange={a => setValorTotalEstimado(a.target.value)} />
                    </div>

                    <div className='pagamento'>
                        <label>VALOR PAGO:</label>
                        <input type="text" placeholder='R$ 700,00...' value={valorPago} onChange={a => setValorPago(a.target.value)} />
                    </div>

                    <div className='pagamento'>
                        <label>FORMA DE PAGAMENTO:</label>
                        <input type="text" placeholder='Débito, Crédito...' value={formaPagamento} onChange={a => setFormaPagamento(a.target.value)} />
                    </div>
                </div>

                <div className='botao' onClick={inserirProjeto}>INSERIR NOVO PROJETO</div>
            </div>
        </div>
    )
}