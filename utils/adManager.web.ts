import { Platform } from 'react-native';

// Mock AdManager for web platform that doesn't use native modules
class AdManager {
  private trickCounter = 0;
  private readonly TRICKS_BEFORE_AD = 2;

  constructor() {
    console.log('AdManager initialized for web (mock implementation)');
  }

  public incrementTrickCounter() {
    this.trickCounter++;
    console.log(`Trick completed. Counter: ${this.trickCounter}`);
  }

  public shouldShowAd(): boolean {
    return this.trickCounter >= this.TRICKS_BEFORE_AD;
  }

  public async showRewardedAd(): Promise<boolean> {
    console.log('Mock ad shown on web platform');
    this.resetCounter();
    return true; // Simulate successful ad show
  }

  private resetCounter() {
    this.trickCounter = 0;
    console.log('Trick counter reset');
  }

  public getTrickCounter(): number {
    return this.trickCounter;
  }

  public forceResetCounter() {
    this.resetCounter();
  }
}

// Export singleton instance
export const adManager = new AdManager();

export { adManager }