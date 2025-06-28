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
        <p className="mb-4">Bem-vindo ao LoFi Gospel Hub! Ao usar nosso bot do Discord, você concorda com estes Termos de Uso. Por favor, leia-os com atenção.</p>
        <h3 className="font-bold text-lg mb-2">1. Uso do Serviço</h3>
        <p className="mb-4">O LoFi Gospel Hub é fornecido "como está" para seu uso pessoal e não comercial. Você concorda em não usar o bot para fins ilegais ou para violar os Termos de Serviço do Discord.</p>
        <h3 className="font-bold text-lg mb-2">2. Conduta do Usuário</h3>
        <p className="mb-4">Você é responsável por sua conduta e por qualquer conteúdo que você interaja através do bot. Comportamento abusivo, assédio ou qualquer forma de desrespeito não será tolerado.</p>
        <h3 className="font-bold text-lg mb-2">3. Propriedade Intelectual</h3>
        <p className="mb-4">O bot e seu conteúdo original, recursos e funcionalidades são e permanecerão propriedade exclusiva do LoFi Gospel Hub e de seus licenciadores. O projeto é de código aberto sob a licença MIT, o que lhe confere certas liberdades de uso e modificação, de acordo com os termos da licença.</p>
        <h3 className="font-bold text-lg mb-2">4. Isenção de Responsabilidade</h3>
        <p className="mb-4">O serviço é fornecido sem garantias de qualquer tipo. Não garantimos que o serviço estará sempre disponível, ininterrupto ou livre de erros.</p>
        <h3 className="font-bold text-lg mb-2">5. Alterações nos Termos</h3>
        <p className="mb-4">Reservamo-nos o direito de modificar ou substituir estes Termos a qualquer momento. Notificaremos sobre quaisquer alterações, publicando os novos Termos nesta página.</p>
        <p>Data da última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
      </>
    ),
  },
  privacy: {
    title: 'Política de Privacidade',
    content: (
      <>
        <p className="mb-4">Sua privacidade é importante para nós. Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações.</p>
        <h3 className="font-bold text-lg mb-2">1. Informações que Coletamos</h3>
        <p className="mb-4">Não coletamos informações de identificação pessoal. O bot pode armazenar temporariamente informações relacionadas ao uso do serviço, como IDs de servidor e canal, para funcionar corretamente. Esses dados não são compartilhados com terceiros.</p>
        <h3 className="font-bold text-lg mb-2">2. Como Usamos as Informações</h3>
        <p className="mb-4">Os dados coletados são usados exclusivamente para a operação e melhoria do LoFi Gospel Hub. Por exemplo, para manter o bot no canal de voz correto.</p>
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
