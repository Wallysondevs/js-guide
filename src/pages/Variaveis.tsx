import { PageContainer } from "@/components/layout/PageContainer";

export default function Variaveis() {
  return (
    <PageContainer
      title="Variáveis"
      subtitle="let, const, var e escopo"
      difficulty="iniciante"
      timeToRead="10 min"
    >
      <h2>O que são Variáveis?</h2>
      <p>
        Variáveis são "containers" para armazenar valores. Em JavaScript moderno,
        usamos <code>let</code> e <code>const</code> para declarar variáveis.
      </p>

      <h2>let vs const vs var</h2>
      <pre><code>{`// let - pode ser reatribuída
let idade = 25;
idade = 26;  // ✅ OK

// const - NÃO pode ser retribuída
const PI = 3.14159;
PI = 3.14;  // ❌ Erro!

// var - forma antiga (evite usar)
var nome = "João";  // funciona mas não recomendado`}</code></pre>

      <h2>Quando usar cada um?</h2>
      <ul>
        <li><strong>const</strong> — padrão para valores que não mudam</li>
        <li><strong>let</strong> — quando precisar reatribuir (contadores, acumuladores)</li>
        <li><strong>var</strong> — evite (legado, problemas de escopo)</li>
      </ul>

      <h2>Escopo de Bloco</h2>
      <p><code>let</code> e <code>const</code> têm escopo de bloco:</p>
      <pre><code>{`if (true) {
  let x = 10;
  const y = 20;
}
console.log(x);  // ❌ ReferenceError
console.log(y);  // ❌ ReferenceError`}</code></pre>

      <h2>Escopo de Função</h2>
      <p><code>var</code> tem escopo de função:</p>
      <pre><code>{`function exemplo() {
  var x = 10;
  if (true) {
    var x = 20;  // mesma variável!
  }
  console.log(x);  // 20
}`}</code></pre>

      <h2>Hoisting</h2>
      <p>Variáveis <code>var</code> são "elevadas" (hoisted):</p>
      <pre><code>{`console.log(x);  // undefined (não dá erro!)
var x = 10;

// let e const NÃO são hoisted da mesma forma
console.log(y);  // ❌ ReferenceError
let y = 20;`}</code></pre>

      <h2>Regras de Nomenclatura</h2>
      <ul>
        <li>Deve começar com letra, <code>_</code> ou <code>$</code></li>
        <li>Pode conter letras, números, <code>_</code> e <code>$</code></li>
        <li><strong>Case-sensitive</strong>: <code>nome</code> ≠ <code>Nome</code></li>
        <li>Não pode usar palavras reservadas</li>
      </ul>
      <pre><code>{`// Válido
let nome = "João";
let _contador = 0;
let $elemento = document;
let valor1 = 100;

// Inválido
let 1valor = 100;      // ❌ começa com número
let let = 10;          // ❌ palavra reservada
let meu-nome = "Ana";  // ❌ hífen não permitido`}</code></pre>

      <h2>Convenções</h2>
      <ul>
        <li><strong>camelCase</strong> para variáveis: <code>meuNome</code></li>
        <li><strong>PascalCase</strong> para classes: <code>UsuarioController</code></li>
        <li><strong>UPPER_SNAKE</strong> para constantes: <code>MAX_VALUE</code></li>
      </ul>
    </PageContainer>
  );
}
