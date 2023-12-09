import {describe ,expect, it, beforeAll} from 'vitest'
import {JSDOM} from 'jsdom'
import { changeColor } from '../src/js/app';

describe('APP', () => {
    let dom;
    beforeAll(async () => {
        dom = await JSDOM.fromFile('./index.html', { 
          runsources:"usable",
          runScripts: 'dangerously',
        });
      });
      it("should render css", async () => {
        let document = dom.window.document;
        let link = document.querySelector("link");
        console.log(link.href);
        expect(link.href).toMatch(/\/src\/css\/style.css$/);
      });
})
it("El color cambia correctamente al pasar un argumento válido", () => {
  changeColor("red");
  expect(productImage.style.backgroundImage).toBe(`url("${colors.red.image}")`);
  expect(itemTag.style.backgroundColor).toBe(colors.red.color);
  expect(cartButton.style.backgroundColor).toBe(colors.red.color);
  expect(feedbackButton.style.backgroundColor).toBe(colors.red.color);
  expect(newPrice.textContent).toBe(colors.red.price);
  expect(oldPrice.textContent).toBe(
    `$${Math.round(
      parseInt(colors.red.price.replace("$", "").replace(",", "")) * 1.05
    ).toLocaleString()}`
  );

  changeColor("black");
  expect(productImage.style.backgroundImage).toBe(
    `url("${colors.black.image}")`
  );
  expect(itemTag.style.backgroundColor).toBe(colors.black.color);
  expect(cartButton.style.backgroundColor).toBe(colors.black.color);
  expect(feedbackButton.style.backgroundColor).toBe(colors.black.color);
  expect(newPrice.textContent).toBe(colors.black.price);
  expect(oldPrice.textContent).toBe(
    `$${Math.round(
      parseInt(colors.black.price.replace("$", "").replace(",", "")) * 1.05
    ).toLocaleString()}`
  );
  changeColor("gray");
  expect(productImage.style.backgroundImage).toBe(`url("${colors.gray.image}")`);
  expect(itemTag.style.backgroundColor).toBe(colors.gray.color);
  expect(cartButton.style.backgroundColor).toBe(colors.gray.color);
  expect(feedbackButton.style.backgroundColor).toBe(colors.gray.color);
  expect(newPrice.textContent).toBe(colors.gray.price);
  expect(oldPrice.textContent).toBe(
    `$${Math.round(
      parseInt(colors.gray.price.replace("$", "").replace(",", "")) * 1.05
    ).toLocaleString()}`
  );
});

it("El color no cambia al pasar un argumento inválido", () => {
  const currentColor = itemTag.style.backgroundColor;
  changeColor("blue");
  expect(itemTag.style.backgroundColor).toBe(currentColor);
});
