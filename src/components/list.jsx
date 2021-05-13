import React  from "react";
import Item from "./item";

const List = ({ Resetar, Incrementar, Deletar, Decrementar, itens, Restart}) => {
  return (
      <div>
        <button
          className="btn btn-success m-2"
          onClick={Resetar}
          disabled={itens.length === 0 ? "disabled" : ""}
        >
          <i className="fa fa-refresh" aria-hidden="true" />
        </button>
        {itens && itens.map(item => (
          <Item
            key={item.id}
            item={item}
            Incrementar={Incrementar}
            Decrementar={Decrementar}
            Deletar={Deletar}
          />
        ))}
    </div>
  );
}

export default List;
