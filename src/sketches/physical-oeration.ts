import p5 from 'p5';

const physicalOperation = (p: p5) => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.background(0)
  };

  p.draw = () => {};
};

export default physicalOperation;
