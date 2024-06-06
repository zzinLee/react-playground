import { useState, memo, useMemo, useCallback } from "react";
import { useTask, useTaskDispatch } from "../context/tasksContext";

import MemoziedImmutable from "../Immutable";

const MemoizedTask = memo(Task);

export default function TaskList({ number }) {
  console.log("✨ TaskList render");
  const tasks = useTask();

  const heavyValue = useMemo(() => {
    for (let i = 0; i < number; i++) {
      console.log("heavy Work doing...");
    }

    return { value: number };
  }, [number]);

  // const emptyDependency = useMemo(() => {
  //   console.log("🗑️ EMPTY");
  // }, []); //Initial mount

  // const nullDependency = useMemo(() => {
  //   console.log("❌ NULL");
  // });//every Render

  const handleClick = useCallback((ev) => {
    console.log(ev.target);

    console.log("click DIV!");
  }, []);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {/* <Task task={task} /> */}
          <MemoizedTask task={task} />
        </li>
      ))}
      <li>
        <MemoziedImmutable value={heavyValue.value} onClick={handleClick} />
      </li>
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
