import { createContext, useContext } from "react";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export const useTask = () => useContext(TasksContext);
export const useTaskDispatch = () => useContext(TasksDispatchContext);
