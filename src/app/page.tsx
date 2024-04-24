"use client"

import React from 'react';
import TodoInput from '../components/TodoInput';
import TodoTable from '../components/TodoTable';
import useStore from './store';

const Home = () => {
  const todos = useStore((state) => state.todos); // get todos from the store.js...

  return (
  <div style={{ paddingTop: '10%', fontFamily: 'Arial, sans-serif'}}>
    <TodoInput />
    <TodoTable todos={todos}/>
  </div>
  );
};

export default Home;