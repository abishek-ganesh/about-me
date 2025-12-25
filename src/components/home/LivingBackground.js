import React, { useEffect, useRef } from 'react';
import '../../static/css/main.scss';

const LivingBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(window.innerWidth / 10, 100); // Responsive count
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5, // 0.5 to 2.5px
          dx: (Math.random() - 0.5) * 0.2, // Slow horizontal drift
          dy: (Math.random() - 0.5) * 0.2, // Slow vertical drift
          opacity: Math.random() * 0.5 + 0.1, // Random opacity
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Check theme (this assumes a data-theme attribute on body or html, 
      // or we can check computed style of a known element if needed. 
      // For now, let's check if the body has 'dark-mode' class or similar, 
      // but simpler is to check a CSS variable or just default to white/light gray 
      // and let opacity handle the blend with background color).
      
      // Actually, to be truly theme aware, we can check the computed background color 
      // or just use a color that works on both (like white with low opacity).
      // However, the requirement is "Theme Aware".
      // Let's check if we are in dark mode via class on body
      const isDarkMode = document.body.classList.contains('dark-mode') || 
                         document.body.classList.contains('dark'); 
      
      ctx.fillStyle = isDarkMode ? 'rgba(255, 255, 255, ' : 'rgba(0, 0, 0, ';

      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode 
          ? `rgba(255, 255, 255, ${p.opacity})` 
          : `rgba(0, 0, 0, ${p.opacity * 0.5})`; // Darker particles for light mode
        ctx.fill();

        // Update position
        p.x += p.dx;
        p.y += p.dy;

        // Wrap around screen
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    initParticles();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="living-background-canvas"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
};

export default LivingBackground;
