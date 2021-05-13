import React, { useState, useContext, useEffect } from "react";
import NavBar from "./navbar";
import List from "./list";
import ContextTotal from "../contexts/ContextTotal";

const Store = () => {

  const contextTotal = useContext(ContextTotal);

  const initialState = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ]

  const [itens, setItens] = useState(initialState);

  useEffect(() => {
    const total = itens.filter(c => c.value > 0).length;

    contextTotal.setTotal(total);
  }, [itens])

  const Incrementar = item => {
    const newItens = [...itens];
    const index = newItens.indexOf(item);
    newItens[index] = { ...newItens[index] };
    newItens[index].value++;
    setItens(newItens);
  };

  const Decrementar = item => {
    const newItens = [...itens];
    const index = itens.indexOf(item);
    newItens[index] = { ...newItens[index] };
    newItens[index].value--;
    setItens(newItens);
  };

  const Resetar = () => {
    setItens(initialState);
  };

  const Deletar = itemId => {
    const itens = itens.filter(c => c.id !== itemId);
    setItens(itens);
  };

  const Restart = () => {
    window.location.reload();
  };

    return (
      <div>
        <NavBar
          totalItens={itens && itens.filter(c => c.value > 0).length}
          //totalItens={contextTotal.total}
        />
        <main className="container">
          <List
            itens={itens}
            Resetar={Resetar}
            Incrementar={Incrementar}
            Decrementar={Decrementar}
            Deletar={Deletar}
            Restart={Restart}
          />
        </main>
      </div>
    );
}

export default Store;
