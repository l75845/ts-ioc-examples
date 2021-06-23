import { container } from './container';
import { parseScript } from 'esprima';

function getParams(constructor: Function) {
  const ast = parseScript(constructor.toString());
  let node = ast.body[0];
  let funParams = [];
  if (node.type === 'FunctionDeclaration') {
    funParams = node.params;
  }
  // const validParam = [];
  // funParams.map((node) => {
  //   if (node.type === 'Identifier') {
  //     validParam.push(node.name);
  //   }
  // });
  return funParams;
}

function inject(nameSpace: Symbol) {
  return function (target: Object, targetKey: string, index: number) {
    if (!targetKey) {
      Reflect.defineMetadata(index, container.get(nameSpace), target);
    }
  };
}

function injectTable<T extends { new (...args: any[]) }>(constructor: T) {
  class Controller extends constructor {
    constructor(...args: any[]) {
      super(args);
      const _fnParams = getParams(constructor);
      let i = 0;
      for (; i < _fnParams.length; ++i) {
        const { name, type } = _fnParams[i];
        if (type === 'Identifier' && Reflect.hasMetadata(i, constructor)) {
          this[name] = Reflect.getMetadata(i, constructor);
        }
      }
    }
  }
  return Controller;
}

export { injectTable, inject };
