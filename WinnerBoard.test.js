const { JSDOM } = require('jsdom');

describe('Memory Game', () => {
  let dom;

  beforeAll(() => {
    dom = new JSDOM(`
      <html>
        <body>
          <div class="btn"  aria-details="Press ALT + G to play again" id="play-again-container">
            <button class="play-again-btn" accesskey="g">Play Again</button>
          </div>

          <div id="top-five-container" aria-haspopup="listbox">
            <h3 id="top-five-heading">Best Times:</h3>
            <ul id="winners-board">
              <li class="placing" tabinddex="1">1st:<span id="first"></span></li>
              <li class="placing"tabinddex="1">2nd: <span id="second">--------------</span></li>
              <li class="placing"tabinddex="1">3rd: <span id="third">--------------</span></li>
              <li class="placing"tabinddex="1">4th: <span id="fourth">--------------</span></li>
              <li class="placing"tabinddex="1">5th: <span id="fifth">--------------</span></li>
            </ul>
          </div>
        </body>
      </html>
    `);
    global.window = dom.window;
    global.document = dom.window.document;
  });

  afterAll(() => {
    dom.window.close();
  });

  test('Play Again button is present and has the correct accesskey', () => {
    const playAgainBtn = document.querySelector('.play-again-btn');
    expect(playAgainBtn).toBeTruthy();
    expect(playAgainBtn.accessKey).toBe('g');
  });

  test('Best Times heading is present and has the correct text', () => {
    const bestTimesHeading = document.querySelector('#top-five-heading');
    expect(bestTimesHeading).toBeTruthy();
    expect(bestTimesHeading.textContent).toBe('Best Times:');
  });

  test('Winners board is present and has the correct placements and placeholders', () => {
    const winnersBoard = document.querySelector('#winners-board');
    expect(winnersBoard).toBeTruthy();
    const placements = winnersBoard.querySelectorAll('.placing');
    expect(placements.length).toBe(5);
    expect(placements[0].textContent).toBe('1st:');
    expect(placements[1].textContent).toBe('2nd: --------------');
    expect(placements[2].textContent).toBe('3rd: --------------');
    expect(placements[3].textContent).toBe('4th: --------------');
    expect(placements[4].textContent).toBe('5th: --------------');
  });
});
