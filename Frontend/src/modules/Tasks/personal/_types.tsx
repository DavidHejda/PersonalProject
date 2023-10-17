import { Task } from '../commons/_types';

export interface TaskPersonal extends Task {
  taskCreated: Date;
  taskFinished: Date;
  timeEstimate: number;
  timeSpent: number;
  isFinished: boolean;
}
