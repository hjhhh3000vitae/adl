import * as adlruntime from '@azure-tools/adl.runtime'

export interface printer {
  printModel(model: adlruntime.ApiModel): void;
  printNormalizedTypes(normalizedTypes: Iterable<adlruntime.NormalizedApiTypeModel>): void;
  printApiVersions(apiVersions: Iterable<adlruntime.ApiVersionModel>): void;
  printDocs(docs: adlruntime.ApiJsDoc | undefined): void;
  flushOutput(): void;
}