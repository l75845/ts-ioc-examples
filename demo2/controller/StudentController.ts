import { IStudentController } from '../interface/StudentController';
import { IStudentService } from '../interface/StudentService';
import { container } from '../IOC/container';
import { injectTable, inject } from '../IOC/inject';

@injectTable
class StudentController implements IStudentController {
  private studentService: IStudentService;
  constructor(
    @inject(container.TYPES['StudentService']) studentService: IStudentService,
  ) {
    this.studentService = studentService;
  }

  init() {
    this.studentService.learn();
  }
}

export { StudentController };
