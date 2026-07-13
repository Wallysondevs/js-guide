import { PageContainer } from "@/components/layout/PageContainer";

export default function Arrays() {
  return (
    <PageContainer
      title="Arrays"
      subtitle="Listas ordenadas de elementos"
      difficulty="iniciante"
      timeToRead="12 min"
    >
      <h2>O que são Arrays?</h2>
      <p>
        Arrays são estruturas que armazenam múltiplos valores em uma única variável.
        Cada valor tem um índice numérico começando de 0.
      </p>

      <h2>Criando Arrays</h2>
      <pre><code>{`// Array literal (mais comum)
const frutas = ["maçã", "banana", "laranja"];

// Com construtor
const numeros = new Array(1, 2, 3, 4, 5);

// Array vazio
const vazio = [];
const tambemVazio = new Array();

// Array com tipos mistos
const misto = [1, "texto", true, null, { nome: "João" }];`}</code></pre>

      <h2>Acessando Elementos</h2>
      <pre><code>{`const frutas = ["maçã", "banana", "laranja"];

// Por índice
console.log(frutas[0]);  // "maçã"
console.log(frutas[1]);  // "banana"
console.log(frutas[2]);  // "laranja"

// Índice inválido
console.log(frutas[10]);  // undefined

// Último elemento
console.log(frutas[frutas.length - 1]);  // "laranja"
console.log(frutas.at(-1));  // "laranja" (ES2022)`}</code></pre>

      <h2>Propriedade length</h2>
      <pre><code>{`const frutas = ["maçã", "banana", "laranja"];

console.log(frutas.length);  // 3

// Último índice
console.log(frutas.length - 1);  // 2

// Percorrer array
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}`}</code></pre>

      <h2>Adicionando Elementos</h2>
      <pre><code>{`const frutas = ["maçã"];

// push - adiciona ao final
frutas.push("banana");
console.log(frutas);  // ["maçã", "banana"]

// unshift - adiciona ao início
frutas.unshift("uva");
console.log(frutas);  // ["uva", "maçã", "banana"]

// Por índice (cria "buracos")
frutas[5] = "manga";
console.log(frutas);  // ["uva", "maçã", "banana", empty × 2, "manga"]`}</code></pre>

      <h2>Removendo Elementos</h2>
      <pre><code>{`const frutas = ["uva", "maçã", "banana", "laranja"];

// pop - remove do final
const ultima = frutas.pop();
console.log(ultima);   // "laranja"
console.log(frutas);   // ["uva", "maçã", "banana"]

// shift - remove do início
const primeira = frutas.shift();
console.log(primeira);  // "uva"
console.log(frutas);    // ["maçã", "banana"]

// splice - remove em qualquer posição
frutas.splice(1, 1);  // remove 1 elemento a partir do índice 1`}</code></pre>

      <h2>splice() - Swat Knife</h2>
      <pre><code>{`const numeros = [1, 2, 3, 4, 5];

// Remover
numeros.splice(2, 1);  // remove 1 elemento no índice 2
console.log(numeros);  // [1, 2, 4, 5]

// Adicionar
numeros.splice(2, 0, 3);  // insere 3 no índice 2
console.log(numeros);  // [1, 2, 3, 4, 5]

// Substituir
numeros.splice(1, 1, 10, 20);  // remove 1 e adiciona 10, 20
console.log(numeros);  // [1, 10, 20, 3, 4, 5]

// Retorna elementos removidos
const removidos = numeros.splice(0, 2);
console.log(removidos);  // [1, 10]`}</code></pre>

      <h2>slice() - Extrair</h2>
      <pre><code>{`const frutas = ["maçã", "banana", "laranja", "uva", "manga"];

// Extrair parte (não modifica original)
const algumas = frutas.slice(1, 3);
console.log(algumas);  // ["banana", "laranja"]
console.log(frutas);    // original intacto

// Do índice X até o final
const ultimas = frutas.slice(2);
console.log(ultimas);  // ["laranja", "uva", "manga"]

// Índices negativos
const finais = frutas.slice(-2);
console.log(finais);  // ["uva", "manga"]`}</code></pre>

      <h2>Percorrendo Arrays</h2>
      <pre><code>{`const frutas = ["maçã", "banana", "laranja"];

// for clássico
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// for...of (mais simples)
for (const fruta of frutas) {
  console.log(fruta);
}

// forEach
frutas.forEach((fruta, indice) => {
  console.log(\`\${indice}: \${fruta}\`);
});

// map (cria novo array)
const maiusculas = frutas.map(f => f.toUpperCase());
console.log(maiusculas);  // ["MAÇÃ", "BANANA", "LARANJA"]`}</code></pre>

      <h2>Verificando Existência</h2>
      <pre><code>{`const frutas = ["maçã", "banana", "laranja"];

// includes - existe?
console.log(frutas.includes("banana"));  // true
console.log(frutas.includes("uva"));     // false

// indexOf - posição (ou -1 se não existir)
console.log(frutas.indexOf("banana"));   // 1
console.log(frutas.indexOf("uva"));       // -1

// find - encontrar elemento
const numeros = [1, 2, 3, 4, 5];
const encontrado = numeros.find(n => n > 3);
console.log(encontrado);  // 4

// some - algum satisfaz?
console.log(numeros.some(n => n > 10));  // false

// every - todos satisfazem?
console.log(numeros.every(n => n > 0));  // true`}</code></pre>
    </PageContainer>
  );
}
