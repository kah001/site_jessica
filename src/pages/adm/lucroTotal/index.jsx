import './index.scss'
import CabecalhoAdm from '../../../components/cabecalhoAdm'
import { Chart } from "react-google-charts";

export default function LucroTotal() {

    const data = [
        ["Mês", "Lucro"],
        ["Janeiro", 33],
        ["Fevereiro", 45],
        ["Março", 28],
        ["Abril", 88],
        ["Maio", 50],
        ["Junho", 27]
    ];

    const options = {
        title: "Lucro dos projetos Arquitetônicos por Mês (1° Semestre 2024)",
        hAxis: { title: "Mês" },
        vAxis: { title: "Porcentagem" },
        colors: ["#44392d"],
    }

    const data2 = [
        ["Mês", "Lucro"],
        ["Julho", 64],
        ["Agosto", 35],
        ["Setembro", 38],
        ["Outubro", 47],
        ["Novembro", 37],
        ["Dezembro", 0]
    ];

    const options2 = {
        title: "Lucro dos projetos Arquitetônicos por Mês (2° Semestre 2024)",
        hAxis: { title: "Mês" },
        vAxis: { title: "Porcentagem" },
        colors: ["#44392d"],
    }

    return (
        <div className='pagina-lucro-total'>
            <CabecalhoAdm />

            <Chart
                chartType="LineChart"
                data={data}
                options={options}
                width="100%"
                height="400px"
            />

            <Chart
                chartType="LineChart"
                data={data2}
                options={options2}
                width="100%"
                height="400px"
            />
        </div>
    )
}