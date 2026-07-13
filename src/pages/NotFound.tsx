import { PageContainer } from "@/components/layout/PageContainer";

export default function NotFound() {
  return (
    <PageContainer title="Página não encontrada" difficulty="iniciante">
      <p>
        A página que você está procurando não existe ou foi movida.
      </p>
      <p>
        Use o menu lateral para navegar entre os módulos.
      </p>
    </PageContainer>
  );
}
