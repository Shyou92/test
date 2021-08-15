import '../styles.css';

import {
  aFormulaElement,
  formulaSpan,
  cardFormulaAnswer,
  xFormulaElement,
  parentNodeAElement,
} from './config';

// formulaSpan.textContent = aFormulaElement.textContent;

const newAElement = aFormulaElement.cloneNode(true);
const newXElement = xFormulaElement.cloneNode(true);
formulaSpan.prepend(newAElement);
formulaSpan.append(newXElement);

newAElement.style.top = -99.5 + 'px';
newAElement.style.left = -40 + 'px';
newXElement.style.top = -99 + 'px';
newXElement.style.left = 64 + 'px';

function animate({ timing, draw, duration }) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

animate({
  duration: 400,
  timing(timeFraction) {
    return timeFraction;
  },
  draw(formulaSpan) {
    newAElement.style.top = formulaSpan * 0;
    newAElement.style.left = formulaSpan * 0;
    newAElement.style.transition = 0.8 + 's';
    newXElement.style.top = formulaSpan * 0 + 'px';
    newXElement.style.left = formulaSpan * 0 + 'px';
    newXElement.style.transition = 0.8 + 's';
  },
});
