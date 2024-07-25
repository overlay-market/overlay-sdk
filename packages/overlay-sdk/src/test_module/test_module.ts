import { OverlaySDKModule } from '../common/class-primitives/sdk-module.js';
import { OverlaySDKCommonProps } from '../core/types.js';


export class TestModuleSDK extends OverlaySDKModule {
 
  constructor(props: OverlaySDKCommonProps) {
    super(props);
  }

  public consoleTestModule(): void {
    const chainId = this.core.chainId
    console.log('Test Module!!!', {chainId})
  }

  public testFunction(): string {
     return 'Test value 123'
  }
}