import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/usuario/home/";
import Login from "./pages/adm/login";

export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    )
}