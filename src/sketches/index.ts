import p5 from 'p5';
import base from './base';
import grid from './grid';

export type Sketch = (p: p5) => void;

export const sketches: Record<string, Sketch> = {
  base,
  grid,
};

export const defaultSketchKey: keyof typeof sketches = 'base';
