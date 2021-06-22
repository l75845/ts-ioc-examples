import { sync } from 'glob';

class CreateIOC {
  private container: Map<Symbol, { callback: any; init: boolean }>;
  public TYPES: { [key: string]: Symbol } = {};
  constructor() {
    this.container = new Map();
  }

  bind(nameSpace: Symbol, callback:any) {
    this.container.set(nameSpace, { callback, init: false });
  }

  get<T=any>(nameSpace: Symbol):T {
    const item = this.container.get(nameSpace);
    if (item.callback) {
      const init = item.init;
      if (!init) {
        item.callback = item.callback();
        item.init = true;
      }
      return item.callback;
    }
    return null;
  }

  loadInject(path: string) {
    let result = sync(path);
      result.map((src) => {
        const data = require(src);
        if (data) {
          const keys = Object.keys(data);
          keys.map((key) => {
            this.TYPES[key] = Symbol.for(key);
            this.bind(this.TYPES[key], () => new data[key]());
          });
        }
      });
  }
}

const container = new CreateIOC();

export { container };
