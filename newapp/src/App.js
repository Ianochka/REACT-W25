import './App.css';
import React from 'react';
import { Pie } from 'react-chartjs-2';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1 className='title'>The most popular messengers in the world in 2020</h1>
      </div>
      <Pie 
        data={{
          labels: ['WhatsApp', 'Facebook Messenger', 'WeChat', 'QQ', 'Snapchat', 'Telegram'],
          datasets: [
            {
              label: '# of votes',
              data: [2000, 1300, 1206, 648, 433, 400],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        width={100}
        height={50}
      />
    </div>
  );
}

export default App;
