import { describe, it, expect } from 'vitest';
import SilentHack from './index';

describe('SilentHack', () => {
  const silentHack = new SilentHack();

  it('should be a class', () => {
    expect(SilentHack).toBeDefined();
  });

  it('should be an instance of SilentHack', () => {
    expect(silentHack).toBeInstanceOf(SilentHack);
  });

  it('should be not allowed', () => {
    expect(silentHack.allowed).toBe(false);
  });

  it('should call tryUnblock on event', async () => {
    expect(silentHack.allowed).toBe(false);

    const event = new Event('click');
    window.dispatchEvent(event);

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(silentHack.allowed).toBe(true);
  });
});
