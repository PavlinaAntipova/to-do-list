import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import Form from '../components/Form';
import TaskItem from '../components/MainTodo/TaskItem/TaskItem';
import {getFoldersItems, getTodosItems, getTodosId} from '../redux/selectors';

export function TasksByFolderPage() {
  const foldersItem = useSelector(getFoldersItems);
  const params = useParams();
  const todosItem = useSelector(getTodosItems);
  const todosId = useSelector(getTodosId);
  const navigate = useNavigate();

  useEffect(() => {
    if (!foldersItem[params?.id]?.name) {
      navigate('/today');
    }
  }, []);

  return (
    <>
      <h2>{foldersItem[params?.id]?.name}</h2>
      {!todosId.length && <p>There are no tasks...</p>}
      <ul>
        {todosId.map(id => {
          if (todosItem[id]?.folder === params.id) {
            return (
              <TaskItem
                key={id}
                text={todosItem[id]?.text}
                id={id}
                isCompleted={todosItem[id]?.completed}
                date={todosItem[id]?.date}
              ></TaskItem>
            );
          }
        })}
      </ul>
      <Form
        textBtn="+"
        placeholder="add new task here"
        name="todo"
        folderId={params.id}
      />
    </>
  );
}
