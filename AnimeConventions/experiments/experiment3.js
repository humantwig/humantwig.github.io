let theme;

function setup() {
    createCanvas(500, 500);
    noLoop();

    theme = random([
        { name: "Night Sky", colors: ["#45217C", "#0799F2", "#FFFFFF"], background: "#150832" },
        { name: "Fireball", colors: ["#581845", "#900C3F", "#C70039", "#FF5733", "#FFC30F"], background: "#1A0633" },
    ]);
    background(33)
}

function draw() {
    translate(mouseX, mouseY);

    let v = createVector(random(-400, 400), random(-400, 400));

    strokeWeight(random([1], [4]));
    stroke(random(theme.colors));
    line(0, 0, v.x, v.y)
}

function mousePressed() {
    loop();
}

function mouseReleased() {
    noLoop();
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {

    }
}