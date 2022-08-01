import { useSelector } from "react-redux";
import Avatar from 'react-avatar';
import Moment from 'moment';

import AllCompletedChart from "../Charts/AllCompletedChart";
import CompletedByFolderChart from "../Charts/CompletedByFolderChart";

import { getFoldersId, getFoldersItems, getTodosId, getTodosItems } from "../../redux/selectors";

import { ChartBox, Info, StyledUserStatistic } from "./UserStatistics.styled";

function UserStatistics() {
    const foldersId = useSelector(getFoldersId);
    const folders = useSelector(getFoldersItems);
    const tasksId = useSelector(getTodosId);
    const tasks = useSelector(getTodosItems);

    const getFoldersName = () => foldersId.map(id => folders[id].name);


        const getAmountCompletedTasksByFolder = () => foldersId.map(folderId => Object.values(tasks).reduce((prev, current) => {
            if (current?.folder === folderId) {
                if (current.completed) {
                prev += 1;
            }
        } 
        return prev;
        }, 0));
    

        const getAmountUncompletedTasksByFolder = () => foldersId.map(folderId => Object.values(tasks).reduce((prev, current) => {
            if (current?.folder === folderId) {
                if (!current.completed) {
                prev += 1;
            }
        } 
        return prev;
        }, 0));

      

    

    const getCompletedTasks = () => tasksId.reduce((acc, currentId) => {
        if (tasks[currentId].completed) {
            acc.push(tasks[currentId]);
        }
        return acc;
    }, []).length;

    const getUncompletedTasks = () => tasksId.length - getCompletedTasks();

    const getTodayCompletedTasks = () => tasksId.reduce((acc, currentId) => {
        if (tasks[currentId].completed && tasks[currentId].date === Moment().format('YYYY-MM-DD')) {
            acc.push(tasks[currentId]);
        }
        return acc;
    }, []).length;

      const getTodayUncompletedTasks = () => tasksId.reduce((acc, currentId) => {
        if (!tasks[currentId].completed && tasks[currentId].date === Moment().format('YYYY-MM-DD')) {
            acc.push(tasks[currentId]);
        }
        return acc;
    }, []).length;

    

    return (<StyledUserStatistic>
        <Info>
        <Avatar name="Statistics" size="40" round />
        <h2>Your Statistics</h2>
        </Info>

        <ChartBox>
            <h3>Today Tasks - {Moment().format('DD.MM')}</h3>
        <AllCompletedChart amountTasks={[getTodayUncompletedTasks(), getTodayCompletedTasks()]} backgroundColor={[
            '#7E3793',
            '#FDE4F7'
        ]} />
        </ChartBox>
        
        <ChartBox>
            <h3>All Tasks</h3>
        <AllCompletedChart amountTasks={[getUncompletedTasks(), getCompletedTasks()]} backgroundColor={[
            '#B5BFF4',
            '#C899CF'
        ]} />
        </ChartBox>
        
        
        <ChartBox><h3>All Tasks by folders</h3>
            <CompletedByFolderChart foldersName={getFoldersName()} completedTasksInFolders={getAmountCompletedTasksByFolder()} uncompletedTasksInFolders={getAmountUncompletedTasksByFolder()} />
        </ChartBox>
        
        
      
  </StyledUserStatistic>
    

  );
}

export default UserStatistics;