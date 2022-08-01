import {useSelector} from 'react-redux';
import {useLocation, useParams} from 'react-router-dom';
import Moment from 'moment';

import InputText from '../components/InputText';
import TaskItem from '../components/MainTodo/TaskItem/TaskItem';

import {getFoldersItems, getTodosId, getTodosItems} from '../redux/selectors';

import {List, Text, Title} from './style/TasksPage.styled';

export function TasksPage({titleText}) {
  const todosId = useSelector(getTodosId);
  const todosItem = useSelector(getTodosItems);
  const params = useParams();
  const foldersItem = useSelector(getFoldersItems);
  const location = useLocation().pathname;

  const chooseTypeOfTasks = (path, id) => {
    const dateNow = Moment().format('YYYY-MM-DD');

    switch (path) {
      case '/today':
        return dateNow === todosItem[id]?.date;
      case '/all':
        return true;
      case '/completed':
        return todosItem[id]?.completed;
      case `/folders/${params.id}`:
        return todosItem[id]?.folder === params.id;

      default:
        return;
    }
  };

  return (
    <>
      <Title>{params.id ? foldersItem[params.id]?.name : titleText}</Title>
      {!todosId.length && <Text> There are no tasks...</Text>}

      <List>
        {todosId.map(id => {
          if (chooseTypeOfTasks(location, id)) {
            return (
              <TaskItem
                key={id}
                text={todosItem[id]?.text}
                id={id}
                folder={todosItem[id]?.folder}
                isCompleted={todosItem[id]?.completed}
                date={todosItem[id]?.date}
                priority={todosItem[id]?.priority}
              />
            );
          }
        })}
      </List>

      <InputText
        textBtn="+"
        placeholder="add new task here"
        name="todo"
        folderId={params.id}
      />
    </>
  );
}
