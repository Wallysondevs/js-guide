import { PageContainer } from "@/components/layout/PageContainer";

export default function Sintaxe() {
  return (
    <PageContainer
      title="Sintaxe Básica"
      subtitle="Statements, expressões e comentários"
      difficulty="iniciante"
      timeToRead="8 min"
    >
      <h2>O que é Sintaxe?</h2>
      <p>
        A sintaxe de uma linguagem de programação é o conjunto de regras que define
        como escrever código que o interpretador consegue entender. Em JavaScript,
        a sintaxe é inspirada em C e Java, mas com algumas diferenças importantes.
      </p>

      <h2>Statements (Instruções)</h2>
      <p>
        Um statement é uma instrução completa que o JavaScript executa. Cada statement
        geralmente termina com ponto e vírgula (opcional, mas recomendado):
      </p>
      <pre><code>{`// Exemplos de statements
let x = 5;              // declaração de variável
console.log(x);         // chamada de função
if (x > 0) {            // estrutura condicional
  console.log("positivo");
}`}</code></pre>

      <h2>Expressões</h2>
      <p>
        Uma expressão é qualquer trecho de código que produz um valor. Expressões
        podem ser usadas dentro de statements:
      </p>
      <pre><code>{`// Exemplos de expressões
5 + 3                   // expressão aritmética = 8
"x" + "y"               // expressão de string = "xy"
Math.random()           // expressão de chamada = número aleatório
x > 0                   // expressão de comparação = true/false`}</code></pre>

      <h2>Comentários</h2>
      <p>Comentários são ignorados pelo JavaScript. Use para documentar código:</p>
      <pre><code>{`// Comentário de uma linha

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
}`}</code></pre>

      <h2>Case Sensitivity</h2>
      <p>
        JavaScript é <strong>case-sensitive</strong>. Isso significa que <code>minhaVar</code>,{" "}
        <code>MinhaVar</code> e <code>MINHAVAR</code> são três variáveis diferentes:
      </p>
      <pre><code>{`let nome = "João";
let Nome = "Maria";
let NOME = "Pedro";

console.log(nome);  // "João"
console.log(Nome);  // "Maria"
console.log(NOME);  // "Pedro"`}</code></pre>

      <h2>Indentação</h2>
      <p>
        A indentação não é obrigatória em JavaScript (diferente de Python), mas é{" "}
        <strong>essencial para legibilidade</strong>. Use 2 ou 4 espaços:
      </p>
      <pre><code>{`// Sem indentação (funciona mas é feio)
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
}`}</code></pre>

      <h2>Boas Práticas</h2>
      <ul>
        <li>Sempre use ponto e vírgula no final dos statements</li>
        <li>Use nomes descritivos para variáveis e funções</li>
        <li>Comente código complexo, mas prefira código auto-explicativo</li>
        <li>Mantenha indentação consistente</li>
        <li>Use <code>const</code> e <code>let</code> em vez de <code>var</code></li>
      </ul>
    </PageContainer>
  );
}
