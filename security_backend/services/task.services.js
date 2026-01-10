import Task from "../models/task.js";

export const createTask = async (data, userId) => {
  return await Task.create({ ...data, userId });
};

export const getTasks = async (userId) => {
  return await Task.find({ userId });
};

export const updateTask = async (taskId, userId, data) => {
  const task = await Task.findOne({ _id: taskId, userId });
  if (!task) throw new Error("Task not found");

  Object.assign(task, data);
  return await task.save();
};

export const deleteTask = async (taskId, userId) => {
  const task = await Task.findOneAndDelete({ _id: taskId, userId });
  if (!task) throw new Error("Task not found");
};
