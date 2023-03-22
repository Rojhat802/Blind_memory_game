const { JSDOM } = require('jsdom');

describe('Instructions', () => {
  let dom;

  beforeEach(() => {
    dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
        <body>
          <div class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
            <div class="w3-content">
              <div class="w3-third w3-center">
                <i class="fa fa-coffee w3-padding-64 w3-text-red w3-margin-right"></i>
              </div>

              <div class="w3-twothird">
                <h1 tabindex="6">Instuctions</h1>
                <h5 class="w3-padding-32">Please see <a href="Keyboard_Shortcuts.html"> for more information on how to use keyboard shortcuts to navigate through the game. </a>  
                  There are two different game modes each with two different levels of difficulty: Sound vs sound will mean that two cards will have identical Sounds
                  that relate to the sound of an animal.Sound vs Word  will have the sound an animal makes and its corresponding card will say the name of the card.
                  for example, the sound of a cat, so the "meow" will match with a card says the word "cat". If you win the game, your top 5 scores will be saved and presented to you
                  
                  after you win. the levels of difficulty for each game mode vary from  12 cards and 16 cards. Every time the game is reset, the cards will automatically shuffle.
                  Just below there are different sound that demonstrate what each sound means.
                </h5>

                <div class="btn" type="button" id="play-reset-container">
                  <button class="test-sound-btn" accesskey="1">Test the Wrong card sound</button>
                  <button class="test-sound-btn-lose" accesskey="2">Test the losing game sound</button>
                  <button class="test-sound-btn-correct" accesskey="3">Test the correct card sound</button>
                  <button class="test-sound-btn-won" accesskey="4">Test the winning game sound</button>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `);
  });

  test('has a title', () => {
    expect(dom.window.document.querySelector('h1').textContent).toEqual('Instuctions');
  });

  test('has a paragraph with information about the game', () => {
    expect(dom.window.document.querySelector('h5').textContent).toContain('There are two different game modes');
  });

  test('has four buttons to test different sounds', () => {
    const buttons = dom.window.document.querySelectorAll('.test-sound-btn');
    expect(buttons.length).toEqual(1);
  });

  test('has a button to test the wrong card sound', () => {
    const button = dom.window.document.querySelector('.test-sound-btn');
    expect(button.textContent).toEqual('Test the Wrong card sound');
  });

  test('has a button to test the losing game sound', () => {
    const button = dom.window.document.querySelector('.test-sound-btn-lose');
    expect(button.textContent).toEqual('Test the losing game sound');
  });
  test('has a button to test the winning game sound', () => {
    const button = dom.window.document.querySelector('.test-sound-btn-won');
    expect(button.textContent).toEqual('Test the winning game sound');
  });
})
