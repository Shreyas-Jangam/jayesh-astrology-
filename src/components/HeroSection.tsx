import { Phone, Star, Users, FileText, Home, Hash, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { ShivLinga, Trishul, Damru, Kalash, Diya, Bell, Conch, PoojaThali } from "./ReligiousIcons";
import { Card, CardContent } from "@/components/ui/card";

const FloatingParticle = ({ delay, left, size }: { delay: number; left: string; size: number }) => (
  <div
    className="absolute rounded-full bg-accent/60 animate-twinkle"
    style={{
      width: size,
      height: size,
      left,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      filter: 'blur(0.5px)',
    }}
  />
);

const OmSymbol = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <text x="50" y="65" textAnchor="middle" fontSize="50" className="fill-accent font-marathi">ॐ</text>
  </svg>
);

const services = [
  { title: "विवाह संबंधी पूजा व विधी", icon: "💒" },
  { title: "अभिषेक", icon: "🪔" },
  { title: "वास्तुशांती", icon: "🏠" },
  { title: "प्राणप्रतिष्ठा", icon: "🕉️" },
  { title: "व्रतवैकल्य", icon: "📿" },
  { title: "जन्मकुंडली तयार करणे", icon: "📜" },
  { title: "नक्षत्र व नवग्रह पूजा", icon: "⭐" },
  { title: "कालसर्प शांती", icon: "🐍" },
  { title: "सत्यनारायण पूजा", icon: "🙏" },
  { title: "घरातील शांतीसाठी विधी", icon: "☮️" },
];

const astrologyServices = [
  { icon: Star, title: "ज्योतिष विषयक सल्ला" },
  { icon: Users, title: "वधू-वर जुळवणी" },
  { icon: FileText, title: "जन्मपत्रिका (कुंडली)" },
  { icon: Home, title: "वास्तुशास्त्र सल्ला" },
  { icon: Hash, title: "अंकज्योतिष" },
];

