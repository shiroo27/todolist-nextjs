// src/components/TodoList.js
import React from 'react';
import { Table, Checkbox } from 'antd';
import useStore from '../store';

export const TodoTable = ({ todos }) => {
  const toggleTodo = useStore((state) => state.toggleTodo); // Get toggleTodo function from the store

  const columns = [
    {
      title: 'Todo Task',
      dataIndex: 'text',
      key: 'text',
      render: (text, record) => (
        <span style={{ textDecoration: record.completed ? 'line-through' : 'none' }}>
          {text}
        </span>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Checkbox
          checked={record.completed}
          onChange={() => toggleTodo(record.id)}
        />
      ),
    },
  ];

  return (
    <div class="py-4 text-center">
      <h2 class="text-2xl font-sans font-bold mb-4 text-center">Todo List</h2>
      <Table dataSource={todos} columns={columns} pagination={false} />
    </div>

  );
};