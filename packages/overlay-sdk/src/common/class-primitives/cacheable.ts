export abstract class OverlaySDKCacheable {
  protected accessor cache = new Map<
    string,
    { data: any; timestamp: number }
  >();
}
