import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {MdOutlineDeleteOutline} from 'react-icons/md';

import {
  getFoldersId,
  getFoldersItems,
  getTodosItems,
} from '../../../redux/selectors';
import {
  deleteFolder,
  deleteTodosByFolder,
} from '../../../redux/planner/planner-slice';

import {
  Text,
  List,
  Item,
  Link,
  Name,
  Amount,
  DeleteBtn,
} from './TodosFolderList.styled';

export default function TodosFolderList() {
  const foldersId = useSelector(getFoldersId);
  const foldersItem = useSelector(getFoldersItems);
  const todosItem = useSelector(getTodosItems);

  const dispatch = useDispatch();
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
        <Text>There are no folders...</Text>
      ) : (
        <List>
          {foldersId.map(id => (
            <Item key={id}>
              <DeleteBtn
                type="button"
                onClick={() => {
                  dispatch(deleteFolder(id));
                  dispatch(deleteTodosByFolder(id));
                  navigate('/today');
                }}
              >
                <MdOutlineDeleteOutline />
              </DeleteBtn>
              <Link to={`folders/${id}`}>
                <Name>{foldersItem[id]?.name}</Name>
              </Link>
              <Amount>{getAmountTasks(id)}</Amount>
            </Item>
          ))}
        </List>
      )}
    </>
  );
}
