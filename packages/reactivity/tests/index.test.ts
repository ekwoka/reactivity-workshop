describe('reactivity', () => {
  it('should work', () => {
    expect(true).toBe(true);
    document.body.innerHTML = '<div id="app">Hi Mom!</div>'; // Yes, we even have a DOM!
    expect(document.querySelector('#app')?.textContent).toBe('Hi Mom!');
  });
});
