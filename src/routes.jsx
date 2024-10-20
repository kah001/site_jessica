import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/usuario/home/";
import Login from "./pages/adm/login";
import Projetos from "./pages/usuario/projetos";
import ProjetosAdm from "./pages/adm/projetos";

export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/projetos" element={<Projetos />}/>
                <Route path="/projetos/adm" element={<ProjetosAdm />}/>
            </Routes>
        </BrowserRouter>
    )
}