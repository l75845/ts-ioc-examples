import { IStudent } from '../interface/Student';
import { IStudentController } from '../interface/StudentController';
import { IStudentService } from '../interface/StudentService';
import { container } from '../IOC/container';
import { injectTable, inject } from '../IOC/inject';

@injectTable
class StudentController implements IStudentController {
  private studentService: IStudentService;
  private student:IStudent;
  constructor(
    @inject(container.TYPES['StudentService']) studentService: IStudentService,
    @inject(container.TYPES['Student']) student: IStudent,
  ) {
    this.studentService = studentService;
    this.student = student;
  }

  init() {
    this.studentService.learn();
  }

  consoleStydentGetLearn(){
    console.log('getStudentLearn --> ', this.student.getLearn());
  }
}

export { StudentController };
