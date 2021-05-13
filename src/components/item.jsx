import React from "react";
import ActionButtons from "./actionButtons";
import Formatter from "./formatter";

const Item = ({Incrementar, Decrementar, Deletar, item}) => {
    return (
      <div className="row">
        <Formatter item={item} />
          <ActionButtons 
            Incrementar={Incrementar} 
            Decrementar={Decrementar} 
            Deletar={Deletar} 
            item={item}
          />
      </div>
    );
}

export default Item;
