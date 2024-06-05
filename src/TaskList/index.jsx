import { useState } from "react";
import { useTask, useTaskDispatch } from "../context/tasksContext";

export default function TaskList() {
  console.log("✨ TaskList render");
  const tasks = useTask();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  console.log("✨ Task render: " + task.text);

  const dispatch = useTaskDispatch();
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            dispatch({
              type: "change",
              task: { ...task, text: e.target.value },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "change",
            task: { ...task, done: e.target.checked }
          });
        }}
      />
      {taskContent}
      <button onClick={() => {
        dispatch({
          type: "delete",
          id: task.id,
        })
      }}>
        Delete
      </button>
    </label>
  );
}
