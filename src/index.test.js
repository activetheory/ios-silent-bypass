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

  it('should have a state of blocked', () => {
    expect(silentHack.state).toBe('blocked');
  });

  it('should have a trying property of false', () => {
    expect(silentHack.trying).toBe(false);
  });
});
