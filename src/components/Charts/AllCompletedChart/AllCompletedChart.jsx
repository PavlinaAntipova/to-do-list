import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function AllCompletedChart({ amountTasks, backgroundColor }) {
  const options = {
    responsive: false,
  };

  const labels = [
    'incompleted',
    'completed'
  ];
    
    const data = {
    labels,
    datasets: [{
      label: 'Amount tasks',
      data: amountTasks,
      backgroundColor,
      borderColor: "transparent",
      }]
  };

  return <Pie data={data} options={options} />
}
 
export default AllCompletedChart;
