import React, { useEffect, useState } from 'react';
import { SaleType } from 'models/sale-type';
import { getSalesAxios } from 'services/saleService';

const DashboardDefaultContent = () => {
  const [sales, setSales] = useState<SaleType[]>([]);

  const fetchSales = async () => {
    const { data } = await getSalesAxios();

    console.log(data);
    setSales(data);
  };

  useEffect(() => {
    fetchSales();
  }, []);

  return (
    <div>
      <h1>This is the dashboard</h1>
      <h2>sale records: {sales.length}</h2>
    </div>
  );
};

export default DashboardDefaultContent;
