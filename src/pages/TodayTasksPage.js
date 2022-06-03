import {useSelector} from 'react-redux';

import Form from '../components/Form';
import Task from '../components/MainTodo/TaskItem/TaskItem';
import {getTodosId, getTodosItems} from '../redux/selectors';
import Moment from 'moment';
import TaskItem from '../components/MainTodo/TaskItem/TaskItem';

export function TodayTasksPage() {
  const todosId = useSelector(getTodosId);
  const todosItem = useSelector(getTodosItems);
  const dateNow = Moment().format('DD-MM-YYYY');

  return (
    <>
      <div>
        <h2>{Moment().format('LL')}</h2>
      </div>
      {!todosId.length && <p>There are no tasks...</p>}
      <ul>
        {todosId.map(id => {
          if (dateNow === todosItem[id]?.date) {
            return (
              <TaskItem
                key={id}
                text={todosItem[id]?.text}
                id={id}
                folder={todosItem[id]?.folder}
                isCompleted={todosItem[id]?.completed}
              ></TaskItem>
            );
          }
        })}
      </ul>
    </>
  );
}
