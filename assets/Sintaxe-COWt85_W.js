import{j as e}from"./index-DBOU_NJv.js";import{P as s}from"./PageContainer-BDoc6Xey.js";import"./proxy-DdRZDCJc.js";function i(){return e.jsxs(s,{title:"Sintaxe Básica",subtitle:"Statements, expressões e comentários",difficulty:"iniciante",timeToRead:"8 min",children:[e.jsx("h2",{children:"O que é Sintaxe?"}),e.jsx("p",{children:"A sintaxe de uma linguagem de programação é o conjunto de regras que define como escrever código que o interpretador consegue entender. Em JavaScript, a sintaxe é inspirada em C e Java, mas com algumas diferenças importantes."}),e.jsx("h2",{children:"Statements (Instruções)"}),e.jsx("p",{children:"Um statement é uma instrução completa que o JavaScript executa. Cada statement geralmente termina com ponto e vírgula (opcional, mas recomendado):"}),e.jsx("pre",{children:e.jsx("code",{children:`// Exemplos de statements
let x = 5;              // declaração de variável
console.log(x);         // chamada de função
if (x > 0) {            // estrutura condicional
  console.log("positivo");
}`})}),e.jsx("h2",{children:"Expressões"}),e.jsx("p",{children:"Uma expressão é qualquer trecho de código que produz um valor. Expressões podem ser usadas dentro de statements:"}),e.jsx("pre",{children:e.jsx("code",{children:`// Exemplos de expressões
5 + 3                   // expressão aritmética = 8
"x" + "y"               // expressão de string = "xy"
Math.random()           // expressão de chamada = número aleatório
x > 0                   // expressão de comparação = true/false`})}),e.jsx("h2",{children:"Comentários"}),e.jsx("p",{children:"Comentários são ignorados pelo JavaScript. Use para documentar código:"}),e.jsx("pre",{children:e.jsx("code",{children:`// Comentário de uma linha

/*
  Comentário
  de múltiplas linhas
*/

/**
 * Comentário JSDoc
 * @param {string} nome - O nome do usuário
 * @returns {string} Saudação personalizada
 */
function saudar(nome) {
  return \`Olá, \${nome}!\`;
}`})}),e.jsx("h2",{children:"Case Sensitivity"}),e.jsxs("p",{children:["JavaScript é ",e.jsx("strong",{children:"case-sensitive"}),". Isso significa que ",e.jsx("code",{children:"minhaVar"}),","," ",e.jsx("code",{children:"MinhaVar"})," e ",e.jsx("code",{children:"MINHAVAR"})," são três variáveis diferentes:"]}),e.jsx("pre",{children:e.jsx("code",{children:`let nome = "João";
let Nome = "Maria";
let NOME = "Pedro";

console.log(nome);  // "João"
console.log(Nome);  // "Maria"
console.log(NOME);  // "Pedro"`})}),e.jsx("h2",{children:"Indentação"}),e.jsxs("p",{children:["A indentação não é obrigatória em JavaScript (diferente de Python), mas é"," ",e.jsx("strong",{children:"essencial para legibilidade"}),". Use 2 ou 4 espaços:"]}),e.jsx("pre",{children:e.jsx("code",{children:`// Sem indentação (funciona mas é feio)
function calcular(a,b) {
if(a>b) {
return a;
} else {
return b;
}}

// Com indentação (muito melhor!)
function calcular(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}`})}),e.jsx("h2",{children:"Boas Práticas"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Sempre use ponto e vírgula no final dos statements"}),e.jsx("li",{children:"Use nomes descritivos para variáveis e funções"}),e.jsx("li",{children:"Comente código complexo, mas prefira código auto-explicativo"}),e.jsx("li",{children:"Mantenha indentação consistente"}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"const"})," e ",e.jsx("code",{children:"let"})," em vez de ",e.jsx("code",{children:"var"})]})]})]})}export{i as default};
