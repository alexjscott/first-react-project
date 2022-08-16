
import React, { useState } from 'react';
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([])
  return (
  <> 
    <TodoList />

  </>
  )
}

export default App;
