// src/store.ts
import create from 'zustand';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface StoreState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  deleteTodo: (id: number) => void;
}

const useStore = create<StoreState>((set) => {
  const initialTodos = JSON.parse(localStorage.getItem('todos') || '[]');

  return {
    todos: initialTodos,
    addTodo: (todo) =>
      set((state) => {
        const updatedTodos = [...state.todos, todo];
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        return { todos: updatedTodos };
      }),
    toggleTodo: (id) =>
      set((state) => {
        const updatedTodos = state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        return { todos: updatedTodos };
      }),
    editTodo: (id, newText) =>
      set((state) => {
        const updatedTodos = state.todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo
        );
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        return { todos: updatedTodos };
      }),
    deleteTodo: (id) =>
      set((state) => {
        const updatedTodos = state.todos.filter((todo) => todo.id !== id);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        return { todos: updatedTodos };
      }),
  };
});

export default useStore;
