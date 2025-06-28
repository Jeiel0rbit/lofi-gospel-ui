'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from './ui/scroll-area';

const legalContent = {
  terms: {
    title: 'Termos de Uso',
    content: (
      <>
        <p className="mb-4">Bem-vindo ao LoFi Gospel! Ao usar nosso bot do Discord, você concorda com estes Termos de Uso. Por favor, leia-os com atenção.</p>
        <h3 className="font-bold text-lg mb-2">1. Uso do Serviço e Conformidade</h3>
        <p className="mb-4">O LoFi Gospel é fornecido para seu uso pessoal e não comercial. O bot está de acordo com os Termos de Serviço para Bots do Discord. Você concorda em não usar o bot para fins ilegais.</p>
        <h3 className="font-bold text-lg mb-2">2. Licença e Alterações</h3>
        <p className="mb-4">O projeto está sob a licença MIT, podendo ser alterado futuramente sem aviso prévio. Você tem a liberdade de usar e modificar o código-fonte, de acordo com os termos da licença.</p>
        <h3 className="font-bold text-lg mb-2">3. Parcerias</h3>
        <p className="mb-4">Mantemos uma parceria com o servidor Geração 144k para divulgação e comunidade.</p>
        <h3 className="font-bold text-lg mb-2">4. Conduta do Usuário</h3>
        <p className="mb-4">Você é responsável por sua conduta. Comportamento abusivo, assédio ou qualquer forma de desrespeito não será tolerado.</p>
        <h3 className="font-bold text-lg mb-2">5. Isenção de Responsabilidade</h3>
        <p className="mb-4">O serviço é fornecido sem garantias de qualquer tipo. Não garantimos que o serviço estará sempre disponível, ininterrupto ou livre de erros.</p>
        <p>Data da última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
      </>
    ),
  },
  privacy: {
    title: 'Política de Privacidade',
    content: (
      <>
        <p className="mb-4">Sua privacidade é importante para nós. Esta Política de Privacidade explica como coletamos, usamos e protegemos as informações necessárias para o funcionamento do LoFi Gospel.</p>
        <h3 className="font-bold text-lg mb-2">1. Informações que Coletamos</h3>
        <p className="mb-4">Para fins de suporte técnico e para garantir o funcionamento correto do serviço, o bot coleta e armazena temporariamente as seguintes informações não pessoais: o ID do canal de voz onde a rádio está ativa, o tipo de rádio que está sendo tocada (Louvores ou Pregações), e o ID do servidor ao qual o bot foi adicionado recentemente.</p>
        <h3 className="font-bold text-lg mb-2">2. Como Usamos as Informações</h3>
        <p className="mb-4">Os dados coletados são usados exclusivamente para a operação, manutenção e melhoria do LoFi Gospel. Não há vendas de dados ou monitoramento dos usuários para outros fins não éticos. Não coletamos nenhuma informação de identificação pessoal (PII).</p>
        <h3 className="font-bold text-lg mb-2">3. Segurança dos Dados</h3>
        <p className="mb-4">Tomamos medidas razoáveis para proteger as informações que processamos, mas nenhum sistema de segurança é impenetrável. Não podemos garantir a segurança absoluta de nossos sistemas.</p>
        <h3 className="font-bold text-lg mb-2">4. Links de Terceiros</h3>
        <p className="mb-4">O bot pode conter links para sites de terceiros (por exemplo, YouTube para as transmissões de rádio). Não somos responsáveis pelas práticas de privacidade desses outros sites.</p>
        <h3 className="font-bold text-lg mb-2">5. Contato</h3>
        <p className="mb-4">Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco através do nosso servidor no Discord ou GitHub.</p>
        <p>Data da última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
      </>
    ),
  },
};

type ModalType = 'terms' | 'privacy' | null;

export default function LegalModalHandler() {
  const pathname = usePathname();
  const router = useRouter();
  const [openModal, setOpenModal] = useState<ModalType>(null);

  useEffect(() => {
    if (pathname === '/terms') {
      setOpenModal('terms');
    } else if (pathname === '/privacy') {
      setOpenModal('privacy');
    } else {
      setOpenModal(null);
    }
  }, [pathname]);

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      router.push('/');
    }
  };

  const currentContent = openModal ? legalContent[openModal] : null;

  return (
    <Dialog open={!!openModal} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl h-4/5 flex flex-col">
        {currentContent && (
          <>
            <DialogHeader>
              <DialogTitle className="text-3xl">{currentContent.title}</DialogTitle>
            </DialogHeader>
            <ScrollArea className="flex-grow pr-6">
                 <div className="text-sm text-muted-foreground">{currentContent.content}</div>
            </ScrollArea>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
