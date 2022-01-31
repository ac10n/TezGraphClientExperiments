export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Micheline: any;
  BigNumber: any;
  Address: any;
  ProtocolHash: any;
  ChainId: any;
  OperationHash: any;
  BlockHash: any;
  Signature: any;
  DateTime: any;
  OperationsHash: any;
  ContextHash: any;
  NonceHash: any;
  Mutez: any;
  PositiveBigNumber: any;
  JSONObject: any;
  PublicKey: any;
  Cursor: any;
  Decimal: any;
};

export type LazyBigMapAlloc = LazyBigMapDiff & {
  __typename?: 'LazyBigMapAlloc';
  updates: Array<LazyBigMapUpdateItem>;
  action: LazyStorageDiffAction;
  key_type: Scalars['Micheline'];
  value_type: Scalars['Micheline'];
};

export type LazyBigMapDiff = {
  action: LazyStorageDiffAction;
};

export enum LazyStorageDiffAction {
  Alloc = 'alloc',
  Copy = 'copy',
  Remove = 'remove',
  Update = 'update'
}

export type LazyBigMapUpdateItem = {
  __typename?: 'LazyBigMapUpdateItem';
  key_hash: Scalars['String'];
  key: Scalars['Micheline'];
  value?: Maybe<Scalars['Micheline']>;
};

export type LazyBigMapCopy = LazyBigMapDiff & {
  __typename?: 'LazyBigMapCopy';
  updates: Array<LazyBigMapUpdateItem>;
  action: LazyStorageDiffAction;
  source: Scalars['BigNumber'];
};

export type LazyBigMapRemove = LazyBigMapDiff & {
  __typename?: 'LazyBigMapRemove';
  action: LazyStorageDiffAction;
};

export type LazyBigMapUpdate = LazyBigMapDiff & {
  __typename?: 'LazyBigMapUpdate';
  updates: Array<LazyBigMapUpdateItem>;
  action: LazyStorageDiffAction;
};

export type LazySaplingStateAlloc = LazySaplingStateDiff & {
  __typename?: 'LazySaplingStateAlloc';
  action: LazyStorageDiffAction;
  memo_size: Scalars['Int'];
  updates: LazySaplingStateDiffUpdates;
};

export type LazySaplingStateDiff = {
  action: LazyStorageDiffAction;
};

export type LazySaplingStateDiffUpdates = {
  __typename?: 'LazySaplingStateDiffUpdates';
  commitments_and_ciphertexts: Array<SaplingCommitmentAndCiphertext>;
  nullifiers: Array<Scalars['String']>;
};

export type SaplingCommitmentAndCiphertext = {
  __typename?: 'SaplingCommitmentAndCiphertext';
  commitment: Scalars['String'];
  ciphertext: SaplingCiphertext;
};

export type SaplingCiphertext = {
  __typename?: 'SaplingCiphertext';
  cv: Scalars['String'];
  epk: Scalars['String'];
  payload_enc: Scalars['String'];
  nonce_enc: Scalars['String'];
  payload_out: Scalars['String'];
  nonce_out: Scalars['String'];
};

export type LazySaplingStateCopy = LazySaplingStateDiff & {
  __typename?: 'LazySaplingStateCopy';
  action: LazyStorageDiffAction;
  source: Scalars['BigNumber'];
  updates: LazySaplingStateDiffUpdates;
};

export type LazySaplingStateRemove = LazySaplingStateDiff & {
  __typename?: 'LazySaplingStateRemove';
  action: LazyStorageDiffAction;
};

export type LazySaplingStateUpdate = LazySaplingStateDiff & {
  __typename?: 'LazySaplingStateUpdate';
  action: LazyStorageDiffAction;
  updates: LazySaplingStateDiffUpdates;
};

export type BalanceUpdateContract = BalanceUpdate & {
  __typename?: 'BalanceUpdateContract';
  kind: BalanceUpdateKind;
  change: Scalars['BigNumber'];
  origin: BalanceUpdateOrigin;
  contract: Scalars['Address'];
};

export type BalanceUpdate = {
  kind: BalanceUpdateKind;
  change: Scalars['BigNumber'];
  origin: BalanceUpdateOrigin;
};

export enum BalanceUpdateKind {
  Contract = 'contract',
  Freezer = 'freezer'
}

export enum BalanceUpdateOrigin {
  Block = 'block',
  Migration = 'migration',
  Subsidy = 'subsidy'
}

export type BalanceUpdateFreezer = BalanceUpdate & {
  __typename?: 'BalanceUpdateFreezer';
  kind: BalanceUpdateKind;
  change: Scalars['BigNumber'];
  origin: BalanceUpdateOrigin;
  category: BalanceUpdateCategory;
  delegate: Scalars['Address'];
  cycle: Scalars['Int'];
};

export enum BalanceUpdateCategory {
  Deposits = 'deposits',
  Fees = 'fees',
  Rewards = 'rewards'
}

export type ActivateAccountNotification = Operation & OperationNotification & OperationNotificationWithBalanceUpdates & {
  __typename?: 'ActivateAccountNotification';
  kind: OperationKind;
  operation_group: OperationGroup;
  block?: Maybe<BlockNotification>;
  origin: OperationOrigin;
  pkh: Scalars['Address'];
  secret: Scalars['String'];
  metadata?: Maybe<SimpleOperationMetadata>;
};

export type Operation = {
  kind: OperationKind;
};

export enum OperationKind {
  ActivateAccount = 'activate_account',
  Ballot = 'ballot',
  Delegation = 'delegation',
  DoubleBakingEvidence = 'double_baking_evidence',
  DoubleEndorsementEvidence = 'double_endorsement_evidence',
  Endorsement = 'endorsement',
  EndorsementWithSlot = 'endorsement_with_slot',
  Origination = 'origination',
  Proposals = 'proposals',
  RegisterGlobalConstant = 'register_global_constant',
  Reveal = 'reveal',
  SeedNonceRevelation = 'seed_nonce_revelation',
  Transaction = 'transaction'
}

export type OperationNotification = {
  kind: OperationKind;
  operation_group: OperationGroup;
  block?: Maybe<BlockNotification>;
  origin: OperationOrigin;
};

export type OperationGroup = {
  __typename?: 'OperationGroup';
  protocol: Scalars['ProtocolHash'];
  chain_id?: Maybe<Scalars['ChainId']>;
  hash?: Maybe<Scalars['OperationHash']>;
  branch: Scalars['BlockHash'];
  signature?: Maybe<Scalars['Signature']>;
};

export type BlockNotification = {
  __typename?: 'BlockNotification';
  hash: Scalars['BlockHash'];
  header: BlockHeader;
  protocol: Scalars['ProtocolHash'];
  chain_id: Scalars['ChainId'];
  activateAccounts: Array<ActivateAccountNotification>;
  ballots: Array<BallotNotification>;
  delegations: Array<DelegationNotification>;
  doubleBakingEvidences: Array<DoubleBakingEvidenceNotification>;
  doubleEndorsementEvidences: Array<DoubleEndorsementEvidenceNotification>;
  endorsements: Array<EndorsementNotification>;
  endorsementWithSlots: Array<EndorsementWithSlotNotification>;
  originations: Array<OriginationNotification>;
  proposals: Array<ProposalsNotification>;
  registerGlobalConstants: Array<RegisterGlobalConstantNotification>;
  reveals: Array<RevealNotification>;
  seedNonceRevelations: Array<SeedNonceRevelationNotification>;
  transactions: Array<TransactionNotification>;
};


export type BlockNotificationActivateAccountsArgs = {
  filter?: InputMaybe<ActivateAccountFilter>;
};


export type BlockNotificationBallotsArgs = {
  filter?: InputMaybe<BallotFilter>;
};


export type BlockNotificationDelegationsArgs = {
  filter?: InputMaybe<DelegationFilter>;
};


export type BlockNotificationDoubleBakingEvidencesArgs = {
  filter?: InputMaybe<DoubleBakingEvidenceFilter>;
};


export type BlockNotificationDoubleEndorsementEvidencesArgs = {
  filter?: InputMaybe<DoubleEndorsementEvidenceFilter>;
};


export type BlockNotificationEndorsementsArgs = {
  filter?: InputMaybe<EndorsementFilter>;
};


export type BlockNotificationEndorsementWithSlotsArgs = {
  filter?: InputMaybe<EndorsementWithSlotFilter>;
};


export type BlockNotificationOriginationsArgs = {
  filter?: InputMaybe<OriginationFilter>;
};


export type BlockNotificationProposalsArgs = {
  filter?: InputMaybe<ProposalsFilter>;
};


export type BlockNotificationRegisterGlobalConstantsArgs = {
  filter?: InputMaybe<RegisterGlobalConstantFilter>;
};


export type BlockNotificationRevealsArgs = {
  filter?: InputMaybe<RevealFilter>;
};


export type BlockNotificationSeedNonceRevelationsArgs = {
  filter?: InputMaybe<SeedNonceRevelationFilter>;
};


export type BlockNotificationTransactionsArgs = {
  filter?: InputMaybe<TransactionFilter>;
};

export type BlockHeader = {
  __typename?: 'BlockHeader';
  level: Scalars['Int'];
  proto: Scalars['Int'];
  predecessor: Scalars['BlockHash'];
  timestamp: Scalars['DateTime'];
  signature: Scalars['Signature'];
  validation_pass: Scalars['Int'];
  operations_hash: Scalars['OperationsHash'];
  fitness: Array<Scalars['String']>;
  context: Scalars['ContextHash'];
  priority: Scalars['Int'];
  proof_of_work_nonce: Scalars['String'];
  seed_nonce_hash?: Maybe<Scalars['NonceHash']>;
};

export type ActivateAccountFilter = {
  pkh?: InputMaybe<AddressFilter>;
  hash?: InputMaybe<NullableOperationHashFilter>;
  protocol?: InputMaybe<ProtocolHashFilter>;
  branch?: InputMaybe<BlockHashFilter>;
  and?: InputMaybe<Array<ActivateAccountFilter>>;
  or?: InputMaybe<Array<ActivateAccountFilter>>;
};

