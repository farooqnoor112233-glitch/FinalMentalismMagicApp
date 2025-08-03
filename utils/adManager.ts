import { Platform } from 'react-native';

// Check if we're in an environment that supports native modules
// This should work for EAS development builds, production builds, and exclude only Expo Go and web
const supportsNativeModules = Platform.OS !== 'web' && (
  // Check for EAS development build or production build
  typeof global.__turboModuleProxy !== 'undefined' ||
  // Alternative check for older React Native versions or different build configurations
  typeof global.__fbBatchedBridge !== 'undefined' ||
  // Check if we're in a standalone app (not Expo Go)
  !global.expo?.modules?.ExpoGo
);

let RewardedAd: any = null;
let RewardedAdEventType: any = null;
let TestIds: any = null;
let MobileAds: any = null;

// Only import AdMob modules if native modules are supported
if (supportsNativeModules) {
  try {
    const adMobModule = require('react-native-google-mobile-ads');
    RewardedAd = adMobModule.RewardedAd;
    RewardedAdEventType = adMobModule.RewardedAdEventType;
    TestIds = adMobModule.TestIds;
    MobileAds = adMobModule.MobileAds;
    console.log('AdMob modules loaded successfully for native build');
  } catch (error) {
    console.log('AdMob module failed to load:', error.message);
    console.log('This might be normal in Expo Go, but should work in EAS builds');
  }
} else {
  console.log('Environment detected as not supporting native modules (likely Expo Go or web)');
}

// Placeholder Ad Unit IDs - replace with actual client IDs
const AD_UNIT_ID = TestIds ? Platform.select({
  ios: TestIds.REWARDED,
  android: TestIds.REWARDED,
  default: TestIds.REWARDED,
}) : 'test-ad-unit-id';

class AdManager {
  private rewardedAd: RewardedAd | null = null;
  private isAdLoaded = false;
  private isAdLoading = false;
  private trickCounter = 0;
  private readonly TRICKS_BEFORE_AD = 2;

  constructor() {
    this.initializeAds();
    this.createRewardedAd();
  }

  private async initializeAds() {
    if (!MobileAds) {
      console.log('MobileAds not available - this should only happen in Expo Go or web');
      return;
    }
    
    try {
      await MobileAds().initialize();
      console.log('AdMob initialized successfully in native build');
    } catch (error) {
      console.log('AdMob initialization failed:', error);
    }
  }

  private createRewardedAd() {
    if (this.rewardedAd) {
      return;
    }

    if (!RewardedAd || !RewardedAdEventType) {
      console.log('RewardedAd classes not available - check if AdMob is properly configured');
      return;
    }

    this.rewardedAd = RewardedAd.createForAdRequest(AD_UNIT_ID, {
      requestNonPersonalizedAdsOnly: true,
    });

    this.rewardedAd.addAdEventListener(RewardedAdEventType.LOADED, () => {
      this.isAdLoaded = true;
      this.isAdLoading = false;
      console.log('Rewarded ad loaded');
    });

    this.rewardedAd.addAdEventListener(RewardedAdEventType.EARNED_REWARD, (reward) => {
      console.log('User earned reward:', reward);
    });

    this.rewardedAd.addAdEventListener(RewardedAdEventType.DISMISSED, () => {
      console.log('Rewarded ad closed');
      this.isAdLoaded = false;
      // Preload next ad
      this.loadAd();
    });

    this.rewardedAd.addAdEventListener(RewardedAdEventType.FAILED_TO_LOAD, (error) => {
      console.log('Rewarded ad failed to load:', error);
      this.isAdLoaded = false;
      this.isAdLoading = false;
    });

    this.loadAd();
  }

  private loadAd() {
    if (this.isAdLoading || this.isAdLoaded || !this.rewardedAd) {
      return;
    }

    this.isAdLoading = true;
    this.rewardedAd.load();
  }

  public incrementTrickCounter() {
    this.trickCounter++;
    console.log(`Trick completed. Counter: ${this.trickCounter}`);
  }

  public shouldShowAd(): boolean {
    return this.trickCounter >= this.TRICKS_BEFORE_AD;
  }

  public async showRewardedAd(): Promise<boolean> {
    if (!RewardedAd || !this.rewardedAd) {
      console.log('AdMob not available in this environment, simulating ad completion');
      this.resetCounter();
      return true;
    }
    
    if (!this.isAdLoaded) {
      console.log('Rewarded ad not ready');
      // In mock mode, simulate successful ad completion
      this.resetCounter();
      return true;
    }

    try {
      await this.rewardedAd.show();
      this.resetCounter();
      return true;
    } catch (error) {
      console.log('Failed to show rewarded ad:', error);
      return false;
    }
  }

  private resetCounter() {
    this.trickCounter = 0;
    console.log('Trick counter reset');
  }

  public getTrickCounter(): number {
    return this.trickCounter;
  }

  // Force reset counter (for testing or manual reset)
  public forceResetCounter() {
    this.resetCounter();
  }
}

// Export singleton instance
export const adManager = new AdManager();

export { adManager }