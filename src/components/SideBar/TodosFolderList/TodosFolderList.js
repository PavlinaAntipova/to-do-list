import {NavLink, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {MdOutlineDeleteOutline} from 'react-icons/md';

import s from './TodosFolderList.module.css';
import {
  getFoldersId,
  getFoldersItems,
  getTodosItems,
} from '../../../redux/selectors';
import {
  deleteFolder,
  deleteTodosByFolder,
} from '../../../redux/planner/planner-slice';

export default function TodosFolderList() {
  const foldersId = useSelector(getFoldersId);
  const foldersItem = useSelector(getFoldersItems);
  const todosItem = useSelector(getTodosItems);

  const dispatch = useDispatch();
  const getClassNameLink = isActive =>
    isActive ? `${s.link} ${s.active}` : s.link;
  const navigate = useNavigate();

  const getAmountTasks = folder =>
    Object.values(todosItem).reduce((prev, current) => {
      if (current?.folder === folder) {
        prev += 1;
      }
      return prev;
    }, 0);

  return (
    <>
      {!foldersId.length ? (
        <p className={s.text}>There are no folders...</p>
      ) : (
        <ul>
          {foldersId.map(id => (
            <li className={s.item} key={id}>
              <button
                className={s.deleteBtn}
                type="button"
                onClick={() => {
                  dispatch(deleteFolder(id));
                  dispatch(deleteTodosByFolder(id));
                  navigate('/today');
                }}
              >
                <MdOutlineDeleteOutline />
              </button>
              <NavLink
                to={`folders/${id}`}
                className={({isActive}) => getClassNameLink(isActive)}
              >
                <p className={s.name}>{foldersItem[id]?.name}</p>
              </NavLink>
              <span className={s.amount}>{getAmountTasks(id)}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
