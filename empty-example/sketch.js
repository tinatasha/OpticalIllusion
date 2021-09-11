function setup() {
  createCanvas(windowWidth, windowHeight);
  // Sets origin mode to be the rectangle's center
  rectMode(CENTER);
}

function draw() {
  background(0);

  // Moves rectangle to center of canvas
  translate(width / 2, height / 2);

  // Creates multiple rotating rectangles
  for (let x = 1000; x > 0; x -= 5) {
      // Makes height the same as width so it's a square
      let y = x;
      strokeWeight(0.2);
      rotate(radians(frameCount / 30));
      fill(255, x, 255);
      rect(0, 0, x, y);
  }
}