import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState(["tarefa 1", "tarefa 2", "tarefa 3"]);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    if (novaTarefa.length) setLista([...lista, novaTarefa]);
    setNovaTarefa("");
  };

  const removeTarefa = (indexRemove) => {
    console.log(lista);

    setLista(
      lista.filter((element, index) => {
        return index !== indexRemove;
      })
    );
  };

  const listaRenderizada = lista.map((element, index) => {
    return (
      <Tarefa key={index}>
        <p>{element}</p>
        <RemoveButton onClick={() => removeTarefa(index)}>
          <img src={bin} alt="" width="16px" />
        </RemoveButton>
      </Tarefa>
    );
  });

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>{listaRenderizada}</ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
