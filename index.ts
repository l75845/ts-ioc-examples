import 'reflect-metadata';
import { Test } from './demo/app';
import container from './demo/config';
import { Classroom } from './demo/interface';
import TYPES from './demo/types';

container.get<Classroom>(TYPES.Classroom).study();