export type AddressFilter = {
  equalTo?: InputMaybe<Scalars['Address']>;
  notEqualTo?: InputMaybe<Scalars['Address']>;
  in?: InputMaybe<Array<Scalars['Address']>>;
  notIn?: InputMaybe<Array<Scalars['Address']>>;
};

export type NullableOperationHashFilter = {
  equalTo?: InputMaybe<Scalars['OperationHash']>;
  notEqualTo?: InputMaybe<Scalars['OperationHash']>;
  in?: InputMaybe<Array<Scalars['OperationHash']>>;
  notIn?: InputMaybe<Array<Scalars['OperationHash']>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};

export type ProtocolHashFilter = {
  equalTo?: InputMaybe<Scalars['ProtocolHash']>;
  notEqualTo?: InputMaybe<Scalars['ProtocolHash']>;
  in?: InputMaybe<Array<Scalars['ProtocolHash']>>;
  notIn?: InputMaybe<Array<Scalars['ProtocolHash']>>;
};

export type BlockHashFilter = {
  equalTo?: InputMaybe<Scalars['BlockHash']>;
  notEqualTo?: InputMaybe<Scalars['BlockHash']>;
  in?: InputMaybe<Array<Scalars['BlockHash']>>;
  notIn?: InputMaybe<Array<Scalars['BlockHash']>>;
};

export type BallotNotification = Operation & OperationNotification & {
  __typename?: 'BallotNotification';
  kind: OperationKind;
  operation_group: OperationGroup;
  block?: Maybe<BlockNotification>;
  origin: OperationOrigin;
  source: Scalars['Address'];
  period: Scalars['Int'];
  proposal: Scalars['ProtocolHash'];
  ballot: BallotVote;
};

export enum OperationOrigin {
  Block = 'block',
  Mempool = 'mempool'
}

export enum BallotVote {
  Nay = 'nay',
  Pass = 'pass',
  Yay = 'yay'
}

export type BallotFilter = {
  source?: InputMaybe<AddressFilter>;
  proposal?: InputMaybe<ProtocolHashFilter>;
  ballot?: InputMaybe<BallotVoteFilter>;
  hash?: InputMaybe<NullableOperationHashFilter>;
  protocol?: InputMaybe<ProtocolHashFilter>;
  branch?: InputMaybe<BlockHashFilter>;
  and?: InputMaybe<Array<BallotFilter>>;
  or?: InputMaybe<Array<BallotFilter>>;
};

export type BallotVoteFilter = {
  equalTo?: InputMaybe<BallotVote>;
  notEqualTo?: InputMaybe<BallotVote>;
  in?: InputMaybe<Array<BallotVote>>;
  notIn?: InputMaybe<Array<BallotVote>>;
};

export type DelegationFilter = {
  source?: InputMaybe<AddressFilter>;
  delegate?: InputMaybe<NullableAddressFilter>;
  status?: InputMaybe<NullableOperationResultStatusFilter>;
  hash?: InputMaybe<NullableOperationHashFilter>;
  protocol?: InputMaybe<ProtocolHashFilter>;
  branch?: InputMaybe<BlockHashFilter>;
  and?: InputMaybe<Array<DelegationFilter>>;
  or?: InputMaybe<Array<DelegationFilter>>;
};

export type NullableAddressFilter = {
  equalTo?: InputMaybe<Scalars['Address']>;
  notEqualTo?: InputMaybe<Scalars['Address']>;
  in?: InputMaybe<Array<Scalars['Address']>>;
  notIn?: InputMaybe<Array<Scalars['Address']>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};

export type NullableOperationResultStatusFilter = {
  equalTo?: InputMaybe<OperationResultStatus>;
  notEqualTo?: InputMaybe<OperationResultStatus>;
  in?: InputMaybe<Array<OperationResultStatus>>;
  notIn?: InputMaybe<Array<OperationResultStatus>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};

export enum OperationResultStatus {
  Applied = 'applied',
  Failed = 'failed',
  Skipped = 'skipped',
  Backtracked = 'backtracked'
}

export type DoubleBakingEvidenceFilter = {
  delegate?: InputMaybe<NullableAddressArrayFilter>;
  hash?: InputMaybe<NullableOperationHashFilter>;
  protocol?: InputMaybe<ProtocolHashFilter>;
  branch?: InputMaybe<BlockHashFilter>;
  and?: InputMaybe<Array<DoubleBakingEvidenceFilter>>;
  or?: InputMaybe<Array<DoubleBakingEvidenceFilter>>;
};

export type NullableAddressArrayFilter = {
  includes?: InputMaybe<Scalars['Address']>;
  notIncludes?: InputMaybe<Scalars['Address']>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};

export type DoubleEndorsementEvidenceFilter = {
  delegate?: InputMaybe<NullableAddressArrayFilter>;
  hash?: InputMaybe<NullableOperationHashFilter>;
  protocol?: InputMaybe<ProtocolHashFilter>;
  branch?: InputMaybe<BlockHashFilter>;
  and?: InputMaybe<Array<DoubleEndorsementEvidenceFilter>>;
  or?: InputMaybe<Array<DoubleEndorsementEvidenceFilter>>;
};

export type EndorsementNotification = Endorsement & Operation & OperationNotification & OperationNotificationWithBalanceUpdates & {
  __typename?: 'EndorsementNotification';
  kind: OperationKind;
  operation_group: OperationGroup;
  block?: Maybe<BlockNotification>;
  origin: OperationOrigin;
  metadata?: Maybe<EndorsementMetadata>;
  level: Scalars['Int'];
};

export type Endorsement = {
  kind: OperationKind;
  metadata?: Maybe<EndorsementMetadata>;
};

export type EndorsementMetadata = {
  delegate: Scalars['Address'];
  slots: Array<Scalars['Int']>;
};

export type OperationNotificationWithBalanceUpdates = {
  kind: OperationKind;
  operation_group: OperationGroup;
  block?: Maybe<BlockNotification>;
  origin: OperationOrigin;
};

export type EndorsementFilter = {
  delegate?: InputMaybe<NullableAddressFilter>;
  hash?: InputMaybe<NullableOperationHashFilter>;
  protocol?: InputMaybe<ProtocolHashFilter>;
  branch?: InputMaybe<BlockHashFilter>;
  and?: InputMaybe<Array<EndorsementFilter>>;
  or?: InputMaybe<Array<EndorsementFilter>>;
};

export type EndorsementWithSlotNotification = Operation & OperationNotification & OperationNotificationWithBalanceUpdates & {
  __typename?: 'EndorsementWithSlotNotification';
  kind: OperationKind;
  operation_group: OperationGroup;
  block?: Maybe<BlockNotification>;
  origin: OperationOrigin;
  metadata?: Maybe<EndorsementNotificationMetadata>;
  endorsement: InlinedEndorsement;
  slot: Scalars['Int'];
};

export type InlinedEndorsement = {
  __typename?: 'InlinedEndorsement';
  branch: Scalars['BlockHash'];
  operations: InlinedEndorsementContents;
  signature?: Maybe<Scalars['Signature']>;
};

export type InlinedEndorsementContents = {
  __typename?: 'InlinedEndorsementContents';
  kind: InlinedEndorsementKind;
  level: Scalars['Int'];
};

export enum InlinedEndorsementKind {
  Endorsement = 'endorsement'
}

export type EndorsementWithSlotFilter = {
  delegate?: InputMaybe<NullableAddressFilter>;
  hash?: InputMaybe<NullableOperationHashFilter>;
  protocol?: InputMaybe<ProtocolHashFilter>;
  branch?: InputMaybe<BlockHashFilter>;
  and?: InputMaybe<Array<EndorsementWithSlotFilter>>;
  or?: InputMaybe<Array<EndorsementWithSlotFilter>>;
};

export type OriginationFilter = {
  source?: InputMaybe<AddressFilter>;
  delegate?: InputMaybe<NullableAddressFilter>;
  originated_contract?: InputMaybe<NullableAddressArrayFilter>;
  status?: InputMaybe<NullableOperationResultStatusFilter>;
  hash?: InputMaybe<NullableOperationHashFilter>;
  protocol?: InputMaybe<ProtocolHashFilter>;
  branch?: InputMaybe<BlockHashFilter>;
  and?: InputMaybe<Array<OriginationFilter>>;
  or?: InputMaybe<Array<OriginationFilter>>;
};

export type ProposalsNotification = Operation & OperationNotification & {
  __typename?: 'ProposalsNotification';
  kind: OperationKind;
  operation_group: OperationGroup;
  block?: Maybe<BlockNotification>;
  origin: OperationOrigin;
  source: Scalars['Address'];
  period: Scalars['Int'];
  proposals: Array<Scalars['ProtocolHash']>;
};

export type ProposalsFilter = {
  source?: InputMaybe<AddressFilter>;
  proposals?: InputMaybe<NullableProtocolHashArrayFilter>;
  hash?: InputMaybe<NullableOperationHashFilter>;
  protocol?: InputMaybe<ProtocolHashFilter>;
  branch?: InputMaybe<BlockHashFilter>;
  and?: InputMaybe<Array<ProposalsFilter>>;
  or?: InputMaybe<Array<ProposalsFilter>>;
};

export type NullableProtocolHashArrayFilter = {
  includes?: InputMaybe<Scalars['ProtocolHash']>;
  notIncludes?: InputMaybe<Scalars['ProtocolHash']>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};

export type RegisterGlobalConstantFilter = {
  source?: InputMaybe<AddressFilter>;
  status?: InputMaybe<NullableOperationResultStatusFilter>;
  hash?: InputMaybe<NullableOperationHashFilter>;
  protocol?: InputMaybe<ProtocolHashFilter>;
  branch?: InputMaybe<BlockHashFilter>;
  and?: InputMaybe<Array<RegisterGlobalConstantFilter>>;
  or?: InputMaybe<Array<RegisterGlobalConstantFilter>>;
};

