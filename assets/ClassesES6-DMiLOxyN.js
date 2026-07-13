import{j as a}from"./index-DBOU_NJv.js";import{P as e}from"./PageContainer-BDoc6Xey.js";import"./proxy-DdRZDCJc.js";function t(){return a.jsxs(e,{title:"Classes ES6",subtitle:"Sintaxe moderna para orientação a objetos",difficulty:"intermediário",timeToRead:"12 min",children:[a.jsx("h2",{children:"O que são Classes?"}),a.jsx("p",{children:"Classes em JavaScript são syntactic sugar sobre o sistema de protótipos. Elas fornecem uma sintaxe mais clara e familiar para criar objetos e lidar com herança."}),a.jsx("h2",{children:"Sintaxe Básica"}),a.jsx("pre",{children:a.jsx("code",{children:`class Pessoa {
  // Construtor
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  // Método
  saudar() {
    return \`Olá, sou \${this.nome}\`;
  }

  // Método com argumentos
  apresentar() {
    return \`\${this.nome}, \${this.idade} anos\`;
  }
}

// Instanciar
const pessoa = new Pessoa("João", 30);
console.log(pessoa.saudar());      // "Olá, sou João"
console.log(pessoa.apresentar());  // "João, 30 anos"`})}),a.jsx("h2",{children:"Constructor"}),a.jsxs("p",{children:["O método ",a.jsx("code",{children:"constructor"})," é chamado ao criar uma instância:"]}),a.jsx("pre",{children:a.jsx("code",{children:`class Retangulo {
  constructor(largura = 10, altura = 10) {
    this.largura = largura;
    this.altura = altura;
  }

  area() {
    return this.largura * this.altura;
  }
}

const r1 = new Retangulo(5, 3);
console.log(r1.area());  // 15

const r2 = new Retangulo();  // usa valores padrão
console.log(r2.area());  // 100`})}),a.jsx("h2",{children:"Propriedades"}),a.jsx("pre",{children:a.jsx("code",{children:`class Usuario {
  // Propriedade pública (ES2022)
  nome;
  email;

  // Propriedade privada (ES2022)
  #senha;

  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.#senha = senha;
  }

  verificarSenha(senha) {
    return this.#senha === senha;
  }

  // Propriedade estática
  static DOMINIO = "@empresa.com";
}

const user = new Usuario("Maria", "maria@email.com", "1234");
console.log(user.nome);  // "Maria"
console.log(user.#senha);  // SyntaxError (privado)
console.log(Usuario.DOMINIO);  // "@empresa.com"`})}),a.jsx("h2",{children:"Getters e Setters"}),a.jsx("pre",{children:a.jsx("code",{children:`class Circulo {
  constructor(raio) {
    this._raio = raio;
  }

  // Getter
  get raio() {
    return this._raio;
  }

  // Setter
  set raio(valor) {
    if (valor <= 0) {
      throw new Error("Raio deve ser positivo");
    }
    this._raio = valor;
  }

  // Getter computado
  get area() {
    return Math.PI * this._raio ** 2;
  }

  get diametro() {
    return this._raio * 2;
  }
}

const circ = new Circulo(5);
console.log(circ.raio);     // 5
console.log(circ.area);     // 78.54...
console.log(circ.diametro); // 10

circ.raio = 10;  // usa setter
console.log(circ.area);     // 314.15...`})}),a.jsx("h2",{children:"Métodos Estáticos"}),a.jsx("pre",{children:a.jsx("code",{children:`class Matematica {
  static PI = 3.14159;

  static soma(a, b) {
    return a + b;
  }

  static quadrado(x) {
    return x * x;
  }
}

// Chamados na classe, não na instância
console.log(Matematica.PI);           // 3.14159
console.log(Matematica.soma(1, 2));   // 3
console.log(Matematica.quadrado(4)); // 16

// Não funciona em instâncias
const m = new Matematica();
m.soma(1, 2);  // TypeError`})}),a.jsx("h2",{children:"Herança"}),a.jsx("pre",{children:a.jsx("code",{children:`class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    return "Som genérico";
  }
}

class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome);  // chama constructor do pai
    this.raca = raca;
  }

  falar() {
    return \`Au au! (sou \${this.nome})\`;
  }

  buscar() {
    return \`\${this.nome} busca a bola!\`;
  }
}

const dog = new Cachorro("Rex", "Labrador");
console.log(dog.nome);    // "Rex"
console.log(dog.raca);    // "Labrador"
console.log(dog.falar()); // "Au au! (sou Rex)"`})}),a.jsx("h2",{children:"super Keyword"}),a.jsx("pre",{children:a.jsx("code",{children:`class Pai {
  constructor(valor) {
    this.valor = valor;
  }

  metodo() {
    return "Pai";
  }
}

class Filho extends Pai {
  constructor(valor, extra) {
    super(valor);  // chama constructor do Pai
    this.extra = extra;
  }

  metodo() {
    const paiResult = super.metodo();  // chama método do Pai
    return \`\${paiResult} + Filho\`;
  }
}`})}),a.jsx("h2",{children:"Class Expression"}),a.jsx("pre",{children:a.jsx("code",{children:`// Classe anônima
const MinhaClasse = class {
  metodo() {
    return "Hello";
  }
};

const obj = new MinhaClasse();
obj.metodo();  // "Hello"

// Classe nomeada
const OutraClasse = class MeuNome {
  static quem() {
    return "MeuNome";
  }
};
OutraClasse.quem();  // "MeuNome"`})}),a.jsx("h2",{children:"Método Privado"}),a.jsx("pre",{children:a.jsx("code",{children:`class Conta {
  #saldo = 0;

  constructor(titular) {
    this.titular = titular;
  }

  // Método privado
  #validar(valor) {
    return valor > 0;
  }

  depositar(valor) {
    if (this.#validar(valor)) {
      this.#saldo += valor;
      return true;
    }
    return false;
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.#saldo) {
      this.#saldo -= valor;
      return true;
    }
    return false;
  }

  verSaldo() {
    return this.#saldo;
  }
}`})}),a.jsx("h2",{children:"Classes vs Objects"}),a.jsx("pre",{children:a.jsx("code",{children:`// Use Classes quando:
// - Precisa criar múltiplas instâncias
// - Precisa de herança
// - Precisa de encapsulamento

// Use Objects quando:
// - Só precisa de uma instância (singleton)
// - Não precisa de herança
// - Configurações, constantes, etc.

// Singleton com class
class Database {
  static #instance;

  constructor() {
    if (Database.#instance) {
      return Database.#instance;
    }
    Database.#instance = this;
  }
}

const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2);  // true`})})]})}export{t as default};
