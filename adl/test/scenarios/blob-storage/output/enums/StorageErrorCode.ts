/** Error codes returned by the service */
export enum StorageErrorCode {
  AccountAlreadyExists = 'AccountAlreadyExists',
  AccountBeingCreated = 'AccountBeingCreated',
  AccountIsDisabled = 'AccountIsDisabled',
  AuthenticationFailed = 'AuthenticationFailed',
  AuthorizationFailure = 'AuthorizationFailure',
  ConditionHeadersNotSupported = 'ConditionHeadersNotSupported',
  ConditionNotMet = 'ConditionNotMet',
  EmptyMetadataKey = 'EmptyMetadataKey',
  InsufficientAccountPermissions = 'InsufficientAccountPermissions',
  InternalError = 'InternalError',
  InvalidAuthenticationInfo = 'InvalidAuthenticationInfo',
  InvalidHeaderValue = 'InvalidHeaderValue',
  InvalidHttpVerb = 'InvalidHttpVerb',
  InvalidInput = 'InvalidInput',
  InvalidMd5 = 'InvalidMd5',
  InvalidMetadata = 'InvalidMetadata',
  InvalidQueryParameterValue = 'InvalidQueryParameterValue',
  InvalidRange = 'InvalidRange',
  InvalidResourceName = 'InvalidResourceName',
  InvalidUri = 'InvalidUri',
  InvalidXmlDocument = 'InvalidXmlDocument',
  InvalidXmlNodeValue = 'InvalidXmlNodeValue',
  Md5Mismatch = 'Md5Mismatch',
  MetadataTooLarge = 'MetadataTooLarge',
  MissingContentLengthHeader = 'MissingContentLengthHeader',
  MissingRequiredQueryParameter = 'MissingRequiredQueryParameter',
  MissingRequiredHeader = 'MissingRequiredHeader',
  MissingRequiredXmlNode = 'MissingRequiredXmlNode',
  MultipleConditionHeadersNotSupported = 'MultipleConditionHeadersNotSupported',
  OperationTimedOut = 'OperationTimedOut',
  OutOfRangeInput = 'OutOfRangeInput',
  OutOfRangeQueryParameterValue = 'OutOfRangeQueryParameterValue',
  RequestBodyTooLarge = 'RequestBodyTooLarge',
  ResourceTypeMismatch = 'ResourceTypeMismatch',
  RequestUrlFailedToParse = 'RequestUrlFailedToParse',
  ResourceAlreadyExists = 'ResourceAlreadyExists',
  ResourceNotFound = 'ResourceNotFound',
  ServerBusy = 'ServerBusy',
  UnsupportedHeader = 'UnsupportedHeader',
  UnsupportedXmlNode = 'UnsupportedXmlNode',
  UnsupportedQueryParameter = 'UnsupportedQueryParameter',
  UnsupportedHttpVerb = 'UnsupportedHttpVerb',
  AppendPositionConditionNotMet = 'AppendPositionConditionNotMet',
  BlobAlreadyExists = 'BlobAlreadyExists',
  BlobNotFound = 'BlobNotFound',
  BlobOverwritten = 'BlobOverwritten',
  BlobTierInadequateForContentLength = 'BlobTierInadequateForContentLength',
  BlockCountExceedsLimit = 'BlockCountExceedsLimit',
  BlockListTooLong = 'BlockListTooLong',
  CannotChangeToLowerTier = 'CannotChangeToLowerTier',
  CannotVerifyCopySource = 'CannotVerifyCopySource',
  ContainerAlreadyExists = 'ContainerAlreadyExists',
  ContainerBeingDeleted = 'ContainerBeingDeleted',
  ContainerDisabled = 'ContainerDisabled',
  ContainerNotFound = 'ContainerNotFound',
  ContentLengthLargerThanTierLimit = 'ContentLengthLargerThanTierLimit',
  CopyAcrossAccountsNotSupported = 'CopyAcrossAccountsNotSupported',
  CopyIdMismatch = 'CopyIdMismatch',
  FeatureVersionMismatch = 'FeatureVersionMismatch',
  IncrementalCopyBlobMismatch = 'IncrementalCopyBlobMismatch',
  IncrementalCopyOfEralierVersionSnapshotNotAllowed = 'IncrementalCopyOfEralierVersionSnapshotNotAllowed',
  IncrementalCopySourceMustBeSnapshot = 'IncrementalCopySourceMustBeSnapshot',
  InfiniteLeaseDurationRequired = 'InfiniteLeaseDurationRequired',
  InvalidBlobOrBlock = 'InvalidBlobOrBlock',
  InvalidBlobTier = 'InvalidBlobTier',
  InvalidBlobType = 'InvalidBlobType',
  InvalidBlockId = 'InvalidBlockId',
  InvalidBlockList = 'InvalidBlockList',
  InvalidOperation = 'InvalidOperation',
  InvalidPageRange = 'InvalidPageRange',
  InvalidSourceBlobType = 'InvalidSourceBlobType',
  InvalidSourceBlobUrl = 'InvalidSourceBlobUrl',
  InvalidVersionForPageBlobOperation = 'InvalidVersionForPageBlobOperation',
  LeaseAlreadyPresent = 'LeaseAlreadyPresent',
  LeaseAlreadyBroken = 'LeaseAlreadyBroken',
  LeaseIdMismatchWithBlobOperation = 'LeaseIdMismatchWithBlobOperation',
  LeaseIdMismatchWithContainerOperation = 'LeaseIdMismatchWithContainerOperation',
  LeaseIdMismatchWithLeaseOperation = 'LeaseIdMismatchWithLeaseOperation',
  LeaseIdMissing = 'LeaseIdMissing',
  LeaseIsBreakingAndCannotBeAcquired = 'LeaseIsBreakingAndCannotBeAcquired',
  LeaseIsBreakingAndCannotBeChanged = 'LeaseIsBreakingAndCannotBeChanged',
  LeaseIsBrokenAndCannotBeRenewed = 'LeaseIsBrokenAndCannotBeRenewed',
  LeaseLost = 'LeaseLost',
  LeaseNotPresentWithBlobOperation = 'LeaseNotPresentWithBlobOperation',
  LeaseNotPresentWithContainerOperation = 'LeaseNotPresentWithContainerOperation',
  LeaseNotPresentWithLeaseOperation = 'LeaseNotPresentWithLeaseOperation',
  MaxBlobSizeConditionNotMet = 'MaxBlobSizeConditionNotMet',
  NoPendingCopyOperation = 'NoPendingCopyOperation',
  OperationNotAllowedOnIncrementalCopyBlob = 'OperationNotAllowedOnIncrementalCopyBlob',
  PendingCopyOperation = 'PendingCopyOperation',
  PreviousSnapshotCannotBeNewer = 'PreviousSnapshotCannotBeNewer',
  PreviousSnapshotNotFound = 'PreviousSnapshotNotFound',
  PreviousSnapshotOperationNotSupported = 'PreviousSnapshotOperationNotSupported',
  SequenceNumberConditionNotMet = 'SequenceNumberConditionNotMet',
  SequenceNumberIncrementTooLarge = 'SequenceNumberIncrementTooLarge',
  SnapshotCountExceeded = 'SnapshotCountExceeded',
  SnaphotOperationRateExceeded = 'SnaphotOperationRateExceeded',
  SnapshotsPresent = 'SnapshotsPresent',
  SourceConditionNotMet = 'SourceConditionNotMet',
  SystemInUse = 'SystemInUse',
  TargetConditionNotMet = 'TargetConditionNotMet',
  UnauthorizedBlobOverwrite = 'UnauthorizedBlobOverwrite',
  BlobBeingRehydrated = 'BlobBeingRehydrated',
  BlobArchived = 'BlobArchived',
  BlobNotArchived = 'BlobNotArchived',
  AuthorizationSourceIPMismatch = 'AuthorizationSourceIPMismatch',
  AuthorizationProtocolMismatch = 'AuthorizationProtocolMismatch',
  AuthorizationPermissionMismatch = 'AuthorizationPermissionMismatch',
  AuthorizationServiceMismatch = 'AuthorizationServiceMismatch',
  AuthorizationResourceTypeMismatch = 'AuthorizationResourceTypeMismatch'
}