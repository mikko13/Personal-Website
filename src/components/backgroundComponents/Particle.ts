class Particle {
  x: number;
  y: number;
  size: number;
  baseSize: number;
  speedX: number;
  speedY: number;
  color: string;
  pulseSpeed: number;
  pulseDirection: number;
  originalColor: string;
  hue: number;
  glowIntensity: number;
  twinklePhase: number;

  constructor(canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.baseSize = Math.random() * 3 + 0.5;
    this.size = this.baseSize;
    this.speedX = Math.random() * 0.4 - 0.2;
    this.speedY = Math.random() * 0.4 - 0.2;
    this.hue = 180 + Math.random() * 40 - 20; // Vary cyan hue slightly
    this.originalColor = `hsla(${this.hue}, 100%, 50%, ${Math.random() * 0.4 + 0.2})`;
    this.color = this.originalColor;
    this.pulseSpeed = Math.random() * 0.02 + 0.01;
    this.pulseDirection = Math.random() > 0.5 ? 1 : -1;
    this.glowIntensity = Math.random() * 0.3 + 0.1;
    this.twinklePhase = Math.random() * Math.PI * 2;
  }

  update(canvas: HTMLCanvasElement, mouse: { x: number; y: number; radius: number }) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > canvas.width) this.x = 0;
    else if (this.x < 0) this.x = canvas.width;
    if (this.y > canvas.height) this.y = 0;
    else if (this.y < 0) this.y = canvas.height;

    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Enhanced mouse interaction
    if (distance < mouse.radius) {
      const angle = Math.atan2(dy, dx);
      const force = (mouse.radius - distance) / mouse.radius;
      this.x -= Math.cos(angle) * force * 2;
      this.y -= Math.sin(angle) * force * 2;
      
      // Enhanced glow on interaction
      this.color = `hsla(${this.hue + 30}, 100%, 70%, ${Math.min(0.9, force + 0.5)})`;
      this.glowIntensity = Math.min(1, force + 0.3);
    } else {
      // Subtle pulsing and twinkling
      const pulse = Math.sin(Date.now() * this.pulseSpeed) * 0.3;
      const twinkle = Math.sin(Date.now() * 0.003 + this.twinklePhase) * 0.2;
      this.size = this.baseSize + pulse + twinkle;
      this.color = this.originalColor;
      this.glowIntensity = Math.random() * 0.3 + 0.1;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    // Draw glow effect
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.size * 4
    );
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(0.3, `hsla(${this.hue}, 100%, 50%, ${this.glowIntensity * 0.3})`);
    gradient.addColorStop(1, 'hsla(180, 100%, 50%, 0)');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
    ctx.fill();

    // Draw core particle
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default Particle;