const IOTALogo = () => {
  return (
    <div className="relative z-10 flex items-center justify-center animate-fade-in">
      <div className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black tracking-wider animate-glow">
        <span className="inline-block bg-gradient-primary bg-clip-text text-transparent animate-float">
          I
        </span>
        <span className="inline-block bg-gradient-primary bg-clip-text text-transparent animate-float" style={{ animationDelay: '0.2s' }}>
          O
        </span>
        <span className="inline-block bg-gradient-primary bg-clip-text text-transparent animate-float" style={{ animationDelay: '0.4s' }}>
          T
        </span>
        <span className="inline-block bg-gradient-primary bg-clip-text text-transparent animate-float" style={{ animationDelay: '0.6s' }}>
          A
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl animate-glow"></div>
    </div>
  );
};

export default IOTALogo;