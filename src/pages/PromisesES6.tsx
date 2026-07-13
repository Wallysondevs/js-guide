import { PageContainer } from "@/components/layout/PageContainer";

export default function PromisesES6() {
  return (
    <PageContainer
      title="Promises"
      subtitle="Lidando com código assíncrono de forma elegante"
      difficulty="intermediário"
      timeToRead="15 min"
    >
      <h2>O que é uma Promise?</h2>
      <p>
        Uma Promise (promessa) representa um valor que pode estar disponível agora,
        no futuro, ou nunca. É uma forma mais organizada de lidar com operações assíncronas.
      </p>

      <h2>Estados de uma Promise</h2>
      <ul>
        <li><strong>Pending</strong> — inicial, aguardando</li>
        <li><strong>Fulfilled</strong> — resolvida com sucesso</li>
        <li><strong>Rejected</strong> — falhou</li>
      </ul>

      <h2>Criando uma Promise</h2>
      <pre><code>{`const minhaPromise = new Promise((resolve, reject) => {
  // Simulando operação assíncrona
  setTimeout(() => {
    const sucesso = true;

    if (sucesso) {
      resolve("Operação concluída!");
    } else {
      reject(new Error("Falha na operação"));
    }
  }, 1000);
});`}</code></pre>

      <h2>Consumindo uma Promise</h2>
      <pre><code>{`minhaPromise
  .then(resultado => {
    console.log("Sucesso:", resultado);
    return resultado.toUpperCase();
  })
  .then(resultadoMaiusculo => {
    console.log(resultadoMaiusculo);
  })
  .catch(erro => {
    console.error("Erro:", erro.message);
  })
  .finally(() => {
    console.log("Finalizado (sempre executa)");
  });`}</code></pre>

      <h2>Promise com Fetch</h2>
      <pre><code>{`fetch('https://api.github.com/users/github')
  .then(resposta => {
    if (!resposta.ok) {
      throw new Error(\`HTTP \${resposta.status}\`);
    }
    return resposta.json();
  })
  .then(usuario => {
    console.log(usuario.login);
    console.log(usuario.avatar_url);
  })
  .catch(erro => {
    console.error("Falha ao buscar:", erro);
  });`}</code></pre>

      <h2>Promise.all - Paralelo</h2>
      <p>Aguarda todas terminarem (ou a primeira a falhar):</p>
      <pre><code>{`const promise1 = fetch('/api/usuarios');
const promise2 = fetch('/api/produtos');
const promise3 = fetch('/api/pedidos');

Promise.all([promise1, promise2, promise3])
  .then(respostas => {
    return Promise.all(respostas.map(r => r.json()));
  })
  .then(dados => {
    const [usuarios, produtos, pedidos] = dados;
    console.log(usuarios, produtos, pedidos);
  })
  .catch(erro => {
    // Qualquer falha cai aqui
    console.error("Uma das requisições falhou:", erro);
  });`}</code></pre>

      <h2>Promise.race - Corrida</h2>
      <p>Retorna a primeira a terminar (sucesso ou erro):</p>
      <pre><code>{`const rapida = new Promise(resolve => {
  setTimeout(() => resolve("Rápida"), 500);
});

const lenta = new Promise(resolve => {
  setTimeout(() => resolve("Lenta"), 1000);
});

Promise.race([rapida, lenta])
  .then(resultado => {
    console.log(resultado);  // "Rápida" (chegou primeiro)
  });

// Exemplo prático: timeout
const timeout = new Promise((_, reject) => {
  setTimeout(() => reject(new Error("Timeout")), 5000);
});

Promise.race([fetch(url), timeout])
  .catch(() => console.log("Requisição demorou muito"));`}</code></pre>

      <h2>Promise.allSettled</h2>
      <p>Aguarda todas terminarem (não falha se uma der erro):</p>
      <pre><code>{`const promises = [
  Promise.resolve(1),
  Promise.reject("Erro!"),
  Promise.resolve(3)
];

Promise.allSettled(promises)
  .then(resultados => {
    resultados.forEach(r => {
      if (r.status === "fulfilled") {
        console.log("Valor:", r.value);
      } else {
        console.log("Erro:", r.reason);
      }
    });
  });
// Valor: 1
// Erro: Erro!
// Valor: 3`}</code></pre>

      <h2>Encadeamento</h2>
      <pre><code>{`buscarUsuario(id)
  .then(usuario => {
    return buscarPermissoes(usuario.id);
  })
  .then(permissoes => {
    return verificarAcesso(permissoes);
  })
  .then(acesso => {
    console.log("Acesso:", acesso ? "Permitido" : "Negado");
  })
  .catch(erro => {
    console.error("Erro na cadeia:", erro);
  });

// Cada then pode retornar:
// - um valor (passa pro próximo)
// - uma promise (aguarda resolver)
// - lançar erro (vai pro catch)`}</code></pre>

      <h2>Promise Static Methods</h2>
      <pre><code>{`// Promise.resolve - criar já resolvida
const resolvida = Promise.resolve(42);
resolvida.then(v => console.log(v));  // 42

// Promise.reject - criar já rejeitada
const rejeitada = Promise.reject(new Error("Falha"));
rejeitada.catch(e => console.log(e.message));

// Promise.try (ES2025 proposal)
const resultado = await Promise.try(() => {
  return operacao();
});`}</code></pre>

      <h2>Erros Comuns</h2>
      <pre><code>{`// ❌ Esquecer de retornar
fetch(url)
  .then(res => res.json())
  .then(data => {
    processData(data);  // não retornou!
  })
  .then(processed => {
    console.log(processed);  // undefined
  });

// ✅ Retornar corretamente
fetch(url)
  .then(res => res.json())
  .then(data => {
    return processData(data);
  })
  .then(processed => {
    console.log(processed);  // valor correto
  });`}</code></pre>
    </PageContainer>
  );
}
