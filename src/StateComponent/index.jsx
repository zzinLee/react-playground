import { useState, useReducer } from "react";
import { TasksContext, TasksDispatchContext } from "../context/tasksContext";

import TaskList from "../TaskList";

const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "add": {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false,
      }];
    }

    case "change": {
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }

    case "delete": {
      return tasks.filter((task) => task.id !== action.id);
    }

    default: {
      throw Error("Unknown Action: " + action.type);
    }
  }
}

function StateComponent() {
  console.log("✨ StateComponent App render");
  const [tasks, dispatch] = useReducer(
    tasksReducer, initialTasks
  );

  const handleChangeTask = (task) => {
    dispatch({
      type: "change",
      task: task,
    });
  };
  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "delete",
      id: taskId,
    });
  };

  return (
    <>
      <h1>Day off in Kyoto</h1>
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default StateComponent;
