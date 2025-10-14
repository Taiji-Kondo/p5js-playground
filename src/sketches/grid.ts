import p5 from 'p5';

const grid = (p: p5) => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.background(20);
    p.noStroke();
  };

  let t = 0;
  p.draw = () => {
    const cols = 10;
    const rows = 10;
    const w = p.width / cols;
    const h = p.height / rows;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const n = p.noise(i * 0.2, j * 0.2, t);
        p.fill(100 + 155 * n, 80, 180 + 75 * n);
        p.rect(i * w, j * h, w, h);
      }
    }
    t += 0.01;
  };
};

export default grid;
