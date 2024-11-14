"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._Estimator = exports._cmpBig = exports.DEFAULT_SEQUENCE = exports.PSBTCombine = exports.SigHash = exports.bip32Path = exports.Decimal = exports.TaprootControlBlock = exports._DebugPSBT = exports.combinations = exports.sortedMultisig = exports._sortPubkeys = exports.OutScript = exports.taprootListToTree = exports.WIF = exports.getAddress = exports.Address = exports.utils = exports.TAPROOT_UNSPENDABLE_KEY = exports.TEST_NETWORK = exports.NETWORK = exports.selectUTXO = exports.getInputType = exports.Transaction = exports.MAX_SCRIPT_BYTE_LENGTH = exports.ScriptNum = exports.Script = exports.RawWitness = exports.CompactSize = exports.RawTx = exports.OP = exports.multisig = exports.p2tr_pk = exports.p2tr_ms = exports.p2tr_ns = exports.p2tr = exports.p2wpkh = exports.p2wsh = exports.p2ms = exports.p2sh = exports.p2pkh = exports.p2pk = void 0;
/*! scure-btc-signer - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const utils_js_1 = require("./utils.js");
// prettier-ignore
var payment_js_1 = require("./payment.js");
Object.defineProperty(exports, "p2pk", { enumerable: true, get: function () { return payment_js_1.p2pk; } });
Object.defineProperty(exports, "p2pkh", { enumerable: true, get: function () { return payment_js_1.p2pkh; } });
Object.defineProperty(exports, "p2sh", { enumerable: true, get: function () { return payment_js_1.p2sh; } });
Object.defineProperty(exports, "p2ms", { enumerable: true, get: function () { return payment_js_1.p2ms; } });
Object.defineProperty(exports, "p2wsh", { enumerable: true, get: function () { return payment_js_1.p2wsh; } });
Object.defineProperty(exports, "p2wpkh", { enumerable: true, get: function () { return payment_js_1.p2wpkh; } });
Object.defineProperty(exports, "p2tr", { enumerable: true, get: function () { return payment_js_1.p2tr; } });
Object.defineProperty(exports, "p2tr_ns", { enumerable: true, get: function () { return payment_js_1.p2tr_ns; } });
Object.defineProperty(exports, "p2tr_ms", { enumerable: true, get: function () { return payment_js_1.p2tr_ms; } });
Object.defineProperty(exports, "p2tr_pk", { enumerable: true, get: function () { return payment_js_1.p2tr_pk; } });
Object.defineProperty(exports, "multisig", { enumerable: true, get: function () { return payment_js_1.multisig; } }); // => classicMultisig?
// prettier-ignore
var script_js_1 = require("./script.js");
Object.defineProperty(exports, "OP", { enumerable: true, get: function () { return script_js_1.OP; } });
Object.defineProperty(exports, "RawTx", { enumerable: true, get: function () { return script_js_1.RawTx; } });
Object.defineProperty(exports, "CompactSize", { enumerable: true, get: function () { return script_js_1.CompactSize; } });
Object.defineProperty(exports, "RawWitness", { enumerable: true, get: function () { return script_js_1.RawWitness; } });
Object.defineProperty(exports, "Script", { enumerable: true, get: function () { return script_js_1.Script; } });
Object.defineProperty(exports, "ScriptNum", { enumerable: true, get: function () { return script_js_1.ScriptNum; } });
Object.defineProperty(exports, "MAX_SCRIPT_BYTE_LENGTH", { enumerable: true, get: function () { return script_js_1.MAX_SCRIPT_BYTE_LENGTH; } });
var transaction_js_1 = require("./transaction.js");
Object.defineProperty(exports, "Transaction", { enumerable: true, get: function () { return transaction_js_1.Transaction; } });
var utxo_js_1 = require("./utxo.js");
Object.defineProperty(exports, "getInputType", { enumerable: true, get: function () { return utxo_js_1.getInputType; } });
Object.defineProperty(exports, "selectUTXO", { enumerable: true, get: function () { return utxo_js_1.selectUTXO; } });
var utils_js_2 = require("./utils.js");
Object.defineProperty(exports, "NETWORK", { enumerable: true, get: function () { return utils_js_2.NETWORK; } });
Object.defineProperty(exports, "TEST_NETWORK", { enumerable: true, get: function () { return utils_js_2.TEST_NETWORK; } });
Object.defineProperty(exports, "TAPROOT_UNSPENDABLE_KEY", { enumerable: true, get: function () { return utils_js_2.TAPROOT_UNSPENDABLE_KEY; } });
exports.utils = {
    isBytes: utils_js_1.isBytes,
    concatBytes: utils_js_1.concatBytes,
    compareBytes: utils_js_1.compareBytes,
    pubSchnorr: utils_js_1.pubSchnorr,
    randomPrivateKeyBytes: utils_js_1.randomPrivateKeyBytes,
    taprootTweakPubkey: utils_js_1.taprootTweakPubkey,
};
// Utils
// prettier-ignore
var payment_js_2 = require("./payment.js"); // remove
Object.defineProperty(exports, "Address", { enumerable: true, get: function () { return payment_js_2.Address; } });
Object.defineProperty(exports, "getAddress", { enumerable: true, get: function () { return payment_js_2.getAddress; } });
Object.defineProperty(exports, "WIF", { enumerable: true, get: function () { return payment_js_2.WIF; } });
Object.defineProperty(exports, "taprootListToTree", { enumerable: true, get: function () { return payment_js_2.taprootListToTree; } });
Object.defineProperty(exports, "OutScript", { enumerable: true, get: function () { return payment_js_2.OutScript; } });
Object.defineProperty(exports, "_sortPubkeys", { enumerable: true, get: function () { return payment_js_2._sortPubkeys; } });
Object.defineProperty(exports, "sortedMultisig", { enumerable: true, get: function () { return payment_js_2.sortedMultisig; } });
Object.defineProperty(exports, "combinations", { enumerable: true, get: function () { return payment_js_2.combinations; } });
var psbt_js_1 = require("./psbt.js"); // remove
Object.defineProperty(exports, "_DebugPSBT", { enumerable: true, get: function () { return psbt_js_1._DebugPSBT; } });
Object.defineProperty(exports, "TaprootControlBlock", { enumerable: true, get: function () { return psbt_js_1.TaprootControlBlock; } });
var transaction_js_2 = require("./transaction.js"); // remove
Object.defineProperty(exports, "Decimal", { enumerable: true, get: function () { return transaction_js_2.Decimal; } });
Object.defineProperty(exports, "bip32Path", { enumerable: true, get: function () { return transaction_js_2.bip32Path; } });
Object.defineProperty(exports, "SigHash", { enumerable: true, get: function () { return transaction_js_2.SigHash; } });
Object.defineProperty(exports, "PSBTCombine", { enumerable: true, get: function () { return transaction_js_2.PSBTCombine; } });
Object.defineProperty(exports, "DEFAULT_SEQUENCE", { enumerable: true, get: function () { return transaction_js_2.DEFAULT_SEQUENCE; } });
var utxo_js_2 = require("./utxo.js");
Object.defineProperty(exports, "_cmpBig", { enumerable: true, get: function () { return utxo_js_2._cmpBig; } });
Object.defineProperty(exports, "_Estimator", { enumerable: true, get: function () { return utxo_js_2._Estimator; } });
//# sourceMappingURL=index.js.map