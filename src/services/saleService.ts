import api, { EndPoints } from 'api/axios';
import { SaleType } from 'models/sale-type';

export async function getSalesAxios() {
  // api.get             ( BASE_URL /sales/ )
  // api.get<ReturnType> ( BASE_URL /sales/ )
  return await api.get<SaleType[]>(EndPoints.sales);
}
