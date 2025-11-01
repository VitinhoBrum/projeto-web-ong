// Importa os templates que criamos
import { homeTemplate, sobreTemplate, contatoTemplate } from './templates.js';
// Importa a função de validação (que criaremos a seguir)
import { initFormValidation } from './validation.js';

// Define as "rotas" e qual template elas usam
const routes = {
    '#home': homeTemplate,
    '#sobre': sobreTemplate,
    '#contato': contatoTemplate,
};

// Função principal do roteador
export function router() {
    // Pega o elemento 'pai' onde o conteúdo será renderizado
    const appRoot = document.getElementById('app-root');
    
    // Pega o "hash" da URL (ex: #home, #contato)
    // Se não houver hash, define como #home (página inicial)
    let path = window.location.hash || '#home';

    // Busca o template correspondente à rota
    const template = routes[path];

    // Se a rota existir, injeta o HMTL dela no app-root
    if (template) {
        appRoot.innerHTML = template;

        // [REQUISITO OBRIGATÓRIO]
        // Se a rota for #contato, precisamos "ligar" a validação do formulário
        if (path === '#contato') {
            initFormValidation();
        }
    } else {
        // Se a rota não existir, mostra uma página de "Não encontrado"
        appRoot.innerHTML = '<h1>404 - Página Não Encontrada</h1>';
    }
}