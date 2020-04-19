import axios from 'axios';

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get('https://covid19.mathdro.id/api/daily');

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {}
};
