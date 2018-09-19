export class DisplayOptions {
  wallet: Boolean;
  rewards: Boolean;
  kyc: Boolean;
  bitcoin: Boolean;
  bitclave: Boolean;
  ethereum: Boolean;
  general: Boolean;
  mining: Boolean;
  ICO: Boolean;

  constructor(obj) {
    this.wallet = obj && !!obj.display_wallet || false;
    this.rewards = obj && !!obj.display_rewards || false;
    this.kyc = obj && !!obj.display_kyc || false;
    this.bitcoin = obj && !!obj.display_bitcoin || false;
    this.bitclave = obj && !!obj.display_bitclave || false;
    this.ethereum = obj && !!obj.display_ethereum || false;
    this.general = obj && !!obj.display_general || false;
    this.mining = obj && !!obj.display_mining || false;
    this.ICO = obj && !!obj.display_ICO || false;
  }
  static get key(): string {
    return 'vault_preferences';
  }
  get value(): string {
    return JSON.stringify({
      display_wallet: this.wallet ? 1 : 0,
      display_rewards: this.rewards ? 1 : 0,
      display_kyc: this.kyc ? 1 : 0,
      display_bitcoin: this.bitcoin ? 1 : 0,
      display_bitclave: this.bitclave ? 1 : 0,
      display_ethereum: this.ethereum ? 1 : 0,
      display_general: this.general ? 1 : 0,
      display_mining: this.mining ? 1 : 0,
      display_ICO: this.ICO ? 1 : 0,
    });
  }
  updateValue(obj) {
    this.wallet = obj && !!obj.display_wallet || false;
    this.rewards = obj && !!obj.display_rewards || false;
    this.kyc = obj && !!obj.display_kyc || false;
    this.bitcoin = obj && !!obj.display_bitcoin || false;
    this.bitclave = obj && !!obj.display_bitclave || false;
    this.ethereum = obj && !!obj.display_ethereum || false;
    this.general = obj && !!obj.display_general || false;
    this.mining = obj && !!obj.display_mining || false;
    this.ICO = obj && !!obj.display_ICO || false;
  }
}
