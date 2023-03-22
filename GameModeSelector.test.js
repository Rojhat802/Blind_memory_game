const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('Content Menu', () => {
  let dom;
  let select;

  beforeEach(() => {
    dom = new JSDOM(`
      <div id="menu-container" style="margin-top:100px;">
        <select id="menu" name="content-menu" autofocus>
          <option disabled selected>Please select one of the game-modes below</option>
          <option value="twelve_cards_Sounds">Sound on Sound. 12 cards</option>
          <option value="twelve_cards_Words">Word on Sound. 12 cards</option>
          <option value="sixteen_cards_Words">Word on Sound. 16 cards</option>
          <option value="sixteen_cards_Sounds">Sound on Sound. 16 cards</option>
        </select>
      </div>
    `);
    select = dom.window.document.querySelector('#menu');
  });

  afterEach(() => {
    dom.window.close();
  });

  test('Menu should have 4 options', () => {
    expect(select.options.length).toBe(5);
  });

  test('First option should be disabled and selected by default', () => {
    expect(select.options[0].disabled).toBe(true);
    expect(select.options[0].selected).toBe(true);
  });

  test('Menu options should have correct values and text', () => {
    expect(select.options[1].value).toBe('twelve_cards_Sounds');
    expect(select.options[1].textContent).toBe('Sound on Sound. 12 cards');

    expect(select.options[2].value).toBe('twelve_cards_Words');
    expect(select.options[2].textContent).toBe('Word on Sound. 12 cards');

    expect(select.options[3].value).toBe('sixteen_cards_Words');
    expect(select.options[3].textContent).toBe('Word on Sound. 16 cards');

    expect(select.options[4].value).toBe('sixteen_cards_Sounds');
    expect(select.options[4].textContent).toBe('Sound on Sound. 16 cards');
  });
});

describe('Play button', () => {
  let dom;
  let playBtn;
  let resetBtn;

  beforeEach(() => {
    dom = new JSDOM(`
      <div class="btn" id="play-reset-container">
        <button class="play-btn">Play</button>
        <button class="reset-btn hide">Reset</button>
      </div>
    `);
    playBtn = dom.window.document.querySelector('.play-btn');
    resetBtn = dom.window.document.querySelector('.reset-btn');
  });

  afterEach(() => {
    dom.window.close();
  });

  test('Play button should have correct text content', () => {
    expect(playBtn.textContent).toBe('Play');
  });

  test('Reset button should be hidden by default', () => {
    expect(resetBtn.classList.contains('hide')).toBe(true);
  });

  test('Clicking play button should hide the play button and show the reset button', () => {
    playBtn.click();
    expect(playBtn.classList.contains('hide')).toBe(false);
    expect(resetBtn.classList.contains('hide')).toBe(true);
  });

  test('Clicking reset button should hide the reset button and show the play button', () => {
    resetBtn.click();
    expect(resetBtn.classList.contains('hide')).toBe(true);
    expect(playBtn.classList.contains('hide')).toBe(false);
  });
});