export type RevealFilter = {
  source?: InputMaybe<AddressFilter>;
  status?: InputMaybe<NullableOperationResultStatusFilter>;
  hash?: InputMaybe<NullableOperationHashFilter>;
  protocol?: InputMaybe<ProtocolHashFilter>;
  branch?: InputMaybe<BlockHashFilter>;
  and?: InputMaybe<Array<RevealFilter>>;
  or?: InputMaybe<Array<RevealFilter>>;
};

export type SeedNonceRevelationFilter = {
  hash?: InputMaybe<NullableOperationHashFilter>;
  protocol?: InputMaybe<ProtocolHashFilter>;
  branch?: InputMaybe<BlockHashFilter>;
  and?: InputMaybe<Array<SeedNonceRevelationFilter>>;
  or?: InputMaybe<Array<SeedNonceRevelationFilter>>;
};

export type TransactionFilter = {
  source?: InputMaybe<AddressFilter>;
  destination?: InputMaybe<AddressFilter>;
  status?: InputMaybe<NullableOperationResultStatusFilter>;
  amount?: InputMaybe<MutezFilter>;
  hash?: InputMaybe<NullableOperationHashFilter>;
  protocol?: InputMaybe<ProtocolHashFilter>;
  branch?: InputMaybe<BlockHashFilter>;
  and?: InputMaybe<Array<TransactionFilter>>;
  or?: InputMaybe<Array<TransactionFilter>>;
};

export type MutezFilter = {
  equalTo?: InputMaybe<Scalars['Mutez']>;
  notEqualTo?: InputMaybe<Scalars['Mutez']>;
  in?: InputMaybe<Array<Scalars['Mutez']>>;
  notIn?: InputMaybe<Array<Scalars['Mutez']>>;
  lessThan?: InputMaybe<Scalars['Mutez']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Mutez']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Mutez']>;
  greaterThan?: InputMaybe<Scalars['Mutez']>;
};

export type SimpleOperationMetadata = {
  __typename?: 'SimpleOperationMetadata';
  balance_updates: Array<BalanceUpdate>;
};

export type BigMapAlloc = BigMapDiff & {
  __typename?: 'BigMapAlloc';
  big_map: Scalars['BigNumber'];
  action: BigMapDiffAction;
  key_type: Scalars['Micheline'];
  value_type: Scalars['Micheline'];
};

export type BigMapDiff = {
  action: BigMapDiffAction;
};

export enum BigMapDiffAction {
  Alloc = 'alloc',
  Copy = 'copy',
  Remove = 'remove',
  Update = 'update'
}

export type BigMapCopy = BigMapDiff & {
  __typename?: 'BigMapCopy';
  action: BigMapDiffAction;
  source_big_map: Scalars['BigNumber'];
  destination_big_map: Scalars['BigNumber'];
};

export type BigMapRemove = BigMapDiff & {
  __typename?: 'BigMapRemove';
  big_map: Scalars['BigNumber'];
  action: BigMapDiffAction;
};

export type BigMapUpdate = BigMapDiff & {
  __typename?: 'BigMapUpdate';
  big_map: Scalars['BigNumber'];
  action: BigMapDiffAction;
  key_hash: Scalars['String'];
  key: Scalars['Micheline'];
  value?: Maybe<Scalars['Micheline']>;
};

export type DelegationNotificationResult = OperationResult & DelegationResult & {
  __typename?: 'DelegationNotificationResult';
  status: OperationResultStatus;
  consumed_gas?: Maybe<Scalars['PositiveBigNumber']>;
  consumed_milligas?: Maybe<Scalars['PositiveBigNumber']>;
  errors?: Maybe<Array<Scalars['JSONObject']>>;
};

export type OperationResult = {
  status: OperationResultStatus;
  consumed_gas?: Maybe<Scalars['PositiveBigNumber']>;
  consumed_milligas?: Maybe<Scalars['PositiveBigNumber']>;
  errors?: Maybe<Array<Scalars['JSONObject']>>;
};

export type DelegationResult = {
  status: OperationResultStatus;
  consumed_gas?: Maybe<Scalars['PositiveBigNumber']>;
  consumed_milligas?: Maybe<Scalars['PositiveBigNumber']>;
  errors?: Maybe<Array<Scalars['JSONObject']>>;
};

export type InternalDelegationResult = InternalOperationResult & {
  __typename?: 'InternalDelegationResult';
  kind: InternalOperationKind;
  source: Scalars['Address'];
  nonce: Scalars['Int'];
  result: DelegationNotificationResult;
  delegate?: Maybe<Scalars['Address']>;
};

export type InternalOperationResult = {
  kind: InternalOperationKind;
  source: Scalars['Address'];
  nonce: Scalars['Int'];
  result: OperationResult;
};

export enum InternalOperationKind {
  Delegation = 'delegation',
  Origination = 'origination',
  RegisterGlobalConstant = 'register_global_constant',
  Reveal = 'reveal',
  Transaction = 'transaction'
}

export type DelegationNotificationMetadata = OperationMetadata & DelegationMetadata & {
  __typename?: 'DelegationNotificationMetadata';
  balance_updates: Array<BalanceUpdate>;
  internal_operation_results?: Maybe<Array<InternalOperationResult>>;
  operation_result: DelegationNotificationResult;
};

export type OperationMetadata = {
  operation_result: OperationResult;
};

export type DelegationMetadata = {
  operation_result: DelegationResult;
};

export type DelegationNotification = Operation & OperationNotification & OperationNotificationWithBalanceUpdates & MoneyOperation & MoneyOperationNotification & Delegation & {
  __typename?: 'DelegationNotification';
  kind: OperationKind;
  operation_group: OperationGroup;
  block?: Maybe<BlockNotification>;
  origin: OperationOrigin;
  fee: Scalars['Mutez'];
  counter: Scalars['PositiveBigNumber'];
  gas_limit: Scalars['PositiveBigNumber'];
  storage_limit: Scalars['PositiveBigNumber'];
  delegate?: Maybe<Scalars['Address']>;
  metadata?: Maybe<DelegationNotificationMetadata>;
  source: Scalars['Address'];
};

export type MoneyOperation = {
  kind: OperationKind;
  fee: Scalars['Mutez'];
  counter?: Maybe<Scalars['PositiveBigNumber']>;
  gas_limit?: Maybe<Scalars['PositiveBigNumber']>;
  storage_limit?: Maybe<Scalars['PositiveBigNumber']>;
};

export type MoneyOperationNotification = {
  kind: OperationKind;
  operation_group: OperationGroup;
  block?: Maybe<BlockNotification>;
  origin: OperationOrigin;
  fee: Scalars['Mutez'];
  counter: Scalars['PositiveBigNumber'];
  gas_limit: Scalars['PositiveBigNumber'];
  storage_limit: Scalars['PositiveBigNumber'];
  source: Scalars['Address'];
};

export type Delegation = {
  kind: OperationKind;
  fee: Scalars['Mutez'];
  counter?: Maybe<Scalars['PositiveBigNumber']>;
  gas_limit?: Maybe<Scalars['PositiveBigNumber']>;
  storage_limit?: Maybe<Scalars['PositiveBigNumber']>;
  delegate?: Maybe<Scalars['Address']>;
  metadata?: Maybe<DelegationMetadata>;
};

export type DoubleBakingEvidenceNotification = Operation & OperationNotification & OperationNotificationWithBalanceUpdates & {
  __typename?: 'DoubleBakingEvidenceNotification';
  kind: OperationKind;
  operation_group: OperationGroup;
  block?: Maybe<BlockNotification>;
  origin: OperationOrigin;
  bh1: DoubleBakingEvidenceBlockHeader;
  bh2: DoubleBakingEvidenceBlockHeader;
  metadata?: Maybe<SimpleOperationMetadata>;
};

export type DoubleBakingEvidenceBlockHeader = {
  __typename?: 'DoubleBakingEvidenceBlockHeader';
  level: Scalars['Int'];
  proto: Scalars['Int'];
  predecessor: Scalars['BlockHash'];
  timestamp: Scalars['DateTime'];
  validation_pass: Scalars['Int'];
  operations_hash?: Maybe<Scalars['OperationHash']>;
  fitness: Array<Scalars['String']>;
  context: Scalars['ContextHash'];
  priority: Scalars['Int'];
  proof_of_work_nonce?: Maybe<Scalars['String']>;
  seed_nonce_hash?: Maybe<Scalars['NonceHash']>;
  signature: Scalars['Signature'];
};

export type DoubleEndorsementEvidenceNotification = Operation & OperationNotification & OperationNotificationWithBalanceUpdates & {
  __typename?: 'DoubleEndorsementEvidenceNotification';
  kind: OperationKind;
  operation_group: OperationGroup;
  block?: Maybe<BlockNotification>;
  origin: OperationOrigin;
  op1: InlinedEndorsement;
  op2: InlinedEndorsement;
  slot: Scalars['Int'];
  metadata?: Maybe<SimpleOperationMetadata>;
};

export type EndorsementNotificationMetadata = EndorsementMetadata & {
  __typename?: 'EndorsementNotificationMetadata';
  balance_updates: Array<BalanceUpdate>;
  delegate: Scalars['Address'];
  slots: Array<Scalars['Int']>;
};

export type AbstractEndorsementNotification = Operation & OperationNotification & OperationNotificationWithBalanceUpdates & {
  __typename?: 'AbstractEndorsementNotification';
  kind: OperationKind;
  operation_group: OperationGroup;
  block?: Maybe<BlockNotification>;
  origin: OperationOrigin;
  metadata?: Maybe<EndorsementNotificationMetadata>;
};

