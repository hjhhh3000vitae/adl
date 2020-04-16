import { printer } from './printer'

import * as adlruntime from '@azure-tools/adl.runtime'

class tableRow implements Iterable<[number, string, string]> {
  constructor(
    public model: string,
    public version: string,
    public type: string,
    public property: string,
    public dataType: string,
    /*public constraints: string*/) {}
    
  *[Symbol.iterator](): Iterator<[number, string, string]> {
    yield [0, "model", this.model];
    yield [1, "version", this.version];
    yield [2, "type", this.type];
    yield [3, "property", this.property];
    yield [4, "dataType", this.dataType];
    //yield [5, "constraints", this.constraints];
  }
}

export class tablePrinter implements printer {
  private readonly _scope: string;
  private readonly _show_docs: boolean;

  private _model : string;
  private _output_cache : Array<tableRow>;

  public constructor(scope: string, showDocs: boolean) {
    this._scope = scope;
    this._show_docs = showDocs;

    this._output_cache = new Array<tableRow>();
  }

  public printModel(model: adlruntime.ApiModel): void {
    this._model = model.Name;
    return;
  }

  public printNormalizedTypes(normalizedTypes: Iterable<adlruntime.NormalizedApiTypeModel>): void {
    if(this._scope != "all" && this._scope != "normalized") return;

    for (const normalizedType of normalizedTypes) {
      this.printApiTypeModel("normalized", normalizedType, "$.");
    }
  }

  public printApiVersions(apiVersions: Iterable<adlruntime.ApiVersionModel>): void {
    if(this._scope != "all" && this._scope != "api-versions" && this._scope != "versioned") return;

    for (const apiVersion of apiVersions) {
      this.printVersionedTypes(apiVersion.Name, apiVersion.VersionedTypes);
    }
  }

  public printDocs(docs: adlruntime.ApiJsDoc | undefined): void {
    // TODO(heh): Does not seem like we have place for docs in table.
    return;
  }

  public flushOutput(): void {
    const header = new tableRow("model", "version", "type", "property", "dataType", /*"constraints"*/);

    let columnWidth = new Array<number>();
    for (const [index, key, value] of header) {
      columnWidth.push(value.length);
    }

    for (const row of this._output_cache) {
      for (const [index, key, value] of row) {
        columnWidth[index] = Math.max(columnWidth[index], value.length);
      }
    }

    let outputLine = "";
    for (const [index, key, value] of header) {
      if (value.length == 0) {
        outputLine += "null";
        outputLine += " ".repeat(columnWidth[index]);
      }
      else {
        outputLine += value;
        outputLine += " ".repeat(columnWidth[index] + 4 - value.length);
      }
    }
    console.log(outputLine);

    for (const row of this._output_cache) {
      let outputLine = "";
      for (const [index, key, value] of row) {
        if (value.length == 0) {
          outputLine += "null";
          outputLine += " ".repeat(columnWidth[index]);
        }
        else {
          outputLine += value;
          outputLine += " ".repeat(columnWidth[index] + 4 - value.length);
        }
      }
      console.log(outputLine);
    }

    this._output_cache = new Array<tableRow>();
  }

  /*
   * Private methods
   */

  private printApiTypeModel(version: string, model: adlruntime.ApiTypeModel, propertyPrefix: string): void {
    for (const prop of model.Properties) {
      if (prop.isRemoved) continue;

      this._output_cache.push(new tableRow(
        /* model */ this._model,
        /* version */ version,
        /* type */ model.Name,
        /* property */ propertyPrefix + prop.Name,
        /* dataType */ `${prop.DataTypeName}/${prop.AliasDataTypeName}`,
        /* constraints */ /*this.getPropertiesConstraintsAsText(prop)*/));

      if(prop.DataTypeKind == adlruntime.PropertyDataTypeKind.Complex ||
        prop.DataTypeKind == adlruntime.PropertyDataTypeKind.ComplexArray ||
        prop.DataTypeKind == adlruntime.PropertyDataTypeKind.ComplexMap){
            this.printApiTypeModel(version, prop.getComplexDataTypeOrThrow(), propertyPrefix + prop.Name + '.');
      }
    }
  }

  private getPropertiesConstraintsAsText(p: adlruntime.ApiTypePropertyModel): string {
    let constraintsAsText = ""
    if (p.isEnum) {
      constraintsAsText = `enum${p.EnumValues}`;
    }
    else {
      for(const c of p.Constraints){
        constraintsAsText = `${constraintsAsText} | ${c.Name}(${c.Arguments.join(",")})`;
      }
    }

    if (p.isMap()) {
      let keyConstraints = "";
      for(const c of p.MapKeyConstraints){
        keyConstraints = keyConstraints + `${c.Name}(` + c.Arguments.join(",") +") | ";
      }

      if (keyConstraints.length > 0) {
        constraintsAsText += `; KeyConstraints: ${keyConstraints}`;
      }

      let valueConstraints = "";
      for(const c of p.MapValueConstraints){
         valueConstraints = valueConstraints + `${c.Name}(` + c.Arguments.join(",") +") | ";
      }

      if (valueConstraints.length > 0) {
        constraintsAsText += `; ValueConstraints: ${valueConstraints}`;
      }
    }

    return constraintsAsText;
  }

  private printVersionedTypes(apiVersion: string, versionedTypes: Iterable<adlruntime.VersionedApiTypeModel>): void {
    if(this._scope != "all" && this._scope != "versioned") return;

    for (const versionedType of versionedTypes) {
      this.printApiTypeModel(apiVersion, versionedType, "$.");
    }
  }
}
