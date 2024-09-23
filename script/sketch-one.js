let angle = 0; 
let helixHeight = 800; 
let spacing = 12; 
let coil = 125;
let dotRadius = 6.5; 
let speed = 0.005; 

function setup() {
    createCanvas(300, 850); 
}

function draw() {

clear();
translate(width / 2, height / 2);

    for (let y = -helixHeight / 2; y <= helixHeight / 2; y += spacing) {

    let x1 = coil * sin(angle + y * 0.05);
    let x2 = -coil * sin(angle + y * 0.05); 

fill('whitesmoke'); 
noStroke();
ellipse(x1, y, dotRadius, dotRadius);

fill('whitesmoke'); 
noStroke();
ellipse(x2, y, dotRadius, dotRadius);

  }

  angle += speed;
}
