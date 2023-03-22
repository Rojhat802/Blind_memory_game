const { timeHandler, timeCounter, stopTimer } = require('./my_script');
describe('Timer functionality', () => {
    beforeEach(() => {
      // Reset the timer variables before each test
      centiseconds = 0;
      seconds = 0;
      minutes = 0;
      timerGoing = true;
    });
  
    it('should start the timer when timeHandler is called', () => {
      timeHandler();
      expect(timer).toBeDefined();
    });
  
    it('should stop the timer when stopTimer is called', () => {
      timeHandler();
      stopTimer();
      expect(timer).toBeUndefined();
    });
  
    it('should increment centiseconds when timeCounter is called', () => {
      timeCounter();
      expect(centiseconds).toBe(1);
    });
  
    it('should increment seconds when centiseconds reach 10', () => {
      centiseconds = 9;
      timeCounter();
      expect(seconds).toBe(1);
    });
  
    it('should increment minutes when seconds reach 60', () => {
      seconds = 59;
      centiseconds = 9;
      timeCounter();
      expect(minutes).toBe(1);
    });
  
    it('should update the HTML display of the timer when timeCounter is called', () => {
      const timerDisplay = document.createElement('div');
      timerDisplay.id = 'time';
      document.body.appendChild(timerDisplay);
  
      timeCounter();
  
      expect(timerDisplay.innerHTML).toContain(`<span>${minutes}:${seconds}:${centiseconds}</span>`);
    });
  });
  