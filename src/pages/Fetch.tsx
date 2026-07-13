import { PageContainer } from "@/components/layout/PageContainer";

export default function Fetch() {
  return (
    <PageContainer
      title="Fetch API"
      subtitle="Requisições HTTP modernas no browser"
      difficulty="intermediário"
      timeToRead="15 min"
    >
      <h2>O que é Fetch?</h2>
      <p>
        A Fetch API fornece uma interface JavaScript para fazer requisições HTTP.
        É mais poderosa e flexível que a antiga XMLHttpRequest, usando Promises.
      </p>

      <h2>GET Request</h2>
      <pre><code>{`// Simples
fetch('https://api.github.com/users/github')
  .then(resposta => resposta.json())
  .then(dados => console.log(dados))
  .catch(erro => console.error('Erro:', erro));

// Com async/await
async function buscarUsuario(usuario) {
  const resposta = await fetch(\`https://api.github.com/users/\${usuario}\`);
  const dados = await resposta.json();
  return dados;
}

try {
  const user = await buscarUsuario('github');
  console.log(user.name);
} catch (erro) {
  console.error(erro);
}`}</code></pre>

      <h2>POST Request</h2>
      <pre><code>{`// Criar recurso
async function criarUsuario(dados) {
  const resposta = await fetch('/api/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados)
  });

  if (!resposta.ok) {
    throw new Error(\`HTTP \${resposta.status}\`);
  }

  return resposta.json();
}

// Usando
const novoUsuario = await criarUsuario({
  nome: 'João',
  email: 'joao@email.com'
});`}</code></pre>

      <h2>Opções Completas</h2>
      <pre><code>{`fetch(url, {
  method: 'POST',           // GET, POST, PUT, DELETE, PATCH
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123',
    'Accept': 'application/json'
  },
  body: JSON.stringify({    // dados a enviar
    nome: 'Valor'
  }),
  mode: 'cors',             // cors, no-cors, same-origin
  credentials: 'include',   // include, same-origin, omit
  cache: 'no-cache',        // default, no-cache, reload
  redirect: 'follow',       // follow, error, manual
  referrer: 'no-referrer',  // no-referrer, client
  signal: controller.signal // para abortar
});`}</code></pre>

      <h2>PUT e DELETE</h2>
      <pre><code>{`// PUT - Atualizar completamente
async function atualizarUsuario(id, dados) {
  const resposta = await fetch(\`/api/usuarios/\${id}\`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  return resposta.json();
}

// PATCH - Atualizar parcialmente
async function patchUsuario(id, dadosParciais) {
  const resposta = await fetch(\`/api/usuarios/\${id}\`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dadosParciais)
  });
  return resposta.json();
}

// DELETE
async function deletarUsuario(id) {
  const resposta = await fetch(\`/api/usuarios/\${id}\`, {
    method: 'DELETE'
  });
  return resposta.ok;  // true se deletou
}`}</code></pre>

      <h2>Tratando Respostas</h2>
      <pre><code>{`const resposta = await fetch(url);

// Status
resposta.ok          // true se status 200-299
resposta.status      // código (200, 404, 500, etc.)
resposta.statusText  // texto ("OK", "Not Found")

// Headers
resposta.headers.get('Content-Type');
resposta.headers.get('X-Custom-Header');

// Body (só pode ler uma vez!)
const texto = await resposta.text();
const json = await resposta.json();
const blob = await resposta.blob();
const arrayBuffer = await resposta.arrayBuffer();
const formData = await resposta.formData();

// Clonar para usar múltiplas vezes
const clone = resposta.clone();
const texto = await resposta.text();
const json = await clone.json();`}</code></pre>

      <h2>Enviando FormData</h2>
      <pre><code>{`// Formulário
const form = document.querySelector('form');
const formData = new FormData(form);

// Adicionar campos
formData.append('nome', 'João');
formData.append('arquivo', fileInput.files[0]);

// Enviar
const resposta = await fetch('/upload', {
  method: 'POST',
  body: formData  // não precisa de Content-Type header!
});

// Iterar FormData
for (const [chave, valor] of formData) {
  console.log(chave, valor);
}`}</code></pre>

      <h2>AbortController - Cancelar</h2>
      <pre><code>{`const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 5000);

try {
  const resposta = await fetch(url, {
    signal: controller.signal
  });
  clearTimeout(timeout);
  const dados = await resposta.json();
} catch (erro) {
  if (erro.name === 'AbortError') {
    console.log('Requisição cancelada');
  } else {
    console.error('Outro erro:', erro);
  }
}

// Cancelar manualmente
botaoCancelar.addEventListener('click', () => {
  controller.abort();
});`}</code></pre>

      <h2>Download de Arquivo</h2>
      <pre><code>{`async function baixarArquivo(url, nome) {
  const resposta = await fetch(url);
  const blob = await resposta.blob();

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = nome;
  link.click();

  URL.revokeObjectURL(link.href);  // liberar memória
}

// Uso
await baixarArquivo('/api/download/report.pdf', 'relatorio.pdf');`}</code></pre>

      <h2>Upload com Progress</h2>
      <pre><code>{`// Upload com barra de progresso
async function uploadComProgress(arquivo, onProgress) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (e) => {
      if (e.lengthComputable) {
        const porcentagem = (e.loaded / e.total) * 100;
        onProgress(porcentagem);
      }
    });

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error(\`Upload falhou: \${xhr.status}\`));
      }
    });

    xhr.addEventListener('error', () => reject(new Error('Network error')));

    const formData = new FormData();
    formData.append('arquivo', arquivo);

    xhr.open('POST', '/upload');
    xhr.send(formData);
  });
}`}</code></pre>

      <h2>Wrapper Completo</h2>
      <pre><code>{`async function requisicao(url, opcoes = {}) {
  const {
    method = 'GET',
    body,
    headers = {},
    timeout = 8000
  } = opcoes;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const resposta = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!resposta.ok) {
      const erro = await resposta.json().catch(() => ({}));
      throw new Error(erro.message || \`HTTP \${resposta.status}\`);
    }

    return resposta.json();

  } catch (erro) {
    clearTimeout(timeoutId);
    throw erro;
  }
}`}</code></pre>
    </PageContainer>
  );
}
