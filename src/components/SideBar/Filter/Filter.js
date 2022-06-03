import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import s from './Filter.module.css';

function Filter() {
  return (
    <div className={s.filter}>
      <AiOutlineSearch className={s.icon} />
      <input className={s.input} type="text" placeholder="search task here" />
    </div>
  );
}

export default Filter;
