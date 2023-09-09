export class Signal {
  constructor() {
    throw new Error('Signal not implemented');
  }
}

export class Effect {
  constructor() {
    throw new Error('Effect not implemented');
  }
}

// we also have in-source testing!! Woohoo!!!
if (import.meta.vitest) {
  describe.concurrent('in source tests', () => {
    it('should work - with DOM!', () => {
      document.body.innerHTML = '<div id="app">Hi Mom!</div>'; // Yes, we even have a DOM!
      expect(document.querySelector('#app')?.textContent).toBe('Hi Mom!');
    });
  });
}
