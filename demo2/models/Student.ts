import { IStudent } from '../interface/Student';

class Student implements IStudent {
  constructor() {}
  getLearn(): string {
    return 'student learn';
  }
}

export { Student };
