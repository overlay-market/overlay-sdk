import { beforeEach, describe, expect, it, vi } from 'vitest';
import OverlaySDKCore from '@src/core/core.js';
import { CHAINS } from '@src/common/constants.js';
import { OverlaySDKModule } from '@src/common/class-primitives/sdk-module.js';
import { OverlaySDKCacheable } from '@src/common/class-primitives/cacheable.js';

class CacheableImpl extends OverlaySDKCacheable {
  public set(key: string, value: unknown) {
    this.cache.set(key, { data: value, timestamp: Date.now() });
  }

  public has(key: string) {
    return this.cache.has(key);
  }
}

class TestModule extends OverlaySDKModule {
  public getCore() {
    return this.core;
  }
}

describe('OverlaySDKCacheable', () => {
  it('initialises cache map', () => {
    const cacheable = new CacheableImpl();
    cacheable.set('key', 1);
    expect(cacheable.has('key')).toBe(true);
  });
});

describe('OverlaySDKModule', () => {
  const rpcUrls = {
    [CHAINS.BscTestnet]: 'http://127.0.0.1:8545',
  };

  it('uses provided core instance when available', () => {
    const core = new OverlaySDKCore({
      chainId: CHAINS.BscTestnet,
      rpcUrls,
    });
    const module = new TestModule({ core });
    expect(module.getCore()).toBe(core);
  });

  it('creates a new core when props are provided', () => {
    const module = new TestModule({
      chainId: CHAINS.BscTestnet,
      rpcUrls,
    });
    expect(module.getCore()).toBeInstanceOf(OverlaySDKCore);
    expect(module.getCore().chainId).toBe(CHAINS.BscTestnet);
  });
});
