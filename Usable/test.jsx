import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function addItem(text) {
    setItems([...items, text]);
  }
}

export default function App() {

  const [items, setItems] = useState([])
  const [input, setInput] = useState("")

  function addItem() {
    if (!input.trim()) return;
    setItems(prev => [...prev, { id: Date.now(), text: input }]);
    setInput("")
  }

  function deleteItem(id) {
    setItems(prev => prev.filter(item => item.id !== id));
  }

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addItem}>Add Item</button>
    </div>
  )
}