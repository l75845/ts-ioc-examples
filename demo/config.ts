import { Container } from "inversify";
import { Test } from "./app";
import { Classroom, Student } from "./interface";
import { a } from "./model";
import TYPES from "./types";

const container = new Container();

container.bind<Student>(TYPES.Student).to(a);
container.bind<Classroom>(TYPES.Classroom).to(Test);

export default container;