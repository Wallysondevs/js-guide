import { PageContainer } from "@/components/layout/PageContainer";

export default function AsyncAwaitES6() {
  return (
    <PageContainer
      title="Async/Await"
      subtitle="Sintaxe mais limpa para código assíncrono"
      difficulty="intermediário"
      timeToRead="12 min"
    >
      <h2>O que é Async/Await?</h2>
      <p>
        Async/await é syntactic sugar sobre Promises. Permite escrever código
        assíncrono que parece síncrono, tornando-o mais legível.
      </p>

      <h2>async Function</h2>
      <p>Uma função marcada com <code>async</code> sempre retorna uma Promise:</p>
      <pre><code>{`async function saudacao() {
  return "Olá!";
}

saudacao().then(msg => console.log(msg));  // "Olá!"

// Equivalente a:
function saudacao() {
  return Promise.resolve("Olá!");
}`}</code></pre>

      <h2>await Operator</h2>
      <p><code>await</code> pausa a execução até a Promise resolver. Só funciona dentro de <code>async</code>:</p>
      <pre><code>{`async function buscarUsuario(id) {
  const resposta = await fetch(\`/api/usuarios/\${id}\`);
  const usuario = await resposta.json();
  return usuario;
}

// Usando
const user = await buscarUsuario(1);
console.log(user.nome);`}</code></pre>

      <h2>Comparação: Promises vs Async/Await</h2>
      <pre><code>{`// Com Promises (then/catch)
function buscarDados() {
  return fetch('/api/dados')
    .then(res => res.json())
    .then(dados => {
      console.log(dados);
      return dados;
    })
    .catch(erro => {
      console.error(erro);
    });
}

// Com async/await (mais limpo)
async function buscarDados() {
  try {
    const resposta = await fetch('/api/dados');
    const dados = await resposta.json();
    console.log(dados);
    return dados;
  } catch (erro) {
    console.error(erro);
  }
}`}</code></pre>

      <h2>Tratamento de Erros</h2>
      <pre><code>{`async function buscaSegura() {
  try {
    const resposta = await fetch('/api/dados');

    if (!resposta.ok) {
      throw new Error(\`HTTP \${resposta.status}\`);
    }

    const dados = await resposta.json();
    return dados;

  } catch (erro) {
    console.error("Falha:", erro.message);

    // Pode re-lançar ou retornar valor padrão
    return null;
  }
}`}</code></pre>

      <h2>Operações Paralelas</h2>
      <pre><code>{`// ❌ Sequencial (lento)
async function buscarTudo() {
  const usuarios = await fetch('/api/usuarios');
  const produtos = await fetch('/api/produtos');
  const pedidos = await fetch('/api/pedidos');

  return { usuarios, produtos, pedidos };
}

// ✅ Paralelo (rápido)
async function buscarTudo() {
  const [usuarios, produtos, pedidos] = await Promise.all([
    fetch('/api/usuarios').then(r => r.json()),
    fetch('/api/produtos').then(r => r.json()),
    fetch('/api/pedidos').then(r => r.json())
  ]);

  return { usuarios, produtos, pedidos };
}

// ✅ Ainda mais limpo
async function buscarTudo() {
  const promise1 = fetch('/api/usuarios').then(r => r.json());
  const promise2 = fetch('/api/produtos').then(r => r.json());
  const promise3 = fetch('/api/pedidos').then(r => r.json());

  const usuarios = await promise1;
  const produtos = await promise2;
  const pedidos = await promise3;

  return { usuarios, produtos, pedidos };
}`}</code></pre>

      <h2>Loops com Async/Await</h2>
      <pre><code>{`// ❌ forEach não espera
async function processar() {
  [1, 2, 3].forEach(async n => {
    await delay(1000);
    console.log(n);  // imprime fora de ordem
  });
}

// ✅ for...of espera
async function processar() {
  for (const n of [1, 2, 3]) {
    await delay(1000);
    console.log(n);  // 1, 2, 3 (sequencial)
  }
}

// ✅ Paralelo com Promise.all
async function processar() {
  await Promise.all([1, 2, 3].map(async n => {
    await delay(1000);
    console.log(n);  // imprime junto após 1s
  }));
}`}</code></pre>

      <h2>Top-Level Await (ES2022)</h2>
      <p>Em módulos ES, pode usar await no nível superior:</p>
      <pre><code>{`// arquivo: config.js (módulo ES)
const resposta = await fetch('/api/config');
const config = await resposta.json();

export default config;

// outro arquivo
import config from './config.js';
console.log(config);  // já carregado`}</code></pre>

      <h2>Padrões Comuns</h2>
      <pre><code>{`// Retry com tentativas
async function fetchComRetry(url, tentativas = 3) {
  for (let i = 0; i < tentativas; i++) {
    try {
      return await fetch(url);
    } catch (erro) {
      if (i === tentativas - 1) throw erro;
      await delay(1000 * (i + 1));  // backoff
    }
  }
}

// Timeout
async function fetchComTimeout(url, timeout = 5000) {
  const controller = new AbortController();

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      controller.abort();
      reject(new Error('Timeout'));
    }, timeout);
  });

  return Promise.race([
    fetch(url, { signal: controller.signal }),
    timeoutPromise
  ]);
}

// Cache simples
const cache = new Map();

async function buscarComCache(url) {
  if (cache.has(url)) {
    return cache.get(url);
  }

  const resposta = await fetch(url);
  const dados = await resposta.json();
  cache.set(url, dados);

  return dados;
}`}</code></pre>
    </PageContainer>
  );
}
