module.exports = {
  bitcoin: {
    messagePrefix: '\x18DarkNet Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x3f,
    scriptHash: 0x12,
    wif: 0xbf
  },
  testnet: {
    messagePrefix: '\x18DarkNet Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x41,
    scriptHash: 0x0b,
    wif: 0xbc
  },
}
