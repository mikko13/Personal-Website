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

  constructor(canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.baseSize = Math.random() * 4 + 1;
    this.size = this.baseSize;
    this.speedX = Math.random() * 0.3 - 0.15;
    this.speedY = Math.random() * 0.3 - 0.15;
    this.hue = 180; 
    this.originalColor = `hsla(${this.hue}, 100%, 50%, ${Math.random() * 0.3 + 0.1})`;
    this.color = this.originalColor;
    this.pulseSpeed = Math.random() * 0.02 + 0.01;
    this.pulseDirection = Math.random() > 0.5 ? 1 : -1;
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
    
    if (distance < mouse.radius) {
      const angle = Math.atan2(dy, dx);
      const force = (mouse.radius - distance) / mouse.radius;
      this.x -= Math.cos(angle) * force * 1;
      this.y -= Math.sin(angle) * force * 1;
      
      this.color = `hsla(${this.hue + 20}, 100%, 60%, ${Math.min(0.8, force + 0.3)})`;
    } else {
      this.size = this.baseSize + Math.sin(Date.now() * this.pulseSpeed) * 0.5 * this.pulseDirection;
      this.color = this.originalColor;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default Particle;