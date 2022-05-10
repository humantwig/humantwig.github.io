const particles = [];
let scale, theme, graphics, themeWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  scale = random([2e9]);
  
  theme = random([{name: "Speedlines", colors: ["#BB284E","#F72585", "#B5179E", "#7209B7","#560BAD", "#480CA8", "#3A0CA3","#3F37C9", "#4361EE", "#4895EF", "#4CC9F0"], background: "#112"},]);
  
  graphics = createGraphics(width, height);
  graphics.background(theme.background);
  graphics.noStroke();
  for (let i = 0; i < 100; i ++) particles.push(new Particle());
}

function draw() {
for (const p of particles) p.update();
for (const p of particles) p.draw();
image(graphics, 0, 0);
}

class Particle {
constructor(x, y) {
this.pos = new p5.Vector(x || random(-50, width + 50), y || random(-50, height + 50));
this.color = random(theme.colors);
this.r = random([1],[10]);
}

update() {
    const dir = noise(this.pos.x / scale, this.pos.y / scale) * scale;
    this.pos.add(Math.cos(dir) / 2, Math.sin(dir) / 2);
}

draw() {
    graphics.fill(this.color);
    graphics.circle(this.pos.x, this.pos.y, this.r);
}
}