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

  it('should have a trying property of false', () => {
    expect(silentHack.trying).toBe(false);
  });

  it('should call tryUnblock on event', async () => {
    const event = new Event('click');
    window.dispatchEvent(event);
    expect(silentHack.trying).toBe(true);

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(silentHack.allowed).toBe(true);
  });
});
