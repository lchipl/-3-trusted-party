import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({filter,handleSetFilter}) => {
  const buttons =[
    {name:"all", label: "All"},
    {name:"active", label: "Active"},
    {name:"done", label: "Done"}
  ]

  const buttongroup = buttons.map(({name,label})=>{
      const isActive = filter ===name;
      console.log(isActive);
      const clazz = isActive? "btn btn-info" : " btn btn-outline-secondary";
      console.log(clazz);
        return(
                <button onClick={()=> handleSetFilter(name)} type="button" className={clazz} key={name}>
                   {label}
                  </button>
                )});
  return (
    <div className="btn-group">
      {buttongroup}
      
      {/* <button type="button"
              className="btn btn-info">All</button>
      <button type="button"
              className="btn btn-outline-secondary">Active</button>
      <button type="button"
              className="btn btn-outline-secondary">Done</button> */}
    </div>
  );
};

export default ItemStatusFilter;
