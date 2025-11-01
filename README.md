# projeto-web-ong
# 🚀 Projeto Web Dinâmico (Atividade de Entrega 3)

Este projeto é a terceira entrega para a disciplina de [Nome da sua Disciplina], do curso de [Nome do seu Curso] da [Nome da sua Universidade]. O foco desta atividade foi transformar uma interface estática em uma aplicação web dinâmica e interativa utilizando JavaScript avançado.

**Status do Projeto:** 🏁 Concluído

---

## 🔧 Especificações Técnicas Implementadas

Este projeto cumpre 100% das especificações técnicas e funcionais obrigatórias solicitadas:

### 1. Código JavaScript Modular
* **Estrutura Organizada:** O projeto segue a estrutura de pastas recomendada:
    * `/css` para folhas de estilo.
    * `/img` para imagens.
    * `/js` para os arquivos JavaScript.
    * `index.html` como arquivo raiz.
* **Código Modularizado:** Todo o código JavaScript está separado por funcionalidade, utilizando **Módulos ES6** (`import`/`export`):
    * `main.js`: Ponto de entrada da aplicação, responsável por "ligar" os eventos.
    * `router.js`: Gerencia o sistema de SPA.
    * `templates.js`: Armazena os templates HTML de cada página.
    * `validation.js`: Contém toda a lógica de validação do formulário.

### 2. Manipulação do DOM
* **Single Page Application (SPA) Básica:** Foi implementado um sistema de SPA que monitora a "hash" da URL (`window.location.hash`). O conteúdo da página é carregado dinamicamente no elemento `<main id="app-root">` sem a necessidade de recarregar a página.
* **Sistema de Templates JavaScript:** As "páginas" (`home`, `sobre`, `contato`) são construídas usando *Template Literals* do JavaScript, armazenadas no módulo `templates.js` e injetadas no DOM conforme a rota acessada.

### 3. Funcionalidades Específicas
* **Verificação de Formulários:** A página de contato (`#contato`) possui um formulário com um sistema de verificação de consistência de dados implementado em JavaScript.
* **Aviso ao Usuário:** O script `validation.js` previne o envio do formulário caso os dados estejam incorretos (campos vazios, e-mail inválido, etc.) e exibe mensagens de erro claras e específicas para o usuário abaixo de cada campo correspondente.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** (Estrutura semântica)
* **CSS3** (Estilização básica)
* **JavaScript (ES6+)**
    * Módulos (`import`/`export`)
    * Manipulação do DOM (`getElementById`, `addEventListener`)
    * Template Literals
    * Eventos (`hashchange`, `load`, `submit`)

---

## 🏃‍♂️ Como Executar o Projeto

Como este é um projeto de front-end puro, não há necessidade de instalação de dependências.

1.  **Clone este repositório:**
    ```bash
    git clone https://github.com/VitinhoBrum/projeto-web-ong/tree/c8ba2c7a19d3068a1ecb92aad1e6b141ea094b38
    ```
2.  **Acesse a pasta do projeto:**
    ```bash
    cd [projeto-web-ong]
    ```
3.  **Abra o arquivo `index.html`:**
    * Clique duas vezes no arquivo `index.html` no seu explorador de arquivos, ou
    * (Recomendado) Use um servidor local simples, como a extensão "Live Server" do VS Code.

---

## 👨‍💻 Autor

* **Nome:** Vitor Brum Ramos