export type OriginationNotificationResult = OperationResult & OriginationResult & {
  __typename?: 'OriginationNotificationResult';
  balance_updates?: Maybe<Array<BalanceUpdate>>;
  originated_contracts?: Maybe<Array<Scalars['Address']>>;
  storage_size?: Maybe<Scalars['BigNumber']>;
  paid_storage_size_diff?: Maybe<Scalars['BigNumber']>;
  big_map_diff?: Maybe<Array<BigMapDiff>>;
  lazy_storage_diff?: Maybe<Array<LazyStorageDiff>>;
  status: OperationResultStatus;
  consumed_gas?: Maybe<Scalars['PositiveBigNumber']>;
  consumed_milligas?: Maybe<Scalars['PositiveBigNumber']>;
  errors?: Maybe<Array<Scalars['JSONObject']>>;
};

export type OriginationResult = {
  status: OperationResultStatus;
  consumed_gas?: Maybe<Scalars['PositiveBigNumber']>;
  consumed_milligas?: Maybe<Scalars['PositiveBigNumber']>;
  errors?: Maybe<Array<Scalars['JSONObject']>>;
};

export type LazyStorageDiff = {
  kind: LazyStorageDiffKind;
  id: Scalars['BigNumber'];
};

export enum LazyStorageDiffKind {
  BigMap = 'big_map',
  SaplingState = 'sapling_state'
}

export type InternalOriginationResult = InternalOperationResult & {
  __typename?: 'InternalOriginationResult';
  kind: InternalOperationKind;
  source: Scalars['Address'];
  nonce: Scalars['Int'];
  result: OriginationNotificationResult;
  balance: Scalars['Mutez'];
  delegate?: Maybe<Scalars['Address']>;
  script: ScriptedContracts;
};

export type ScriptedContracts = {
  __typename?: 'ScriptedContracts';
  code: Array<Scalars['Micheline']>;
  storage: Scalars['Micheline'];
};

export type OriginationNotificationMetadata = OperationMetadata & OriginationMetadata & {
  __typename?: 'OriginationNotificationMetadata';
  balance_updates: Array<BalanceUpdate>;
  internal_operation_results?: Maybe<Array<InternalOperationResult>>;
  operation_result: OriginationNotificationResult;
};

export type OriginationMetadata = {
  operation_result: OriginationResult;
};

export type OriginationNotification = Operation & OperationNotification & OperationNotificationWithBalanceUpdates & MoneyOperation & MoneyOperationNotification & Origination & {
  __typename?: 'OriginationNotification';
  kind: OperationKind;
  operation_group: OperationGroup;
  block?: Maybe<BlockNotification>;
  origin: OperationOrigin;
  fee: Scalars['Mutez'];
  counter: Scalars['PositiveBigNumber'];
  gas_limit: Scalars['PositiveBigNumber'];
  storage_limit: Scalars['PositiveBigNumber'];
  source: Scalars['Address'];
  balance: Scalars['Mutez'];
  delegate?: Maybe<Scalars['Address']>;
  metadata?: Maybe<OriginationNotificationMetadata>;
  script: ScriptedContracts;
};

export type Origination = {
  kind: OperationKind;
  fee: Scalars['Mutez'];
  counter?: Maybe<Scalars['PositiveBigNumber']>;
  gas_limit?: Maybe<Scalars['PositiveBigNumber']>;
  storage_limit?: Maybe<Scalars['PositiveBigNumber']>;
  balance?: Maybe<Scalars['Mutez']>;
  delegate?: Maybe<Scalars['Address']>;
  metadata?: Maybe<OriginationMetadata>;
};

export type RegisterGlobalConstantNotificationResult = OperationResult & {
  __typename?: 'RegisterGlobalConstantNotificationResult';
  status: OperationResultStatus;
  consumed_gas?: Maybe<Scalars['PositiveBigNumber']>;
  consumed_milligas?: Maybe<Scalars['PositiveBigNumber']>;
  errors?: Maybe<Array<Scalars['JSONObject']>>;
  balance_updates?: Maybe<Array<BalanceUpdate>>;
  global_address?: Maybe<Scalars['Address']>;
  storage_size?: Maybe<Scalars['BigNumber']>;
};

export type InternalRegisterGlobalConstantResult = InternalOperationResult & {
  __typename?: 'InternalRegisterGlobalConstantResult';
  kind: InternalOperationKind;
  source: Scalars['Address'];
  nonce: Scalars['Int'];
  result: RegisterGlobalConstantNotificationResult;
  value: Array<Scalars['Micheline']>;
};

export type RegisterGlobalConstantNotification = Operation & OperationNotification & OperationNotificationWithBalanceUpdates & MoneyOperation & MoneyOperationNotification & {
  __typename?: 'RegisterGlobalConstantNotification';
  kind: OperationKind;
  operation_group: OperationGroup;
  block?: Maybe<BlockNotification>;
  origin: OperationOrigin;
  fee: Scalars['Mutez'];
  counter: Scalars['PositiveBigNumber'];
  gas_limit: Scalars['PositiveBigNumber'];
  storage_limit: Scalars['PositiveBigNumber'];
  source: Scalars['Address'];
  value: Array<Scalars['Micheline']>;
  metadata?: Maybe<RegisterGlobalConstantNotificationMetadata>;
};

export type RegisterGlobalConstantNotificationMetadata = OperationMetadata & {
  __typename?: 'RegisterGlobalConstantNotificationMetadata';
  balance_updates: Array<BalanceUpdate>;
  internal_operation_results?: Maybe<Array<InternalOperationResult>>;
  operation_result: RegisterGlobalConstantNotificationResult;
};

export type RevealNotificationResult = OperationResult & RevealResult & {
  __typename?: 'RevealNotificationResult';
  status: OperationResultStatus;
  consumed_gas?: Maybe<Scalars['PositiveBigNumber']>;
  consumed_milligas?: Maybe<Scalars['PositiveBigNumber']>;
  errors?: Maybe<Array<Scalars['JSONObject']>>;
};

export type RevealResult = {
  status: OperationResultStatus;
  consumed_gas?: Maybe<Scalars['PositiveBigNumber']>;
  consumed_milligas?: Maybe<Scalars['PositiveBigNumber']>;
  errors?: Maybe<Array<Scalars['JSONObject']>>;
};

export type InternalRevealResult = InternalOperationResult & {
  __typename?: 'InternalRevealResult';
  kind: InternalOperationKind;
  source: Scalars['Address'];
  nonce: Scalars['Int'];
  result: RevealNotificationResult;
  public_key: Scalars['PublicKey'];
};

export type RevealNotificationMetadata = OperationMetadata & RevealMetadata & {
  __typename?: 'RevealNotificationMetadata';
  balance_updates: Array<BalanceUpdate>;
  internal_operation_results?: Maybe<Array<InternalOperationResult>>;
  operation_result: RevealNotificationResult;
};

export type RevealMetadata = {
  operation_result: RevealResult;
};

export type RevealNotification = Operation & OperationNotification & OperationNotificationWithBalanceUpdates & MoneyOperation & MoneyOperationNotification & Reveal & {
  __typename?: 'RevealNotification';
  kind: OperationKind;
  operation_group: OperationGroup;
  block?: Maybe<BlockNotification>;
  origin: OperationOrigin;
  fee: Scalars['Mutez'];
  counter: Scalars['PositiveBigNumber'];
  gas_limit: Scalars['PositiveBigNumber'];
  storage_limit: Scalars['PositiveBigNumber'];
  source: Scalars['Address'];
  public_key: Scalars['PublicKey'];
  metadata?: Maybe<RevealNotificationMetadata>;
};

export type Reveal = {
  kind: OperationKind;
  fee: Scalars['Mutez'];
  counter?: Maybe<Scalars['PositiveBigNumber']>;
  gas_limit?: Maybe<Scalars['PositiveBigNumber']>;
  storage_limit?: Maybe<Scalars['PositiveBigNumber']>;
  public_key: Scalars['PublicKey'];
  metadata?: Maybe<RevealMetadata>;
};

export type SeedNonceRevelationNotification = Operation & OperationNotification & OperationNotificationWithBalanceUpdates & {
  __typename?: 'SeedNonceRevelationNotification';
  kind: OperationKind;
  operation_group: OperationGroup;
  block?: Maybe<BlockNotification>;
  origin: OperationOrigin;
  level: Scalars['Int'];
  nonce: Scalars['String'];
  metadata?: Maybe<SimpleOperationMetadata>;
};

export type TransactionNotificationResult = OperationResult & TransactionResult & {
  __typename?: 'TransactionNotificationResult';
  balance_updates?: Maybe<Array<BalanceUpdate>>;
  originated_contracts?: Maybe<Array<Scalars['Address']>>;
  storage_size?: Maybe<Scalars['BigNumber']>;
  paid_storage_size_diff?: Maybe<Scalars['BigNumber']>;
  big_map_diff?: Maybe<Array<BigMapDiff>>;
  lazy_storage_diff?: Maybe<Array<LazyStorageDiff>>;
  status: OperationResultStatus;
  consumed_gas?: Maybe<Scalars['PositiveBigNumber']>;
  consumed_milligas?: Maybe<Scalars['PositiveBigNumber']>;
  errors?: Maybe<Array<Scalars['JSONObject']>>;
  storage?: Maybe<Scalars['Micheline']>;
  allocated_destination_contract?: Maybe<Scalars['Boolean']>;
};

export type TransactionResult = {
  status: OperationResultStatus;
  consumed_gas?: Maybe<Scalars['PositiveBigNumber']>;
  consumed_milligas?: Maybe<Scalars['PositiveBigNumber']>;
  errors?: Maybe<Array<Scalars['JSONObject']>>;
};

export type InternalTransactionResult = InternalOperationResult & {
  __typename?: 'InternalTransactionResult';
  kind: InternalOperationKind;
  source: Scalars['Address'];
  nonce: Scalars['Int'];
  result: TransactionNotificationResult;
  amount: Scalars['Mutez'];
  destination: Scalars['Address'];
  parameters?: Maybe<TransactionParameters>;
};

export type TransactionParameters = {
  __typename?: 'TransactionParameters';
  entrypoint: Scalars['String'];
  value: Scalars['Micheline'];
  canonical_value?: Maybe<Scalars['String']>;
  michelson_value?: Maybe<Scalars['String']>;
};

