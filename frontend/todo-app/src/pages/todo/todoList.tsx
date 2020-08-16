import React from "react";
import { TodoItem } from "./index";
import IconButton from "../../components/IconButton";

import './custom.css'

interface TodoListProps {
  tarefas: TodoItem[];
  handleDelete(id: string): void;
  handleMarkTodoAsDone(todo: TodoItem, status: boolean): void;
}

const TodoList: React.FC<TodoListProps> = ({
  tarefas,
  handleDelete,
  handleMarkTodoAsDone
}) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th className='tableActions'>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr key={tarefa._id}>
              <td className={ tarefa.done ? 'markedAsDone' : ''}>{tarefa.description}</td>
              <td>
                <IconButton
                  estilo="success"
                  icon="check"
                  onClick={() => handleMarkTodoAsDone(tarefa, true)}
                  hide={tarefa.done}
                />
                <IconButton
                  estilo="warning"
                  icon="undo"
                  onClick={() => handleMarkTodoAsDone(tarefa, false)}
                  hide={!tarefa.done}
                />
                <IconButton
                  estilo="danger"
                  icon="trash-o"
                  onClick={() => handleDelete(tarefa._id)}
                  hide={!tarefa.done}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
