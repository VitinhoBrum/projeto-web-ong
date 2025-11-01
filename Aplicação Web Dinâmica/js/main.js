// Importa o roteador
import { router } from './router.js';

// 1. Ouve o evento 'hashchange' (quando o usuário clica em <a href="#contato">)
window.addEventListener('hashchange', router);

// 2. Ouve o evento 'load' (quando a página carrega pela primeira vez)
window.addEventListener('load', router);