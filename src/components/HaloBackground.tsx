const HaloBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#010608]">
      {/* 1. Base Layer: Deep Radial Depth (Darker center than edges) */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: "radial-gradient(circle at 50% 50%, #02121a 0%, #010608 100%)" 
        }} 
      />

      {/* 2. LEFT refined halo: Lower opacity, wider blur */}
      <div
        className="
          absolute
          top-1/2
          left-[-15%]
          -translate-y-1/2
          w-[1000px]
          h-[1000px]
          rounded-full
          bg-cyan/[0.08] 
          blur-[180px]
          animate-halo
        "
      />

      {/* 3. RIGHT refined halo: Offset for asymmetry */}
      <div
        className="
          absolute
          top-[20%]
          right-[-10%]
          w-[800px]
          h-[800px]
          rounded-full
          bg-cyan/[0.05]
          blur-[150px]
          animate-float-slow
        "
      />

      {/* 4. The "Premium" Grid: Very low opacity + Radial Mask */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.12]" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(0, 229, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 229, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          // This mask is what makes it look premium: it fades out before hitting the edges
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)'
        }} 
      />

      {/* 5. Vignette: Softens the whole scene */}
      <div className="absolute inset-0 vignette bg-gradient-to-b from-transparent to-[#010608]/80" />
    </div>
  );
};

export default HaloBackground;