import React from "react";
import Grid from "../../components/grid";
import IconButton from "../../components/IconButton";

interface TodoFormProps {
    value: string;
    handleAdicionarClick(): void;
    handleDescriptionChange(val: string): void;
    handleSearch(): void;
    handleClear(): void;
}


const TodoForm: React.FC<TodoFormProps> = ({ value, handleAdicionarClick, handleDescriptionChange, handleSearch, handleClear }) => {



    const keyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const comando = e.key === 'Enter' && e.shiftKey ? 'EnterShiftKey' : e.key;
      switch(comando)  
      {
        case 'Enter': handleAdicionarClick(); break;
        case 'Escape': handleClear(); break;
        case 'EnterShiftKey': handleSearch(); break;
      }
    }

    return (
    <>
      <div role="form" className="todoForm row">
        <Grid cols="12 8 9">
          <input
            id="description"
            className="form-control"
            placeholder="Adicione uma tarefa"
            onChange={ evt => handleDescriptionChange(evt.target.value)}
            onKeyUp={keyHandler}
            value={value}            
          />
        </Grid>
        <Grid cols="12 4 3">
          
        <IconButton icon="plus" onClick={handleAdicionarClick}></IconButton>          
        <IconButton icon="search" estilo="info" onClick={handleSearch}></IconButton>          
        <IconButton icon="close" estilo="default" onClick={handleClear}></IconButton>          
        </Grid>
      </div>
    </>
  );
};

export default TodoForm;
