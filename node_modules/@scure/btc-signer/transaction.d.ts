import * as P from 'micro-packed';
import { CustomScript } from './payment.js';
import * as psbt from './psbt.js';
import { Bytes } from './utils.js';
interface HDKey {
    publicKey: Bytes;
    privateKey: Bytes;
    fingerprint: number;
    derive(path: string): HDKey;
    deriveChild(index: number): HDKey;
    sign(hash: Bytes): Bytes;
}
export type Signer = Bytes | HDKey;
export declare const PRECISION = 8;
export declare const DEFAULT_VERSION = 2;
export declare const DEFAULT_LOCKTIME = 0;
export declare const DEFAULT_SEQUENCE = 4294967295;
export declare const Decimal: {
    encode: (from: bigint) => string;
    decode: (to: string) => bigint;
};
export declare const def: <T>(value: T | undefined, def: T) => T;
export declare function cloneDeep<T>(obj: T): T;
export type TxOpts = {
    version?: number;
    lockTime?: number;
    PSBTVersion?: number;
    /** @deprecated Use `allowUnknownOutputs` */
    allowUnknowOutput?: boolean;
    allowUnknownOutputs?: boolean;
    /** @deprecated Use `allowUnknownInputs` */
    allowUnknowInput?: boolean;
    allowUnknownInputs?: boolean;
    disableScriptCheck?: boolean;
    bip174jsCompat?: boolean;
    allowLegacyWitnessUtxo?: boolean;
    lowR?: boolean;
    customScripts?: CustomScript[];
};
/**
 * Internal, exported only for backwards-compat. Use `SigHash` instead.
 * @deprecated
 */