export type TransactionNotificationMetadata = OperationMetadata & TransactionMetadata & {
  __typename?: 'TransactionNotificationMetadata';
  balance_updates: Array<BalanceUpdate>;
  internal_operation_results?: Maybe<Array<InternalOperationResult>>;
  operation_result: TransactionNotificationResult;
};

export type TransactionMetadata = {
  operation_result: TransactionResult;
};

export type TransactionNotification = Operation & OperationNotification & OperationNotificationWithBalanceUpdates & MoneyOperation & MoneyOperationNotification & Transaction & {
  __typename?: 'TransactionNotification';
  kind: OperationKind;
  operation_group: OperationGroup;
  block?: Maybe<BlockNotification>;
  origin: OperationOrigin;
  fee: Scalars['Mutez'];
  counter: Scalars['PositiveBigNumber'];
  gas_limit: Scalars['PositiveBigNumber'];
  storage_limit: Scalars['PositiveBigNumber'];
  source: Scalars['Address'];
  amount: Scalars['Mutez'];
  destination: Scalars['Address'];
  parameters?: Maybe<TransactionParameters>;
  metadata?: Maybe<TransactionNotificationMetadata>;
};

export type Transaction = {
  kind: OperationKind;
  fee: Scalars['Mutez'];
  counter?: Maybe<Scalars['PositiveBigNumber']>;
  gas_limit?: Maybe<Scalars['PositiveBigNumber']>;
  storage_limit?: Maybe<Scalars['PositiveBigNumber']>;
  amount?: Maybe<Scalars['Mutez']>;
  destination?: Maybe<Scalars['Address']>;
  parameters?: Maybe<TransactionParameters>;
  metadata?: Maybe<TransactionMetadata>;
};

export type LazyBigMapStorageDiff = LazyStorageDiff & {
  __typename?: 'LazyBigMapStorageDiff';
  kind: LazyStorageDiffKind;
  id: Scalars['BigNumber'];
  big_map_diff: LazyBigMapDiff;
};

export type LazySaplingStateStorageDiff = LazyStorageDiff & {
  __typename?: 'LazySaplingStateStorageDiff';
  kind: LazyStorageDiffKind;
  id: Scalars['BigNumber'];
  sapling_state_diff: LazySaplingStateDiff;
};

export type ActivateAccountRecord = Operation & OperationRecord & {
  __typename?: 'ActivateAccountRecord';
  kind: OperationKind;
  hash: Scalars['OperationHash'];
  batch_position: Scalars['Int'];
  internal: Scalars['Int'];
  block: BlockRecord;
  source?: Maybe<AccountRecord>;
  bigmap_values: BigmapValueRecordConnection;
};


export type ActivateAccountRecordBigmap_ValuesArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<BigmapValueOrderByInput>;
};

export type OperationRecord = {
  kind: OperationKind;
  hash: Scalars['OperationHash'];
  batch_position: Scalars['Int'];
  internal: Scalars['Int'];
  block: BlockRecord;
  source?: Maybe<AccountRecord>;
  bigmap_values: BigmapValueRecordConnection;
};


export type OperationRecordBigmap_ValuesArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<BigmapValueOrderByInput>;
};

export type BlockRecord = {
  __typename?: 'BlockRecord';
  hash: Scalars['BlockHash'];
  level: Scalars['Int'];
  timestamp: Scalars['DateTime'];
};

export type AccountRecord = {
  __typename?: 'AccountRecord';
  address: Scalars['Address'];
  public_key?: Maybe<Scalars['String']>;
  activated?: Maybe<Scalars['DateTime']>;
  bigmaps?: Maybe<BigmapRecordConnection>;
  operations?: Maybe<OperationRecordConnection>;
  contract_metadata?: Maybe<ContractMetadata>;
  token_metadata?: Maybe<TokenMetadata>;
  script?: Maybe<ScriptedContracts>;
};


export type AccountRecordBigmapsArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<BigmapOrderByInput>;
};


export type AccountRecordOperationsArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  filter: OperationsFilterInAccount;
  order_by?: InputMaybe<OperationsOrderByInput>;
};


export type AccountRecordContract_MetadataArgs = {
  view_names?: InputMaybe<Array<Scalars['String']>>;
};


export type AccountRecordToken_MetadataArgs = {
  token_id?: InputMaybe<Scalars['Int']>;
};

export type BigmapRecordConnection = {
  __typename?: 'BigmapRecordConnection';
  page_info: PageInfo;
  edges?: Maybe<Array<BigmapRecordEdge>>;
  total_count: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  has_next_page: Scalars['Boolean'];
  has_previous_page: Scalars['Boolean'];
  start_cursor?: Maybe<Scalars['Cursor']>;
  end_cursor?: Maybe<Scalars['Cursor']>;
};

export type BigmapRecordEdge = {
  __typename?: 'BigmapRecordEdge';
  cursor: Scalars['Cursor'];
  node?: Maybe<BigmapRecord>;
};

export type BigmapRecord = {
  __typename?: 'BigmapRecord';
  annots?: Maybe<Scalars['String']>;
  key_type: Scalars['Micheline'];
  value_type?: Maybe<Scalars['Micheline']>;
  key_type_micheline_json: Scalars['String'];
  key_type_michelson: Scalars['String'];
  value_type_micheline_json: Scalars['String'];
  value_type_michelson: Scalars['String'];
  contract?: Maybe<AccountRecord>;
  block: BlockRecord;
  id?: Maybe<Scalars['BigNumber']>;
  batch_position: Scalars['BigNumber'];
  operation?: Maybe<OperationRecord>;
  keys: BigmapKeyRecordConnection;
};


export type BigmapRecordKeysArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<BigmapKeyFilterInBigmap>;
  order_by?: InputMaybe<BigmapKeyOrderByInput>;
};

export type BigmapKeyRecordConnection = {
  __typename?: 'BigmapKeyRecordConnection';
  page_info: PageInfo;
  edges?: Maybe<Array<BigmapKeyRecordEdge>>;
  total_count: Scalars['Int'];
};

export type BigmapKeyRecordEdge = {
  __typename?: 'BigmapKeyRecordEdge';
  cursor: Scalars['Cursor'];
  node?: Maybe<BigmapKeyRecord>;
};

export type BigmapKeyRecord = {
  __typename?: 'BigmapKeyRecord';
  key_hash?: Maybe<Scalars['String']>;
  key: Scalars['Micheline'];
  key_micheline_json: Scalars['Micheline'];
  key_michelson: Scalars['String'];
  values_history: BigmapValueRecordConnection;
  current_value: BigmapValueRecord;
};


export type BigmapKeyRecordValues_HistoryArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<BigmapValueOrderByInput>;
};

export type BigmapValueRecordConnection = {
  __typename?: 'BigmapValueRecordConnection';
  page_info: PageInfo;
  edges?: Maybe<Array<BigmapValueRecordEdge>>;
  total_count: Scalars['Int'];
};

export type BigmapValueRecordEdge = {
  __typename?: 'BigmapValueRecordEdge';
  cursor: Scalars['Cursor'];
  node?: Maybe<BigmapValueRecord>;
};

export type BigmapValueRecord = {
  __typename?: 'BigmapValueRecord';
  key_hash: Scalars['String'];
  kind: BigmapOperationKind;
  key: Scalars['Micheline'];
  value?: Maybe<Scalars['Micheline']>;
  key_micheline_json: Scalars['String'];
  key_michelson: Scalars['String'];
  value_micheline_json?: Maybe<Scalars['Micheline']>;
  value_michelson?: Maybe<Scalars['String']>;
  contract: AccountRecord;
  source: AccountRecord;
  block: BlockRecord;
  batch_position: Scalars['BigNumber'];
  previous?: Maybe<BigmapValueRecord>;
  operation: OperationRecord;
};

export enum BigmapOperationKind {
  Alloc = 'alloc',
  Update = 'update',
  Clear = 'clear',
  Copy = 'copy'
}

export type BigmapValueOrderByInput = {
  field: BigmapValueOrderByField;
  direction: OrderByDirection;
};

export enum BigmapValueOrderByField {
  BlockLevel = 'block_level'
}

export enum OrderByDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type BigmapKeyFilterInBigmap = {
  keys?: InputMaybe<Array<Scalars['String']>>;
};

export type BigmapKeyOrderByInput = {
  field: BigmapKeyOrderByField;
  direction: OrderByDirection;
};

export enum BigmapKeyOrderByField {
  Key = 'key'
}

export type BigmapOrderByInput = {
  field: BigmapOrderByField;
  direction: OrderByDirection;
};

export enum BigmapOrderByField {
  Id = 'id',
  Annots = 'annots'
}

export type OperationRecordConnection = {
  __typename?: 'OperationRecordConnection';
  page_info: PageInfo;
  edges?: Maybe<Array<OperationRecordEdge>>;
  total_count: Scalars['Int'];
};

export type OperationRecordEdge = {
  __typename?: 'OperationRecordEdge';
  cursor: Scalars['Cursor'];
  node?: Maybe<OperationRecord>;
};

export type OperationsFilterInAccount = {
  hash?: InputMaybe<Scalars['OperationHash']>;
  batch_position?: InputMaybe<Scalars['Int']>;
  internal?: InputMaybe<Scalars['Int']>;
  kind?: InputMaybe<OperationRecordKind>;
  level?: InputMaybe<Scalars['Int']>;
  block_hash?: InputMaybe<Scalars['BlockHash']>;
  public_key?: InputMaybe<Scalars['PublicKey']>;
  entrypoint?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<DateRangeFilter>;
  consumed_milligas?: InputMaybe<DecimalRangeFilter>;
  amount?: InputMaybe<MutezRangeFilter>;
  fee?: InputMaybe<MutezRangeFilter>;
  status?: InputMaybe<OperationRecordStatus>;
  relationship_type: AccountToOperationRelationshipType;
};

