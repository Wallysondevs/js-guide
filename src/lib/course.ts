// JS Guide - Course Structure
// Storage key: js-curso-progresso

export interface Lesson {
  id: string;
  title: string;
  path: string;
}

export interface Module {
  id: string;
  title: string;
  emoji: string;
  lessons: Lesson[];
}

export const COURSE_MODULES: Module[] = [
  {
    id: "introducao",
    title: "Introdução",
    emoji: "📜",
    lessons: [
      { id: "home", title: "Bem-vindo", path: "/" },
      { id: "historia", title: "História do JS", path: "/historia" },
      { id: "ecmascript", title: "ECMAScript", path: "/ecmascript" },
      { id: "ambientes", title: "Ambientes", path: "/ambientes" },
    ],
  },
  {
    id: "fundamentos",
    title: "Fundamentos",
    emoji: "🧱",
    lessons: [
      { id: "sintaxe", title: "Sintaxe Básica", path: "/sintaxe" },
      { id: "variaveis", title: "Variáveis (let, const, var)", path: "/variaveis" },
      { id: "tipos", title: "Tipos de Dados", path: "/tipos" },
      { id: "operadores", title: "Operadores", path: "/operadores" },
      { id: "strings", title: "Strings", path: "/strings" },
      { id: "numeros", title: "Números", path: "/numeros" },
      { id: "booleans", title: "Booleans", path: "/booleans" },
      { id: "null-undefined", title: "null, undefined & Symbol", path: "/null-undefined" },
    ],
  },
  {
    id: "controle",
    title: "Controle de Fluxo",
    emoji: "🔀",
    lessons: [
      { id: "condicionais", title: "Condicionais (if/else/switch)", path: "/condicionais" },
      { id: "loops", title: "Loops (for/while/do-while)", path: "/loops" },
      { id: "break-continue", title: "break & continue", path: "/break-continue" },
    ],
  },
  {
    id: "funcoes",
    title: "Funções",
    emoji: "⚡",
    lessons: [
      { id: "funcoes-basico", title: "Funções Básicas", path: "/funcoes-basico" },
      { id: "arrow-functions", title: "Arrow Functions", path: "/arrow-functions" },
      { id: "parametros", title: "Parâmetros (default, rest)", path: "/parametros" },
      { id: "closures", title: "Closures", path: "/closures" },
      { id: "iife", title: "IIFE", path: "/iife" },
      { id: "callbacks", title: "Callbacks", path: "/callbacks" },
      { id: "higher-order", title: "Higher-Order Functions", path: "/higher-order" },
    ],
  },
  {
    id: "arrays-objetos",
    title: "Arrays & Objetos",
    emoji: "📦",
    lessons: [
      { id: "arrays", title: "Arrays", path: "/arrays" },
      { id: "array-methods", title: "Array Methods", path: "/array-methods" },
      { id: "objetos", title: "Objetos", path: "/objetos" },
      { id: "object-methods", title: "Object Methods", path: "/object-methods" },
      { id: "destructuring", title: "Destructuring", path: "/destructuring" },
      { id: "spread-rest", title: "Spread & Rest", path: "/spread-rest" },
      { id: "template-literals", title: "Template Literals", path: "/template-literals" },
    ],
  },
  {
    id: "es6-plus",
    title: "ES6+ Features",
    emoji: "✨",
    lessons: [
      { id: "let-const", title: "let & const", path: "/let-const" },
      { id: "arrow-functions-es6", title: "Arrow Functions", path: "/arrow-functions-es6" },
      { id: "classes", title: "Classes", path: "/classes" },
      { id: "modules", title: "Modules (import/export)", path: "/modules" },
      { id: "promises", title: "Promises", path: "/promises" },
      { id: "async-await", title: "Async/Await", path: "/async-await" },
    ],
  },
  {
    id: "dom",
    title: "DOM Manipulation",
    emoji: "🌐",
    lessons: [
      { id: "dom-intro", title: "Introdução ao DOM", path: "/dom-intro" },
      { id: "seletores", title: "Seletores", path: "/seletores" },
      { id: "manipulacao", title: "Manipulação", path: "/manipulacao" },
      { id: "eventos", title: "Eventos", path: "/eventos" },
      { id: "event-delegation", title: "Event Delegation", path: "/event-delegation" },
      { id: "forms", title: "Forms", path: "/forms" },
    ],
  },
  {
    id: "browser-apis",
    title: "Browser APIs",
    emoji: "🖥️",
    lessons: [
      { id: "fetch", title: "Fetch API", path: "/fetch" },
      { id: "localstorage", title: "localStorage & sessionStorage", path: "/localstorage" },
      { id: "geolocation", title: "Geolocation", path: "/geolocation" },
      { id: "web-workers", title: "Web Workers", path: "/web-workers" },
      { id: "websockets", title: "WebSockets", path: "/websockets" },
    ],
  },
  {
    id: "nodejs",
    title: "Node.js",
    emoji: "🟢",
    lessons: [
      { id: "node-intro", title: "Introdução ao Node.js", path: "/node-intro" },
      { id: "npm", title: "npm & package.json", path: "/npm" },
      { id: "fs", title: "File System (fs)", path: "/fs" },
      { id: "http", title: "HTTP Module", path: "/http" },
      { id: "path", title: "Path Module", path: "/path" },
      { id: "express-intro", title: "Express.js Intro", path: "/express-intro" },
    ],
  },
  {
    id: "oop",
    title: "OOP em JS",
    emoji: "🏗️",
    lessons: [
      { id: "prototypes", title: "Prototypes", path: "/prototypes" },
      { id: "classes-oop", title: "Classes", path: "/classes-oop" },
      { id: "heranca", title: "Herança", path: "/heranca" },
      { id: "getters-setters", title: "Getters & Setters", path: "/getters-setters" },
      { id: "static", title: "Métodos Estáticos", path: "/static" },
    ],
  },
  {
    id: "async",
    title: "Programação Assíncrona",
    emoji: "⏱️",
    lessons: [
      { id: "async-intro", title: "Conceitos", path: "/async-intro" },
      { id: "callbacks-async", title: "Callbacks", path: "/callbacks-async" },
      { id: "promises-async", title: "Promises", path: "/promises-async" },
      { id: "async-await-async", title: "Async/Await", path: "/async-await-async" },
      { id: "event-loop", title: "Event Loop", path: "/event-loop" },
      { id: "promise-all", title: "Promise.all & race", path: "/promise-all" },
    ],
  },
  {
    id: "error-handling",
    title: "Error Handling",
    emoji: "⚠️",
    lessons: [
      { id: "try-catch", title: "Try/Catch", path: "/try-catch" },
      { id: "throw", title: "Throw", path: "/throw" },
      { id: "custom-errors", title: "Custom Errors", path: "/custom-errors" },
    ],
  },
  {
    id: "functional",
    title: "Programação Funcional",
    emoji: "λ",
    lessons: [
      { id: "imutabilidade", title: "Imutabilidade", path: "/imutabilidade" },
      { id: "pure-functions", title: "Pure Functions", path: "/pure-functions" },
      { id: "map-filter-reduce", title: "Map, Filter, Reduce", path: "/map-filter-reduce" },
      { id: "composition", title: "Composition", path: "/composition" },
      { id: "currying", title: "Currying", path: "/currying" },
    ],
  },
  {
    id: "testing",
    title: "Testes",
    emoji: "🧪",
    lessons: [
      { id: "testing-intro", title: "Introdução", path: "/testing-intro" },
      { id: "jest", title: "Jest", path: "/jest" },
      { id: "unit-tests", title: "Unit Tests", path: "/unit-tests" },
      { id: "mocking", title: "Mocking", path: "/mocking" },
      { id: "e2e", title: "E2E Testing", path: "/e2e" },
    ],
  },
  {
    id: "tools",
    title: "Ferramentas",
    emoji: "🔧",
    lessons: [
      { id: "eslint", title: "ESLint", path: "/eslint" },
      { id: "prettier", title: "Prettier", path: "/prettier" },
      { id: "babel", title: "Babel", path: "/babel" },
      { id: "webpack", title: "Webpack", path: "/webpack" },
      { id: "vite-tools", title: "Vite", path: "/vite-tools" },
    ],
  },
  {
    id: "avancado",
    title: "Avançado",
    emoji: "🚀",
    lessons: [
      { id: "generators", title: "Generators", path: "/generators" },
      { id: "iterators", title: "Iterators", path: "/iterators" },
      { id: "proxies", title: "Proxies", path: "/proxies" },
      { id: "reflect", title: "Reflect", path: "/reflect" },
      { id: "metaprogramming", title: "Metaprogramming", path: "/metaprogramming" },
      { id: "memory-leaks", title: "Memory Leaks", path: "/memory-leaks" },
    ],
  },
];

