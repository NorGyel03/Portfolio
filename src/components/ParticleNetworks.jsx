import React, { useEffect, useRef } from 'react';

export const ParticleNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particlesArray;
    let animationFrameId;

    // Get mouse position
    const mouse = {
      x: null,
      y: null,
      radius: (canvas.height / 80) * (canvas.width / 80),
    };

    window.addEventListener('mousemove', (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    // Particle class
    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#8C8C8C';
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    // Create particle array
    function init() {
      particlesArray = [];
      const numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (window.innerWidth - size * 2) + size * 2;
        const y = Math.random() * (window.innerHeight - size * 2) + size * 2;
        const directionX = Math.random() * 5 - 2.5;
        const directionY = Math.random() * 5 - 2.5;
        const color = '#8C8C8C';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    // Connect particles
    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const distance =
            ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
            ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - distance / 20000;
            ctx.strokeStyle = `rgba(140, 140, 140, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }
    
    // Resize event
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      mouse.radius = (canvas.height / 80) * (canvas.width / 80);
      init();
    };

    window.addEventListener('resize', handleResize);
    
    // Initial setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
      });
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
        ref={canvasRef} 
        style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            zIndex: -1, 
            background: '#0a0a14' 
        }}
    />
  );
};