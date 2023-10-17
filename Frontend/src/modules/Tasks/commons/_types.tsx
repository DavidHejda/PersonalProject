export interface ITaskTable {
  additionalColumns: any;
  graphqlQueryGetAllTasks: any;
}

export interface Task {
  subject: string;
  description: string;
  state: string;
  notes: string;
}
