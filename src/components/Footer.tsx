import { Phone, Heart, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-secondary py-6 xxs:py-8 xs:py-10 sm:py-12 md:py-16 overflow-hidden w-full">
      {/* Decorative elements - hidden on very small screens for performance */}
      <div className="absolute inset-0 opacity-10 hidden xs:block">
        <div className="absolute top-0 left-1/4 w-16 xs:w-20 sm:w-32 h-16 xs:h-20 sm:h-32 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-16 xs:w-20 sm:w-32 h-16 xs:h-20 sm:h-32 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 xxs:px-4 xs:px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Main content */}
        <div className="text-center mb-5 xxs:mb-6 xs:mb-6 sm:mb-8 md:mb-10">
          <div className="inline-block mb-2 xxs:mb-3 xs:mb-3 sm:mb-4 md:mb-6">
            <span className="text-2xl xxs:text-3xl xs:text-4xl sm:text-5xl animate-pulse-slow">🙏</span>
          </div>
          <h3 className="text-xl xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-foreground mb-2 sm:mb-3 animate-slide-up leading-tight">
            जयेश शशिकांत महंत (स्वामी)
          </h3>
          <p className="text-sm xxs:text-base xs:text-lg sm:text-xl md:text-2xl text-secondary-foreground/70 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            धार्मिक विधी व ज्योतिष सेवा
          </p>
        </div>

        {/* Contact buttons */}
        <div className="flex flex-col xxs:flex-col xs:flex-row justify-center items-center gap-2 xxs:gap-3 xs:gap-4 sm:gap-5 mb-6 xxs:mb-8 xs:mb-8 sm:mb-10 md:mb-12 flex-wrap">
          <a 
            href="tel:+919405057920"
            className="group flex items-center gap-2 sm:gap-3 bg-secondary-foreground/10 hover:bg-accent/20 rounded-full px-3 xxs:px-4 xs:px-5 sm:px-6 py-2.5 xxs:py-2.5 xs:py-2.5 sm:py-3 transition-all duration-300 hover:shadow-glow active:scale-[0.98] sm:hover:scale-105 w-full xs:w-auto justify-center"
          >
            <div className="w-7 h-7 xxs:w-8 xxs:h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
              <Phone className="w-3.5 h-3.5 xxs:w-4 xxs:h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-secondary" />
            </div>
            <span className="text-sm xxs:text-base xs:text-base sm:text-lg md:text-xl text-secondary-foreground whitespace-nowrap font-semibold">+91 94050 57920</span>
          </a>
          <a 
            href="tel:+918591164445"
            className="group flex items-center gap-2 sm:gap-3 bg-secondary-foreground/10 hover:bg-accent/20 rounded-full px-3 xxs:px-4 xs:px-5 sm:px-6 py-2.5 xxs:py-2.5 xs:py-2.5 sm:py-3 transition-all duration-300 hover:shadow-glow active:scale-[0.98] sm:hover:scale-105 w-full xs:w-auto justify-center"
          >
            <div className="w-7 h-7 xxs:w-8 xxs:h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
              <Phone className="w-3.5 h-3.5 xxs:w-4 xxs:h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-secondary" />
            </div>
            <span className="text-sm xxs:text-base xs:text-base sm:text-lg md:text-xl text-secondary-foreground whitespace-nowrap font-semibold">+91 85911 64445</span>
          </a>
          <a 
            href="https://wa.me/919405057920?text=नमस्कार%2C%20मला%20ज्योतिष%20सेवा%20बद्दल%20माहिती%20हवी%20आहे"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 sm:gap-3 bg-green-500/20 hover:bg-green-500/30 rounded-full px-3 xxs:px-4 xs:px-5 sm:px-6 py-2.5 xxs:py-2.5 xs:py-2.5 sm:py-3 transition-all duration-300 hover:shadow-glow active:scale-[0.98] sm:hover:scale-105 w-full xs:w-auto justify-center border border-green-500/30"
          >
            <div className="w-7 h-7 xxs:w-8 xxs:h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-3.5 h-3.5 xxs:w-4 xxs:h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-sm xxs:text-base xs:text-base sm:text-lg md:text-xl text-secondary-foreground whitespace-nowrap font-semibold">WhatsApp</span>
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-2 xxs:gap-2 xs:gap-3 sm:gap-4 mb-4 xxs:mb-6 xs:mb-6 sm:mb-8 md:mb-10">
          <div className="w-12 xxs:w-16 xs:w-20 sm:w-24 h-0.5 gradient-gold rounded-full" />
          <span className="text-accent text-sm xxs:text-base xs:text-base sm:text-lg md:text-xl animate-pulse-slow">✦</span>
          <div className="w-12 xxs:w-16 xs:w-20 sm:w-24 h-0.5 gradient-gold rounded-full" />
        </div>

        {/* Bottom message */}
        <div className="text-center px-2">
          <p className="text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl text-secondary-foreground/80 mb-2 xxs:mb-3 xs:mb-3 sm:mb-4 leading-relaxed flex flex-col xxs:flex-row xs:flex-row items-center justify-center gap-1 xxs:gap-0 xs:gap-0 flex-wrap">
            <span className="inline-block">॥ श्री सिद्धिविनायक प्रसन्न ॥</span>
            <span className="mx-1 sm:mx-2 hidden xxs:inline xs:inline">•</span>
            <span className="inline-block">॥ श्री खंडाळेश्वर प्रसन्न ॥</span>
          </p>
          <p className="text-[10px] xxs:text-xs xs:text-sm sm:text-base text-secondary-foreground/50 flex items-center justify-center gap-1 xxs:gap-1.5 xs:gap-1.5 sm:gap-2 flex-wrap">
            Made with <Heart className="w-3 h-3 xxs:w-4 xxs:h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-accent fill-accent animate-pulse" /> for spiritual guidance by SJ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;