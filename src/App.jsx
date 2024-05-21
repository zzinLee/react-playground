import { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [selectedItemId, setSelectedItemId] = useState(0);
  const handleChangeInput = (ev, id) => {
    const changedItems = items.map((item) => {
      return (item.id === id) ? {
          ...item,
          title: ev.target.value,
        } : item;
    });

    setItems(changedItems);
  };
  const handleChooseButton = (ev, id) => {
    ev.stopPropagation();

    setSelectedItemId(id);
  };

  const itemElemList = items.map((item) => {
    return (
      <li key={item.id}>
        <input type="text" value={item.title} onChange={(ev) => handleChangeInput(ev, item.id)} />
        <button onClick={(ev) => handleChooseButton(ev, item.id)}>choose</button>
      </li>
    );
  });

  const selectedItem = items.find((item) => item.id === selectedItemId);

  return (
    <>
      <h3>{"What's your travel snack?"}</h3>
      {itemElemList}
      <p>You picked {selectedItem.title}</p>
    </>
  );
}

export default App;
