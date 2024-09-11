import OverlaySDKCore from "../../core/core.js";
import type { OverlaySDKCommonProps } from "../../core/types.js";
import { OverlaySDKCacheable } from "./cacheable.js";

export abstract class OverlaySDKModule extends OverlaySDKCacheable {
  readonly core: OverlaySDKCore;

  constructor(props: OverlaySDKCommonProps) {
    super();
    const { core } = props;

    if (core) this.core = core;
    else this.core = new OverlaySDKCore(props);
  }
}
