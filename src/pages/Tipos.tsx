import { PageContainer } from "@/components/layout/PageContainer";

export default function Tipos() {
  return (
    <PageContainer
      title="Tipos de Dados"
      subtitle="Primitivos e objetos em JavaScript"
      difficulty="iniciante"
      timeToRead="12 min"
    >
      <h2>Tipos Primitivos</h2>
      <p>
        JavaScript tem <strong>7 tipos primitivos</strong>, que são imutáveis:
      </p>
      <pre><code>{`// String - texto
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
let maior = BigInt(Number.MAX_SAFE_INTEGER);`}</code></pre>

      <h2>Tipo Object</h2>
      <p>
        Objetos são coleções de propriedades. Arrays e funções também são objetos:
      </p>
      <pre><code>{`// Objeto literal
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
const mapa = new Map();`}</code></pre>

      <h2>typeof Operator</h2>
      <p>Use <code>typeof</code> para verificar o tipo:</p>
      <pre><code>{`typeof "texto"      // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" ⚠️ (bug histórico)
typeof Symbol()    // "symbol"
typeof 10n         // "bigint"
typeof {}          // "object"
typeof []          // "object"
typeof function(){} // "function"`}</code></pre>

      <h2>Truthy e Falsy</h2>
      <p>Em contextos booleanos, valores "falsy" são tratados como <code>false</code>:</p>
      <pre><code>{`// Valores falsy
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
function(){}`}</code></pre>

      <h2>Conversão de Tipos</h2>
      <pre><code>{`// Para String
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
!!1              // true (double negation)`}</code></pre>

      <h2>Diferença: Primitivo vs Objeto</h2>
      <pre><code>{`// Primitivos são copiados por valor
let a = 5;
let b = a;
b = 10;
console.log(a);  // 5 (não mudou)

// Objetos são copiados por referência
let obj1 = { valor: 10 };
let obj2 = obj1;
obj2.valor = 20;
console.log(obj1.valor);  // 20 (mudou!)`}</code></pre>
    </PageContainer>
  );
}
