import { IStudent } from '../interface/Student';
import { IStudentService } from '../interface/StudentService';
import { container } from '../IOC/container';
import { inject, injectTable } from '../IOC/inject';

@injectTable
class StudentService implements IStudentService {
  private student: IStudent;
  constructor(@inject(container.TYPES['Student']) student: IStudent) {
    this.student = student;
  }
  learn(): void {
    console.log(this.student.getLearn());
  }
}

export { StudentService };
