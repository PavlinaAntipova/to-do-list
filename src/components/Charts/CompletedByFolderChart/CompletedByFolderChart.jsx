
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function CompletedByFolderChart({foldersName, completedTasksInFolders, uncompletedTasksInFolders}) {
  const options = {
 responsive: false,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      },
      },
      ticks: {
          stepSize: 1
        }
};
    
const labels = foldersName;

const data = {
  labels,
    datasets: [
  {
      label: 'incompleted',
      data: uncompletedTasksInFolders,
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'completed',
      data: completedTasksInFolders,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
      
  ],
};

    return <Bar data={data} options={options} />
}
 
export default CompletedByFolderChart;