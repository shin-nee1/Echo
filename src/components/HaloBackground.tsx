const HaloBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#02080a]">
      {/* 1. BASE LAYER: The Halos (Glows behind the grid) */}
      <div
        className="
          absolute
          top-1/2
          left-[-20%]
          -translate-y-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-cyan/20
          blur-[260px]
          animate-halo
        "
      />

      <div
        className="
          absolute
          top-1/2
          right-[-20%]
          -translate-y-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-cyan/20
          blur-[260px]
          animate-halo
        "
      />

      {/* 2. MIDDLE LAYER: The Grid (Moved here so halos light it up) */}
      {/* Opacity boosted to 0.15 for high-end visibility */}
      <div className="absolute inset-0 bg-grid opacity-[0.15] z-0" />

      {/* 3. TOP LAYER: The Vignette (Fades the grid into the edges) */}
      <div className="absolute inset-0 vignette z-10" />

      {/* Subtle center depth (Optional: placed on top for center focus) */}
      <div
        className="
          absolute
          top-[20%]
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[600px]
          rounded-full
          bg-cyan/10
          blur-[220px]
        "
      />
    </div>
  );
};

export default HaloBackground;