export enum OperationRecordKind {
  Endorsement = 'endorsement',
  SeedNonceRevelation = 'seed_nonce_revelation',
  DoubleEndorsementEvidence = 'double_endorsement_evidence',
  DoubleBakingEvidence = 'double_baking_evidence',
  ActivateAccount = 'activate_account',
  Proposals = 'proposals',
  Ballot = 'ballot',
  Reveal = 'reveal',
  Transaction = 'transaction',
  Origination = 'origination',
  Delegation = 'delegation',
  EndorsementWithSlot = 'endorsement_with_slot'
}

export type DateRangeFilter = {
  gte?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
};

export type DecimalRangeFilter = {
  lte?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
};

export type MutezRangeFilter = {
  lte?: InputMaybe<Scalars['Mutez']>;
  gte?: InputMaybe<Scalars['Mutez']>;
};

export enum OperationRecordStatus {
  Applied = 'applied',
  Backtracked = 'backtracked',
  Failed = 'failed',
  Skipped = 'skipped'
}

export enum AccountToOperationRelationshipType {
  Source = 'source',
  Destination = 'destination',
  Contract = 'contract',
  Delegate = 'delegate'
}

export type OperationsOrderByInput = {
  field: OperationsOrderByField;
  direction: OrderByDirection;
};

export enum OperationsOrderByField {
  Source = 'source',
  Hash = 'hash',
  ChronologicalOrder = 'chronological_order'
}

export type ContractMetadata = {
  __typename?: 'ContractMetadata';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  license?: Maybe<ContractMetadataLicense>;
  authors?: Maybe<Array<Scalars['String']>>;
  homepage?: Maybe<Scalars['String']>;
  source?: Maybe<ContractMetadataSource>;
  interfaces?: Maybe<Array<Scalars['String']>>;
  errors?: Maybe<Array<ContractMetadataError>>;
  raw?: Maybe<Scalars['JSONObject']>;
  views?: Maybe<Array<ViewDefinition>>;
};

export type ContractMetadataLicense = {
  __typename?: 'ContractMetadataLicense';
  name?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
};

export type ContractMetadataSource = {
  __typename?: 'ContractMetadataSource';
  tools?: Maybe<Array<Scalars['String']>>;
  location?: Maybe<Scalars['String']>;
};

export type ContractMetadataError = {
  __typename?: 'ContractMetadataError';
  error?: Maybe<ContractMetadataErrorValues>;
  view?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Scalars['String']>>;
  expansion?: Maybe<ContractMetadataErrorValues>;
};

export type ContractMetadataErrorValues = {
  __typename?: 'ContractMetadataErrorValues';
  int?: Maybe<Scalars['Int']>;
  string?: Maybe<Scalars['String']>;
  bytes?: Maybe<Scalars['String']>;
};

export type ViewDefinition = {
  __typename?: 'ViewDefinition';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  implementations?: Maybe<Array<ViewImplementation>>;
  pure?: Maybe<Scalars['String']>;
};

export type ViewImplementation = {
  __typename?: 'ViewImplementation';
  michelsonStorageView?: Maybe<MichelsonStorageViewType>;
  restApiQuery?: Maybe<RestApiQueryType>;
};

export type MichelsonStorageViewType = {
  __typename?: 'MichelsonStorageViewType';
  version?: Maybe<Scalars['String']>;
  parameter?: Maybe<Scalars['Micheline']>;
  returnType: Scalars['Micheline'];
  canonical_code?: Maybe<Scalars['Micheline']>;
  annotations?: Maybe<MichelsonStorageViewTypeAnnotation>;
  michelson_code?: Maybe<Scalars['String']>;
};

export type MichelsonStorageViewTypeAnnotation = {
  __typename?: 'MichelsonStorageViewTypeAnnotation';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type RestApiQueryType = {
  __typename?: 'RestApiQueryType';
  specificationUri: Scalars['String'];
  baseUri?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  method?: Maybe<RestApiQueryTypeMethodKind>;
};

export enum RestApiQueryTypeMethodKind {
  Get = 'get',
  Post = 'post',
  Put = 'put'
}

export type TokenMetadata = {
  __typename?: 'TokenMetadata';
  decimals: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['Int']>;
  raw?: Maybe<Scalars['JSONObject']>;
};

export type BallotRecord = Operation & OperationRecord & {
  __typename?: 'BallotRecord';
  kind: OperationKind;
  hash: Scalars['OperationHash'];
  batch_position: Scalars['Int'];
  internal: Scalars['Int'];
  block: BlockRecord;
  source?: Maybe<AccountRecord>;
  bigmap_values: BigmapValueRecordConnection;
};


export type BallotRecordBigmap_ValuesArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<BigmapValueOrderByInput>;
};

export type DelegationResultRecord = OperationResult & DelegationResult & {
  __typename?: 'DelegationResultRecord';
  status: OperationResultStatus;
  consumed_gas?: Maybe<Scalars['PositiveBigNumber']>;
  consumed_milligas?: Maybe<Scalars['PositiveBigNumber']>;
  errors?: Maybe<Array<Scalars['JSONObject']>>;
};

export type DelegationRecordMetadata = OperationMetadata & DelegationMetadata & {
  __typename?: 'DelegationRecordMetadata';
  operation_result: DelegationResultRecord;
};

export type DelegationRecord = Operation & OperationRecord & MoneyOperation & MoneyOperationRecord & Delegation & {
  __typename?: 'DelegationRecord';
  kind: OperationKind;
  fee: Scalars['Mutez'];
  counter?: Maybe<Scalars['PositiveBigNumber']>;
  gas_limit?: Maybe<Scalars['PositiveBigNumber']>;
  storage_limit?: Maybe<Scalars['PositiveBigNumber']>;
  delegate?: Maybe<Scalars['Address']>;
  metadata?: Maybe<DelegationRecordMetadata>;
  hash: Scalars['OperationHash'];
  batch_position: Scalars['Int'];
  internal: Scalars['Int'];
  block: BlockRecord;
  source?: Maybe<AccountRecord>;
  bigmap_values: BigmapValueRecordConnection;
  amount?: Maybe<Scalars['Mutez']>;
};


export type DelegationRecordBigmap_ValuesArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<BigmapValueOrderByInput>;
};

export type MoneyOperationRecord = {
  kind: OperationKind;
  hash: Scalars['OperationHash'];
  batch_position: Scalars['Int'];
  internal: Scalars['Int'];
  block: BlockRecord;
  source?: Maybe<AccountRecord>;
  bigmap_values: BigmapValueRecordConnection;
  fee: Scalars['Mutez'];
  counter?: Maybe<Scalars['PositiveBigNumber']>;
  gas_limit?: Maybe<Scalars['PositiveBigNumber']>;
  storage_limit?: Maybe<Scalars['PositiveBigNumber']>;
};


export type MoneyOperationRecordBigmap_ValuesArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<BigmapValueOrderByInput>;
};

export type DoubleBakingEvidenceRecord = Operation & OperationRecord & {
  __typename?: 'DoubleBakingEvidenceRecord';
  kind: OperationKind;
  hash: Scalars['OperationHash'];
  batch_position: Scalars['Int'];
  internal: Scalars['Int'];
  block: BlockRecord;
  source?: Maybe<AccountRecord>;
  bigmap_values: BigmapValueRecordConnection;
};


export type DoubleBakingEvidenceRecordBigmap_ValuesArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<BigmapValueOrderByInput>;
};

export type DoubleEndorsementEvidenceRecord = Operation & OperationRecord & {
  __typename?: 'DoubleEndorsementEvidenceRecord';
  kind: OperationKind;
  hash: Scalars['OperationHash'];
  batch_position: Scalars['Int'];
  internal: Scalars['Int'];
  block: BlockRecord;
  source?: Maybe<AccountRecord>;
  bigmap_values: BigmapValueRecordConnection;
};


export type DoubleEndorsementEvidenceRecordBigmap_ValuesArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<BigmapValueOrderByInput>;
};

export type EndorsementRecordMetadata = EndorsementMetadata & {
  __typename?: 'EndorsementRecordMetadata';
  delegate: Scalars['Address'];
  slots: Array<Scalars['Int']>;
};

export type EndorsementRecord = Operation & OperationRecord & Endorsement & {
  __typename?: 'EndorsementRecord';
  kind: OperationKind;
  metadata?: Maybe<EndorsementRecordMetadata>;
  hash: Scalars['OperationHash'];
  batch_position: Scalars['Int'];
  internal: Scalars['Int'];
  block: BlockRecord;
  source?: Maybe<AccountRecord>;
  bigmap_values: BigmapValueRecordConnection;
  reward?: Maybe<Scalars['Mutez']>;
  deposit?: Maybe<Scalars['Mutez']>;
};


export type EndorsementRecordBigmap_ValuesArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<BigmapValueOrderByInput>;
};

export type OriginationResultRecord = OperationResult & OriginationResult & {
  __typename?: 'OriginationResultRecord';
  status: OperationResultStatus;
  consumed_gas?: Maybe<Scalars['PositiveBigNumber']>;
  consumed_milligas?: Maybe<Scalars['PositiveBigNumber']>;
  errors?: Maybe<Array<Scalars['JSONObject']>>;
};

export type OriginationRecordMetadata = OperationMetadata & OriginationMetadata & {
  __typename?: 'OriginationRecordMetadata';
  operation_result: OriginationResultRecord;
};

export type OriginationRecord = Operation & OperationRecord & MoneyOperation & MoneyOperationRecord & Origination & {
  __typename?: 'OriginationRecord';
  kind: OperationKind;
  fee: Scalars['Mutez'];
  counter?: Maybe<Scalars['PositiveBigNumber']>;
  gas_limit?: Maybe<Scalars['PositiveBigNumber']>;
  storage_limit?: Maybe<Scalars['PositiveBigNumber']>;
  balance?: Maybe<Scalars['Mutez']>;
  delegate?: Maybe<Scalars['Address']>;
  metadata?: Maybe<OriginationRecordMetadata>;
  hash: Scalars['OperationHash'];
  batch_position: Scalars['Int'];
  internal: Scalars['Int'];
  block: BlockRecord;
  source?: Maybe<AccountRecord>;
  bigmap_values: BigmapValueRecordConnection;
  contract_address: Scalars['Address'];
  storage_size?: Maybe<Scalars['Decimal']>;
  burned?: Maybe<Scalars['Mutez']>;
  contract?: Maybe<AccountRecord>;
};


