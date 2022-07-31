import React from 'react';
import {nanoid} from 'nanoid';
import Moment from 'moment';
import {toast} from 'react-toastify';

import {useDispatch, useSelector} from 'react-redux';
import {addFolder, addTodo} from '../../redux/planner/planner-slice';

import {getFoldersItems, getFoldersId} from '../../redux/selectors';

import {useNavigate} from 'react-router-dom';
import {Form, Input, Btn} from './InputText.styled';

const optionsToast = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

function InputText({textBtn, placeholder, name, folderId}) {
  const dispatch = useDispatch();
  const notify = text => toast(text, optionsToast);
  const foldersId = useSelector(getFoldersId);
  const foldersItem = useSelector(getFoldersItems);
  const navigate = useNavigate();

  const checkListMatchByName = name => {
    return foldersId.find(id => foldersItem[id].name === name);
  };

  return (
    <>
      <Form
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
              const formatDate = Moment().format('YYYY-MM-DD');

              dispatch(
                addTodo({
                  id: nanoid(),
                  text: inputValue,
                  completed: false,
                  date: formatDate,
                  folder: folderId,
                  priority: 'low',
                }),
              );

              break;
            default:
              break;
          }
          e.target.reset();
        }}
      >
        <Input type="text" name={name} placeholder={placeholder} />
        <Btn type="submit">{textBtn}</Btn>
      </Form>
    </>
  );
}

export default InputText;
