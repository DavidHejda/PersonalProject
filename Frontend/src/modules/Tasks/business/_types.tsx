import { Task } from '../commons/_types';

export interface BusinessTask extends Task {
  author: string;
  modifiedBy: string;
  deadline: Date;
  importance: string;
  assignee: string;
}

export interface BusinessTaskFormValues {
  subject: string;
  description: string;
  notes: string;
  importance: string;
  assignee: string;
  deadline: Date;
  state: string;
}
