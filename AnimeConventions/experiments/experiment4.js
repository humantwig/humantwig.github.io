const rays = [];

let theme, graphics, speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  graphics = createGraphics(width, height);
  theme = random([
    { name: "Night Sky", colors: ["#45217C", "#0799F2", "#FFFFFF"] },
    { name: "Fireball", colors: ["#581845", "#900C3F", "#C70039", "#FF5733", "#FFC30F"] },
    { name: "Oceania", colors: ["#77C39C", "#2F5E36", "#55ABA5", "#2D7063", "#3F6829", "#44A872", "#215964", "#CDEDAE"] },
    { name: "Plankton", colors: ["#BCE784", "#5DD39E", "#348AA7", "#525174", "#513B56"] },
    { name: "Fireflies", colors: ["#B7F0AD", "#D2FF96", "#EDDF7A", "#E8D33F", "#D17B0F"] },
    { name: "Green Planet", colors: ["#91CB3E", "#4F772D", "#31572C", "#CEFF1A"] },
    { name: "Red Planet", colors: ["#813405", "#D1462F", "#E4572E", "#EE964B"] },
    { name: "Autumn", colors: ["#D62828", "#F77F00", "#FCBF49", "#EAE2B7"] },
    { name: "Icefire", colors: ["#0067B2", "#066DE0", "#3AC5FF", "#81FFFA"] },
    { name: "Parrot", colors: ["#1BE7FF", "#6EEB83", "#E4FF1A", "#E8AA14", "#FF5714"] },
    { name: "Velvet", colors: ["#38040E", "#640D14", "#800E13", "#AD2831"] },
    { name: "Dreamland", colors: ["#E8FFF1", "#BAFFE9", "#DF89F9", "#472CAA", "#47AA2C", "#2406FC"] },
    { name: "Desertscape", colors: ["#3A4A4A", "#FEED5A", "#DA9D3B", "#7E4F3E", "#E3AF80"] },
    { name: "Magma", colors: ["#3A0300", "#5D0D02", "#EB4700", "#FF9F01", "#CD5201"] },
    { name: "Magma", colors: ["#3A0300", "#5D0D02", "#EB4700", "#FF9F01", "#CD5201"] },
    { name: "Amethyst", colors: ["#7B66DE", "#9381E4", "#AB9DEA", "#C3B9F0", "#DBD5F6"] },
    { name: "OpenProcessing", colors: ["#73C1E8", "#73494A", "#F54949"] },
    { name: "Goldrush", colors: ["#151515", "#E6E9F1", "#EDB009", "#939496", "#717372"] },
    { name: "Lava", colors: ["#990000", "#D81515", "#EA2C2C", "#FFE500", "#FFED2D"] },
    { name: "Dragonfly", colors: ["#01BAEF", "#79CC33", "#757575", "#FDFDFD"] },
    { name: "Dragonfruit", colors: ["#B41059", "#EFF7F7", "#FEA4D0", "#91C66C", "#77B802"] },
    { name: "Royalty", colors: ["#8E371C", "#E58434", "#DDAC39", "#8A036F", "#231616"] },
  ]);

  // for(let i=0; i<100; i++)rays.push(new Ray());

  background(22);
}

function draw() {
  rays.push(new Ray());
  for (const r of rays) r.update();
  for (const r of rays) r.draw();
  image(graphics, 0, 0);
  if (rays.length > 10) rays.splice();
  pop();
  ellipse(width / 2, height / 2, 20, 20);
  fill(22)
  noStroke();
}

class Ray {
  constructor() {
    this.themeColor = random(theme.colors);
    this.v = p5.Vector.random2D();
    this.m = random(1, 5);
    this.v.mult(this.m);
    this.s = random(0.2, 5);
    // this.speed
  }
  update() {
    this.m += 5;
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

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}