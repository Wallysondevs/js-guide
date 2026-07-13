import{j as o}from"./index-DBOU_NJv.js";import{P as e}from"./PageContainer-BDoc6Xey.js";import"./proxy-DdRZDCJc.js";function a(){return o.jsxs(e,{title:"Arrow Functions",subtitle:"Sintaxe moderna e concisa para funções",difficulty:"iniciante",timeToRead:"10 min",children:[o.jsx("h2",{children:"O que são Arrow Functions?"}),o.jsx("p",{children:"Arrow functions (funções de seta) são uma sintaxe mais curta para escrever funções, introduzida no ES6. Elas são especialmente úteis para callbacks."}),o.jsx("h2",{children:"Sintaxe Básica"}),o.jsx("pre",{children:o.jsx("code",{children:`// Função tradicional
function soma(a, b) {
  return a + b;
}

// Arrow function
const soma = (a, b) => {
  return a + b;
};

// Retorno implícito (sem chaves)
const soma = (a, b) => a + b;

// Um parâmetro - parênteses opcionais
const dobro = x => x * 2;

// Sem parâmetros
const saudacao = () => "Olá!";`})}),o.jsx("h2",{children:"Return Implícito"}),o.jsxs("p",{children:["Quando a função tem apenas uma expressão, pode omitir ",o.jsx("code",{children:"return"})," e chaves:"]}),o.jsx("pre",{children:o.jsx("code",{children:`// Com return explícito
const quadrado = (x) => {
  return x * x;
};

// Return implícito
const quadrado = x => x * x;

// Retornando objeto (use parênteses!)
const criarPessoa = (nome) => ({ nome, idade: 0 });`})}),o.jsx("h2",{children:"THIS Lexical"}),o.jsxs("p",{children:["A maior diferença: arrow functions ",o.jsxs("strong",{children:["não têm seu próprio ",o.jsx("code",{children:"this"})]}),". Elas herdam do escopo onde foram definidas:"]}),o.jsx("pre",{children:o.jsx("code",{children:`// Problema com função tradicional
const obj = {
  nome: "João",
  saudar: function() {
    setTimeout(function() {
      console.log(this.nome);  // undefined (this global)
    }, 1000);
  }
};

// Solução com arrow function
const obj = {
  nome: "João",
  saudar: function() {
    setTimeout(() => {
      console.log(this.nome);  // "João" (lexical this)
    }, 1000);
  }
};`})}),o.jsx("h2",{children:"Quando NÃO usar Arrow Functions"}),o.jsx("pre",{children:o.jsx("code",{children:`// ❌ Como método de objeto
const pessoa = {
  nome: "Maria",
  saudar: () => console.log(this.nome)  // undefined!
};

// ✅ Use função tradicional
const pessoa = {
  nome: "Maria",
  saudar() {  // shorthand method
    console.log(this.nome);  // "Maria"
  }
};

// ❌ Como construtor
const Pessoa = (nome) => {
  this.nome = nome;
};
new Pessoa("Ana");  // TypeError!

// ❌ Não têm arguments object
const exemplo = () => {
  console.log(arguments);  // ReferenceError!
};`})}),o.jsx("h2",{children:"Use Cases Comuns"}),o.jsx("pre",{children:o.jsx("code",{children:`// Callbacks de array
const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros.map(n => n * 2);
const pares = numeros.filter(n => n % 2 === 0);
const soma = numeros.reduce((acc, n) => acc + n, 0);

// Event handlers
document.addEventListener("click", (e) => {
  console.log("Clicou em:", e.target);
});

// Promises
fetch(url)
  .then(resposta => resposta.json())
  .then(dados => console.log(dados))
  .catch(erro => console.error(erro));

// setTimeout/setInterval
setTimeout(() => console.log("Atrasado!"), 1000);`})})]})}export{a as default};