export type OriginationRecordBigmap_ValuesArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<BigmapValueOrderByInput>;
};

export type ProposalRecord = Operation & OperationRecord & {
  __typename?: 'ProposalRecord';
  kind: OperationKind;
  hash: Scalars['OperationHash'];
  batch_position: Scalars['Int'];
  internal: Scalars['Int'];
  block: BlockRecord;
  source?: Maybe<AccountRecord>;
  bigmap_values: BigmapValueRecordConnection;
};


export type ProposalRecordBigmap_ValuesArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<BigmapValueOrderByInput>;
};

export type RevealResultRecord = OperationResult & RevealResult & {
  __typename?: 'RevealResultRecord';
  status: OperationResultStatus;
  consumed_gas?: Maybe<Scalars['PositiveBigNumber']>;
  consumed_milligas?: Maybe<Scalars['PositiveBigNumber']>;
  errors?: Maybe<Array<Scalars['JSONObject']>>;
};

export type RevealRecordMetadata = OperationMetadata & RevealMetadata & {
  __typename?: 'RevealRecordMetadata';
  operation_result: RevealResultRecord;
};

export type RevealRecord = Operation & OperationRecord & MoneyOperation & MoneyOperationRecord & Reveal & {
  __typename?: 'RevealRecord';
  kind: OperationKind;
  fee: Scalars['Mutez'];
  counter?: Maybe<Scalars['PositiveBigNumber']>;
  gas_limit?: Maybe<Scalars['PositiveBigNumber']>;
  storage_limit?: Maybe<Scalars['PositiveBigNumber']>;
  public_key: Scalars['PublicKey'];
  metadata?: Maybe<RevealRecordMetadata>;
  hash: Scalars['OperationHash'];
  batch_position: Scalars['Int'];
  internal: Scalars['Int'];
  block: BlockRecord;
  source?: Maybe<AccountRecord>;
  bigmap_values: BigmapValueRecordConnection;
};


export type RevealRecordBigmap_ValuesArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<BigmapValueOrderByInput>;
};

export type SeedNonceRevelationRecord = Operation & OperationRecord & {
  __typename?: 'SeedNonceRevelationRecord';
  kind: OperationKind;
  hash: Scalars['OperationHash'];
  batch_position: Scalars['Int'];
  internal: Scalars['Int'];
  block: BlockRecord;
  source?: Maybe<AccountRecord>;
  bigmap_values: BigmapValueRecordConnection;
};


export type SeedNonceRevelationRecordBigmap_ValuesArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<BigmapValueOrderByInput>;
};

export type TransactionResultRecord = OperationResult & TransactionResult & {
  __typename?: 'TransactionResultRecord';
  status: OperationResultStatus;
  consumed_gas?: Maybe<Scalars['PositiveBigNumber']>;
  consumed_milligas?: Maybe<Scalars['PositiveBigNumber']>;
  errors?: Maybe<Array<Scalars['JSONObject']>>;
};

export type TransactionRecordMetadata = OperationMetadata & TransactionMetadata & {
  __typename?: 'TransactionRecordMetadata';
  operation_result: TransactionResultRecord;
};

export type TransactionRecord = Operation & OperationRecord & MoneyOperation & MoneyOperationRecord & Transaction & {
  __typename?: 'TransactionRecord';
  kind: OperationKind;
  fee: Scalars['Mutez'];
  counter?: Maybe<Scalars['PositiveBigNumber']>;
  gas_limit?: Maybe<Scalars['PositiveBigNumber']>;
  storage_limit?: Maybe<Scalars['PositiveBigNumber']>;
  amount?: Maybe<Scalars['Mutez']>;
  destination?: Maybe<Scalars['Address']>;
  parameters?: Maybe<TransactionParameters>;
  metadata?: Maybe<TransactionRecordMetadata>;
  hash: Scalars['OperationHash'];
  batch_position: Scalars['Int'];
  internal: Scalars['Int'];
  block: BlockRecord;
  source?: Maybe<AccountRecord>;
  bigmap_values: BigmapValueRecordConnection;
  storage_size?: Maybe<Scalars['Decimal']>;
};


export type TransactionRecordBigmap_ValuesArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<BigmapValueOrderByInput>;
};

export type Query = {
  __typename?: 'Query';
  accounts: AccountRecordConnection;
  bigmap_keys?: Maybe<BigmapKeyRecordConnection>;
  bigmaps?: Maybe<BigmapRecordConnection>;
  bigmap_values?: Maybe<BigmapValueRecordConnection>;
  blocks: BlockRecordConnection;
  operations?: Maybe<OperationRecordConnection>;
  version: Version;
};


export type QueryAccountsArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<AccountFilter>;
  order_by?: InputMaybe<AccountOrderByInput>;
};


export type QueryBigmap_KeysArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<BigmapKeyFilter>;
  order_by?: InputMaybe<BigmapKeyOrderByInput>;
};


export type QueryBigmapsArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<BigmapFilter>;
  order_by?: InputMaybe<BigmapOrderByInput>;
};


export type QueryBigmap_ValuesArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<BigmapValueFilter>;
  order_by?: InputMaybe<BigmapValueOrderByInput>;
};


export type QueryBlocksArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<BlockFilter>;
  order_by?: InputMaybe<BlockOrderByInput>;
};


export type QueryOperationsArgs = {
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<OperationsFilter>;
  order_by?: InputMaybe<OperationsOrderByInput>;
};

export type AccountRecordConnection = {
  __typename?: 'AccountRecordConnection';
  page_info: PageInfo;
  edges?: Maybe<Array<AccountRecordEdge>>;
  total_count: Scalars['Int'];
};

export type AccountRecordEdge = {
  __typename?: 'AccountRecordEdge';
  cursor: Scalars['Cursor'];
  node?: Maybe<AccountRecord>;
};

export type AccountFilter = {
  addresses?: InputMaybe<Array<Scalars['Address']>>;
  address_prefixes?: InputMaybe<Array<Scalars['String']>>;
  is_contract?: InputMaybe<Scalars['Boolean']>;
};

export type AccountOrderByInput = {
  field: AccountOrderByField;
  direction: OrderByDirection;
};

export enum AccountOrderByField {
  Address = 'address'
}

export type BigmapKeyFilter = {
  keys?: InputMaybe<Array<Scalars['String']>>;
  bigmap_id: Scalars['Float'];
};

export type BigmapFilter = {
  annots?: InputMaybe<Array<Scalars['String']>>;
  contract?: InputMaybe<AccountInBigmapFilter>;
  ids?: InputMaybe<Array<Scalars['Int']>>;
};

export type AccountInBigmapFilter = {
  addresses?: InputMaybe<Array<Scalars['Address']>>;
};

export type BigmapValueFilter = {
  key?: InputMaybe<Scalars['Micheline']>;
  bigmap_id?: InputMaybe<Scalars['Float']>;
};

export type BlockRecordConnection = {
  __typename?: 'BlockRecordConnection';
  page_info: PageInfo;
  edges?: Maybe<Array<BlockRecordEdge>>;
  total_count: Scalars['Int'];
};

export type BlockRecordEdge = {
  __typename?: 'BlockRecordEdge';
  cursor: Scalars['Cursor'];
  node?: Maybe<BlockRecord>;
};

export type BlockFilter = {
  timestamp?: InputMaybe<DateRangeFilter>;
  level?: InputMaybe<IntRangeFilter>;
  hashes?: InputMaybe<Array<Scalars['BlockHash']>>;
};

export type IntRangeFilter = {
  lte?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
};

export type BlockOrderByInput = {
  field: BlockOrderByField;
  direction: OrderByDirection;
};

export enum BlockOrderByField {
  Level = 'level'
}

export type OperationsFilter = {
  hash?: InputMaybe<Scalars['OperationHash']>;
  batch_position?: InputMaybe<Scalars['Int']>;
  internal?: InputMaybe<Scalars['Int']>;
  kind?: InputMaybe<OperationRecordKind>;
  level?: InputMaybe<Scalars['Int']>;
  block_hash?: InputMaybe<Scalars['BlockHash']>;
  public_key?: InputMaybe<Scalars['PublicKey']>;
  entrypoint?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<DateRangeFilter>;
  consumed_milligas?: InputMaybe<DecimalRangeFilter>;
  amount?: InputMaybe<MutezRangeFilter>;
  fee?: InputMaybe<MutezRangeFilter>;
  status?: InputMaybe<OperationRecordStatus>;
  source?: InputMaybe<Scalars['Address']>;
  delegate?: InputMaybe<Scalars['Address']>;
  contract_address?: InputMaybe<Scalars['Address']>;
  destination?: InputMaybe<Scalars['Address']>;
};

export type Version = {
  __typename?: 'Version';
  name?: Maybe<Scalars['String']>;
  git_sha?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  release_notes?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  blockAdded: BlockNotification;
  bigMapChanged: BigMapDiffNotification;
  storageChanged: StorageNotification;
  balanceUpdated: BalanceUpdateNotification;
  lazyStorageChanged: LazyStorageDiffNotification;
  activateAccountAdded: ActivateAccountNotification;
  ballotAdded: BallotNotification;
  delegationAdded: DelegationNotification;
  doubleBakingEvidenceAdded: DoubleBakingEvidenceNotification;
  doubleEndorsementEvidenceAdded: DoubleEndorsementEvidenceNotification;
  endorsementAdded: EndorsementNotification;
  endorsementWithSlotAdded: EndorsementWithSlotNotification;
  originationAdded: OriginationNotification;
  proposalsAdded: ProposalsNotification;
  registerGlobalConstantAdded: RegisterGlobalConstantNotification;
  revealAdded: RevealNotification;
  seedNonceRevelationAdded: SeedNonceRevelationNotification;
  transactionAdded: TransactionNotification;
};


