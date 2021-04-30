import logo from './logo.svg';
import './App.css';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Mar', 'May', 'July', 'Oct'],
  datasets: [
    {
      label: 'Iphone sales',
      data: [400, 1000, 4000, 800, 1500],
      fill: true,
      backgroundColor:"#2e4355",
      pointBorderColor:"#8884d8",
      pointBorderWidth:5,
      pointRadius:8,
      tension: 0.4
    },
  ],
};

const options = {
  plugins:{legend:{display:false}},
  layout:{padding:{bottom:100}},
  scales: {
    y:{
      ticks:{
        color:"white",
        font:{
          size:18
        }
      },
      grid:{
        color:"#243240"
      }
    },
    x:{
      ticks:{
        color:"white",
        font:{
          size:18
        }
      }
    }
  },
};

function App() {
  return (
    <div className="App">
      <h2>Quarterly sales for mobile phones</h2>
      <Line data={data} options={options}/>
    </div>
  );
}

export default App;
