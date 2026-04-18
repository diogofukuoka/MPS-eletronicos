/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Smartphone, 
  Watch, 
  Gamepad2, 
  Headphones, 
  Clock, 
  ShieldCheck, 
  CreditCard,
  MapPin,
  ChevronRight,
  Star
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text overflow-hidden font-sans selection:bg-brand-accent selection:text-white">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-brand-card backdrop-blur-[12px] border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-10 h-[80px] flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <span className="text-[24px] tracking-[-1px] uppercase flex items-center gap-1.5">
              <span className="font-black text-brand-accent text-[26px]">MPS</span>
              <span className="font-semibold text-brand-text/90 tracking-[2px] text-[18px]">ELETRÔNICA</span>
            </span>
          </motion.div>
          <nav className="hidden md:flex items-center gap-[32px] text-[14px] font-medium text-brand-muted">
            <a href="#diferenciais" className="hover:text-brand-text transition-colors">Diferenciais</a>
            <a href="#servicos" className="hover:text-brand-text transition-colors">Serviços</a>
            <a href="#depoimentos" className="hover:text-brand-text transition-colors">Avaliações</a>
            <a href="#localizacao" className="hover:text-brand-text transition-colors">Localização</a>
          </nav>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <a href="https://wa.me/5541988548114" target="_blank" rel="noopener noreferrer" className="px-[24px] py-[12px] bg-brand-accent text-white font-semibold rounded-[100px] hover:opacity-90 transition-opacity text-[14px]">
              Orçamento Online
            </a>
          </motion.div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-[120px] pb-[80px] md:pt-[160px] md:pb-[100px] min-h-[90vh] flex items-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/60 via-brand-bg/80 to-brand-bg z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,122,255,0.15)_0%,transparent_50%)] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1920&h=1080&auto=format&fit=crop" 
            alt="Reparo de smartphone de luxo" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="max-w-7xl mx-auto px-10 relative z-20 w-full">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.h3 variants={fadeIn} className="text-[14px] uppercase tracking-[1px] text-brand-accent mb-[20px] font-bold">
              Como resolvemos o seu problema?
            </motion.h3>
            
            <motion.h1 variants={fadeIn} className="text-[48px] md:text-[56px] font-bold leading-[1] tracking-[-2px] mb-[20px]">
              Agilidade extrema. <br />
              <span className="text-brand-text">
                Sem interrupções.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-[18px] text-brand-muted mb-[32px] max-w-xl leading-[1.5]">
              Nossa equipe avalia, diagnostica e repara seu aparelho na mesma hora. Seja tela quebrada, bateria viciada ou falha em consoles, aplicamos microeletrônica avançada para você voltar ao mundo digital imediatamente.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-[16px]">
              <a href="https://wa.me/5541988548114" target="_blank" rel="noopener noreferrer" className="px-[24px] py-[12px] bg-brand-accent text-white font-semibold rounded-[100px] hover:opacity-90 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group text-[14px]">
                Solicitar Orçamento
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#servicos" className="px-[24px] py-[12px] bg-brand-card backdrop-blur-[12px] border border-brand-border text-white font-semibold rounded-[100px] hover:bg-white/5 active:scale-95 transition-all duration-200 flex items-center justify-center text-[14px]">
                Conhecer Especialidades
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AUTHORITY MARQUEE */}
      <div className="border-y border-brand-border bg-brand-card/30 backdrop-blur-sm py-6 overflow-hidden flex group">
        <div className="animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused] flex whitespace-nowrap gap-16 px-8 items-center text-brand-muted font-medium uppercase tracking-[1px] text-[13px]">
          <span className="flex items-center gap-3"><Clock className="w-4 h-4 text-brand-accent" /> TELA NOVA EM 30 MINUTOS</span>
          <span className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-brand-accent" /> +5.000 APARELHOS REPARADOS</span>
          <span className="flex items-center gap-3"><MapPin className="w-4 h-4 text-brand-accent" /> 3 LOJAS EM CURITIBA</span>
          <span className="flex items-center gap-3"><Star className="w-4 h-4 text-brand-accent" fill="currentColor" /> NOTA 4.5/5 NO GOOGLE</span>
          {/* Duplicate for infinite loop effect */}
          <span className="flex items-center gap-3"><Clock className="w-4 h-4 text-brand-accent" /> TELA NOVA EM 30 MINUTOS</span>
          <span className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-brand-accent" /> +5.000 APARELHOS REPARADOS</span>
        </div>
      </div>

      {/* DIFERENCIAIS - BENTO GRID */}
      <section id="diferenciais" className="py-[80px] md:py-[100px] px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-[40px]"
          >
            <h2 className="text-[40px] md:text-[56px] font-bold leading-[1] tracking-[-2px] mb-[20px]">Por que escolher <br/>a MPS Eletrônicos?</h2>
            <p className="text-brand-muted text-[18px] max-w-xl leading-[1.5]">Porque somos especialistas focados em resultados. Recuperamos a funcionalidade completa do seu aparelho em até 30 minutos com peças rigorosamente validadas, transparência absoluta nos orçamentos e uma política inegociável de qualidade superior. Não somos apenas conserto, somos tecnologia premium.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] auto-rows-[300px]">
             {/* Bento Item 1 */}
              <article className="md:col-span-2 relative rounded-[20px] overflow-hidden group bg-gradient-to-br from-[rgba(0,122,255,0.2)] to-transparent border border-brand-border backdrop-blur-[12px] p-[24px] flex flex-col justify-end">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />
                <img src="https://images.unsplash.com/photo-1592890288564-76628a30a657?q=80&w=1200&h=800&auto=format&fit=crop" alt="Agilidade" className="absolute right-0 top-0 h-full w-2/3 object-cover opacity-50 group-hover:scale-105 transition-transform duration-200 ease-out" />
                <div className="relative z-20">
                  <h3 className="text-[14px] uppercase tracking-[1px] text-brand-accent mb-[8px] font-bold">Agilidade Extrema</h3>
                  <div className="text-[32px] font-bold leading-tight mb-[4px]">30 Minutos</div>
                  <p className="text-brand-muted text-[14px] max-w-sm">Entendemos a sua urgência. Troca de telas e baterias resolvidas em até 30 minutos na mesma hora.</p>
                </div>
              </article>

            {/* Bento Item 2 */}
              <article className="relative rounded-[20px] overflow-hidden group bg-brand-card backdrop-blur-[12px] border border-brand-border p-[24px] flex flex-col justify-between">
                <div>
                  <ShieldCheck className="text-brand-accent w-6 h-6 mb-4" />
                  <h3 className="text-[14px] uppercase tracking-[1px] text-brand-accent mb-[8px] font-bold">Tradição e Autoridade</h3>
                  <div className="text-[32px] font-bold leading-tight mb-[4px]">+5.000</div>
                  <p className="text-brand-muted text-[14px]">Dispositivos reparados com sucesso em Curitiba.</p>
                </div>
              </article>

            {/* Bento Item 3 */}
              <article className="relative rounded-[20px] overflow-hidden group bg-brand-card backdrop-blur-[12px] border border-brand-border p-[24px] flex flex-col justify-between">
                <div>
                  <CreditCard className="text-brand-accent w-6 h-6 mb-4" />
                  <h3 className="text-[14px] uppercase tracking-[1px] text-brand-accent mb-[8px] font-bold">Condições Exclusivas</h3>
                  <div className="text-[32px] font-bold leading-tight mb-[4px]">12x sem juros</div>
                  <p className="text-brand-muted text-[14px]">Parcele em até 12x ou ganhe uma Película 3D de brinde nos pagamentos à vista.</p>
                </div>
              </article>

            {/* Bento Item 4 */}
              <article className="md:col-span-2 relative rounded-[20px] overflow-hidden group bg-brand-card backdrop-blur-[12px] border border-brand-border">
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-bg/90 via-brand-bg/50 to-transparent p-[24px] flex flex-col justify-center w-full md:w-2/3">
                  <h3 className="text-[14px] uppercase tracking-[1px] text-brand-accent mb-[8px] font-bold">Garantia e Transparência</h3>
                  <div className="text-[32px] font-bold leading-tight mb-[4px]">90 Dias</div>
                  <p className="text-[14px] text-brand-muted pr-4">Trabalhamos com a verdade. Oferecemos diagnósticos precisos e 90 dias de garantia total sobre os nossos serviços para sua paz de espírito.</p>
                </div>
                <img src="https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=1200&h=800&auto=format&fit=crop" alt="Garantia" className="absolute right-0 top-0 h-full w-full md:w-2/3 object-cover opacity-40 group-hover:scale-105 transition-transform duration-200 ease-out" />
              </article>
          </div>
        </div>
      </section>

      {/* SERVIÇOS & PRODUTOS */}
      <section id="servicos" className="py-[80px] md:py-[100px] px-10 border-t border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[40px] md:text-[56px] font-bold leading-[1] tracking-[-2px] mb-[20px]">Soluções completas<br/>para o seu mundo.</h2>
              <p className="text-brand-muted text-[18px] mb-[32px] leading-[1.5]">Desde a manutenção crítica daquele equipamento essencial até os acessórios que complementam seu lifestyle.</p>
              
              <div className="space-y-[32px]">
                {[
                  { icon: Smartphone, title: 'Reparo de Smartphones', desc: 'Especialistas em iPhones e principais marcas android. Troca de telas, baterias e reparo em placa.' },
                  { icon: Gamepad2, title: 'Consoles e Videogames', desc: 'Manutenção preventiva e corretiva para continuar no controle do jogo.' },
                  { icon: Watch, title: 'Smartwatches', desc: 'Proteção, películas e reparos para todas as gerações de relógios inteligentes.' },
                  { icon: Headphones, title: 'Áudio e Acessórios', desc: 'Das cases anti-impacto às películas 3D, temos equipamentos premium para você.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-[16px] group">
                    <div className="mt-1 w-[48px] h-[48px] rounded-[12px] bg-brand-card border border-brand-border flex items-center justify-center shrink-0 group-hover:border-brand-accent/30 group-hover:bg-brand-accent/10 transition-colors">
                      <item.icon className="w-5 h-5 text-brand-muted group-hover:text-brand-accent transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-[18px] font-bold text-brand-text mb-[4px]">{item.title}</h4>
                      <p className="text-brand-muted text-[14px]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[24px] overflow-hidden border border-brand-border"
            >
               <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 to-transparent z-10" />
               <img src="https://images.unsplash.com/photo-1512054502232-10a0a035d672?q=80&w=800&h=1000&auto=format&fit=crop" alt="Dispositivos Premium" className="w-full h-full object-cover" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION / DEPOIMENTOS */}
      <section id="depoimentos" className="py-[120px] px-10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-brand-accent/20 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-4xl mx-auto text-center bg-brand-card/50 backdrop-blur-[12px] border border-brand-border rounded-[24px] p-[40px] md:p-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-1 mb-[24px]">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-brand-accent" fill="currentColor" />)}
            </div>
            <h2 className="text-[24px] md:text-[36px] font-bold tracking-tight mb-[32px]">
              "Honestidade e precisão. Arrumaram meu celular na mesma hora em poucos minutos."
            </h2>
            <p className="text-brand-muted font-bold uppercase tracking-[1px] text-[12px] mb-[48px]">— Cliente Satisfeito MPS</p>
            
            <a href="https://wa.me/5541988548114" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-[24px] py-[12px] mx-auto bg-brand-accent text-white font-semibold rounded-[100px] hover:opacity-90 active:scale-95 transition-all duration-200 group text-[14px]">
              Faça seu Orçamento Online
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* LOJA E MAPA */}
      <section id="localizacao" className="py-[80px] md:py-[100px] px-10 border-t border-brand-border bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-[40px] text-center md:text-left"
          >
            <h2 className="text-[40px] md:text-[56px] font-bold leading-[1] tracking-[-2px] mb-[20px]">Onde consertar meu dispositivo<span className="text-brand-accent">?</span></h2>
            <p className="text-brand-muted text-[18px] max-w-xl leading-[1.5] mx-auto md:mx-0">
              A MPS Eletrônicos está localizada estrategicamente na R. Raposo Tavares, 20 no Pilarzinho, Curitiba. Nossa loja oferece estacionamento prático, laboratório transparente visível para sua total confiança e um ambiente premium projetado para maximizar a eficiência e rapidez do seu atendimento.
            </p>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="w-full h-[400px] md:h-[500px] rounded-[24px] overflow-hidden border border-brand-border bg-brand-card relative"
          >
            <iframe 
              src="https://maps.google.com/maps?q=R.%20Raposo%20Tavares,%2020%20-%20Pilarzinho,%20Curitiba%20-%20PR,%2082100-000&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-brand-border py-[32px] px-10 bg-brand-bg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-[24px]">
          <div className="text-[24px] tracking-[-1px] uppercase flex items-center gap-1.5">
            <span className="font-black text-brand-accent text-[26px]">MPS</span>
            <span className="font-semibold text-brand-text/90 tracking-[2px] text-[18px]">ELETRÔNICA</span>
          </div>
          
          <div className="text-brand-muted text-[13px] font-medium text-center md:text-left">
            &copy; 2026 Assistência Técnica Especializada e Venda de Acessórios para Dispositivos Móveis. O negócio foca no mercado de tecnologia e reparos rápidos.
          </div>
        </div>
      </footer>
      
      {/* WHATSAPP FLOAT BUTTON */}
      <div className="fixed bottom-[30px] right-[30px] z-[100] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
        <a 
          href="https://wa.me/5541988548114" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200 flex items-center justify-center"
          aria-label="Fale conosco no WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="0" fill="currentColor" className="w-[28px] h-[28px]">
            <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.966-.944 1.162-.175.195-.349.21-.646.06-.301-.15-1.265-.456-2.403-1.461-.883-.777-1.481-1.737-1.654-2.033-.171-.295-.018-.456.132-.606.135-.135.301-.345.451-.518.15-.171.201-.295.301-.495.1-.195.051-.375-.024-.525-.075-.15-.673-1.62-.924-2.206-.241-.579-.481-.501-.673-.51l-.571-.015c-.195 0-.525.075-.801.375-.27.3-1.041 1.02-1.041 2.49 0 1.47 1.066 2.895 1.216 3.09.15.195 2.1 3.203 5.087 4.493.711.307 1.266.491 1.697.629.714.227 1.365.195 1.881.118.575-.085 1.767-.721 2.017-1.42.249-.696.249-1.295.175-1.42-.074-.121-.274-.195-.575-.345z"></path>
            <path d="M20.52 3.449A11.965 11.965 0 0012 0C5.372 0 0 5.373 0 12h.001c0 2.122.553 4.195 1.605 6.015L.434 22c-.104.38.258.74.636.634l3.963-1.125a11.97 11.97 0 006.966 2.201 11.983 11.983 0 0011.999-12c0-3.203-1.248-6.21-3.478-8.261zM12 21.84c-1.84 0-3.64-.492-5.215-1.427l-.375-.224-2.671.758.784-2.628-.246-.39A10.093 10.093 0 012.015 12C2.015 6.486 6.501 2 12 2s9.985 4.486 9.985 10c0 5.514-4.485 10-9.985 10z"></path>
          </svg>
        </a>
      </div>

      {/* Global generic animations using arbitrary tailwind configurations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </main>
  );
}
