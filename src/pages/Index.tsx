import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scissors, MapPin, Phone, Clock, Star, Sparkles, Award, Users } from "lucide-react";
import hero from "@/assets/hero-barbershop.jpg";
import tools from "@/assets/tools.jpg";
import portrait from "@/assets/cut-portrait.jpg";

const services = [
  { icon: Scissors, title: "Corte Clássico", desc: "Cortes tradicionais executados com precisão e estilo.", price: "R$ 40" },
  { icon: Sparkles, title: "Barba Premium", desc: "Modelagem completa com toalha quente e produtos selecionados.", price: "R$ 35" },
  { icon: Award, title: "Combo Classe A", desc: "Corte + barba + finalização. A experiência completa.", price: "R$ 65" },
  { icon: Users, title: "Corte Infantil", desc: "Atendimento especial para os pequenos cavalheiros.", price: "R$ 30" },
];

const reviews = [
  { name: "Matheus Folmer", text: "Serviço excelente, caprichosos e dedicados, agradam a todos os públicos. Sou chato com meu cabelo e meu corte não é tão tradicional, e desde a primeira vez fui muito bem atendido.", role: "Local Guide" },
  { name: "Wanderson Lemos", text: "Entrei no barbeiro errado e acabou se tornando o certo. Excelente atendimento e profissionalismo.", role: "Local Guide" },
  { name: "Guizin", text: "Muito bom, fui bem atendido e também cortam muito bem. Adorei!", role: "Cliente" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2">
            <Scissors className="h-6 w-6 text-primary" />
            <span className="font-serif text-xl font-bold">
              Classe <span className="text-gradient-gold">A</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#servicos" className="hover:text-primary transition-smooth">Serviços</a>
            <a href="#sobre" className="hover:text-primary transition-smooth">Sobre</a>
            <a href="#avaliacoes" className="hover:text-primary transition-smooth">Avaliações</a>
            <a href="#contato" className="hover:text-primary transition-smooth">Contato</a>
          </nav>
          <Button asChild variant="default" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold">
            <a href="https://wa.me/5551985099422">Agendar</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <img src={hero} alt="Interior da Barbearia Classe A" className="absolute inset-0 w-full h-full object-cover opacity-40" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-sm text-muted-foreground">4,8 · 16 avaliações no Google</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6">
              Estilo, tradição<br />
              e <span className="text-gradient-gold">classe</span>.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl">
              Há anos transformando visuais com precisão, dedicação e atendimento de excelência na Restinga, Porto Alegre.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold h-14 px-8 text-base">
                <a href="https://wa.me/5551985099422">Agendar horário</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base border-primary/40 hover:bg-primary/10">
                <a href="#servicos">Ver serviços</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Serviços</p>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4">
              Cuidado <span className="text-gradient-gold">completo</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Cada serviço é executado com atenção aos detalhes que fazem toda diferença.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Card key={s.title} className="group p-8 bg-card border-border hover:border-primary/50 transition-smooth hover:shadow-gold">
                <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                  <s.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{s.desc}</p>
                <div className="text-gradient-gold font-serif text-2xl font-bold">{s.price}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-24 bg-gradient-dark">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={portrait} alt="Cliente com corte profissional" loading="lazy" width={1024} height={1280} className="rounded-sm shadow-elegant w-full" />
            <div className="absolute -bottom-6 -right-6 bg-gradient-gold p-6 rounded-sm shadow-gold hidden md:block">
              <div className="text-primary-foreground">
                <div className="font-serif text-4xl font-bold">4,8</div>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary-foreground text-primary-foreground" />)}
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Sobre nós</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Tradição encontra <span className="text-gradient-gold">modernidade</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Na Barbearia Classe A acreditamos que um bom corte vai além da estética — é confiança, atitude e bem-estar. Nossa equipe se dedica a criar uma experiência única para cada cliente, do tradicional ao mais ousado.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Atendemos com cuidado, respeito e profissionalismo. Cada cliente é tratado como deve ser: com classe.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { n: "16+", l: "Avaliações" },
                { n: "4,8★", l: "No Google" },
                { n: "100%", l: "Satisfação" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-primary pl-4">
                  <div className="font-serif text-3xl font-bold text-gradient-gold">{s.n}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="avaliacoes" className="py-24 relative overflow-hidden">
        <img src={tools} alt="" loading="lazy" width={1280} height={960} className="absolute inset-0 w-full h-full object-cover opacity-5" />
        <div className="container relative">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Depoimentos</p>
            <h2 className="font-serif text-4xl md:text-6xl font-bold">
              O que dizem <span className="text-gradient-gold">nossos clientes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <Card key={r.name} className="p-8 bg-card border-border hover:border-primary/50 transition-smooth flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <p className="text-foreground/90 italic leading-relaxed mb-6 flex-1">"{r.text}"</p>
                <div className="border-t border-border pt-4">
                  <div className="font-serif text-lg font-bold">{r.name}</div>
                  <div className="text-xs text-primary uppercase tracking-wider">{r.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-24 bg-gradient-dark">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Visite-nos</p>
              <h2 className="font-serif text-4xl md:text-6xl font-bold">
                Venha nos <span className="text-gradient-gold">conhecer</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="p-8 bg-card border-border text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-lg font-bold mb-2">Endereço</h3>
                <p className="text-sm text-muted-foreground">Estr. João Antônio da Silveira, 1617<br />Restinga, Porto Alegre - RS</p>
              </Card>
              <Card className="p-8 bg-card border-border text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-lg font-bold mb-2">Telefone</h3>
                <p className="text-sm text-muted-foreground">(51) 98509-9422</p>
              </Card>
              <Card className="p-8 bg-card border-border text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-lg font-bold mb-2">Horário</h3>
                <p className="text-sm text-muted-foreground">Ter - Sáb<br />08:00 às 20:00</p>
              </Card>
            </div>

            <div className="rounded-sm overflow-hidden shadow-elegant border border-border">
              <iframe
                title="Mapa Barbearia Classe A"
                src="https://www.google.com/maps?q=Estr.+Jo%C3%A3o+Ant%C3%B4nio+da+Silveira,+1617,+Restinga,+Porto+Alegre&output=embed"
                className="w-full h-[400px] border-0"
                loading="lazy"
              />
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold h-14 px-10 text-base">
                <a href="https://wa.me/5551985099422">Agendar pelo WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Scissors className="h-5 w-5 text-primary" />
            <span className="font-serif font-bold">Barbearia Classe <span className="text-gradient-gold">A</span></span>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Barbearia Classe A. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
