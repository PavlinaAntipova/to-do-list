import {useSelector} from 'react-redux';
import TaskItem from '../components/MainTodo/TaskItem/TaskItem';
import {getTodosItems, getTodosId} from '../redux/selectors';

export function CompletedTasksPage() {
  const todosId = useSelector(getTodosId);
  const todosItem = useSelector(getTodosItems);

  return (
    <>
      <h2>Completed Tasks</h2>
      {!todosId.length && <p>There are no tasks...</p>}
      <ul>
        {todosId.map(id => {
          if (todosItem[id]?.completed) {
            return (
              <TaskItem
                key={id}
                text={todosItem[id]?.text}
                id={id}
                folder={todosItem[id]?.folder}
                date={todosItem[id]?.date}
              ></TaskItem>
            );
          }
        })}
      </ul>
    </>
  );
}
