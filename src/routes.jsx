import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/usuario/home";
import Login from "./pages/adm/login";
import Dicas from "./pages/usuario/dicas";
import Projetos from "./pages/usuario/projetos";

import ProjetosAdm from "./pages/adm/projetos";
import AlteracoesAdm from "./pages/adm/alteracoes";

import NaoEncontrado from "./pages/usuario/naoEncontrado";

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dicas" element={<Dicas />} />
                <Route path="/login" element={<Login />} />
                <Route path="/projetos" element={<Projetos />} />

                <Route path="/adm/alteracoes" element={<AlteracoesAdm />} />
                <Route path="/adm/projetos" element={<ProjetosAdm />} />

                <Route path="*" element={<NaoEncontrado />}/>
            </Routes>
        </BrowserRouter>
    )
}