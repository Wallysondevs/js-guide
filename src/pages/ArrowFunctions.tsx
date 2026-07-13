import { PageContainer } from "@/components/layout/PageContainer";

export default function ArrowFunctions() {
  return (
    <PageContainer
      title="Arrow Functions"
      subtitle="Sintaxe moderna e concisa para funções"
      difficulty="iniciante"
      timeToRead="10 min"
    >
      <h2>O que são Arrow Functions?</h2>
      <p>
        Arrow functions (funções de seta) são uma sintaxe mais curta para escrever
        funções, introduzida no ES6. Elas são especialmente úteis para callbacks.
      </p>

      <h2>Sintaxe Básica</h2>
      <pre><code>{`// Função tradicional
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
const saudacao = () => "Olá!";`}</code></pre>

      <h2>Return Implícito</h2>
      <p>Quando a função tem apenas uma expressão, pode omitir <code>return</code> e chaves:</p>
      <pre><code>{`// Com return explícito
const quadrado = (x) => {
  return x * x;
};

// Return implícito
const quadrado = x => x * x;

// Retornando objeto (use parênteses!)
const criarPessoa = (nome) => ({ nome, idade: 0 });`}</code></pre>

      <h2>THIS Lexical</h2>
      <p>
        A maior diferença: arrow functions <strong>não têm seu próprio <code>this</code></strong>.
        Elas herdam do escopo onde foram definidas:
      </p>
      <pre><code>{`// Problema com função tradicional
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
};`}</code></pre>

      <h2>Quando NÃO usar Arrow Functions</h2>
      <pre><code>{`// ❌ Como método de objeto
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
};`}</code></pre>

      <h2>Use Cases Comuns</h2>
      <pre><code>{`// Callbacks de array
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
setTimeout(() => console.log("Atrasado!"), 1000);`}</code></pre>
    </PageContainer>
  );
}
