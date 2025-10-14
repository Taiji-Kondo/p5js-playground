import p5 from 'p5';
import { sketches, defaultSketchKey } from './sketches';

function getSketchKey(): string {
  const params = new URLSearchParams(window.location.search);
  const keyParam = params.get('sketch');
  if (keyParam && sketches[keyParam]) return keyParam;
  return defaultSketchKey as string;
}

function renderSelector(currentKey: string) {
  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = '';

  const info = document.createElement('div');
  info.style.margin = '12px 0';
  info.innerHTML = `<strong>Sketch:</strong> ${currentKey}`;
  app.appendChild(info);

  const list = document.createElement('div');
  list.style.display = 'flex';
  list.style.gap = '12px';
  list.style.marginBottom = '10px';

  Object.keys(sketches).forEach((key) => {
    const link = document.createElement('a');
    link.href = `?sketch=${encodeURIComponent(key)}`;
    link.textContent = (key === currentKey ? ' ●' : '') + key;
    list.appendChild(link);
  });

  app.appendChild(list);
}

const key = getSketchKey();
renderSelector(key);

const chosen = sketches[key] || sketches[defaultSketchKey];

new p5(chosen);
