import React, { useState, useEffect, useCallback } from "react";
import api from "../../services/api";

import PageHeader from "../../components/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

export interface TodoItem {
  _id: string;
  done: boolean;
  description: string;
  createAt: Date;
}

const Todo: React.FC = () => {
  useEffect(() => refresh(),[]);

  const [description, setDescription] = useState("");
  const [lstTarefas, setLstTarefas] = useState<TodoItem[]>([]);

  const handleAdicionarClick = async () => {
    await api.post("api/todos", { description });

    refresh();
  };

  const handleChange = (valor: string) => {
    setDescription(valor);
  };

  const handleDelete = useCallback((id: string) => {
    api.delete(`api/todos/${id}`).then((resp) => refresh(description));
  }, [description]);

  const refresh = useCallback((filtro: string = "") => {
    const search = filtro ? `&description__regex=/${filtro}/` : "";
    
    api.get<TodoItem[]>(`api/todos?sort=-createdAt${search}`).then((resp) => {
      setLstTarefas(resp.data);
      setDescription(filtro);
    });
  }, []);

  const handleMarkTodoAsDone = useCallback((todo: TodoItem, status: boolean) => {
      api
        .put(`api/todos/${todo._id}`, { ...todo, done: status })
        .then((resp) => refresh(description));
    },[description]);

  const handleSearch = () => {
    refresh(description);    
  }

  const handleClear = () => {
    setDescription('');
    refresh();
  }

  return (
    <>
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm
        value={description}
        handleDescriptionChange={handleChange}
        handleAdicionarClick={handleAdicionarClick}
        handleSearch={handleSearch}
        handleClear={handleClear}
      />
      <TodoList
        tarefas={lstTarefas}
        handleDelete={handleDelete}
        handleMarkTodoAsDone={handleMarkTodoAsDone}
      />
    </>
  );
};

export default Todo;
