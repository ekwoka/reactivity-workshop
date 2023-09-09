import { Effect, Signal } from '../src';
import { nextTick } from './utils';

describe('reactivity', () => {
  it.skip('updates the button', async () => {
    document.body.innerHTML = '<button></button>';
    const clicks = new Signal(0);
    const button = document.querySelector('button')!;
    new Effect(() => (button.textContent = `${clicks} clicks`));
    button.addEventListener('click', () => clicks.set(clicks.get() + 1));

    expect(button.textContent).toBe('0 clicks');
    button.click();
    await nextTick();
    expect(button.textContent).toBe('1 clicks');
    button.click();
    await nextTick();
    expect(button.textContent).toBe('2 clicks');
  });
  it.skip('can release effects', async () => {
    const signal = new Signal(1);
    let value: number = 0;
    const effect = new Effect(() => (value = signal.get()));
    expect(value).toBe(1);
    signal.set(42);
    await nextTick();
    expect(value).toBe(42);
    effect.release();
    signal.set(100);
    await nextTick();
    expect(value).toBe(42);
  });
  it.skip('only runs once when multiple dependent updates happen', async () => {
    document.body.innerHTML = '<div id="foobar"></div>';
    const foobar = document.querySelector('#foobar')!;
    const foo = new Signal('foo');
    const bar = new Signal('bar');
    const op = vi.fn(() => `${foo.get()} ${bar.get()}`);
    new Effect(op);
    expect(foobar.textContent).toBe('foo bar');
    expect(op).toBeCalledTimes(1);
    foo.set('fizz');
    bar.set('buzz');
    await nextTick();
    expect(foobar.textContent).toBe('fizz buzz');
    expect(op).toBeCalledTimes(2);
  });
  it.skip('only reacts to active dependendents', async () => {
    const addTax = new Signal(true);
    const price = new Signal(42);
    const taxRate = new Signal(0.64);
    let result: number = 0;
    const op = vi.fn(
      () =>
        (result = addTax.get()
          ? (1 + taxRate.get()) * price.get()
          : price.get()),
    );
    new Effect(op);
    expect(result).toBe(68.88);
    expect(op).toBeCalledTimes(1);

    // change price
    price.set(100);
    await nextTick();
    expect(result).toBe(136);
    expect(op).toBeCalledTimes(2);

    // change tax rate
    taxRate.set(0.75);
    await nextTick();
    expect(result).toBe(175);
    expect(op).toBeCalledTimes(3);

    // disable tax
    addTax.set(false);
    await nextTick();
    expect(result).toBe(100);
    expect(op).toBeCalledTimes(4);

    // change tax rate
    taxRate.set(0.5);
    await nextTick();
    expect(result).toBe(100);
    expect(op).toBeCalledTimes(4); // has not rerun since taxRate isn't a dependency

    // change price
    price.set(50);
    await nextTick();
    expect(result).toBe(50);
    expect(op).toBeCalledTimes(5);
  });
});
