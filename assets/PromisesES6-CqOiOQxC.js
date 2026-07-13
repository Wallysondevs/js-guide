import{j as e}from"./index-DBOU_NJv.js";import{P as r}from"./PageContainer-BDoc6Xey.js";import"./proxy-DdRZDCJc.js";function i(){return e.jsxs(r,{title:"Promises",subtitle:"Lidando com código assíncrono de forma elegante",difficulty:"intermediário",timeToRead:"15 min",children:[e.jsx("h2",{children:"O que é uma Promise?"}),e.jsx("p",{children:"Uma Promise (promessa) representa um valor que pode estar disponível agora, no futuro, ou nunca. É uma forma mais organizada de lidar com operações assíncronas."}),e.jsx("h2",{children:"Estados de uma Promise"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Pending"})," — inicial, aguardando"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Fulfilled"})," — resolvida com sucesso"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rejected"})," — falhou"]})]}),e.jsx("h2",{children:"Criando uma Promise"}),e.jsx("pre",{children:e.jsx("code",{children:`const minhaPromise = new Promise((resolve, reject) => {
  // Simulando operação assíncrona
  setTimeout(() => {
    const sucesso = true;

    if (sucesso) {
      resolve("Operação concluída!");
    } else {
      reject(new Error("Falha na operação"));
    }
  }, 1000);
});`})}),e.jsx("h2",{children:"Consumindo uma Promise"}),e.jsx("pre",{children:e.jsx("code",{children:`minhaPromise
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
  });`})}),e.jsx("h2",{children:"Promise com Fetch"}),e.jsx("pre",{children:e.jsx("code",{children:`fetch('https://api.github.com/users/github')
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
  });`})}),e.jsx("h2",{children:"Promise.all - Paralelo"}),e.jsx("p",{children:"Aguarda todas terminarem (ou a primeira a falhar):"}),e.jsx("pre",{children:e.jsx("code",{children:`const promise1 = fetch('/api/usuarios');
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
  });`})}),e.jsx("h2",{children:"Promise.race - Corrida"}),e.jsx("p",{children:"Retorna a primeira a terminar (sucesso ou erro):"}),e.jsx("pre",{children:e.jsx("code",{children:`const rapida = new Promise(resolve => {
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
  .catch(() => console.log("Requisição demorou muito"));`})}),e.jsx("h2",{children:"Promise.allSettled"}),e.jsx("p",{children:"Aguarda todas terminarem (não falha se uma der erro):"}),e.jsx("pre",{children:e.jsx("code",{children:`const promises = [
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
// Valor: 3`})}),e.jsx("h2",{children:"Encadeamento"}),e.jsx("pre",{children:e.jsx("code",{children:`buscarUsuario(id)
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
// - lançar erro (vai pro catch)`})}),e.jsx("h2",{children:"Promise Static Methods"}),e.jsx("pre",{children:e.jsx("code",{children:`// Promise.resolve - criar já resolvida
const resolvida = Promise.resolve(42);
resolvida.then(v => console.log(v));  // 42

// Promise.reject - criar já rejeitada
const rejeitada = Promise.reject(new Error("Falha"));
rejeitada.catch(e => console.log(e.message));

// Promise.try (ES2025 proposal)
const resultado = await Promise.try(() => {
  return operacao();
});`})}),e.jsx("h2",{children:"Erros Comuns"}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ Esquecer de retornar
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
  });`})})]})}export{i as default};
