import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Navegacao from './routes';
import NovoProjeto from './pages/adm/novoProjeto';
import Login from './pages/adm/login';

//importações do swiper
import 'swiper/css' 
import 'swiper/css/navigation' //importando modulos das setas da navegacao
import 'swiper/css/pagination' //importando as bolinhas
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import 'swiper/swiper-bundle.css';


const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(
  <React.StrictMode>
    <Navegacao />
  </React.StrictMode>
);