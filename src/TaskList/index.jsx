import { useState, memo } from "react";
import { useTask, useTaskDispatch } from "../context/tasksContext";

const MemoizedTask = memo(Task);

export default function TaskList() {
  console.log("✨ TaskList render");
  const tasks = useTask();

  //임의의 object를 줘보자. 실행할 떄 마다 재할당될 것이다.
  const specialObject = {
    text: "🎉 specialObject",
    done: true,
    id: "1004",
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {/* <Task task={task} /> */}
          <MemoizedTask task={task} />
        </li>
      ))}
      {/** 따라서 하단의 컴포넌트는 memo를 하는 의미가 없다. */}
      <li>
        <MemoizedTask task={specialObject} />
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
