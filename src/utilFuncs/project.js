import { nanoid } from "nanoid";

export const PROJECT_STATUS = {
  NOT_INITIATED: "NOT_INITIATED",
  WORKING: "WORKING",
  DONE: "DONE",
};

export function createProject(title, description) {
  return {
    id: nanoid(),
    title: title,
    description: description,
    date: new Date(),
    tasks: [],
  };
}

export function createTask(text) {
  return { id: nanoid(), text: text, status: PROJECT_STATUS.NOT_INITIATED };
}