export type SubscriptionBlockAddedArgs = {
  replayFromBlockLevel?: InputMaybe<Scalars['Int']>;
};


export type SubscriptionBigMapChangedArgs = {
  filter?: InputMaybe<BigMapDiffFilter>;
  replayFromBlockLevel?: InputMaybe<Scalars['Int']>;
};


export type SubscriptionStorageChangedArgs = {
  filter?: InputMaybe<StorageFilter>;
  replayFromBlockLevel?: InputMaybe<Scalars['Int']>;
};


export type SubscriptionBalanceUpdatedArgs = {
  filter?: InputMaybe<BalanceUpdateFilter>;
  replayFromBlockLevel?: InputMaybe<Scalars['Int']>;
};


export type SubscriptionLazyStorageChangedArgs = {
  filter?: InputMaybe<LazyStorageDiffFilter>;
  replayFromBlockLevel?: InputMaybe<Scalars['Int']>;
};


export type SubscriptionActivateAccountAddedArgs = {
  filter?: InputMaybe<ActivateAccountFilter>;
  replayFromBlockLevel?: InputMaybe<Scalars['Int']>;
  includeMempool?: InputMaybe<Scalars['Boolean']>;
};


export type SubscriptionBallotAddedArgs = {
  filter?: InputMaybe<BallotFilter>;
  replayFromBlockLevel?: InputMaybe<Scalars['Int']>;
  includeMempool?: InputMaybe<Scalars['Boolean']>;
};


export type SubscriptionDelegationAddedArgs = {
  filter?: InputMaybe<DelegationFilter>;
  replayFromBlockLevel?: InputMaybe<Scalars['Int']>;
  includeMempool?: InputMaybe<Scalars['Boolean']>;
};


export type SubscriptionDoubleBakingEvidenceAddedArgs = {
  filter?: InputMaybe<DoubleBakingEvidenceFilter>;
  replayFromBlockLevel?: InputMaybe<Scalars['Int']>;
  includeMempool?: InputMaybe<Scalars['Boolean']>;
};


export type SubscriptionDoubleEndorsementEvidenceAddedArgs = {
  filter?: InputMaybe<DoubleEndorsementEvidenceFilter>;
  replayFromBlockLevel?: InputMaybe<Scalars['Int']>;
  includeMempool?: InputMaybe<Scalars['Boolean']>;
};


export type SubscriptionEndorsementAddedArgs = {
  filter?: InputMaybe<EndorsementFilter>;
  replayFromBlockLevel?: InputMaybe<Scalars['Int']>;
  includeMempool?: InputMaybe<Scalars['Boolean']>;
};


export type SubscriptionEndorsementWithSlotAddedArgs = {
  filter?: InputMaybe<EndorsementWithSlotFilter>;
  replayFromBlockLevel?: InputMaybe<Scalars['Int']>;
  includeMempool?: InputMaybe<Scalars['Boolean']>;
};


export type SubscriptionOriginationAddedArgs = {
  filter?: InputMaybe<OriginationFilter>;
  replayFromBlockLevel?: InputMaybe<Scalars['Int']>;
  includeMempool?: InputMaybe<Scalars['Boolean']>;
};


export type SubscriptionProposalsAddedArgs = {
  filter?: InputMaybe<ProposalsFilter>;
  replayFromBlockLevel?: InputMaybe<Scalars['Int']>;
  includeMempool?: InputMaybe<Scalars['Boolean']>;
};


export type SubscriptionRegisterGlobalConstantAddedArgs = {
  filter?: InputMaybe<RegisterGlobalConstantFilter>;
  replayFromBlockLevel?: InputMaybe<Scalars['Int']>;
  includeMempool?: InputMaybe<Scalars['Boolean']>;
};


export type SubscriptionRevealAddedArgs = {
  filter?: InputMaybe<RevealFilter>;
  replayFromBlockLevel?: InputMaybe<Scalars['Int']>;
  includeMempool?: InputMaybe<Scalars['Boolean']>;
};


export type SubscriptionSeedNonceRevelationAddedArgs = {
  filter?: InputMaybe<SeedNonceRevelationFilter>;
  replayFromBlockLevel?: InputMaybe<Scalars['Int']>;
  includeMempool?: InputMaybe<Scalars['Boolean']>;
};


export type SubscriptionTransactionAddedArgs = {
  filter?: InputMaybe<TransactionFilter>;
  replayFromBlockLevel?: InputMaybe<Scalars['Int']>;
  includeMempool?: InputMaybe<Scalars['Boolean']>;
};

export type BigMapDiffNotification = {
  __typename?: 'BigMapDiffNotification';
  operation: MoneyOperationNotification;
  parent: ContractResultParent;
  big_map_diff: BigMapDiff;
};

export type ContractResultParent = OriginationNotification | InternalOriginationResult | TransactionNotification | InternalTransactionResult;

export type BigMapDiffFilter = {
  big_map?: InputMaybe<BigMapDiffBigMapFilter>;
  key?: InputMaybe<MichelsonFilter>;
  action?: InputMaybe<BigMapDiffActionFilter>;
  source?: InputMaybe<AddressFilter>;
  destination?: InputMaybe<NullableAddressFilter>;
};

export type BigMapDiffBigMapFilter = {
  equalTo?: InputMaybe<Scalars['BigNumber']>;
  notEqualTo?: InputMaybe<Scalars['BigNumber']>;
  in?: InputMaybe<Array<Scalars['BigNumber']>>;
  notIn?: InputMaybe<Array<Scalars['BigNumber']>>;
};

export type MichelsonFilter = {
  equalTo?: InputMaybe<Scalars['Micheline']>;
  notEqualTo?: InputMaybe<Scalars['Micheline']>;
  in?: InputMaybe<Array<Scalars['Micheline']>>;
  notIn?: InputMaybe<Array<Scalars['Micheline']>>;
};

export type BigMapDiffActionFilter = {
  equalTo?: InputMaybe<BigMapDiffAction>;
  notEqualTo?: InputMaybe<BigMapDiffAction>;
  in?: InputMaybe<Array<BigMapDiffAction>>;
  notIn?: InputMaybe<Array<BigMapDiffAction>>;
};

export type StorageNotification = {
  __typename?: 'StorageNotification';
  operation: MoneyOperationNotification;
  parent: ContractResultParent;
  storage: Scalars['Micheline'];
};

export type StorageFilter = {
  source?: InputMaybe<AddressFilter>;
  destination?: InputMaybe<NullableAddressFilter>;
};

export type BalanceUpdateNotification = {
  __typename?: 'BalanceUpdateNotification';
  operation: OperationNotificationWithBalanceUpdates;
  parent: BalanceUpdateParent;
  balance_update: BalanceUpdate;
};

export type BalanceUpdateParent = InternalTransactionResult | InternalOriginationResult | ActivateAccountNotification | DelegationNotification | DoubleBakingEvidenceNotification | DoubleEndorsementEvidenceNotification | EndorsementNotification | EndorsementWithSlotNotification | OriginationNotification | RegisterGlobalConstantNotification | RevealNotification | SeedNonceRevelationNotification | TransactionNotification;

export type BalanceUpdateFilter = {
  kind?: InputMaybe<BalanceUpdateKindFilter>;
  contract?: InputMaybe<NullableAddressFilter>;
  category?: InputMaybe<NullableBalanceUpdateCategoryFilter>;
  delegate?: InputMaybe<NullableAddressFilter>;
};

export type BalanceUpdateKindFilter = {
  equalTo?: InputMaybe<BalanceUpdateKind>;
  notEqualTo?: InputMaybe<BalanceUpdateKind>;
  in?: InputMaybe<Array<BalanceUpdateKind>>;
  notIn?: InputMaybe<Array<BalanceUpdateKind>>;
};

export type NullableBalanceUpdateCategoryFilter = {
  equalTo?: InputMaybe<BalanceUpdateCategory>;
  notEqualTo?: InputMaybe<BalanceUpdateCategory>;
  in?: InputMaybe<Array<BalanceUpdateCategory>>;
  notIn?: InputMaybe<Array<BalanceUpdateCategory>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};

export type LazyStorageDiffNotification = {
  __typename?: 'LazyStorageDiffNotification';
  operation: MoneyOperationNotification;
  parent: ContractResultParent;
  lazy_storage_diff: LazyStorageDiff;
};

export type LazyStorageDiffFilter = {
  kind?: InputMaybe<LazyStorageDiffKindFilter>;
  id?: InputMaybe<LazyStorageIdFilter>;
  action?: InputMaybe<LazyStorageDiffActionFilter>;
  big_map_key?: InputMaybe<NullableLazyStorageBigMapKeyFilter>;
  source?: InputMaybe<AddressFilter>;
  destination?: InputMaybe<NullableAddressFilter>;
};

export type LazyStorageDiffKindFilter = {
  equalTo?: InputMaybe<LazyStorageDiffKind>;
  notEqualTo?: InputMaybe<LazyStorageDiffKind>;
  in?: InputMaybe<Array<LazyStorageDiffKind>>;
  notIn?: InputMaybe<Array<LazyStorageDiffKind>>;
};

export type LazyStorageIdFilter = {
  equalTo?: InputMaybe<Scalars['BigNumber']>;
  notEqualTo?: InputMaybe<Scalars['BigNumber']>;
  in?: InputMaybe<Array<Scalars['BigNumber']>>;
  notIn?: InputMaybe<Array<Scalars['BigNumber']>>;
};

export type LazyStorageDiffActionFilter = {
  equalTo?: InputMaybe<BigMapDiffAction>;
  notEqualTo?: InputMaybe<BigMapDiffAction>;
  in?: InputMaybe<Array<BigMapDiffAction>>;
  notIn?: InputMaybe<Array<BigMapDiffAction>>;
};

export type NullableLazyStorageBigMapKeyFilter = {
  includes?: InputMaybe<Scalars['Micheline']>;
  notIncludes?: InputMaybe<Scalars['Micheline']>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};