import{j as e}from"./index-DBOU_NJv.js";import{P as o}from"./PageContainer-BDoc6Xey.js";import"./proxy-DdRZDCJc.js";function r(){return e.jsxs(o,{title:"Tipos de Dados",subtitle:"Primitivos e objetos em JavaScript",difficulty:"iniciante",timeToRead:"12 min",children:[e.jsx("h2",{children:"Tipos Primitivos"}),e.jsxs("p",{children:["JavaScript tem ",e.jsx("strong",{children:"7 tipos primitivos"}),", que são imutáveis:"]}),e.jsx("pre",{children:e.jsx("code",{children:`// String - texto
let nome = "JavaScript";
let char = 'J';
let template = \`Linguagem: \${nome}\`;

// Number - números (inteiros e decimais)
let inteiro = 42;
let decimal = 3.14159;
let negativo = -100;
let infinito = Infinity;
let naoNumero = NaN;

// Boolean - verdadeiro ou falso
let ativo = true;
let desligado = false;

// undefined - valor não definido
let x;
console.log(x);  // undefined

// null - valor vazio intencional
let vazio = null;

// Symbol - identificador único (ES6)
let sym = Symbol("id");
let sym2 = Symbol("id");
console.log(sym === sym2);  // false (sempre únicos)

// BigInt - números grandes (ES2020)
let grande = 9007199254740991n;
let maior = BigInt(Number.MAX_SAFE_INTEGER);`})}),e.jsx("h2",{children:"Tipo Object"}),e.jsx("p",{children:"Objetos são coleções de propriedades. Arrays e funções também são objetos:"}),e.jsx("pre",{children:e.jsx("code",{children:`// Objeto literal
const pessoa = {
  nome: "Maria",
  idade: 30,
  ativo: true
};

// Array (tipo de objeto)
const numeros = [1, 2, 3, 4, 5];

// Função (tipo de objeto)
function soma(a, b) {
  return a + b;
}

// Date, RegExp, Map, Set, etc.
const hoje = new Date();
const mapa = new Map();`})}),e.jsx("h2",{children:"typeof Operator"}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"typeof"})," para verificar o tipo:"]}),e.jsx("pre",{children:e.jsx("code",{children:`typeof "texto"      // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" ⚠️ (bug histórico)
typeof Symbol()    // "symbol"
typeof 10n         // "bigint"
typeof {}          // "object"
typeof []          // "object"
typeof function(){} // "function"`})}),e.jsx("h2",{children:"Truthy e Falsy"}),e.jsxs("p",{children:['Em contextos booleanos, valores "falsy" são tratados como ',e.jsx("code",{children:"false"}),":"]}),e.jsx("pre",{children:e.jsx("code",{children:`// Valores falsy
false
0, -0, 0n
"" (string vazia)
null
undefined
NaN

// Todo resto é truthy
"texto"
1, -1, 42
[]
{}
function(){}`})}),e.jsx("h2",{children:"Conversão de Tipos"}),e.jsx("pre",{children:e.jsx("code",{children:`// Para String
String(42)        // "42"
(42).toString()   // "42"
42 + ""          // "42" (concatenação)

// Para Number
Number("42")      // 42
parseInt("42px")  // 42
parseFloat("3.14") // 3.14
+"42"            // 42 (unary plus)

// Para Boolean
Boolean(1)        // true
Boolean(0)        // false
!!1              // true (double negation)`})}),e.jsx("h2",{children:"Diferença: Primitivo vs Objeto"}),e.jsx("pre",{children:e.jsx("code",{children:`// Primitivos são copiados por valor
let a = 5;
let b = a;
b = 10;
console.log(a);  // 5 (não mudou)

// Objetos são copiados por referência
let obj1 = { valor: 10 };
let obj2 = obj1;
obj2.valor = 20;
console.log(obj1.valor);  // 20 (mudou!)`})})]})}export{r as default};
