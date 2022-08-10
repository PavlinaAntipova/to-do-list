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
import {useMediaQuery} from 'react-responsive';

export default function TodosFolderList() {
  const foldersId = useSelector(getFoldersId);
  const foldersItem = useSelector(getFoldersItems);
  const todosItem = useSelector(getTodosItems);
  const isMobileSmall = useMediaQuery({query: '(max-width: 374px)'});
  const isMobileMedium = useMediaQuery({minWidth: 375, maxWidth: 424});
  const isMobileLarge = useMediaQuery({minWidth: 425, maxWidth: 767});
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1023});
  const isLaptop = useMediaQuery({minWidth: 1024, maxWidth: 1439});
  const isDesktop = useMediaQuery({query: '(min-width: 1440px)'});

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
                {isMobileSmall && (
                  <Name>
                    {foldersItem[id]?.name.length >= 10
                      ? `${foldersItem[id]?.name.slice(0, 10) + '...'}`
                      : `${foldersItem[id]?.name}`}
                  </Name>
                )}
                {isMobileMedium && (
                  <Name>
                    {foldersItem[id]?.name.length >= 10
                      ? `${foldersItem[id]?.name.slice(0, 10) + '...'}`
                      : `${foldersItem[id]?.name}`}
                  </Name>
                )}
                {isMobileLarge && (
                  <Name>
                    {foldersItem[id]?.name.length >= 10
                      ? `${foldersItem[id]?.name.slice(0, 10) + '...'}`
                      : `${foldersItem[id]?.name}`}
                  </Name>
                )}
                {isTablet && (
                  <Name>
                    {foldersItem[id]?.name.length >= 10
                      ? `${foldersItem[id]?.name.slice(0, 10) + '...'}`
                      : `${foldersItem[id]?.name}`}
                  </Name>
                )}
                {isLaptop && (
                  <Name>
                    {foldersItem[id]?.name.length >= 10
                      ? `${foldersItem[id]?.name.slice(0, 10) + '...'}`
                      : `${foldersItem[id]?.name}`}
                  </Name>
                )}
                {isDesktop && (
                  <Name>
                    {foldersItem[id]?.name.length >= 10
                      ? `${foldersItem[id]?.name.slice(0, 10) + '...'}`
                      : `${foldersItem[id]?.name}`}
                  </Name>
                )}
              </Link>
              <Amount>{getAmountTasks(id)}</Amount>
            </Item>
          ))}
        </List>
      )}
    </>
  );
}
