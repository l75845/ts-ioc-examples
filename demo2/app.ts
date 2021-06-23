// 1. 创建TYPES，设置Symbol对象键值对
// 2. 创建model，创建service
// 3. 创建controller
// 4. 编写IOC容器，实现bind和get方法
// 5. 编写controller装饰器
// 6. 编写inject装饰器
// 7. 编写ast获取参数
// 8. controller中根据ast获取的参数动态从元数据中获取
import 'reflect-metadata';
import { container } from './IOC/container';
import { resolve } from 'path';
import { IStudentController } from './interface/StudentController';

container.loadInject(resolve(__dirname, './models/*.ts'));
container.loadInject(resolve(__dirname, './service/*.ts'));
container.loadInject(resolve(__dirname, './controller/*.ts'));


const sController = container.get<IStudentController>(Symbol.for('StudentController'));
sController.init();
sController.consoleStydentGetLearn();
