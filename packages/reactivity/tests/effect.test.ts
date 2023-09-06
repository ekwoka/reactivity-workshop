import { Effect, Signal } from '../src';
import { nextTick } from './utils';

describe.concurrent('Effect', () => {
  it.skip('can register reactive effects', async () => {
    const signal = new Signal(1);
    let value: number = 0;
    new Effect(() => (value = signal.get()));
    expect(value).toBe(1);
    signal.set(42);
    expect(value).toBe(1);
    await nextTick();
    expect(value).toBe(42);
  });
  it.skip('disconnects all signals tracking when effect is triggered', async () => {
    const first = new Signal(5);
    const second = new Signal(10);
    let value: number = 0;
    const effect = new Effect(() => (value = first.get() + second.get()));
    expect(value).toBe(15);
    expect(first.dependents.size).toBe(1);
    expect(second.dependents.size).toBe(1);
    expect(effect.dependencies.size).toBe(2);
    first.set(42);
    expect(first.dependents.size).toBe(0);
    expect(second.dependents.size).toBe(0);
    expect(effect.dependencies.size).toBe(0);
    await nextTick();
    expect(value).toBe(52);
    expect(first.dependents.size).toBe(1);
    expect(second.dependents.size).toBe(1);
    expect(effect.dependencies.size).toBe(2);
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
  it.skip('can run released effects', async () => {
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
    effect.run();
    expect(value).toBe(100);
  });
  it.skip('knows it is an Effect', () =>
    expect(new Effect(() => {}).toString()).toBe('[object Effect]'));
});
describe.concurrent('release', () => {
  it.skip('can release effects', async () => {
    const signal = new Signal(1);
    let value: number = 0;
    const effect = new Effect(() => (value = signal.get()));
    expect(value).toBe(1);
    signal.set(42);
    await nextTick();
    expect(value).toBe(42);
    release(effect);
    signal.set(100);
    await nextTick();
    expect(value).toBe(42);
  });
});
