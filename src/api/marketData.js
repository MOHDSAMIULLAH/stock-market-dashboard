// src/api/marketData.js
import axios from 'axios';

export const fetchMarketSummary = async () => {
  const response = await axios.get(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo`);
  return response.data;
};

export const fetchSectorPerformance = async () => {
  const response = await axios.get(`https://financialmodelingprep.com/api/v3/sectors-performance?apikey=lsRDYOYz32OGMtRLuTXUap3RQW3r4gDu`);
  return response.data;
};

export const fetchMarketsOverview = async () => {
  const response = await axios.get(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo`);
  return response.data;
};

export const fetchChartData = async (symbol, range) => {
  const response = await axios.get(`https://www.alphavantage.co/chart-data/${symbol}?range=${range}&apikey=${process.env.REACT_APP_API_KEY}`);
  return response.data;
};
