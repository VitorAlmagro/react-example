import React from 'react';

const ActionButtons = ({Incrementar, Decrementar, Deletar, item}) => {

    return (
      <div className="col-md-4">
        <button
          className="btn btn-secondary"
          onClick={() => Incrementar(item)}
        >
          <i className="fa fa-plus-circle" aria-hidden="true" />
        </button>
        <button
          className="btn btn-info m-2"
          onClick={() => Decrementar(item)}
          disabled={item.value === 0 ? "disabled" : ""}
        >
          <i className="fa fa-minus-circle" aria-hidden="true" />
        </button>
        <button
          className="btn btn-danger"
          onClick={() => Deletar(item.id)}
        >
          <i className="fa fa-trash-o" aria-hidden="true" />
        </button>
      </div>
    )
}


export default ActionButtons;