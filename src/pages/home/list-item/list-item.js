import React from 'react';

import './list-item.css';

const ListItem = ({ 
  label,
  done,
  important = false,
  handleImportant,
  handleDone,
  onDeleteElem
  }) => {

  const style = {
    color: important ? '#04681A' : 'black',
    fontWeight: important ? 'bold' : 'normal',


  };

  return (
    <span className="todo-list-item">
      <span onClick={handleDone}
        className="todo-list-item-label"
        style={style}>
        {label}
      </span>
      <p style={{textDecoration:'underline'}}><span className="typeValues">Тип сделки:</span> Покупка </p>
      <p><span className="typeValues">Дата совершения:</span> 17.10.2020</p>
      <p><span className="typeValues">Статус: </span> Завершён</p>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={handleImportant}
              >
        <i className="fa " />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDeleteElem}
              >
        <i className="fa" />
      </button>
    </span>
  );
};

export default ListItem;
