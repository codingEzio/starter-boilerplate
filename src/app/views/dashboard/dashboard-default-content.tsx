import React, { useEffect } from 'react';
import { getSalesAxios } from 'services/saleService';

const fetchSales = async () => {
  const data = await getSalesAxios();

  console.log(data);
};

const DashboardDefaultContent = () => {
  useEffect(() => {
    fetchSales();
  }, []);

  return (
    <div>
      <h1>DashboardDefaultContent</h1>
    </div>
  );
};

export default DashboardDefaultContent;
