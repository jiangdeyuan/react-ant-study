import React, { useState, useEffect } from 'react';

const App = () => {
  const [value, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${value} times`;
  });
  function handleChange(event) {
    setCount(event.target.value)
  }
  const click = () => {
    let a = { name: 1 }
    let { name: c } = a
    console.log(c);
  }
  return (
    <div className="App">
      hello world
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={click}>点击</button>
    </div>
  );
}
export default App;



