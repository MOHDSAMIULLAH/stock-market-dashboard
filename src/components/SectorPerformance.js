// src/components/SectorPerformance.js
import React, { useEffect, useState } from 'react';
import { fetchSectorPerformance } from '../api/marketData';

const SectorPerformance = () => {
  const [sectorPerformance, setSectorPerformance] = useState([]);
  console.log(sectorPerformance,"sectorPerformance")

  useEffect(() => {
    const fetchData = async () => {
        try {
            const sectors = await fetchSectorPerformance();
            setSectorPerformance(sectors);
            
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
  }, []);
  return (
    <section className="p-4 bg-gray-800 text-white shadow rounded-lg">
      <h2 className="text-lg font-bold">Sector Performance</h2>
      <ul>
        {sectorPerformance && sectorPerformance.map((sector) => (
          <li key={sector.sector} className="flex justify-between">
            <span>{sector.sector}</span>
            <span className={sector.changesPercentage.slice(0,-1) >= 0 ? 'text-green-500' : 'text-red-500'}>
              {sector.changesPercentage}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectorPerformance;
