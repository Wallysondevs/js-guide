import{j as e}from"./index-DBOU_NJv.js";import{P as r}from"./PageContainer-BDoc6Xey.js";import"./proxy-DdRZDCJc.js";function l(){return e.jsxs(r,{title:"Variáveis",subtitle:"let, const, var e escopo",difficulty:"iniciante",timeToRead:"10 min",children:[e.jsx("h2",{children:"O que são Variáveis?"}),e.jsxs("p",{children:['Variáveis são "containers" para armazenar valores. Em JavaScript moderno, usamos ',e.jsx("code",{children:"let"})," e ",e.jsx("code",{children:"const"})," para declarar variáveis."]}),e.jsx("h2",{children:"let vs const vs var"}),e.jsx("pre",{children:e.jsx("code",{children:`// let - pode ser reatribuída
let idade = 25;
idade = 26;  // ✅ OK

// const - NÃO pode ser retribuída
const PI = 3.14159;
PI = 3.14;  // ❌ Erro!

// var - forma antiga (evite usar)
var nome = "João";  // funciona mas não recomendado`})}),e.jsx("h2",{children:"Quando usar cada um?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"const"})," — padrão para valores que não mudam"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"let"})," — quando precisar reatribuir (contadores, acumuladores)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"var"})," — evite (legado, problemas de escopo)"]})]}),e.jsx("h2",{children:"Escopo de Bloco"}),e.jsxs("p",{children:[e.jsx("code",{children:"let"})," e ",e.jsx("code",{children:"const"})," têm escopo de bloco:"]}),e.jsx("pre",{children:e.jsx("code",{children:`if (true) {
  let x = 10;
  const y = 20;
}
console.log(x);  // ❌ ReferenceError
console.log(y);  // ❌ ReferenceError`})}),e.jsx("h2",{children:"Escopo de Função"}),e.jsxs("p",{children:[e.jsx("code",{children:"var"})," tem escopo de função:"]}),e.jsx("pre",{children:e.jsx("code",{children:`function exemplo() {
  var x = 10;
  if (true) {
    var x = 20;  // mesma variável!
  }
  console.log(x);  // 20
}`})}),e.jsx("h2",{children:"Hoisting"}),e.jsxs("p",{children:["Variáveis ",e.jsx("code",{children:"var"}),' são "elevadas" (hoisted):']}),e.jsx("pre",{children:e.jsx("code",{children:`console.log(x);  // undefined (não dá erro!)
var x = 10;

// let e const NÃO são hoisted da mesma forma
console.log(y);  // ❌ ReferenceError
let y = 20;`})}),e.jsx("h2",{children:"Regras de Nomenclatura"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Deve começar com letra, ",e.jsx("code",{children:"_"})," ou ",e.jsx("code",{children:"$"})]}),e.jsxs("li",{children:["Pode conter letras, números, ",e.jsx("code",{children:"_"})," e ",e.jsx("code",{children:"$"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Case-sensitive"}),": ",e.jsx("code",{children:"nome"})," ≠ ",e.jsx("code",{children:"Nome"})]}),e.jsx("li",{children:"Não pode usar palavras reservadas"})]}),e.jsx("pre",{children:e.jsx("code",{children:`// Válido
let nome = "João";
let _contador = 0;
let $elemento = document;
let valor1 = 100;

// Inválido
let 1valor = 100;      // ❌ começa com número
let let = 10;          // ❌ palavra reservada
let meu-nome = "Ana";  // ❌ hífen não permitido`})}),e.jsx("h2",{children:"Convenções"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"camelCase"})," para variáveis: ",e.jsx("code",{children:"meuNome"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"PascalCase"})," para classes: ",e.jsx("code",{children:"UsuarioController"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"UPPER_SNAKE"})," para constantes: ",e.jsx("code",{children:"MAX_VALUE"})]})]})]})}export{l as default};
