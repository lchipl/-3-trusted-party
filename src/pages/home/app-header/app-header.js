import React from 'react';
import './app-header.css';
import {Link} from 'react-router-dom';


const AppHeader = () => {
  return (
    <div className="app-header d-flex">
      <h1>Мои сделки</h1>
      <Link to='/createContract'><button className='buttonB ' style={{width:120,fontSize:15}}> Новая Сделка</button></Link>
    </div>
  );
};

export default AppHeader;
