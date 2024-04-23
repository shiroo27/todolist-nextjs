// src/components/TodoInput.js

import React, { useState } from 'react';
import { Input, Button, DatePicker } from 'antd';
import useStore from '../store';

const TodoInput = () => {
  const [text, setText] = useState('');
  const [date, setDate] = useState(null);
  const addTodo = useStore((state) => state.addTodo);

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      addTodo({ id: Date.now(), text, date: date ? date.format('YYYY-MM-DD') : null });
      setText('');
      setDate(null);
    }
  };

  return (
    <div>
      <Input
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Enter a new todo"
      />
      <DatePicker
        value={date}
        onChange={(value) => setDate(value)}
        style={{ marginRight: 8 }}
      />
      <Button type="primary" onClick={handleAddTodo}>
        Add Todo
      </Button>
    </div>
  );
};

export default TodoInput;