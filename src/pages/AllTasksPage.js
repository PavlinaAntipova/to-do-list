import {useSelector} from 'react-redux';
import TaskItem from '../components/MainTodo/TaskItem/TaskItem';
import {getTodosItems, getTodosId} from '../redux/selectors';

export function AllTasksPage() {
  const todosId = useSelector(getTodosId);
  const todosItem = useSelector(getTodosItems);

  return (
    <>
      <h2>All Tasks</h2>
      {!todosId.length && <p>There are no tasks...</p>}
      <ul>
        {todosId.map(id => (
          <TaskItem
            key={id}
            text={todosItem[id]?.text}
            id={id}
            isCompleted={todosItem[id]?.completed}
            folder={todosItem[id]?.folder}
            date={todosItem[id]?.date}
          ></TaskItem>
        ))}
      </ul>
    </>
  );
}
