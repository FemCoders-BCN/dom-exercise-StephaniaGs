import {describe ,expect, it, beforeAll} from 'vitest'
import {JSDOM} from 'jsdom'
import { imgCard, itemTag, cartButton, feedbackButton } from '../src/js/app.js'

describe('car card test', () => {
  let dom;

  beforeAll(async () => {
    dom = await JSDOM.fromFile('./index.html', { runScripts: 'dangerously' });
    global.document = dom.window.document;
  });
});