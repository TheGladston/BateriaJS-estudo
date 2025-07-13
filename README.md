# BateriaJS

BateriaJS é uma pequena aplicação web que simula uma bateria eletronica utilizando apenas HTML, CSS e JavaScript.

Este repositório é resultado de estudos e demonstração de como manipular áudio e eventos de teclado em um browser.

## Requisitos

- Um navegador moderno (Chrome, Firefox, Edge, etc.) com suporte a ES6.

## Executando

1. Clone ou faça download deste repositório.
2. Abra o arquivo `index.html` no navegador de sua preferência.
3. Pressione as teclas indicadas na tela ou digite uma sequência de letras no campo de composição para reproduzir um ritmo.

Não é necessário servidor ou dependências adicionais.

## Estrutura do projeto

- `index.html` – marcação principal da página e referência aos arquivos de estilo e script.
- `style.css` – estilização dos elementos da interface.
- `script.js` – lógica de controle da bateria e da composição de sons.
- `sounds/` – arquivos `.wav` utilizados pela aplicação.

## Personalização

Para adicionar novos sons, coloque os arquivos `.wav` em `sounds/` e crie os elementos `<audio>` correspondentes no `index.html`. Atualize o script se desejar mapear novas teclas.

## Licença

Distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.
