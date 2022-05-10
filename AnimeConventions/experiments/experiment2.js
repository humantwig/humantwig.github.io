let theme;

function setup() {
createCanvas(500, 500);

theme = random([{name: "Speedlines", colors: ["#BB284E","#F72585", "#B5179E", "#7209B7","#560BAD", "#480CA8", "#3A0CA3","#3F37C9", "#4361EE", "#4895EF", "#4CC9F0"], background: "#112"},]);
background(33)
}

function draw() {
translate(width/2, height/2);
frameRate(25);
v = p5.Vector.random2D();
v.mult(random(50, 400));

strokeWeight(random(0.2, 3));
stroke(random(theme.colors));
line(0, 0, v.x, v.y)
}

function mousePressed() {
loop();
}

function mouseReleased() {
noLoop();
}