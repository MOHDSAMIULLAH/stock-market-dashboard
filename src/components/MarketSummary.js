// src/components/MarketSummary.js
import React, { useEffect, useState } from 'react';
import { fetchMarketSummary } from '../api/marketData';

const MarketSummary = () => {
  const [marketSummary, setMarketSummary] = useState({});
  console.log(marketSummary,"marketSummary");

    useEffect(() => {
      const fetchData = async () => {
          try {
              const summary = await fetchMarketSummary();
              setMarketSummary(summary.feed[0]);              
          } catch (error) {
              console.error(error);
          }
      };
      fetchData();
    }, []);

    // const title = (marketSummary && marketSummary["feed"][0]?.title);
    // const sentiment = (marketSummary && marketSummary["feed"][0]["overall_sentiment_label"]) ;
    // console.log(marketSummary["feed"]?.slice(0,1),"marketSummary[feed]")
    console.log(marketSummary,"marketSummary[feed]")
  return (
    <section className="p-4 bg-gray-800 text-white shadow rounded-lg">
      <h2 className="text-lg font-bold">Market Summary</h2>
      <div className='flex flex-col justify-between w-full'>
      <p>The Markets are <span className='text-green-500'>{marketSummary && marketSummary.overall_sentiment_label} </span></p>
      <p className="mt-2">{marketSummary && marketSummary.title}</p>

      </div>
    </section>
  );
};

export default MarketSummary;
