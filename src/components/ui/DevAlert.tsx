export function DevAlert() {
  return (
    <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
      <div className="flex items-center gap-2">
        <span className="text-yellow-500 text-lg">⚠️</span>
        <p className="text-yellow-200 text-sm font-medium">
          Este conteúdo está em desenvolvimento. Novas lições serão adicionadas em breve!
        </p>
      </div>
    </div>
  );
}
