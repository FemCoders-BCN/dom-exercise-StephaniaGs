import {describe ,expect, it, beforeAll,} from 'vitest'
import {JSDOM} from 'jsdom'
import { changeColor, showMessage } from '../src/js/app';

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
      });
})

it('changeColor should change the style of the productImage, itemTag and cartButton', () => {
  const productImage = document.createElement('div')
  productImage.className = 'product-image'
  document.body.appendChild(productImage)

  const itemTag = document.createElement('h3')
  document.body.appendChild(itemTag)

  const cartButton = document.createElement('button')
  cartButton.id = 'button'
  document.body.appendChild(cartButton)
  const color = 'red'
  changeColor(color)
  expect(productImage.style.backgroundImage).toBe(`url("${colors[color].image}")`)
  expect(itemTag.style.backgroundColor).toBe(colors[color].color)
  expect(cartButton.style.backgroundColor).toBe(colors[color].color)
})

it('showMessage should display and hide the whiteButton with the message', () => {
  const whiteButton = document.createElement('div')
  whiteButton.id = 'white-button'
  document.body.appendChild(whiteButton)
  const message = 'Test message'
  showMessage(message)
  expect(whiteButton).toHaveTextContent(message)
  expect(whiteButton).toHaveStyle({ display: 'block' })
  setTimeout(() => {
    expect(whiteButton).toHaveStyle({ display: 'none' })
  }, 2000)
})