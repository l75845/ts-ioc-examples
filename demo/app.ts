import { inject, injectable } from 'inversify';
import { Classroom, Student } from './interface';
import TYPES from './types';

@injectable()
class Test implements Classroom {
  private _a: Student;
  constructor(@inject(TYPES.Student) a: Student) {
    this._a = a;
  }

  study() {
    console.log(this._a.learn());
  }
}

export {
    Test
}
