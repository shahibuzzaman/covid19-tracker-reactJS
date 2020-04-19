import React, { useState, useEffect } from 'react';
import { fetchDailyData } from './api';
import { Line } from 'react-chartjs-2';

const ChartData = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    console.log(dailyData);
    fetchAPI();
  });

  const lineChart = dailyData ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#333fff',
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0 ,0, 0.5)',
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div>{lineChart}</div>;
};

export default ChartData;
