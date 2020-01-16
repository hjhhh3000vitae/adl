import { Project, ClassDeclaration, JSDocStructure, SourceFile, InterfaceDeclaration, EnumDeclaration, Type, VariableDeclarationKind, IndentationText, QuoteKind } from 'ts-morph';
import { intersect } from '@azure-tools/codegen';
import { writeFile } from '@azure-tools/async-io';

export interface OperationGroup {
}

export interface Operation {
}

export interface Member {
}

export interface EnumMember {

}

export class Api {
  project = new Project({
    useInMemoryFileSystem: true, manipulationSettings: {
      indentationText: IndentationText.TwoSpaces,
      insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: true,
      quoteKind: QuoteKind.Single,
    }
  });

  protected models = this.project.createDirectory('models');
  protected enums = this.project.createDirectory('enums');
  protected operations = this.project.createDirectory('operations');

  constructor() {
    // 
  }

  /** @internal 
   * use ts-morph to load the files off the disk and into the project
   * 
  */
  load(path: string) {
    // shh
  }

  addOperationGroup(name: string, properties?: OperationGroup) {
    const filename = `${name}.ts`;
    const file = this.operations.getSourceFile(filename) || this.operations.createSourceFile(filename);
    const og = file.getClass(name) || file.addClass({ name, isExported: true });

    return intersect(og, new OperationGroupFunctions(og));
  }

  addSchema(name: string) {
    const filename = `${name}.ts`;
    const file = this.models.getSourceFile(filename) || this.models.createSourceFile(filename);
    const og = file.getInterface(name) || file.addInterface({ name, isExported: true });

    return intersect(og, new ModelFunctions(og));
  }

  addEnum(name: string) {
    const filename = `${name}.ts`;
    const file = this.enums.getSourceFile(filename) || this.enums.createSourceFile(filename);
    const og = file.getEnum(name) || file.addEnum({ name, isExported: true });

    return intersect(og, new EnumFunctions(og));
  }

  *getFiles() {
    for (const each of this.project.getSourceFiles()) {
      yield {
        path: each,
        content: each.print().
          // replace(/(import .* from )"(.*?)"\;/g, `$1'$2';`).
          replace(/ {4}/g, '  ').  // two space indent!
          replace(/\*\/\s*\/\*\*\s*/g, ''). // combine doccomments 
          replace(/(\w*): (\(.*?\) => )(.*)/g, '$1: $2\n    $3\n'). // lf/indent responses
          replace(/ \| Response/g, ' |\n    Response')
      };
    }
  }

  async save(path: string) {
    for (const each of this.getFiles()) {
      await writeFile(`${path}/${each.path}`, each.content);
    }
  }
}

export class OperationGroupFunctions {
  /*@internal*/
  constructor(private declaraton: ClassDeclaration) {
    //shh
  }

  addOperation(name: string, properties: Operation) {
    //shh
  }
}

export class ModelFunctions {
  /*@internal*/
  constructor(private declaraton: InterfaceDeclaration) {
  }

  addMember(name: string, properties: Member) {

  }
} export class EnumFunctions {
  /*@internal*/
  constructor(private declaraton: EnumDeclaration) {
  }

  addEnum(name: string, properties: EnumMember) {
    //shh
  }
}