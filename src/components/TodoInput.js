// src/components/TodoInput.js

import React, { useState } from 'react';
import { Input, Button, DatePicker, Form } from 'antd';
import useStore from '@/app/store';

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

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };

  return (
    <div>
      <Form {...formItemLayout} variant="filled" style={{ maxWidth: 600 }}>
      <Form.Item label="Input" name="Input" rules={[{ required: true, message: 'Input required' }]}>
      <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter a new todo"/>
      </Form.Item>
      <Form.Item label="DatePicker" name="DatePicker" rules={[{ required: true, message: 'Date required' }]}>
      <DatePicker value={date} onChange={(value) => setDate(value)} style={{ marginRight: 8 }}/>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
      <Button type="primary" onClick={handleAddTodo}>
        Add Todo
      </Button>
      </Form.Item>
      </Form>
    </div>
  );
};

export default TodoInput; 