// js/templates.js

// Este módulo exporta os templates HTML como strings

// Template da Página Inicial
export const homeTemplate = `
    <h1>Página Inicial</h1>
    <p>Bem-vindo ao nosso site. Esta é uma Single Page Application.</p>
    
    <img src="img/home-banner.jpg" alt="Ilustração de um globo digital de tecnologia" width="500">
`;

// Template da Página Sobre
export const sobreTemplate = `
    <h1>Sobre Nós</h1>
    <p>Somos uma organização dedicada a...</p>
    
    <img src="img/sobre-equipe.jpg" alt="Equipe colaborando em um projeto" width="500">
`;

// Template da Página de Contato (com o formulário)
export const contatoTemplate = `
    <h1>Formulário de Contato</h1>
    
    <img src="img/contato-icone.jpg" alt="Ícone de contato e mensagem" width="300">
    
    <p>Por favor, preencha o formulário abaixo.</p>
    
    <form id="contact-form">
        <div>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome">
            <span class="error-message" id="error-nome"></span>
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email">
            <span class="error-message" id="error-email"></span>
        </div>
        <div>
            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem"></textarea>
            <span class="error-message" id="error-mensagem"></span>
        </div>
        
        <button type="submit">Enviar</button>
        
        <div id="success-message"></div>
    </form>
`;