const STORAGE_KEY = "js-curso-progresso";

function getAllLessonIds(): string[] {
  return COURSE_MODULES.flatMap((module) => module.lessons.map((l) => l.id));
}

export function getProgress(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function saveProgress(progress: Record<string, boolean>): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function markLessonComplete(lessonId: string): void {
  const progress = getProgress();
  progress[lessonId] = true;
  saveProgress(progress);
}

export function markLessonIncomplete(lessonId: string): void {
  const progress = getProgress();
  delete progress[lessonId];
  saveProgress(progress);
}

export function isLessonComplete(lessonId: string): boolean {
  const progress = getProgress();
  return progress[lessonId] === true;
}

export function getCompletionStats(): {
  completed: number;
  total: number;
  percentage: number;
} {
  const allLessons = getAllLessonIds();
  const progress = getProgress();
  const completed = allLessons.filter((id) => progress[id]).length;
  const total = allLessons.length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  return { completed, total, percentage };
}

export function getModuleProgress(moduleId: string): {
  completed: number;
  total: number;
} {
  const module = COURSE_MODULES.find((m) => m.id === moduleId);
  if (!module) return { completed: 0, total: 0 };
  const progress = getProgress();
  const completed = module.lessons.filter((l) => progress[l.id]).length;
  return { completed, total: module.lessons.length };
}

export function getNavigation(
  currentLessonId: string
): { prev: Lesson | null; next: Lesson | null } {
  const allLessons = getAllLessonIds();
  const currentIndex = allLessons.indexOf(currentLessonId);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  let prev: Lesson | null = null;
  let next: Lesson | null = null;

  if (currentIndex > 0) {
    const prevId = allLessons[currentIndex - 1];
    for (const module of COURSE_MODULES) {
      const lesson = module.lessons.find((l) => l.id === prevId);
      if (lesson) {
        prev = lesson;
        break;
      }
    }
  }

  if (currentIndex < allLessons.length - 1) {
    const nextId = allLessons[currentIndex + 1];
    for (const module of COURSE_MODULES) {
      const lesson = module.lessons.find((l) => l.id === nextId);
      if (lesson) {
        next = lesson;
        break;
      }
    }
  }

  return { prev, next };
}

export function findLessonByPath(path: string): Lesson | null {
  for (const module of COURSE_MODULES) {
    const lesson = module.lessons.find((l) => l.path === path);
    if (lesson) return lesson;
  }
  return null;
}
