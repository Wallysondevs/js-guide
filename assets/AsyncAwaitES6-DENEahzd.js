import{j as o}from"./index-DBOU_NJv.js";import{P as s}from"./PageContainer-BDoc6Xey.js";import"./proxy-DdRZDCJc.js";function n(){return o.jsxs(s,{title:"Async/Await",subtitle:"Sintaxe mais limpa para código assíncrono",difficulty:"intermediário",timeToRead:"12 min",children:[o.jsx("h2",{children:"O que é Async/Await?"}),o.jsx("p",{children:"Async/await é syntactic sugar sobre Promises. Permite escrever código assíncrono que parece síncrono, tornando-o mais legível."}),o.jsx("h2",{children:"async Function"}),o.jsxs("p",{children:["Uma função marcada com ",o.jsx("code",{children:"async"})," sempre retorna uma Promise:"]}),o.jsx("pre",{children:o.jsx("code",{children:`async function saudacao() {
  return "Olá!";
}

saudacao().then(msg => console.log(msg));  // "Olá!"

// Equivalente a:
function saudacao() {
  return Promise.resolve("Olá!");
}`})}),o.jsx("h2",{children:"await Operator"}),o.jsxs("p",{children:[o.jsx("code",{children:"await"})," pausa a execução até a Promise resolver. Só funciona dentro de ",o.jsx("code",{children:"async"}),":"]}),o.jsx("pre",{children:o.jsx("code",{children:`async function buscarUsuario(id) {
  const resposta = await fetch(\`/api/usuarios/\${id}\`);
  const usuario = await resposta.json();
  return usuario;
}

// Usando
const user = await buscarUsuario(1);
console.log(user.nome);`})}),o.jsx("h2",{children:"Comparação: Promises vs Async/Await"}),o.jsx("pre",{children:o.jsx("code",{children:`// Com Promises (then/catch)
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
}`})}),o.jsx("h2",{children:"Tratamento de Erros"}),o.jsx("pre",{children:o.jsx("code",{children:`async function buscaSegura() {
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
}`})}),o.jsx("h2",{children:"Operações Paralelas"}),o.jsx("pre",{children:o.jsx("code",{children:`// ❌ Sequencial (lento)
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
}`})}),o.jsx("h2",{children:"Loops com Async/Await"}),o.jsx("pre",{children:o.jsx("code",{children:`// ❌ forEach não espera
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
}`})}),o.jsx("h2",{children:"Top-Level Await (ES2022)"}),o.jsx("p",{children:"Em módulos ES, pode usar await no nível superior:"}),o.jsx("pre",{children:o.jsx("code",{children:`// arquivo: config.js (módulo ES)
const resposta = await fetch('/api/config');
const config = await resposta.json();

export default config;

// outro arquivo
import config from './config.js';
console.log(config);  // já carregado`})}),o.jsx("h2",{children:"Padrões Comuns"}),o.jsx("pre",{children:o.jsx("code",{children:`// Retry com tentativas
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
}`})})]})}export{n as default};
