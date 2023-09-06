export const Signal = () => {
  throw new Error('Signal not implemented');
};

export const Effect = () => {
  throw new Error('Effect not implemented');
};

if (import.meta.vitest) {
  describe.skip('Signal', () => {});
}
