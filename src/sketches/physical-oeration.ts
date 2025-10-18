import p5 from 'p5';

const physicalOperation = (p: p5) => {
  const ellipseSize = 50;
  const ellipseSizeHalf = ellipseSize / 2;

  let positionX = ellipseSizeHalf
  let speed = 1

  p.setup = () => {
    p.createCanvas(800, 800);
  };

  p.draw = () => {
    p.background(240, 240, 240)

    p.fill(255, 255, 0)
    p.ellipse(positionX, p.height / 2, ellipseSize, ellipseSize)

    // Loop
    // if (positionX > p.width + ellipseSizeHalf) {
    //   positionX = 0 - ellipseSizeHalf
    // }
    // if (positionX < 0 - ellipseSizeHalf) {
    //   positionX = p.width + ellipseSizeHalf
    // }
    // positionX += speed

    // Bound
    if (positionX > p.width - ellipseSizeHalf || positionX < ellipseSizeHalf) {
      speed -= speed * 2
    }

    positionX += speed

  };

  p.keyPressed = () => {
    if (p.key === 'ArrowRight') {
      speed += 1
    }
    if (p.key === 'ArrowLeft') {
      speed -= 1
    }
  }
};

export default physicalOperation;
