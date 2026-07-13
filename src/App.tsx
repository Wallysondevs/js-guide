import { lazy, Suspense, useState, useEffect } from "react";
import { Route, Switch, wouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { LessonNav } from "@/components/ui/LessonNav";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// Lazy load all pages
const Home = lazy(() => import("@/pages/Home"));
const Historia = lazy(() => import("@/pages/Historia"));
const Ecmascript = lazy(() => import("@/pages/Ecmascript"));
const Ambientes = lazy(() => import("@/pages/Ambientes"));
const Sintaxe = lazy(() => import("@/pages/Sintaxe"));
const Variaveis = lazy(() => import("@/pages/Variaveis"));
const Tipos = lazy(() => import("@/pages/Tipos"));
const Operadores = lazy(() => import("@/pages/Operadores"));
const Strings = lazy(() => import("@/pages/Strings"));
const Numeros = lazy(() => import("@/pages/Numeros"));
const Booleans = lazy(() => import("@/pages/Booleans"));
const NullUndefined = lazy(() => import("@/pages/NullUndefined"));
const Condicionais = lazy(() => import("@/pages/Condicionais"));
const Loops = lazy(() => import("@/pages/Loops"));
const BreakContinue = lazy(() => import("@/pages/BreakContinue"));
const FuncoesBasico = lazy(() => import("@/pages/FuncoesBasico"));
const ArrowFunctions = lazy(() => import("@/pages/ArrowFunctions"));
const Parametros = lazy(() => import("@/pages/Parametros"));
const Closures = lazy(() => import("@/pages/Closures"));
const Iife = lazy(() => import("@/pages/Iife"));
const Callbacks = lazy(() => import("@/pages/Callbacks"));
const HigherOrder = lazy(() => import("@/pages/HigherOrder"));
const Arrays = lazy(() => import("@/pages/Arrays"));
const ArrayMethods = lazy(() => import("@/pages/ArrayMethods"));
const Objetos = lazy(() => import("@/pages/Objetos"));
const ObjectMethods = lazy(() => import("@/pages/ObjectMethods"));
const Destructuring = lazy(() => import("@/pages/Destructuring"));
const SpreadRest = lazy(() => import("@/pages/SpreadRest"));
const TemplateLiterals = lazy(() => import("@/pages/TemplateLiterals"));
const LetConst = lazy(() => import("@/pages/LetConst"));
const ClassesES6 = lazy(() => import("@/pages/ClassesES6"));
const Modules = lazy(() => import("@/pages/Modules"));
const PromisesES6 = lazy(() => import("@/pages/PromisesES6"));
const AsyncAwaitES6 = lazy(() => import("@/pages/AsyncAwaitES6"));
const DomIntro = lazy(() => import("@/pages/DomIntro"));
const Seletores = lazy(() => import("@/pages/Seletores"));
const Manipulacao = lazy(() => import("@/pages/Manipulacao"));
const Eventos = lazy(() => import("@/pages/Eventos"));
const EventDelegation = lazy(() => import("@/pages/EventDelegation"));
const Forms = lazy(() => import("@/pages/Forms"));
const Fetch = lazy(() => import("@/pages/Fetch"));
const Localstorage = lazy(() => import("@/pages/Localstorage"));
const Geolocation = lazy(() => import("@/pages/Geolocation"));
const WebWorkers = lazy(() => import("@/pages/WebWorkers"));
const Websockets = lazy(() => import("@/pages/Websockets"));
const NodeIntro = lazy(() => import("@/pages/NodeIntro"));
const Npm = lazy(() => import("@/pages/Npm"));
const Fs = lazy(() => import("@/pages/Fs"));
const Http = lazy(() => import("@/pages/Http"));
const Path = lazy(() => import("@/pages/Path"));
const ExpressIntro = lazy(() => import("@/pages/ExpressIntro"));
const Prototypes = lazy(() => import("@/pages/Prototypes"));
const ClassesOOP = lazy(() => import("@/pages/ClassesOOP"));
const Heranca = lazy(() => import("@/pages/Heranca"));
const GettersSetters = lazy(() => import("@/pages/GettersSetters"));
const Static = lazy(() => import("@/pages/Static"));
const AsyncIntro = lazy(() => import("@/pages/AsyncIntro"));
const CallbacksAsync = lazy(() => import("@/pages/CallbacksAsync"));
const PromisesAsync = lazy(() => import("@/pages/PromisesAsync"));
const AsyncAwaitAsync = lazy(() => import("@/pages/AsyncAwaitAsync"));
const EventLoop = lazy(() => import("@/pages/EventLoop"));
const PromiseAll = lazy(() => import("@/pages/PromiseAll"));
const TryCatch = lazy(() => import("@/pages/TryCatch"));
const Throw = lazy(() => import("@/pages/Throw"));
const CustomErrors = lazy(() => import("@/pages/CustomErrors"));
const Imutabilidade = lazy(() => import("@/pages/Imutabilidade"));
const PureFunctions = lazy(() => import("@/pages/PureFunctions"));
const MapFilterReduce = lazy(() => import("@/pages/MapFilterReduce"));
const Composition = lazy(() => import("@/pages/Composition"));
const Currying = lazy(() => import("@/pages/Currying"));
const TestingIntro = lazy(() => import("@/pages/TestingIntro"));
const Jest = lazy(() => import("@/pages/Jest"));
const UnitTests = lazy(() => import("@/pages/UnitTests"));
const Mocking = lazy(() => import("@/pages/Mocking"));
const E2e = lazy(() => import("@/pages/E2e"));
const Eslint = lazy(() => import("@/pages/Eslint"));
const Prettier = lazy(() => import("@/pages/Prettier"));
const Babel = lazy(() => import("@/pages/Babel"));
const Webpack = lazy(() => import("@/pages/Webpack"));
const ViteTools = lazy(() => import("@/pages/ViteTools"));
const Generators = lazy(() => import("@/pages/Generators"));
const Iterators = lazy(() => import("@/pages/Iterators"));
const Proxies = lazy(() => import("@/pages/Proxies"));
const Reflect = lazy(() => import("@/pages/Reflect"));
const Metaprogramming = lazy(() => import("@/pages/Metaprogramming"));
const MemoryLeaks = lazy(() => import("@/pages/MemoryLeaks"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [location] = useHashLocation();

  useEffect(() => {
    setIsSidebarOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 lg:pl-72 flex flex-col min-w-0 transition-all duration-300">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 pb-16 min-h-screen">
          {children}
        </main>
      </div>
      <LessonNav />
    </div>
  );
}

function Router() {
  return (
    <Layout>
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/historia" component={Historia} />
            <Route path="/ecmascript" component={Ecmascript} />
            <Route path="/ambientes" component={Ambientes} />
            <Route path="/sintaxe" component={Sintaxe} />
            <Route path="/variaveis" component={Variaveis} />
            <Route path="/tipos" component={Tipos} />
            <Route path="/operadores" component={Operadores} />
            <Route path="/strings" component={Strings} />
            <Route path="/numeros" component={Numeros} />
            <Route path="/booleans" component={Booleans} />
            <Route path="/null-undefined" component={NullUndefined} />
            <Route path="/condicionais" component={Condicionais} />
            <Route path="/loops" component={Loops} />
            <Route path="/break-continue" component={BreakContinue} />
            <Route path="/funcoes-basico" component={FuncoesBasico} />
            <Route path="/arrow-functions" component={ArrowFunctions} />
            <Route path="/parametros" component={Parametros} />
            <Route path="/closures" component={Closures} />
            <Route path="/iife" component={Iife} />
            <Route path="/callbacks" component={Callbacks} />
            <Route path="/higher-order" component={HigherOrder} />
            <Route path="/arrays" component={Arrays} />
            <Route path="/array-methods" component={ArrayMethods} />
            <Route path="/objetos" component={Objetos} />
            <Route path="/object-methods" component={ObjectMethods} />
            <Route path="/destructuring" component={Destructuring} />
            <Route path="/spread-rest" component={SpreadRest} />
            <Route path="/template-literals" component={TemplateLiterals} />
            <Route path="/let-const" component={LetConst} />
            <Route path="/classes" component={ClassesES6} />
            <Route path="/modules" component={Modules} />
            <Route path="/promises" component={PromisesES6} />
            <Route path="/async-await" component={AsyncAwaitES6} />
            <Route path="/dom-intro" component={DomIntro} />
            <Route path="/seletores" component={Seletores} />
            <Route path="/manipulacao" component={Manipulacao} />
            <Route path="/eventos" component={Eventos} />
            <Route path="/event-delegation" component={EventDelegation} />
            <Route path="/forms" component={Forms} />
            <Route path="/fetch" component={Fetch} />
            <Route path="/localstorage" component={Localstorage} />
            <Route path="/geolocation" component={Geolocation} />
            <Route path="/web-workers" component={WebWorkers} />
            <Route path="/websockets" component={Websockets} />
            <Route path="/node-intro" component={NodeIntro} />
            <Route path="/npm" component={Npm} />
            <Route path="/fs" component={Fs} />
            <Route path="/http" component={Http} />
            <Route path="/path" component={Path} />
            <Route path="/express-intro" component={ExpressIntro} />
            <Route path="/prototypes" component={Prototypes} />
            <Route path="/classes-oop" component={ClassesOOP} />
            <Route path="/heranca" component={Heranca} />
            <Route path="/getters-setters" component={GettersSetters} />
            <Route path="/static" component={Static} />
            <Route path="/async-intro" component={AsyncIntro} />
            <Route path="/callbacks-async" component={CallbacksAsync} />
            <Route path="/promises-async" component={PromisesAsync} />
            <Route path="/async-await-async" component={AsyncAwaitAsync} />
            <Route path="/event-loop" component={EventLoop} />
            <Route path="/promise-all" component={PromiseAll} />
            <Route path="/try-catch" component={TryCatch} />
            <Route path="/throw" component={Throw} />
            <Route path="/custom-errors" component={CustomErrors} />
            <Route path="/imutabilidade" component={Imutabilidade} />
            <Route path="/pure-functions" component={PureFunctions} />
            <Route path="/map-filter-reduce" component={MapFilterReduce} />
            <Route path="/composition" component={Composition} />
            <Route path="/currying" component={Currying} />
            <Route path="/testing-intro" component={TestingIntro} />
            <Route path="/jest" component={Jest} />
            <Route path="/unit-tests" component={UnitTests} />
            <Route path="/mocking" component={Mocking} />
            <Route path="/e2e" component={E2e} />
            <Route path="/eslint" component={Eslint} />
            <Route path="/prettier" component={Prettier} />
            <Route path="/babel" component={Babel} />
            <Route path="/webpack" component={Webpack} />
            <Route path="/vite-tools" component={ViteTools} />
            <Route path="/generators" component={Generators} />
            <Route path="/iterators" component={Iterators} />
            <Route path="/proxies" component={Proxies} />
            <Route path="/reflect" component={Reflect} />
            <Route path="/metaprogramming" component={Metaprogramming} />
            <Route path="/memory-leaks" component={MemoryLeaks} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <wouter hook={useHashLocation}>
        <Router />
      </wouter>
    </QueryClientProvider>
  );
}

export default App;
