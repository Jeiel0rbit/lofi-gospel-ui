import { Headphones, Music, BookOpen, Bot, Github, Users, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <StationsSection />
        <CommandsSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
}

const Header = () => (
  <header className="py-4 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border/50">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <Headphones className="h-8 w-8 text-primary" />
        <span className="text-xl font-bold text-primary">LoFi Gospel Hub</span>
      </Link>
      <div className="flex items-center gap-4">
        <Button asChild>
          <Link href="https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot" target="_blank">
            <Bot className="mr-2 h-4 w-4" /> Adicionar ao Discord
          </Link>
        </Button>
        <Link href="https://github.com/your-repo" target="_blank" className="text-primary hover:text-accent hidden sm:inline-block" prefetch={false}>
          <Github className="h-6 w-6" />
        </Link>
      </div>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="py-12 md:py-24 lg:py-32">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 text-primary">
        Sua Rádio Gospel 24/7 no Discord
      </h1>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
        Mergulhe em um ambiente de paz com louvores e pregações que tocam a alma. A qualquer hora, em qualquer lugar.
      </p>
      <div className="flex justify-center mb-12">
        <Button size="lg" asChild>
          <Link href="https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot" target="_blank">
            <Bot className="mr-2 h-5 w-5" /> Convidar o Bot
          </Link>
        </Button>
      </div>
      <div className="relative max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl shadow-black/20">
         <Image
          src="https://placehold.co/1200x600.png"
          alt="Ilustração LoFi Gospel Hub"
          fill
          className="object-cover bg-muted"
          data-ai-hint="gospel music"
        />
      </div>
    </div>
  </section>
);

const features = [
  {
    icon: Music,
    title: "Rádios 24/7",
    description: "Duas estações exclusivas: uma com os melhores louvores LoFi Gospel e outra com pregações inspiradoras para edificar sua vida.",
  },
  {
    icon: Code,
    title: "Comandos Simples",
    description: "Controle o bot facilmente com comandos intuitivos como !sjoin para entrar e !sleave para sair do canal de voz.",
  },
  {
    icon: Github,
    title: "Código Aberto",
    description: "Nosso projeto é open source com licença MIT. Sinta-se à vontade para contribuir e fazer parte da nossa comunidade no GitHub.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-12 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
        Recursos Principais
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="bg-background/50 border-border hover:border-accent transition-colors shadow-lg">
            <CardHeader className="items-center text-center p-6">
              <div className="p-4 bg-secondary rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle className="text-primary">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const StationsSection = () => (
  <section id="stations" className="py-12 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
        Nossas Estações
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card/50">
          <Music className="h-12 w-12 text-accent mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-primary">Estação de Louvores</h3>
          <p className="text-muted-foreground">
            Uma seleção cuidadosa de músicas gospel no estilo LoFi, perfeitas para momentos de oração, estudo ou para trazer paz ao seu dia.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card/50">
          <BookOpen className="h-12 w-12 text-accent mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-primary">Estação de Pregações</h3>
          <p className="text-muted-foreground">
            Palavras de fé e esperança com pregações de diversos pastores e líderes espirituais para edificar e fortalecer sua caminhada.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const commands = [
  { command: "!sjoin", description: "Chama o bot para o seu canal de voz." },
  { command: "!sleave", description: "Remove o bot do canal de voz." },
  { command: "!shelp", description: "Mostra a lista de comandos (apenas para admins/mods)." },
];

const CommandsSection = () => (
  <section id="commands" className="py-12 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
        Como Usar o Bot
      </h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {commands.map((cmd, index) => (
          <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border">
            <code className="px-3 py-1 rounded bg-secondary text-secondary-foreground font-mono text-lg">{cmd.command}</code>
            <p className="text-muted-foreground">{cmd.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const partners = [
  { name: "LoFi Square", link: "#" },
  { name: "Geração 144k", link: "#" },
];

const PartnersSection = () => (
  <section id="partners" className="py-12 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
        Nossos Parceiros
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {partners.map((partner, index) => (
          <Button key={index} variant="secondary" size="lg" asChild>
            <Link href={partner.link} target="_blank" className="w-64">
              <Users className="mr-2 h-5 w-5" />
              {partner.name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-6 border-t border-border/50 bg-card">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} LoFi Gospel Hub. Todos os direitos reservados.
      </p>
      <div className="flex items-center gap-6">
        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Termos de Uso</Link>
        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Política de Privacidade</Link>
        <Link href="https://github.com/your-repo" target="_blank" className="text-muted-foreground hover:text-primary" prefetch={false}>
          <Github className="h-5 w-5" />
        </Link>
      </div>
    </div>
  </footer>
);
