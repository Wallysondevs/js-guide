import { PageContainer } from "@/components/layout/PageContainer";

export default function Ecmascript() {
  return (
    <PageContainer title="ECMAScript" subtitle="O padrão por trás do JavaScript" difficulty="iniciante" timeToRead="4 min">
      <h2>O que é ECMAScript?</h2>
      <p>
        ECMAScript é a <strong>especificação</strong> padronizada do JavaScript. 
        É mantida pela <strong>ECMA International</strong> através do comitê TC39.
      </p>
      <h2>TC39</h2>
      <p>
        O TC39 é o comitê técnico que evolui o ECMAScript. Inclui representantes de 
        Google, Microsoft, Apple, Mozilla, Netflix e outras empresas.
      </p>
      <h2>Versões Importantes</h2>
      <ul>
        <li><strong>ES5 (2009)</strong> — strict mode, JSON, métodos de array</li>
        <li><strong>ES6/ES2015 (2015)</strong> — let/const, arrow functions, classes, modules, promises</li>
        <li><strong>ES2016+</strong> — releases anuais com features incrementais</li>
        <li><strong>ES2024</strong> — latest com features mais recentes</li>
      </ul>
    </PageContainer>
  );
}
