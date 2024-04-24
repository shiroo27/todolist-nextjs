// src/components/TodoTable.js

import React from 'react';
import { Table, Checkbox, Button } from 'antd';
import useStore from '@/app/store';

const TodoTable = ({ todos }) => {
  const toggleTodo = useStore((state) => state.toggleTodo);
  const editTodo = useStore((state) => state.editTodo);
  const deleteTodo = useStore((state) => state.deleteTodo);

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
      render: (date, record) => (
        <span style={{ textDecoration: record.completed ? 'line-through' : 'none' }}>
          {date}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <div>
          <Checkbox
            checked={record.completed}
            onChange={() => toggleTodo(record.id)}
          />
          {!record.completed && (
            <Button type="primary" style={{ marginLeft: "1rem" }} onClick={() => handleEdit(record)}>
              Edit
            </Button>
          )}
          <Button type="primary" style={{ marginLeft: "1rem" }} onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const handleEdit = (record) => {
    const newText = prompt("Enter new text for the todo:", record.text);
    if (newText !== null) {
      editTodo(record.id, newText);
    }
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <div >
      <h2 style={{ textAlign: 'center', padding: '1rem', fontFamily: 'Arial, sans-serif'}}>Todo List</h2>
      <Table dataSource={todos} columns={columns} pagination={false} rowKey="id"/>
    </div>

  );
};

export default TodoTable;