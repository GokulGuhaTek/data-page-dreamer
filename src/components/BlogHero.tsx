import { useEffect, useRef } from "react";

const BlogHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animated gradient background
    let time = 0;
    const animate = () => {
      time += 0.005;
      
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      
      const hue1 = (time * 20) % 360;
      const hue2 = (time * 20 + 60) % 360;
      
      gradient.addColorStop(0, `hsl(${hue1}, 70%, 50%)`);
      gradient.addColorStop(0.5, `hsl(${hue2}, 60%, 45%)`);
      gradient.addColorStop(1, `hsl(${hue1 + 30}, 65%, 40%)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative h-[400px] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in">
          GuhaTek Blog
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Insights, innovations, and industry trends from our team
        </p>
      </div>
      
      {/* Pill Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <nav className="flex gap-2 bg-card/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-border">
          <a
            href="#latest"
            className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Latest
          </a>
          <a
            href="#trending"
            className="px-6 py-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Trending
          </a>
          <a
            href="#featured"
            className="px-6 py-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Featured
          </a>
        </nav>
      </div>
    </section>
  );
};

export default BlogHero;
