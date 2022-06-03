import React, {useState} from 'react';
import Form from '../../Form';
import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineCheck,
  MdOutlineDeleteOutline,
  MdFolderOpen,
  MdDateRange,
} from 'react-icons/md';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {deleteTodo, completeTodo} from '../../../redux/planner/planner-slice';
import s from './TaskItem.module.css';
import {getFoldersItems} from '../../../redux/selectors';

function TaskItem({text, id, folder, isCompleted, date}) {
  const dispatch = useDispatch();
  const foldersItem = useSelector(getFoldersItems);
  const [startDate, setStartDate] = useState(new Date());

  const checkboxClassName = isCompleted => {
    return isCompleted
      ? `${s.CheckboxIcon} ${s.checked}`
      : `${s.CheckboxIcon} ${s.unchecked}`;
  };

  return (
    <li className={s.Task}>
      <button
        className={s.checkBtn}
        type="button"
        onClick={() => {
          dispatch(completeTodo(id));
        }}
      >
        <MdOutlineRadioButtonUnchecked className={s.UncheckboxIcon} />
        <MdOutlineCheck className={checkboxClassName(isCompleted)} />
      </button>
      <label>
        <input className={s.checkbox} type="checkbox" />
        <p className={isCompleted ? s.completed : s.uncompleted}>{text}</p>
      </label>

      <div className={s.info}>
        {foldersItem[folder] && (
          <div className={s.folder}>
            <MdFolderOpen className={s.folderIcon} />
            <span>{foldersItem[folder]?.name}</span>
          </div>
        )}
        {date && (
          <div className={s.Date}>
            <MdDateRange className={s.dateIcon} />
            <span>{date}</span>
          </div>
        )}
      </div>

      <button
        className={s.deleteBtn}
        type="button"
        onClick={() => {
          dispatch(deleteTodo(id));
        }}
      >
        <MdOutlineDeleteOutline />
      </button>
    </li>

    /* <button type="button">Add to Today</button>
            <input type="date" />
            <button type="button">Add target date</button>
            <textarea placeholder="Add comment" cols="30" rows="10"></textarea>
            <p>Created ... ago</p>
            <button type="button">Close</button>
            <button type="button">Delete</button>
        */
  );
}

export default TaskItem;
