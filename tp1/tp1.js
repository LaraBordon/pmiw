//Lara Bordon
//comisión 1
//https://youtu.be/XJ4NJphzX7I
let imagen14;
let movRect = 0;
let baja = true;
let tamCuadrado = 25;

function preload() {
  imagen14 = loadImage('data/imagen14.jpg');
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(180, 180, 180);
  image(imagen14, 0, 0, height, width / 2);
  repeticiones();
}

function repeticiones() {
  for (let x = 424; x < width; x = x + 50) {
    strokeWeight(0);
    print(suma(2, 5));
    for (let y = 0; y < height; y = y + 50) {
      fill(0);
      cuadro(x, y, tamCuadrado, 50);
      fill(255);

      if (mouseY > y && mouseY < y + 50) {
        let r = map(mouseX, 0, width, 0, 255);
        let g = map(mouseY, 0, height, 0, 255);

        fill(r, g, 0);

        rect(x - movRect, y + movRect * 1.1, tamCuadrado - 2, tamCuadrado - 2);

        if (baja) {
          movRect = movRect + 0.009;
        } else {
          movRect = movRect - 0.009;
        }

        if (movRect >= 25) {
          baja = false;
        }
        if (movRect < 0) {
          baja = true;
        }
      } else {
        rect(suma(x, 2), y, tamCuadrado - 2, tamCuadrado - 2);
      }
    }
  }
}

function suma(i, u) {
  return i + u;
}

function cuadro(x, y, u, j) {
  rect(x, y, u, u);
  rect(x - u, y + u, u, u);
  triangle(x - u, y + u, x, y + u, x, y);
  triangle(x, y + u, x, y + j, x + u, y + u);
}

function keyPressed() {
  movRect = 0;
}
