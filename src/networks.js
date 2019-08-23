module.exports = {
  audaxjs: {
    messagePrefix: '\x19Audax Signed Message:\n',
    bech32: 'bo',
    bip32: {
      public: 0x022D2533,
      private: 0x0221312B
    },
    pubKeyHash: 0x17,
    scriptHash: 0x8,
    wif: 0x8E
  },
  testnet: {
    messagePrefix: 'DarkNet Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x3a8061a0,
      private: 0x3a805837
    },
    pubKeyHash: 0x3A,
    scriptHash: 0x42,
    wif: 0x38
  },
}
