const rays = [];
let cut = 0;

let theme, graphics, speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  theme = random([
    {
      name: "Night Sky",
      colors: ["#45217C", "#0799F2", "#FFFFFF"],
      background: "#150832",
    },
  ]);
  graphics = createGraphics(width, height);
  graphics = background(theme.background);
  frameRate(30);
}

function draw() {
  push();
  rays.push(new Ray());
  for (const r of rays) r.update();
  for (const r of rays) r.draw();
  image(graphics, 0, 0);
  if (rays.length === 80) {
    cut = cut + 1;
    rays.splice(rays);
    if (cut === 2) {
      noLoop();
    }
  }
  pop();
  console.log(theme.name);
}

class Ray {
  constructor() {
    this.themeColor = random(theme.colors);
    this.v = p5.Vector.random2D();
    this.m = random(1, 5);
    this.v.mult(this.m);
    this.s = random(0.2, 5);
  }
  update() {
    this.m += 3;
    this.v.setMag(this.m);
  }

  draw() {
    graphics.push();
    graphics.translate(width / 2, height / 2);
    graphics.strokeWeight(this.s);
    graphics.stroke(this.themeColor);
    graphics.line(0, 0, this.v.x, this.v.y);
    graphics.pop();
  }
}