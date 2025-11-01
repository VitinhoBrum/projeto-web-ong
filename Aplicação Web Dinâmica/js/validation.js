// Função para exibir mensagens de erro
function showError(fieldId, message) {
    const errorElement = document.getElementById(`error-${fieldId}`);
    errorElement.textContent = message;
    errorElement.style.color = 'red'; // Apenas para visualização
}

// Função para limpar erros
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(el => el.textContent = '');
}

// Função principal que "liga" a validação ao formulário
export function initFormValidation() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            // 1. Previne o envio padrão do formulário
            event.preventDefault();
            
            // 2. Limpa erros antigos
            clearErrors();
            let isValid = true;

            // 3. Pega os valores dos campos
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            // 4. [REQUISITO] Verificação de consistência
            if (nome === '') {
                showError('nome', 'O campo "Nome" é obrigatório.');
                isValid = false;
            }

            if (email === '') {
                showError('email', 'O campo "Email" é obrigatório.');
                isValid = false;
            } else if (!email.includes('@') || !email.includes('.')) {
                // Verificação simples de e-mail
                showError('email', 'Por favor, insira um email válido.');
                isValid = false;
            }

            if (mensagem.length < 10) {
                showError('mensagem', 'A mensagem deve ter pelo menos 10 caracteres.');
                isValid = false;
            }

            // 5. Se tudo for válido...
            if (isValid) {
                const successMessage = document.getElementById('success-message');
                successMessage.textContent = 'Formulário enviado com sucesso!';
                successMessage.style.color = 'green';
                
                // Limpa o formulário (simulando envio)
                form.reset(); 
            }
        });
    }
}