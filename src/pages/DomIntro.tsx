import { PageContainer } from "@/components/layout/PageContainer";

export default function DomIntro() {
  return (
    <PageContainer
      title="Introdução ao DOM"
      subtitle="Document Object Model - a ponte entre JS e HTML"
      difficulty="iniciante"
      timeToRead="10 min"
    >
      <h2>O que é o DOM?</h2>
      <p>
        O DOM (Document Object Model) é uma representação em árvore do documento HTML.
        O JavaScript pode acessar, modificar, criar e deletar elementos através do DOM.
      </p>

      <h2>Árvore DOM</h2>
      <pre><code>{`<!DOCTYPE html>
<html>
  <head>
    <title>Título</title>
  </head>
  <body>
    <div id="app">
      <h1>Olá</h1>
      <p>Texto</p>
    </div>
  </body>
</html>

/* Estrutura em árvore:
document
  └─ html
      ├─ head
      │   └─ title
      └─ body
          └─ div#app
              ├─ h1
              └─ p
*/`}</code></pre>

      <h2>document Object</h2>
      <p>O objeto <code>document</code> é o ponto de entrada para o DOM:</p>
      <pre><code>{`// Propriedades básicas
document.title           // título da página
document.URL             // URL atual
document.domain          // domínio
document.contentType     // tipo de conteúdo

// Elementos especiais
document.documentElement  // <html>
document.head            // <head>
document.body            // <body>

// Forms, links, images
document.forms           // HTMLCollection de <form>
document.links           // HTMLCollection de <a href>
document.images          // HTMLCollection de <img>`}</code></pre>

      <h2>Tipo de Nós</h2>
      <pre><code>{`// Diferentes tipos de nós
const elemento = document.body;  // Element node (nodeType = 1)
const texto = elemento.firstChild;  // Text node (nodeType = 3)
const comentario = document.createComment("texto");  // Comment node (nodeType = 8)

// Verificar tipo
elemento.nodeType === Node.ELEMENT_NODE;  // true (valor 1)
elemento.nodeName;  // "BODY" (tag name em maiúsculo)

// Navegar na árvore
elemento.parentNode      // elemento pai
elemento.childNodes      // NodeList de filhos (inclui texto)
elemento.children        // HTMLCollection de elementos filhos
elemento.firstChild      // primeiro filho (pode ser texto)
elemento.firstElementChild  // primeiro elemento filho
elemento.lastElementChild   // último elemento filho`}</code></pre>

      <h2>Propriedades de Elementos</h2>
      <pre><code>{`const div = document.querySelector("div");

// Conteúdo
div.innerHTML           // conteúdo HTML (string)
div.outerHTML           // inclui a própria tag
div.textContent         // texto puro (sem tags)
div.innerText           // texto visível (respeita CSS)

// Atributos
div.id                  // valor do id
div.className           // classes como string
div.classList           // DOMTokenList de classes

// Atributos customizados
div.getAttribute("data-id");
div.setAttribute("data-id", "123");
div.removeAttribute("data-id");

// data-* attributes (automático)
div.dataset.id          // valor de data-id
div.dataset.userName    // valor de data-user-name (camelCase)`}</code></pre>

      <h2>Estilos</h2>
      <pre><code>{`const elemento = document.querySelector("#meu-elemento");

// Estilo inline (style property)
elemento.style.color = "red";
elemento.style.backgroundColor = "black";
elemento.style.fontSize = "16px";

// Ler estilo computado (do CSS)
const estilo = window.getComputedStyle(elemento);
console.log(estilo.color);           // "rgb(255, 0, 0)"
console.log(estilo.display);          // "block"
console.log(estilo.getPropertyValue("margin-top"));

// Classes (recomendado)
elemento.classList.add("ativo");
elemento.classList.remove("ativo");
elemento.classList.toggle("ativo");
elemento.classList.contains("ativo");  // true/false
elemento.classList.replace("ativo", "inativo");`}</code></pre>

      <h2>Tamanho e Posição</h2>
      <pre><code>{`const elemento = document.querySelector("#box");

// Dimensões (incluem padding, não border/margin)
elemento.clientWidth    // largura interna
elemento.clientHeight   // altura interna

// Com scroll
elemento.scrollWidth    // largura total (incluindo scroll)
elemento.scrollHeight   // altura total

// Posição
elemento.offsetLeft     // distância do elemento pai
elemento.offsetTop
elemento.offsetParent   // elemento pai posicionado

// Viewport vs Document
const rect = elemento.getBoundingClientRect();
console.log(rect.top, rect.left);    // posição relativa à viewport
console.log(rect.width, rect.height);  // dimensões incluindo border`}</code></pre>

      <h2>Criando Elementos</h2>
      <pre><code>{`// Criar elemento
const div = document.createElement("div");
div.id = "novo";
div.className = "box";
div.textContent = "Olá!";

// Adicionar ao DOM
document.body.appendChild(div);  // insere no final

// Inserir em posição específica
const pai = document.querySelector("#container");
pai.insertBefore(div, pai.firstChild);  // antes do elemento

// Posições modernas
element.insertAdjacentElement("beforebegin", novoElemento);
element.insertAdjacentElement("afterend", novoElemento);
element.insertAdjacentElement("afterbegin", novoElemento);
element.insertAdjacentElement("beforeend", novoElemento);

// HTML string
element.insertAdjacentHTML("beforeend", "<p>Novo</p>");

// Clonar
const clone = elemento.cloneNode(true);  // true = deep clone
document.body.appendChild(clone);`}</code></pre>

      <h2>Remover Elementos</h2>
      <pre><code>{`// Método moderno
elemento.remove();

// Método antigo
elemento.parentNode.removeChild(elemento);

// Remover todos os filhos
while (pai.firstChild) {
  pai.removeChild(pai.firstChild);
}

// Mais simples
pai.replaceChildren();  // remove todos os filhos`}</code></pre>
    </PageContainer>
  );
}
