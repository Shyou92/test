import '../styles.css';

import {
  aFormulaElement,
  formulaFirstSpan,
  xFormulaElement,
  yFormulaElement,
  bFormulaElement,
  firstGroup,
  secondGroup,
  formulaDots,
  formulaSecondSpan,
  btnForward,
} from './config';

const firstGroupArray = Array.from(firstGroup);
const newAElement = aFormulaElement.cloneNode(true);
const newXElement = xFormulaElement.cloneNode(true);

formulaFirstSpan.prepend(newAElement);
formulaFirstSpan.append(newXElement);

firstGroupArray.map((item) => {
  item.style.opacity = 0;
});

newAElement.style.top = -99.5 + 'px';
newAElement.style.left = -51 + 'px';
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

const newaElement = aFormulaElement.cloneNode(true);
const newYElement = yFormulaElement.cloneNode(true);
const SecondGroupArray = Array.from(secondGroup);

formulaSecondSpan.prepend(newaElement);
formulaSecondSpan.append(newYElement);
formulaDots.remove();

Array.from(
  SecondGroupArray.map((item) => {
    item.style.opacity = 0;
  })
);

newaElement.style.top = -100 + 'px';
newaElement.style.left = -182 + 'px';
newYElement.style.top = -100 + 'px';
newYElement.style.left = 12 + 'px';

function animate1({ timing, draw, duration }) {
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

animate1({
  duration: 400,
  timing(timeFraction) {
    return timeFraction;
  },
  draw(formulaSecondSpan) {
    newaElement.style.top = formulaSecondSpan * 0 + 'px';
    newaElement.style.left = formulaSecondSpan * 0 + 'px';
    newaElement.style.transition = 0.8 + 's';
    newYElement.style.top = formulaSecondSpan * 0 + 'px';
    newYElement.style.left = formulaSecondSpan * 0 + 'px';
    newYElement.style.transition = 0.8 + 's';
    SecondGroupArray.map((item) => {
      item.style.opacity = 1;
      item.style.transition = 0.3 + 's';
    });
  },
});

btnForward.addEventListener('click', () => {
  animate({
    duration: 400,
    timing(timeFraction) {
      return timeFraction;
    },
    draw(formulaFirstSpan) {
      newAElement.style.top = formulaFirstSpan * 0;
      newAElement.style.left = formulaFirstSpan * 0;
      newAElement.style.transition = 0.8 + 's';
      newXElement.style.top = formulaFirstSpan * 0 + 'px';
      newXElement.style.left = formulaFirstSpan * 0 + 'px';
      newXElement.style.transition = 0.8 + 's';
      firstGroupArray.map((item) => {
        item.style.opacity = 1;
        item.style.transition = 0.3 + 's';
      });
    },
  });
});
