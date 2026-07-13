import { PageContainer } from "@/components/layout/PageContainer";

export default function Historia() {
  return (
    <PageContainer
      title="História do JavaScript"
      subtitle="De 1995 aos dias atuais: a evolução da linguagem mais popular do mundo"
      difficulty="iniciante"
      timeToRead="5 min"
    >
      <h2>Criando em 10 dias</h2>
      <p>
        JavaScript foi criado por <strong>Brendan Eich</strong> em 1995, enquanto trabalhava na Netscape.
        O nome original era <code>Mocha</code>, depois <code>LiveScript</code>, e finalmente <code>JavaScript</code> —
        uma jogada de marketing para aproveitar a popularidade do Java.
      </p>

      <h2>Não é Java!</h2>
      <p>
        Apesar do nome, JavaScript <strong>não tem relação com Java</strong>. A sintaxe foi inspirada em C,
        e a semântica vem de Scheme e Self. Brendan tinha que criar a linguagem em <strong>10 dias</strong>.
      </p>

      <h2>A Guerra dos Browsers</h2>
      <p>
        Nos anos 90, Netscape e Microsoft travaram uma batalha. A Microsoft criou o <code>JScript</code>,
        uma versão do JavaScript com pequenas diferenças. Isso causou dores de cabeça para desenvolvedores.
      </p>

      <h2>ECMAScript</h2>
      <p>
        Em 1997, a Netscape submeteu JavaScript à ECMA International para padronização. Nasceu o
        <strong>ECMAScript</strong> (ES), mantido pelo comitê TC39.
      </p>

      <h2>Linha do Tempo</h2>
      <ul>
        <li><strong>1995</strong> — Criado por Brendan Eich</li>
        <li><strong>1997</strong> — ECMAScript 1</li>
        <li><strong>1999</strong> — ECMAScript 3 (a base por 10 anos)</li>
        <li><strong>2009</strong> — ECMAScript 5 (strict mode, JSON)</li>
        <li><strong>2015</strong> — ECMAScript 6 (ES6/ES2015 — grande modernização)</li>
        <li><strong>2016+</strong> — Releases anuais (ES2016, ES2017, ...)</li>
      </ul>

      <h2>JavaScript Hoje</h2>
      <p>
        Hoje JavaScript roda em <strong>navegadores, servidores (Node.js), mobile (React Native),
        desktop (Electron)</strong> e até em IoT. É a linguagem mais popular do mundo segundo o GitHub.
      </p>
    </PageContainer>
  );
}
