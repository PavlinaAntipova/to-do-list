import React from 'react';
import {nanoid} from 'nanoid';
import Moment from 'moment';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {useDispatch, useSelector} from 'react-redux';
import {
  addFolder,
  addTodo,
  updateTodosInFolder,
} from '../../redux/planner/planner-slice';

import {getFoldersItems, getFoldersId} from '../../redux/selectors';

import s from './Form.module.css';
import {useNavigate} from 'react-router-dom';

const optionsToast = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

function Form({textBtn, placeholder, name, folderId}) {
  const dispatch = useDispatch();
  const notify = text => toast(text, optionsToast);
  const foldersId = useSelector(getFoldersId);
  const foldersItem = useSelector(getFoldersItems);
  const navigate = useNavigate();

  const checkListMatchByName = name => {
    return foldersId.find(id => foldersItem[id].name === name);
  };

  const getClassName = className => {
    switch (name) {
      case 'folder':
        return `${s[className]} ${s[`${className + 'Side'}`]}`;

      case 'todo':
        return `${s[className]} ${s[`${className + 'Main'}`]}`;
      default:
        break;
    }
  };

  return (
    <>
      <ToastContainer />
      <form
        className={s.form}
        onSubmit={e => {
          e.preventDefault();

          const formElements = e.target.elements;
          const inputValue = formElements[name].value;

          switch (name) {
            case 'folder':
              if (!inputValue) {
                notify('🦄 Name your folder!');
                return;
              }

              if (checkListMatchByName(inputValue)) {
                notify(`🦄 Folder with name ${inputValue} already exists!`);
                e.target.reset();
                return;
              }
              const generatedFolderId = nanoid();
              dispatch(addFolder({name: inputValue, id: generatedFolderId}));
              navigate(`/folders/${generatedFolderId}`);
              break;
            case 'todo':
              if (!inputValue) {
                notify('🦄 Name your task!');
                return;
              }
              const formatDate = Moment().format('DD-MM-YYYY');
              dispatch(
                addTodo({
                  id: nanoid(),
                  text: inputValue,
                  completed: false,
                  date: formatDate,
                  folder: folderId,
                }),
              );

              break;
            default:
              break;
          }
          e.target.reset();
        }}
      >
        <input
          className={getClassName('input')}
          type="text"
          name={name}
          placeholder={placeholder}
        />
        <button className={getClassName('btn')} type="submit">
          {textBtn}
        </button>
      </form>
    </>
  );
}

export default Form;