export declare enum SignatureHash {
    DEFAULT = 0,
    ALL = 1,
    NONE = 2,
    SINGLE = 3,
    ANYONECANPAY = 128
}
export declare enum SigHash {
    DEFAULT = 0,
    ALL = 1,
    NONE = 2,
    SINGLE = 3,
    DEFAULT_ANYONECANPAY = 128,
    ALL_ANYONECANPAY = 129,
    NONE_ANYONECANPAY = 130,
    SINGLE_ANYONECANPAY = 131
}
export type TransactionInputRequired = {
    txid: Bytes;
    index: number;
    sequence: number;
    finalScriptSig: Bytes;
};
export declare function inputBeforeSign(i: psbt.TransactionInput): TransactionInputRequired;
declare function validateOpts(opts: TxOpts): Readonly<{
    version: number;
    lockTime: number;
    PSBTVersion: number;
    /** @deprecated Use `allowUnknownOutputs` */
    allowUnknowOutput?: boolean;
    allowUnknownOutputs?: boolean;
    /** @deprecated Use `allowUnknownInputs` */
    allowUnknowInput?: boolean;
    allowUnknownInputs?: boolean;
    disableScriptCheck?: boolean;
    bip174jsCompat?: boolean;
    allowLegacyWitnessUtxo?: boolean;
    lowR?: boolean;
    customScripts?: CustomScript[];
}>;
export declare class Transaction {
    private global;
    private inputs;
    private outputs;
    readonly opts: ReturnType<typeof validateOpts>;
    constructor(opts?: TxOpts);
    static fromRaw(raw: Bytes, opts?: TxOpts): Transaction;
    static fromPSBT(psbt_: Bytes, opts?: TxOpts): Transaction;
    toPSBT(PSBTVersion?: number): Uint8Array;
    get lockTime(): number;
    get version(): number;
    private inputStatus;
    private inputSighash;
    private signStatus;
    get isFinal(): boolean;
    get hasWitnesses(): boolean;
    get weight(): number;
    get vsize(): number;
    toBytes(withScriptSig?: boolean, withWitness?: boolean): Uint8Array;
    get unsignedTx(): Bytes;
    get hex(): string;
    get hash(): string;
    get id(): string;
    private checkInputIdx;
    getInput(idx: number): psbt.PSBTKeyMapKeys<{
        readonly nonWitnessUtxo: readonly [0, false, P.CoderType<P.StructInput<{
            version: number;
            segwitFlag: boolean | undefined;
            inputs: P.StructInput<{
                txid: any;
                index: any;
                finalScriptSig: any;
                sequence: any;
            }>[];
            outputs: P.StructInput<{
                amount: any;
                script: any;
            }>[];
            witnesses: P.Option<Uint8Array[][]>;
            lockTime: number;
        }>>, readonly [], readonly [0, 2], false];
        readonly witnessUtxo: readonly [1, false, P.CoderType<P.StructInput<{
            amount: bigint;
            script: Uint8Array;
        }>>, readonly [], readonly [0, 2], false];
        readonly partialSig: readonly [2, P.CoderType<Uint8Array>, P.CoderType<Uint8Array>, readonly [], readonly [0, 2], false];
        readonly sighashType: readonly [3, false, P.CoderType<number>, readonly [], readonly [0, 2], false];
        readonly redeemScript: readonly [4, false, P.CoderType<Uint8Array>, readonly [], readonly [0, 2], false];
        readonly witnessScript: readonly [5, false, P.CoderType<Uint8Array>, readonly [], readonly [0, 2], false];
        readonly bip32Derivation: readonly [6, P.CoderType<Uint8Array>, P.CoderType<P.StructInput<{
            fingerprint: number;
            path: number[];
        }>>, readonly [], readonly [0, 2], false];
        readonly finalScriptSig: readonly [7, false, P.CoderType<Uint8Array>, readonly [], readonly [0, 2], false];
        readonly finalScriptWitness: readonly [8, false, P.CoderType<Uint8Array[]>, readonly [], readonly [0, 2], false];
        readonly porCommitment: readonly [9, false, P.CoderType<Uint8Array>, readonly [], readonly [0, 2], false];
        readonly ripemd160: readonly [10, P.CoderType<Uint8Array>, P.CoderType<Uint8Array>, readonly [], readonly [0, 2], false];
        readonly sha256: readonly [11, P.CoderType<Uint8Array>, P.CoderType<Uint8Array>, readonly [], readonly [0, 2], false];
        readonly hash160: readonly [12, P.CoderType<Uint8Array>, P.CoderType<Uint8Array>, readonly [], readonly [0, 2], false];
        readonly hash256: readonly [13, P.CoderType<Uint8Array>, P.CoderType<Uint8Array>, readonly [], readonly [0, 2], false];
        readonly txid: readonly [14, false, P.CoderType<Uint8Array>, readonly [2], readonly [2], true];
        readonly index: readonly [15, false, P.CoderType<number>, readonly [2], readonly [2], true];
        readonly sequence: readonly [16, false, P.CoderType<number>, readonly [], readonly [2], true];
        readonly requiredTimeLocktime: readonly [17, false, P.CoderType<number>, readonly [], readonly [2], false];
        readonly requiredHeightLocktime: readonly [18, false, P.CoderType<number>, readonly [], readonly [2], false];
        readonly tapKeySig: readonly [19, false, P.CoderType<Uint8Array>, readonly [], readonly [0, 2], false];
        readonly tapScriptSig: readonly [20, P.CoderType<P.StructInput<{
            pubKey: Uint8Array;
            leafHash: Uint8Array;
        }>>, P.CoderType<Uint8Array>, readonly [], readonly [0, 2], false];
        readonly tapLeafScript: readonly [21, P.CoderType<P.StructInput<{
            version: number;
            internalKey: Uint8Array;
            merklePath: Uint8Array[];
        }>>, P.CoderType<Uint8Array>, readonly [], readonly [0, 2], false];
        readonly tapBip32Derivation: readonly [22, P.CoderType<Uint8Array>, P.CoderType<P.StructInput<{
            hashes: Uint8Array[];
            der: P.StructInput<{
                fingerprint: any;
                path: any;
            }>;
        }>>, readonly [], readonly [0, 2], false];
        readonly tapInternalKey: readonly [23, false, P.CoderType<Uint8Array>, readonly [], readonly [0, 2], false];
        readonly tapMerkleRoot: readonly [24, false, P.CoderType<Uint8Array>, readonly [], readonly [0, 2], false];
        readonly proprietary: readonly [252, P.CoderType<Uint8Array>, P.CoderType<Uint8Array>, readonly [], readonly [0, 2], false];
    }>;
    get inputsLength(): number;
    addInput(input: psbt.TransactionInputUpdate, _ignoreSignStatus?: boolean): number;
    updateInput(idx: number, input: psbt.TransactionInputUpdate, _ignoreSignStatus?: boolean): void;
    private checkOutputIdx;
    getOutput(idx: number): psbt.PSBTKeyMapKeys<{
        readonly redeemScript: readonly [0, false, P.CoderType<Uint8Array>, readonly [], readonly [0, 2], false];
        readonly witnessScript: readonly [1, false, P.CoderType<Uint8Array>, readonly [], readonly [0, 2], false];
        readonly bip32Derivation: readonly [2, P.CoderType<Uint8Array>, P.CoderType<P.StructInput<{
            fingerprint: number;
            path: number[];
        }>>, readonly [], readonly [0, 2], false];
        readonly amount: readonly [3, false, P.CoderType<bigint>, readonly [2], readonly [2], true];
        readonly script: readonly [4, false, P.CoderType<Uint8Array>, readonly [2], readonly [2], true];
        readonly tapInternalKey: readonly [5, false, P.CoderType<Uint8Array>, readonly [], readonly [0, 2], false];
        readonly tapTree: readonly [6, false, P.CoderType<P.StructInput<{
            depth: number;
            version: number;
            script: Uint8Array;
        }>[]>, readonly [], readonly [0, 2], false];
        readonly tapBip32Derivation: readonly [7, P.CoderType<Uint8Array>, P.CoderType<P.StructInput<{
            hashes: Uint8Array[];
            der: P.StructInput<{
                fingerprint: any;
                path: any;
            }>;
        }>>, readonly [], readonly [0, 2], false];
        readonly proprietary: readonly [252, P.CoderType<Uint8Array>, P.CoderType<Uint8Array>, readonly [], readonly [0, 2], false];
    }>;
    getOutputAddress(idx: number, network?: {
        bech32: string;
        pubKeyHash: number;
        scriptHash: number;
        wif: number;
    }): string | undefined;
    get outputsLength(): number;
    private normalizeOutput;
    addOutput(o: psbt.TransactionOutputUpdate, _ignoreSignStatus?: boolean): number;
    updateOutput(idx: number, output: psbt.TransactionOutputUpdate, _ignoreSignStatus?: boolean): void;
    addOutputAddress(address: string, amount: bigint, network?: {
        bech32: string;
        pubKeyHash: number;
        scriptHash: number;
        wif: number;
    }): number;
    get fee(): bigint;
    private preimageLegacy;
    preimageWitnessV0(idx: number, prevOutScript: Bytes, hashType: number, amount: bigint): Uint8Array;
    preimageWitnessV1(idx: number, prevOutScript: Bytes[], hashType: number, amount: bigint[], codeSeparator?: number, leafScript?: Bytes, leafVer?: number, annex?: Bytes): Uint8Array;
    signIdx(privateKey: Signer, idx: number, allowedSighash?: SigHash[], _auxRand?: Bytes): boolean;
    sign(privateKey: Signer, allowedSighash?: number[], _auxRand?: Bytes): number;
    finalizeIdx(idx: number): void;
    finalize(): void;
    extract(): Uint8Array;
    combine(other: Transaction): this;
    clone(): Transaction;
}
export declare function PSBTCombine(psbts: Bytes[]): Bytes;
export declare function bip32Path(path: string): number[];
export {};
//# sourceMappingURL=transaction.d.ts.map