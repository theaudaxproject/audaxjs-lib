# SwiftCashJS (swiftcashjs-lib)
[![NPM](https://img.shields.io/npm/v/swiftcashjs-lib.svg)](https://www.npmjs.org/package/swiftcashjs-lib)


The pure JavaScript SwiftCash library for node.js and browsers.


## Features
- Clean: Pure JavaScript, concise code, easy to read.
- Compatible: Works on Node.js and all modern browsers.
- Powerful: Support for advanced features, such as multi-sig, HD Wallets.
- Secure: Strong random number generation, trusted developers.
- Principled: No support for browsers with crap RNG (IE < 11)
- Standardized: Node community coding style, Browserify, Node's stdlib and Buffers.
- Fast: Optimized code, uses typed arrays instead of byte arrays for performance.
- Experiment-friendly: SwiftCash Mainnet and Testnet support.


## Should I use this in production?
If you are thinking of using the master branch of this library in production, **stop**.
Master is not stable; it is our development branch, and [only tagged releases may be classified as stable](https://github.com/swiftcashproject/swiftcashjs-lib/tags).


## Installation
``` bash
npm install swiftcashjs-lib
```

## Setup
### Node.js
``` javascript
var swiftcash = require('swiftcashjs-lib')
```

### Browser
If you're familiar with how to use browserify, ignore this and proceed normally.
These steps are advisory only,  and may not be suitable for your application.

[Browserify](https://github.com/substack/node-browserify) is assumed to be installed for these steps.

For your project, create an `index.js` file
``` javascript
let swiftcash = require('swiftcashjs-lib')

// your code here
function myFunction () {
	return swiftcash.ECPair.makeRandom().toWIF()
}

module.exports = {
	myFunction
}
```

Now, to compile for the browser:
``` bash
browserify index.js --standalone foo > app.js
```

You can now put `<script src="app.js" />` in your web page,  using `foo.myFunction` to create a new SwiftCash private key.

**NOTE**: If you uglify the javascript, you must exclude the following variable names from being mangled: `BigInteger`, `ECPair`, `Point`.
This is because of the function-name-duck-typing used in [typeforce](https://github.com/dcousens/typeforce).

Example:
``` bash
uglifyjs ... --mangle --reserved 'BigInteger,ECPair,Point'
```

**NOTE**: This library tracks Node LTS features,  if you need strict ES5,  use [`--transform babelify`](https://github.com/babel/babelify) in conjunction with your `browserify` step (using an [`es2015`](http://babeljs.io/docs/plugins/preset-es2015/) preset).

**NOTE**: If you expect this library to run on an iOS 10 device, ensure that you are using [buffer@5.0.5](https://github.com/feross/buffer/pull/155) or greater.


## Examples
The below examples are implemented as integration tests, they should be very easy to understand.
Otherwise, pull requests are appreciated.
Some examples interact (via HTTPS) with a 3rd Party Blockchain Provider (3PBP).

- [Generate a random address](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/addresses.js#L12)
- [Generate an address from a SHA256 hash](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/addresses.js#L19)
- [Import an address via WIF](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/addresses.js#L29)
- [Generate a 2-of-3 P2SH multisig address](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/addresses.js#L36)
- [Support the retrieval of transactions for an address (3rd party blockchain)](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/addresses.js#L100)
- [Generate a Testnet address](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/addresses.js#L121)
- [Create a 1-to-1 Transaction](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/transactions.js#L14)
- [Create a 2-to-2 Transaction](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/transactions.js#L28)
- [Create (and broadcast via 3PBP) a typical Transaction](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/transactions.js#L46)
- [Create (and broadcast via 3PBP) a Transaction with an OP\_RETURN output](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/transactions.js#L88)
- [Create (and broadcast via 3PBP) a Transaction with a 2-of-4 P2SH(multisig) input](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/transactions.js#L115)
- [Import a BIP32 testnet xpriv and export to WIF](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/bip32.js#L8)
- [Export a BIP32 xpriv, then import it](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/bip32.js#L15)
- [Export a BIP32 xpub](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/bip32.js#L26)
- [Create a BIP32, swiftcash, account 0, external address](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/bip32.js#L35)
- [Create a BIP44, swiftcash, account 0, external address](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/bip32.js#L50)
- [Create a BIP49, swiftcash testnet, account 0, external address](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/bip32.js#L66)
- [Use BIP39 to generate BIP32 addresses](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/bip32.js#L83)
- [Create (and broadcast via 3PBP) a Transaction where Alice can redeem the output after the expiry](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/cltv.js#L37)
- [Create (and broadcast via 3PBP) a Transaction where Alice and Bob can redeem the output at any time](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/cltv.js#L71)
- [Recover a private key from duplicate R values](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/crypto.js#L14)
- [Recover a BIP32 parent private key from the parent public key, and a derived, non-hardened child private key](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/crypto.js#L115)
- [Generate a single-key stealth address](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/stealth.js#L70:)
- [Generate a single-key stealth address (randomly)](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/stealth.js#L89:)
- [Recover parent recipient.d, if a derived private key is leaked (and nonce was revealed)](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/stealth.js#L105)
- [Generate a dual-key stealth address](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/stealth.js#L122)
- [Generate a dual-key stealth address (randomly)](https://github.com/swiftcashproject/swiftcashjs-lib/blob/master/test/integration/stealth.js#L145)

If you have a use case that you feel could be listed here, please [ask for it](https://github.com/swiftcashproject/swiftcashjs-lib/issues/new)!


## Complementing Libraries
- [BIP21](https://github.com/bitcoinjs/bip21) - A BIP21 compatible URL encoding utility library
- [BIP38](https://github.com/bitcoinjs/bip38) - Passphrase-protected private keys
- [BIP39](https://github.com/bitcoinjs/bip39) - Mnemonic generation for deterministic keys
- [BIP32-Utils](https://github.com/swiftcashproject/bip32-utils) - A set of utilities for working with BIP32
- [BIP66](https://github.com/bitcoinjs/bip66) - Strict DER signature decoding
- [BIP69](https://github.com/bitcoinjs/bip69) - Lexicographical Indexing of Transaction Inputs and Outputs
- [Base58](https://github.com/cryptocoinjs/bs58) - Base58 encoding/decoding
- [Base58 Check](https://github.com/swiftcashproject/bs58check) - Base58 check encoding/decoding
- [Bech32](https://github.com/bitcoinjs/bech32) - A BIP173 compliant Bech32 encoding library
- [coinselect](https://github.com/bitcoinjs/coinselect) - A fee-optimizing, transaction input selection module for swiftcashjs-lib.
- [merkle-lib](https://github.com/bitcoinjs/merkle-lib) - A performance conscious library for merkle root and tree calculations.
- [minimaldata](https://github.com/bitcoinjs/minimaldata) - A module to check swiftcash policy: SCRIPT_VERIFY_MINIMALDATA


## LICENSE [MIT](LICENSE)