const HeroSection = () => {
  // Reduce particles on mobile for better performance
  const particleCount = typeof window !== 'undefined' && window.innerWidth < 640 ? 10 : 20;
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    delay: Math.random() * 5,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1.5,
  }));

  return (
    <section className="relative min-h-screen overflow-x-hidden w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-secondary/90 to-secondary/95" />
      </div>

      {/* Animated Particles - Reduced for mobile performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}
      </div>

      {/* Decorative Om Symbols - Hidden on very small screens */}
      <div className="absolute top-2 left-2 xs:top-3 xs:left-3 sm:top-4 sm:left-4 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 animate-pulse-slow opacity-15 sm:opacity-20">
        <OmSymbol />
      </div>
      <div className="absolute top-2 right-2 xs:top-3 xs:right-3 sm:top-4 sm:right-4 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 animate-pulse-slow opacity-15 sm:opacity-20" style={{ animationDelay: '1s' }}>
        <OmSymbol />
      </div>
      
      {/* Religious Vidhi Materials - Responsive positioning, hidden on small mobile */}
      <div className="hidden sm:block absolute top-[12%] left-2 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 animate-float opacity-20 sm:opacity-25">
        <ShivLinga className="w-full h-full text-accent" />
      </div>
      <div className="hidden sm:block absolute top-[18%] right-2 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 animate-float-delayed opacity-20 sm:opacity-25">
        <Trishul className="w-full h-full text-accent" />
      </div>
      <div className="hidden md:block absolute top-[35%] left-1 sm:left-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 animate-pulse-slow opacity-15 sm:opacity-20">
        <Damru className="w-full h-full text-accent" />
      </div>
      <div className="hidden sm:block absolute top-[40%] right-1 sm:right-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 animate-float opacity-20 sm:opacity-25">
        <Kalash className="w-full h-full text-accent" />
      </div>
      <div className="hidden md:block absolute top-[55%] left-2 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 animate-pulse-slow opacity-20 sm:opacity-25">
        <Diya className="w-full h-full text-accent" />
      </div>
      <div className="hidden md:block absolute top-[60%] right-2 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 animate-float-delayed opacity-15 sm:opacity-20">
        <Bell className="w-full h-full text-accent" />
      </div>
      <div className="hidden lg:block absolute top-[75%] left-4 sm:left-6 w-6 h-6 sm:w-8 sm:h-8 animate-float opacity-15 sm:opacity-20">
        <Conch className="w-full h-full text-accent" />
      </div>
      <div className="hidden lg:block absolute top-[80%] right-4 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 animate-pulse-slow opacity-15 sm:opacity-20">
        <PoojaThali className="w-full h-full text-accent" />
      </div>

      {/* Rotating Mandala Background - Hidden on mobile for performance */}
      <div className="hidden md:block absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] opacity-5 animate-spin-slow pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <pattern id="mandala" patternUnits="userSpaceOnUse" width="40" height="40">
              <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
              <circle cx="20" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
            </pattern>
          </defs>
          <circle cx="100" cy="100" r="95" fill="url(#mandala)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 xxs:px-4 xs:px-5 sm:px-6 lg:px-8 py-4 xxs:py-4 xs:py-5 sm:py-6">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-primary-foreground mb-4 sm:mb-5 gap-2 sm:gap-0">
          <div className="text-center sm:text-left animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-accent animate-glow font-semibold leading-tight">
              ॥ श्री सिद्धिविनायक प्रसन्न ॥
            </p>
          </div>
          <div className="text-center sm:text-right animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-accent animate-glow font-semibold leading-tight">
              ॥ श्री खंडाळेश्वर प्रसन्न ॥
            </p>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center py-4 xs:py-5 sm:py-6 md:py-8 lg:py-10">
          <div className="inline-block mb-3 sm:mb-4 animate-scale-bounce">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 xs:w-10 sm:w-14 md:w-20 h-0.5 gradient-gold rounded-full" />
              <span className="text-accent text-base sm:text-lg md:text-xl animate-pulse-slow">✦</span>
              <div className="w-8 xs:w-10 sm:w-14 md:w-20 h-0.5 gradient-gold rounded-full" />
            </div>
          </div>
          
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-2 sm:mb-3 animate-slide-up drop-shadow-2xl leading-tight" style={{ animationDelay: '0.3s' }}>
            जयेश शशिकांत महंत
          </h1>
          <p className="text-xl xs:text-2xl sm:text-3xl md:text-4xl text-accent mb-4 sm:mb-5 animate-slide-up animate-glow font-semibold" style={{ animationDelay: '0.4s' }}>
            (स्वामी)
          </p>
          
          <div className="inline-block animate-scale-bounce" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 xs:w-10 sm:w-14 md:w-20 h-0.5 gradient-gold rounded-full" />
              <span className="text-accent text-base sm:text-lg md:text-xl animate-pulse-slow">✦</span>
              <div className="w-8 xs:w-10 sm:w-14 md:w-20 h-0.5 gradient-gold rounded-full" />
            </div>
          </div>
        </div>

        {/* Contact Numbers */}
        <div className="flex flex-col xxs:flex-col xs:flex-row justify-center items-center gap-2 xxs:gap-2.5 xs:gap-3 sm:gap-4 mb-6 sm:mb-8 animate-slide-up flex-wrap" style={{ animationDelay: '0.6s' }}>
          <a 
            href="tel:+919405057920" 
            className="group flex items-center gap-2 glass-effect rounded-full px-3 xxs:px-4 xs:px-5 sm:px-6 py-2.5 xxs:py-2.5 xs:py-2.5 sm:py-3 text-primary-foreground hover:bg-accent/30 transition-all duration-300 shadow-glow hover:shadow-glow-lg active:scale-95 sm:hover:scale-105 w-full xs:w-auto justify-center"
          >
            <div className="w-7 h-7 xxs:w-7 xxs:h-7 xs:w-8 xs:h-8 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
              <Phone className="w-3.5 h-3.5 xxs:w-3.5 xxs:h-3.5 xs:w-4 xs:h-4 text-secondary" />
            </div>
            <span className="text-sm xxs:text-base xs:text-base sm:text-lg font-semibold whitespace-nowrap">+91 94050 57920</span>
          </a>
          <a 
            href="tel:+918591164445" 
            className="group flex items-center gap-2 glass-effect rounded-full px-3 xxs:px-4 xs:px-5 sm:px-6 py-2.5 xxs:py-2.5 xs:py-2.5 sm:py-3 text-primary-foreground hover:bg-accent/30 transition-all duration-300 shadow-glow hover:shadow-glow-lg active:scale-95 sm:hover:scale-105 w-full xs:w-auto justify-center"
          >
            <div className="w-7 h-7 xxs:w-7 xxs:h-7 xs:w-8 xs:h-8 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
              <Phone className="w-3.5 h-3.5 xxs:w-3.5 xxs:h-3.5 xs:w-4 xs:h-4 text-secondary" />
            </div>
            <span className="text-sm xxs:text-base xs:text-base sm:text-lg font-semibold whitespace-nowrap">+91 85911 64445</span>
          </a>
          <a 
            href="https://wa.me/919405057920?text=नमस्कार%2C%20मला%20ज्योतिष%20सेवा%20बद्दल%20माहिती%20हवी%20आहे" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 glass-effect rounded-full px-3 xxs:px-4 xs:px-5 sm:px-6 py-2.5 xxs:py-2.5 xs:py-2.5 sm:py-3 text-primary-foreground hover:bg-green-500/30 transition-all duration-300 shadow-glow hover:shadow-glow-lg active:scale-95 sm:hover:scale-105 w-full xs:w-auto justify-center border-green-500/30"
          >
            <div className="w-7 h-7 xxs:w-7 xxs:h-7 xs:w-8 xs:h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-3.5 h-3.5 xxs:w-3.5 xxs:h-3.5 xs:w-4 xs:h-4 text-white" />
            </div>
            <span className="text-sm xxs:text-base xs:text-base sm:text-lg font-semibold whitespace-nowrap">WhatsApp</span>
          </a>
        </div>

        {/* Shivshakti Services Section */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-spiritual mb-2 sm:mb-3 animate-slide-up drop-shadow-lg">
              ॥ शिव आरंभ ॥
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-primary-foreground/80 animate-slide-up">
              खालील सेवा केल्या जातात
            </p>
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-2 sm:mt-3">
              <div className="w-10 xs:w-14 sm:w-20 md:w-24 h-0.5 gradient-spiritual rounded-full" />
              <span className="text-accent text-sm sm:text-base animate-pulse-slow">✦</span>
              <div className="w-10 xs:w-14 sm:w-20 md:w-24 h-0.5 gradient-spiritual rounded-full" />
            </div>
          </div>

          {/* Services Grid - Responsive for all screen sizes */}
          <div className="grid grid-cols-2 xxs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 xxs:gap-2 xs:gap-2.5 sm:gap-3 md:gap-4">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group bg-primary-foreground/10 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-all duration-300 active:scale-[0.98] sm:hover:scale-105 cursor-pointer animate-slide-up will-change-transform"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <CardContent className="p-2 xxs:p-2 xs:p-2.5 sm:p-3 md:p-4 text-center min-h-[80px] xxs:min-h-[85px] xs:min-h-[90px] sm:min-h-[100px] flex flex-col items-center justify-center">
                  <div className="text-xl xxs:text-2xl xs:text-2xl sm:text-3xl md:text-4xl mb-1.5 xxs:mb-2 xs:mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-[11px] xxs:text-xs xs:text-xs sm:text-sm md:text-base font-semibold text-primary-foreground group-hover:text-accent transition-colors leading-tight line-clamp-2 hyphens-auto">
                    {service.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Astrology Section */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <div className="text-center mb-4 sm:mb-6">
            <div className="inline-block">
              <span className="text-2xl xs:text-3xl sm:text-4xl mb-1 sm:mb-2 block animate-float">🔮</span>
            </div>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-2 sm:mb-3 animate-slide-up drop-shadow-lg">
              ज्योतिष विषयक माहिती
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-primary-foreground/70 px-2">
              ग्रहदोष निराकरणासाठी व जीवनातील समस्यांवर उपाय
            </p>
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-2 sm:mt-3">
              <div className="w-10 xs:w-14 sm:w-20 md:w-24 h-0.5 gradient-gold rounded-full" />
              <span className="text-accent text-sm sm:text-base animate-twinkle">⭐</span>
              <div className="w-10 xs:w-14 sm:w-20 md:w-24 h-0.5 gradient-gold rounded-full" />
            </div>
          </div>

          {/* Astrology Services Grid - Responsive for all screen sizes */}
          <div className="grid grid-cols-2 xxs:grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-2 xxs:gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 max-w-4xl mx-auto">
            {astrologyServices.map((service, index) => (
              <Card 
                key={index}
                className="group bg-primary-foreground/5 backdrop-blur-lg border-accent/20 hover:border-accent/50 transition-all duration-300 active:scale-[0.98] sm:hover:scale-105 animate-slide-up will-change-transform"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-2 xxs:p-2 xs:p-2.5 sm:p-3 md:p-4 text-center min-h-[70px] xxs:min-h-[75px] xs:min-h-[80px] sm:min-h-[90px] flex flex-col items-center justify-center">
                  <div className="w-7 h-7 xxs:w-8 xxs:h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-1 xxs:mb-1.5 xs:mb-1.5 sm:mb-2 rounded-lg sm:rounded-xl bg-gradient-to-br from-accent/80 to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="w-3.5 h-3.5 xxs:w-4 xxs:h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-secondary" />
                  </div>
                  <h3 className="text-[10px] xxs:text-[11px] xs:text-xs sm:text-sm md:text-base font-semibold text-primary-foreground group-hover:text-accent transition-colors leading-tight hyphens-auto">
                    {service.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Note */}
        <div className="text-center animate-slide-up pb-4 sm:pb-6">
          <div className="inline-block relative group w-full xs:w-auto max-w-full">
            <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-xl sm:rounded-2xl blur-md sm:blur-lg opacity-30 sm:opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse-slow" />
            <div className="relative glass-effect rounded-lg sm:rounded-xl px-3 xs:px-4 sm:px-6 md:px-8 py-3 xs:py-3.5 sm:py-4 md:py-5 shadow-glow-lg">
              <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                <span className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl animate-float">📜</span>
                <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-accent animate-glow">
                  जन्मपत्रिका बनवून मिळेल
                </p>
                <span className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl animate-float" style={{ animationDelay: '0.5s' }}>📜</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;