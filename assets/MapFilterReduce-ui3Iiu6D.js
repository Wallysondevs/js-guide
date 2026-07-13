import{j as e}from"./index-DBOU_NJv.js";import{P as o}from"./PageContainer-BDoc6Xey.js";import"./proxy-DdRZDCJc.js";function c(){return e.jsxs(o,{title:"Map, Filter, Reduce",subtitle:"As três armas secretas do JavaScript funcional",difficulty:"iniciante",timeToRead:"15 min",children:[e.jsx("h2",{children:"Introdução"}),e.jsxs("p",{children:[e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"})," e ",e.jsx("code",{children:"reduce"})," são os métodos mais poderosos para transformar arrays em JavaScript. Eles permitem escrever código mais declarativo e funcional."]}),e.jsx("h2",{children:"MAP - Transformar"}),e.jsx("p",{children:"Cria um novo array transformando cada elemento:"}),e.jsx("pre",{children:e.jsx("code",{children:`const numeros = [1, 2, 3, 4, 5];

// Dobrar cada número
const dobrados = numeros.map(n => n * 2);
console.log(dobrados);  // [2, 4, 6, 8, 10]

// Extrair propriedade
const pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 28 }
];

const nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes);  // ["Ana", "João", "Maria"]

// Adicionar propriedade
const comStatus = pessoas.map(p => ({
  ...p,
  status: "ativo"
}));`})}),e.jsx("h2",{children:"FILTER - Filtrar"}),e.jsx("p",{children:"Cria um novo array com elementos que passam no teste:"}),e.jsx("pre",{children:e.jsx("code",{children:`const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Apenas números pares
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares);  // [2, 4, 6, 8, 10]

// Filtrar objetos
const pessoas = [
  { nome: "Ana", idade: 25, ativo: true },
  { nome: "João", idade: 17, ativo: false },
  { nome: "Maria", idade: 30, ativo: true }
];

const adultos = pessoas.filter(p => p.idade >= 18);
const ativos = pessoas.filter(p => p.ativo);`})}),e.jsx("h2",{children:"REDUCE - Reduzir"}),e.jsx("p",{children:"Reduz o array a um único valor (acumulador):"}),e.jsx("pre",{children:e.jsx("code",{children:`const numeros = [1, 2, 3, 4, 5];

// Soma total
const soma = numeros.reduce((acc, n) => acc + n, 0);
console.log(soma);  // 15

// Valor máximo
const max = numeros.reduce((acc, n) => n > acc ? n : acc);
console.log(max);  // 5

// Contar ocorrências
const palavras = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];

const contagem = palavras.reduce((acc, palavra) => {
  acc[palavra] = (acc[palavra] || 0) + 1;
  return acc;
}, {});

console.log(contagem);
// { maçã: 3, banana: 2, laranja: 1 }

// Agrupar por propriedade
const pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 }
];

const porIdade = pessoas.reduce((acc, p) => {
  const chave = p.idade;
  acc[chave] = acc[chave] || [];
  acc[chave].push(p);
  return acc;
}, {});`})}),e.jsx("h2",{children:"Encadeamento (Chaining)"}),e.jsx("p",{children:"Combine os métodos em cadeia:"}),e.jsx("pre",{children:e.jsx("code",{children:`const produtos = [
  { nome: "Notebook", preco: 2500, estoque: 10 },
  { nome: "Mouse", preco: 80, estoque: 50 },
  { nome: "Teclado", preco: 150, estoque: 0 },
  { nome: "Monitor", preco: 900, estoque: 5 }
];

// Produtos em estoque com desconto de 10%
const promocao = produtos
  .filter(p => p.estoque > 0)
  .map(p => ({
    ...p,
    precoComDesconto: p.preco * 0.9
  }));

// Total do estoque
const totalEstoque = produtos
  .map(p => p.preco * p.estoque)
  .reduce((acc, valor) => acc + valor, 0);`})}),e.jsx("h2",{children:"Performance"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"map"})," e ",e.jsx("code",{children:"filter"})," criam novos arrays"]}),e.jsx("li",{children:"Para arrays grandes, loops tradicionais são mais rápidos"}),e.jsx("li",{children:"Prefira imutabilidade (map/filter) em React/Redux"}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"for...of"})," quando performance for crítico"]})]})]})}export{c as default};
