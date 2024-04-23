"use client"

import React from 'react';
import TodoInput from '../components/TodoInput';
import TodoTable from '../components/TodoTable';
import useStore from '../store';

const Home = () => {
  const todos = useStore((state) => state.todos); // get todos from the store.js...

  return (
  <div className="items-center justify-between">
    <h1>Todo App</h1>
    <TodoInput />
    <TodoTable todos={todos}/>
  </div>
  );
};

export default Home;